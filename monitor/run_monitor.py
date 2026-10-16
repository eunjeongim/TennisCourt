"""빈자리 감시 1회 실행. 작업 스케줄러가 10분마다 이 파일을 실행한다.

1) 웹페이지에서 저장한 알림 설정(alert-settings.json)을 GitHub에서 받아온다
2) 목동(로그인) + 영등포 공단 + 추가 코트들의 빈자리를 동시에 조회
3) 웹페이지 '빈자리 현황'용 vacancies.json을 갱신·업로드
4) 알림 설정에 맞는 새 빈자리만 카카오톡으로 알림
옵션: --dry-run  카톡·업로드 없이 화면에만 출력 / --any-time  시간 조건 무시(테스트용)

실행 위치(MONITOR_SCOPE)에 따라 맡는 코트가 다르다. 겹치지 않으므로 알림이 두 번 가지 않는다.
- cloud: GitHub Actions(해외 서버). 해외 접속이 되는 목동·공단·JD. 노트북이 꺼져 있어도 동작.
- pc   : 노트북 작업 스케줄러. 해외 접속을 막는 영등포 공단·부천·관악·강서.
"""
import json
import logging
from logging.handlers import RotatingFileHandler
import os
import re
import sys
import traceback
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timedelta
from pathlib import Path

import extra_sources
import features
import kakao
import mokdong
import publish
import yeongdeungpo

HERE = Path(__file__).parent
SCOPE = os.environ.get("MONITOR_SCOPE", "pc")
# 클라우드 상태 파일은 실행마다 새 서버라서 저장소에 커밋해 이어 쓴다 (빈자리 키만 들어 있음)
STATE = HERE / ("state-cloud.json" if SCOPE == "cloud" else "state.json")
SETTINGS = publish.SITE / "alert-settings.json"
WEEKDAY = "월화수목금토일"
# 로그는 300KB씩 최대 2개까지만 남긴다
logging.basicConfig(level=logging.INFO, format="%(asctime)s %(levelname)s %(message)s",
                    handlers=[RotatingFileHandler(HERE / "monitor.log", maxBytes=300_000, backupCount=1, encoding="utf-8")])

COURT_INFO = {
    "mokdong": ("목동", mokdong.RENT_URL),
    "anyangcheon": ("안양천", yeongdeungpo.booking_url("anyangcheon")),
    "daerim": ("대림운동장", yeongdeungpo.booking_url("daerim")),
    **extra_sources.court_info(),
}
# 해외(GitHub) 서버 접속을 막는 사이트: 영등포 공단, 부천, 관악(차단 페이지 응답), 강서(국내에서 먼저 복구될 가능성)
PC_ONLY = {"anyangcheon", "daerim", *extra_sources.BUCHEON_COURTS,
           "gwanak-gumin", "ujangsan-tennis", "gangseo-banghwa-tennis", "hwanggeumnae-tennis"}
SCOPE_COURTS = {
    "cloud": set(COURT_INFO) - PC_ONLY,
    "pc": PC_ONLY,
}
SCOPE_COURTS["all"] = set(COURT_INFO)
# 알림 기본값이 꺼져 있는 코트 (사설이라 빈자리가 늘 많음)
DEFAULT_OFF = {extra_sources.JD_ID}
DEFAULT_SETTINGS = {
    "enabled": True,
    "weekday": {"on": True, "from": "18:00", "to": "23:00"},
    "weekend": {"on": True, "from": "06:00", "to": "23:00"},
    "courts": {},
    "favorites": ["mokdong"],          # 웹페이지 ★ (기기 간 동기화)
    "favorites_only": False,           # 즐겨찾기 코트만 알림
    "min_hours": 1,                    # 2면 같은 면 2시간 이상 연속일 때만 알림
    "rain": {"skip": True, "threshold": 60},       # 실외 코트 강수확률 이상이면 알림 제외
    "digest": True,                    # 여러 코트의 새 빈자리를 한 통으로 묶기
    "quiet": {"on": False, "from": "09:00", "to": "18:00", "weekdays_only": True},  # 이 시간엔 보내지 않고 나중에 보냄
    "open_reminder": {"on": True, "minutes": 10},  # 즐겨찾기 코트 예약 오픈 N분 전 알림
    "daily_summary": {"on": True, "time": "08:00"},
    "public_status": True,             # 서울시 공공서비스예약 '접수중' 전환 알림 (인증키 필요)
    # 출발지에서 대중교통 N분 이내 코트만 빈자리 알림 (origin: any=영등포구청·공덕 중 가까운 쪽, ydp, gd)
    "reach": {"on": True, "max_minutes": 30, "origin": "any"},
}


def court_minutes(court, origin):
    ydp = court["transit"]["min"]
    gd = (court.get("transit_gongdeok") or {}).get("min")
    if origin == "ydp":
        return ydp
    if origin == "gd":
        return gd
    return min(m for m in (ydp, gd) if m is not None)


def within_reach(settings, court):
    r = settings["reach"]
    if not r["on"]:
        return True
    m = court_minutes(court, r["origin"])
    return m is not None and m <= r["max_minutes"]
PAGE_URL = "https://eunjeongim.github.io/TennisCourt/"


def load_json(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def load_settings():
    s = load_json(SETTINGS, {})
    merged = {**DEFAULT_SETTINGS, **s}
    for k, v in DEFAULT_SETTINGS.items():
        if isinstance(v, dict) and k != "courts":
            merged[k] = {**v, **s.get(k, {})}
    return merged


def in_quiet(settings, now):
    q = settings["quiet"]
    if not q["on"] or (q.get("weekdays_only") and now.weekday() >= 5):
        return False
    t = now.strftime("%H:%M")
    return q["from"] <= t < q["to"] if q["from"] < q["to"] else (t >= q["from"] or t < q["to"])


def court_alert_on(settings, cid):
    if settings.get("favorites_only"):
        return cid in settings.get("favorites", [])
    return settings["courts"].get(cid, cid not in DEFAULT_OFF)


def wanted(settings, cid, day, start):
    now = datetime.now()
    if day == now.date() and start <= now.strftime("%H:%M"):
        return False  # 오늘 이미 시작한 시간대
    if "--any-time" in sys.argv:
        return True
    if not settings["enabled"] or not court_alert_on(settings, cid):
        return False
    rule = settings["weekend" if day.weekday() >= 5 else "weekday"]
    return rule["on"] and rule["from"] <= start < rule["to"]


def collect(cfg):
    """{court_id: [(date, start, end, label), ...]}, {court_id: error}  — 사이트별로 동시에 조회"""
    on = [cid for cid in COURT_INFO if cid in SCOPE_COURTS[SCOPE] and cfg["courts"].get(cid, True)]

    def run_mokdong():
        return {"mokdong": [(d, s, e, c) for d, s, e, c, _ in mokdong.fetch_slots()]}, {}

    def run_yeongdeungpo():
        found, errors = {}, {}
        for cid in ("anyangcheon", "daerim"):
            if cid in on:
                try:
                    found[cid] = [(d, s, e, "") for d, s, e in
                                  yeongdeungpo.fetch_slots(cid, next_month_open_day=cfg["next_month_open_day"])]
                except Exception as ex:
                    errors[cid] = str(ex)[:120]
        return found, errors

    jobs = [run_yeongdeungpo, lambda: extra_sources.fetch_all(on)]
    if "mokdong" in on:
        jobs.append(run_mokdong)
    found, errors = {}, {}
    with ThreadPoolExecutor(max_workers=len(jobs)) as pool:
        futures = {pool.submit(job): job for job in jobs}
        for fut in futures:
            try:
                res, err = fut.result()
            except Exception as ex:
                res, err = {}, {"mokdong": str(ex)[:120]} if futures[fut] is run_mokdong else {"?": str(ex)[:120]}
                logging.error(traceback.format_exc())
            found.update(res)
            errors.update(err)
    for cid, err in errors.items():
        logging.warning("%s 조회 실패: %s", cid, err)
        print(f"조회 실패 {cid}: {err[:100]}")  # 실행 기록(공개)에 남는 건 코트 id와 오류 종류뿐
    return found, errors


MOKDONG_INDOOR = {4, 5, 6}


def court_numbers(labels):
    """['코트-07', '코트-05', '코트-17(월,화,목,금 레슨)'] → '7·17번, 실내 5번'"""
    nums = sorted({int(m.group(1)) for m in (re.search(r"(\d+)", x) for x in labels) if m})
    outdoor = [str(n) for n in nums if n not in MOKDONG_INDOOR]
    indoor = [str(n) for n in nums if n in MOKDONG_INDOOR]
    parts = ([f"{'·'.join(outdoor)}번"] if outdoor else []) + ([f"실내 {'·'.join(indoor)}번"] if indoor else [])
    return ", ".join(parts)


def build_message(cid, slots):
    """같은 날짜·시간의 여러 면은 하나로 묶고, 끝에 예약 사이트 주소를 붙인다. 텍스트 200자 제한에 맞춰 줄인다."""
    name, url = COURT_INFO[cid]
    grouped = defaultdict(list)
    for d, s, e, label in slots:
        grouped[(d, s, e)].append(label)

    def describe(labels):
        if cid == "mokdong":
            return " " + court_numbers(labels)
        return f" {len(labels)}면" if len(labels) > 1 else ""

    lines = [f"{d.month}/{d.day}({WEEKDAY[d.weekday()]}) {s}~{e}{describe(labels)}"
             for (d, s, e), labels in sorted(grouped.items())]
    head = f"🎾 {name} 빈자리 {len(grouped)}건"
    tail = f"👉 예약: {url}"
    budget = kakao.TEXT_LIMIT - len(head) - len(tail) - 2 - 8  # 줄바꿈 + "외 N건" 자리
    body = []
    for line in lines:
        if sum(len(x) + 1 for x in body) + len(line) + 1 > budget:
            break
        body.append(line)
    if len(body) < len(lines):
        body.append(f"외 {len(lines) - len(body)}건")
    return "\n".join([head, *body, tail]), url


def build_digest(new_by_court):
    """여러 코트의 새 빈자리를 한 통으로: 코트별 한 줄 + 웹페이지 링크"""
    lines = []
    for cid, slots in sorted(new_by_court.items(), key=lambda kv: kv[1][0][0]):
        d, s, e, _ = min(slots)
        lines.append(f"{COURT_INFO[cid][0]} {len(slots)}건 · {d.month}/{d.day}({WEEKDAY[d.weekday()]}) {s}~")
    head = f"🎾 새 빈자리 {len(new_by_court)}곳"
    tail = f"👉 {PAGE_URL}"
    budget = kakao.TEXT_LIMIT - len(head) - len(tail) - 12
    body = []
    for line in lines:
        if sum(len(x) + 1 for x in body) + len(line) + 1 > budget:
            body.append(f"외 {len(lines) - len(body)}곳")
            break
        body.append(line)
    return "\n".join([head, *body, tail]), PAGE_URL


def main(dry_run=False):
    cfg = load_json(HERE / "config.json", {})
    now = datetime.now()
    state = load_json(STATE, {"seen": {}, "last_error": ""})
    today = date.today().isoformat()
    logging.info("실행 시작 (%s)", SCOPE)

    if not dry_run and SCOPE != "cloud":  # 클라우드는 워크플로가 체크아웃·커밋을 맡는다
        publish.sync()  # 웹페이지에서 바꾼 알림 설정 받아오기
    settings = load_settings()
    courts = features.load_courts()

    found, errors = collect(cfg)

    rain = {}
    if settings["rain"]["skip"]:
        try:
            rain = features.fetch_rain({cid: courts[cid] for cid in found if cid in courts})
        except Exception as ex:
            logging.warning("날씨 조회 실패: %s", ex)

    quiet = in_quiet(settings, now) and "--any-time" not in sys.argv
    min_minutes = 120 if settings.get("min_hours") == 2 else 0
    new_by_court, outbox = {}, []
    for cid, slots in found.items():
        slots = [x for x in slots if wanted(settings, cid, x[0], x[1])]
        if cid in courts and not within_reach(settings, courts[cid]):
            slots = []  # 출발지에서 먼 코트는 빈자리 알림 제외
        if min_minutes:
            slots = features.merge_runs(slots, min_minutes)
        if rain and cid in courts:  # 비 올 확률이 높은 실외 자리는 알림에서 뺀다
            th = settings["rain"]["threshold"]
            slots = [x for x in slots if features.is_indoor(courts[cid], x[3])
                     or (features.slot_rain(rain, cid, x[0], x[1], x[2]) or 0) < th]
        keys = {f"{cid}|{d}|{s}|{label}" for d, s, e, label in slots}
        seen = set(state["seen"].get(cid, []))
        new = [x for x in slots if f"{cid}|{x[0]}|{x[1]}|{x[3]}" not in seen]
        # 지금 보이는 빈자리만 기억 → 누가 예약했다가 다시 풀리면 또 알린다.
        # 조용한 시간에는 새 빈자리를 기억하지 않아서, 조용한 시간이 끝난 뒤에도 남아 있으면 그때 알린다.
        remember = (keys & seen) if quiet else keys
        state["seen"][cid] = sorted(k for k in remember if k.split("|")[1] >= today)
        if new and not quiet:
            logging.info("%s: 조건 맞는 빈자리 %d, 새로 생긴 것 %d", cid, len(slots), len(new))
            new_by_court[cid] = new
    if new_by_court:
        if settings["digest"] and len(new_by_court) > 1:
            outbox.append(build_digest(new_by_court))
        else:
            outbox += [build_message(cid, new) for cid, new in new_by_court.items()]
    alerts_sent = sum(len(v) for v in new_by_court.values())
    logging.info("조회 %d곳, 실패 %d곳, 새 빈자리 %d건%s", len(found), len(errors), alerts_sent, " (조용한 시간)" if quiet else "")

    # 목동 로그인 문제처럼 직접 손봐야 하는 오류만 카톡으로 알린다 (다른 사이트 일시 장애는 기록만)
    error_text = errors.get("mokdong", "")
    if error_text and error_text != state.get("last_error"):
        outbox.append((f"⚠️ 목동 조회 오류\n{error_text}"[:kakao.TEXT_LIMIT], mokdong.RENT_URL))
    state["last_error"] = error_text

    extra = {}
    if SCOPE == "cloud":
        # 예약 오픈 미리 알림 (즐겨찾기 코트, 클라우드만 담당해서 중복 없음)
        if settings["open_reminder"]["on"] and not quiet:
            reminded = set(state.get("reminded", []))
            for key, text, url in features.open_reminders(
                    now, settings.get("favorites", []), settings["open_reminder"]["minutes"], reminded,
                    {cid: n for cid, (n, _) in COURT_INFO.items()} | {cid: c["name"] for cid, c in courts.items() if cid not in COURT_INFO},
                    {cid: u for cid, (_, u) in COURT_INFO.items()} | {cid: c["links"].get("reserve", "") for cid, c in courts.items() if cid not in COURT_INFO}):
                outbox.append((text[:kakao.TEXT_LIMIT], url or PAGE_URL))
                reminded.add(key)
            state["reminded"] = sorted(k for k in reminded if k.split("|")[1] >= today)

        # 서울시 공공서비스예약 상태 (인증키가 있을 때만)
        api_key = os.environ.get("SEOUL_API_KEY", "")
        if settings["public_status"] and api_key:
            try:
                public = features.fetch_public_status(api_key, courts)
                extra["public"] = public
                prev = state.get("public", {})
                watch = set(settings.get("favorites", [])) | {cid for cid in courts if court_alert_on(settings, cid)}
                for cid, svcs in public.items():
                    for sv in svcs:
                        was = prev.get(sv["id"])
                        if sv["status"] == "접수중" and was and was != "접수중" and cid in watch and not quiet:
                            outbox.append((f"🟢 {courts[cid]['name']} 공공예약 접수중으로 바뀜\n{sv['name']}"[:kakao.TEXT_LIMIT - 30]
                                           + f"\n👉 {sv['url']}", sv["url"]))
                state["public"] = {sv["id"]: sv["status"] for svcs in public.values() for sv in svcs}
            except Exception as ex:
                logging.warning("서울시 공공예약 조회 실패: %s", ex)

    # 하루 통계 (요약 알림용): 이 실행 범위의 알림 수·실패 코트
    stats = state.setdefault("stats", {})
    st = stats.setdefault(today, {"alerts": 0, "errors": []})
    st["alerts"] += alerts_sent
    st["errors"] = sorted(set(st["errors"]) | {COURT_INFO.get(c, (c,))[0] for c in errors})
    state["stats"] = {d: v for d, v in stats.items() if d >= (date.today() - timedelta(days=3)).isoformat()}
    extra["stats"] = state["stats"]

    if SCOPE == "cloud" and settings["daily_summary"]["on"] and state.get("summary_sent") != today \
            and now.strftime("%H:%M") >= settings["daily_summary"]["time"]:
        pc = load_json(publish.out_path("pc"), {})
        yesterday = (date.today() - timedelta(days=1)).isoformat()
        outbox.append((features.summary_text(yesterday, state["stats"], pc.get("stats", {}), pc.get("checked_at")), PAGE_URL))
        state["summary_sent"] = today

    days_left = None
    try:
        days_left = kakao.refresh_token_days_left()
    except Exception:
        pass
    if days_left is not None and days_left < 7 and state.get("token_warned") != today:
        outbox.append((f"⏰ 카카오 알림 권한이 {max(0, int(days_left))}일 뒤 만료돼요. kakao_auth.py를 다시 실행해 주세요.",
                       "https://developers.kakao.com"))
        state["token_warned"] = today

    # 웹페이지 '빈자리 현황'용 데이터 업로드 (알림 설정과 무관하게 전체 빈자리)
    if not dry_run:
        meta = {cid: {"name": name, "url": url, **({"error": True} if cid in errors else {})}
                for cid, (name, url) in COURT_INFO.items()
                if cid in SCOPE_COURTS[SCOPE] and cfg["courts"].get(cid, True)}
        try:
            publish.publish(found, list(errors), meta, scope=SCOPE, use_git=SCOPE != "cloud", extra=extra)
        except Exception:
            logging.error(traceback.format_exc())

    for text, url in outbox:
        print(text, "\n ->", url, "\n")
        if not dry_run:
            kakao.send(text, url)
    if not dry_run:
        STATE.write_text(json.dumps(state, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"[{now:%m-%d %H:%M}] 완료: 조회 {len(found)}곳, 실패 {len(errors)}곳, 알림 {len(outbox)}건"
          + (" (조용한 시간)" if quiet else "") + (" (dry-run, 미발송)" if dry_run else ""))


if __name__ == "__main__":
    main(dry_run="--dry-run" in sys.argv)
