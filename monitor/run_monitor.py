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
import os
import re
import sys
import traceback
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime
from pathlib import Path

import extra_sources
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
logging.basicConfig(filename=HERE / "monitor.log", level=logging.INFO, encoding="utf-8",
                    format="%(asctime)s %(levelname)s %(message)s")

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
}


def load_json(path, default):
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        return default


def load_settings():
    s = load_json(SETTINGS, {})
    merged = {**DEFAULT_SETTINGS, **s}
    for k in ("weekday", "weekend"):
        merged[k] = {**DEFAULT_SETTINGS[k], **s.get(k, {})}
    return merged


def court_alert_on(settings, cid):
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


def main(dry_run=False):
    cfg = load_json(HERE / "config.json", {})
    now = datetime.now()
    state = load_json(STATE, {"seen": {}, "last_error": ""})
    today = date.today().isoformat()
    logging.info("실행 시작 (%s)", SCOPE)

    if not dry_run and SCOPE != "cloud":  # 클라우드는 워크플로가 체크아웃·커밋을 맡는다
        publish.sync()  # 웹페이지에서 바꾼 알림 설정 받아오기
    settings = load_settings()

    found, errors = collect(cfg)
    outbox = []
    for cid, slots in found.items():
        slots = [x for x in slots if wanted(settings, cid, x[0], x[1])]
        keys = {f"{cid}|{d}|{s}|{label}" for d, s, e, label in slots}
        seen = set(state["seen"].get(cid, []))
        new = [x for x in slots if f"{cid}|{x[0]}|{x[1]}|{x[3]}" not in seen]
        # 지금 보이는 빈자리만 기억 → 누가 예약했다가 다시 풀리면 또 알린다
        state["seen"][cid] = sorted(k for k in keys if k.split("|")[1] >= today)
        if new:
            logging.info("%s: 조건 맞는 빈자리 %d, 새로 생긴 것 %d", cid, len(slots), len(new))
            outbox.append(build_message(cid, new))
    logging.info("조회 %d곳, 실패 %d곳, 알림 %d건", len(found), len(errors), len(outbox))

    # 목동 로그인 문제처럼 직접 손봐야 하는 오류만 카톡으로 알린다 (다른 사이트 일시 장애는 기록만)
    error_text = errors.get("mokdong", "")
    if error_text and error_text != state.get("last_error"):
        outbox.append((f"⚠️ 목동 조회 오류\n{error_text}"[:kakao.TEXT_LIMIT], mokdong.RENT_URL))
    state["last_error"] = error_text

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
            publish.publish(found, list(errors), meta, scope=SCOPE, use_git=SCOPE != "cloud")
        except Exception:
            logging.error(traceback.format_exc())

    for text, url in outbox:
        print(text, "\n ->", url, "\n")
        if not dry_run:
            kakao.send(text, url)
    if not dry_run:
        STATE.write_text(json.dumps(state, ensure_ascii=False, indent=1), encoding="utf-8")
    print(f"[{now:%m-%d %H:%M}] 완료: 조회 {len(found)}곳, 실패 {len(errors)}곳, 알림 {len(outbox)}건"
          + (" (dry-run, 미발송)" if dry_run else ""))


if __name__ == "__main__":
    main(dry_run="--dry-run" in sys.argv)
