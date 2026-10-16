"""알림 부가 기능: 예약 오픈 미리 알림, 비 예보, 연속 시간 합치기, 서울시 공공예약 상태, 하루 요약."""
import json
import re
from datetime import date, datetime, timedelta
from pathlib import Path

import requests

SITE = Path(__file__).resolve().parent.parent
WEEKDAY = "월화수목금토일"
UA = {"User-Agent": "Mozilla/5.0 (tennis-court-alert; personal use)"}


def load_courts():
    """웹페이지 courts.js(window.COURTS = [...])를 읽어 {id: court}"""
    src = (SITE / "courts.js").read_text(encoding="utf-8")
    return {c["id"]: c for c in json.loads(src[src.index("["):src.rindex("]") + 1])}


# ---------- 1. 예약 오픈 미리 알림 ----------
# kind: daily(매일 at) / monthly(매월 day일, at이 없으면 그날 아침에 "오늘부터 접수")
# 사용자 기준: 영등포구민 → 영등포 공단은 구민팀 정기접수(20일)도 해당, 다른 구는 일반(타구민) 기준
OPEN_SCHEDULES = {
    "mokdong": [dict(kind="daily", at="09:30", note="일반 예약 오픈 (7일 뒤 사용분, 09:00은 양천구민 우선)")],
    "anyangcheon": [dict(kind="monthly", day=20, note="다음 달 구민팀 정기 접수 시작 (~24일)"),
                    dict(kind="monthly", day=25, note="다음 달 남은 자리 수시 접수 시작")],
    "daerim": [dict(kind="monthly", day=20, note="다음 달 구민팀 정기 접수 시작 (~24일)"),
               dict(kind="monthly", day=25, note="다음 달 남은 자리 수시 접수 시작")],
    "bucheon-stadium-tennis": [dict(kind="monthly", day=20, at="10:00", note="다음 달 사용분 접수 시작")],
    "bucheon-gymnasium-tennis-hard": [dict(kind="monthly", day=20, at="10:00", note="다음 달 사용분 접수 시작")],
    "bucheon-indoor-tennis": [dict(kind="monthly", day=20, at="10:00", note="다음 달 사용분 접수 시작")],
    "eungbong-sports-park-tennis": [dict(kind="monthly", day=1, note="이번 달 타구민 수시대관 시작")],
    "majang-tennis": [dict(kind="monthly", day=1, note="이번 달 타구민 수시대관 시작")],
    "bongeun-tennis": [dict(kind="monthly", day=15, note="다음 달 사용분 접수 시작 (~25일)")],
    "gocheok-park-tennis": [dict(kind="monthly", day=25, note="다음 달 사용분 접수 시작")],
}


def open_reminders(now, court_ids, minutes_before, reminded, names, urls):
    """지금 보낼 오픈 알림 [(key, text, url)]. reminded: 이미 보낸 키 집합."""
    out = []
    for cid in court_ids:
        for rule in OPEN_SCHEDULES.get(cid, []):
            if rule["kind"] == "monthly" and now.day != rule["day"]:
                continue
            at = rule.get("at")
            key = f"{cid}|{now.date()}|{at or 'day'}|{rule['note'][:6]}"
            if key in reminded:
                continue
            if at:
                open_dt = datetime.combine(now.date(), datetime.strptime(at, "%H:%M").time())
                # GitHub 예약 실행이 늦을 수 있어 넉넉한 창으로 잡는다 (오픈 5분 뒤까지)
                if not (open_dt - timedelta(minutes=minutes_before + 10) <= now < open_dt + timedelta(minutes=5)):
                    continue
                when = f"{at} 오픈" if now < open_dt else f"{at}에 열렸어요"
            else:
                if now.hour < 8:
                    continue
                when = "오늘부터"
            text = f"⏰ {names.get(cid, cid)} {when}\n{rule['note']}\n👉 예약: {urls.get(cid, '')}"
            out.append((key, text, urls.get(cid, "")))
    return out


# ---------- 2. 연속 시간 합치기 ----------
def merge_runs(slots, min_minutes):
    """같은 날·같은 면의 이어지는 빈자리를 합치고 min_minutes 이상인 것만 [(date, start, end, label)]."""
    def mins(t):
        h, m = map(int, t.split(":"))
        return h * 60 + m
    groups = {}
    for d, s, e, label in sorted(slots, key=lambda x: (x[0], x[3], x[1])):
        runs = groups.setdefault((d, label), [])
        if runs and runs[-1][1] == s:
            runs[-1][1] = e
        else:
            runs.append([s, e])
    out = []
    for (d, label), runs in groups.items():
        for s, e in runs:
            end = 24 * 60 if e in ("24:00", "00:00") and mins(s) > 0 else mins(e)
            if end - mins(s) >= min_minutes:
                out.append((d, s, e, label))
    return sorted(out, key=lambda x: (x[0], x[1], x[3]))


# ---------- 3. 비 예보 (Open-Meteo, 무료·키 없음) ----------
MOKDONG_INDOOR = {4, 5, 6}


def is_indoor(court, label):
    if court["id"] == "mokdong":
        m = re.search(r"(\d+)", label or "")
        return bool(m and int(m.group(1)) in MOKDONG_INDOOR)
    return any("실내" in t for t in court.get("tags", [])) or "실내" in court.get("name", "")


def fetch_rain(courts):
    """{court_id: {"YYYY-MM-DDTHH": 강수확률%}} — 실외 코트만, 최대 16일"""
    outdoor = [c for c in courts.values() if not (is_indoor(c, "") and c["id"] != "mokdong")]
    if not outdoor:
        return {}
    r = requests.get("https://api.open-meteo.com/v1/forecast", timeout=20, params={
        "latitude": ",".join(f"{c['lat']:.4f}" for c in outdoor),
        "longitude": ",".join(f"{c['lng']:.4f}" for c in outdoor),
        "hourly": "precipitation_probability", "timezone": "Asia/Seoul", "forecast_days": 16})
    r.raise_for_status()
    data = r.json()
    data = data if isinstance(data, list) else [data]
    out = {}
    for c, d in zip(outdoor, data):
        h = d["hourly"]
        out[c["id"]] = {t[:13]: p for t, p in zip(h["time"], h["precipitation_probability"]) if p is not None}
    return out


def slot_rain(rain, cid, day, start, end):
    """시간대 중 가장 높은 강수확률 (없으면 None)"""
    hours = rain.get(cid)
    if not hours:
        return None
    s, e = int(start[:2]), int(end[:2]) or 24
    vals = [hours.get(f"{day.isoformat()}T{h:02d}") for h in range(s, max(e, s + 1))]
    vals = [v for v in vals if v is not None]
    return max(vals) if vals else None


# ---------- 8. 서울시 공공서비스예약 상태 (공식 Open API, 인증키 필요) ----------
def fetch_public_status(api_key, courts):
    """{court_id: [{"name", "status", "url"}]} — 우리 코트 중 서울시 공공서비스예약을 쓰는 곳"""
    rows, start = [], 1
    while True:
        url = f"http://openapi.seoul.go.kr:8088/{api_key}/json/ListPublicReservationSport/{start}/{start + 999}/테니스장"
        body = requests.get(url, headers=UA, timeout=30).json().get("ListPublicReservationSport", {})
        rows += body.get("row", [])
        if start + 999 >= int(body.get("list_total_count", 0)):
            break
        start += 1000
    targets = {cid: c for cid, c in courts.items() if "yeyak.seoul.go.kr" in (c["links"].get("reserve") or "")}
    out = {}
    for cid, c in targets.items():
        svc_id = (re.search(r"rsv_svc_id=(S\w+)", c["links"]["reserve"]) or [None, None])[1]
        core = re.sub(r"\(.*?\)|테니스장|테니스|공원|근린|한강", "", c["name"]).strip()
        for r in rows:
            hit = (svc_id and r.get("SVCID") == svc_id) or (len(core) >= 2 and (core in r.get("SVCNM", "") or core in r.get("PLACENM", "")))
            if hit:
                out.setdefault(cid, []).append({"id": r["SVCID"], "name": r["SVCNM"], "status": r["SVCSTATNM"], "url": r["SVCURL"]})
    return out


# ---------- 7. 하루 요약 ----------
def summary_text(day, cloud_stats, pc_stats, pc_checked):
    c = cloud_stats.get(day, {})
    p = pc_stats.get(day, {})
    total = c.get("alerts", 0) + p.get("alerts", 0)
    errs = sorted(set(c.get("errors", [])) | set(p.get("errors", [])))
    d = date.fromisoformat(day)
    lines = [f"📊 {d.month}/{d.day}({WEEKDAY[d.weekday()]}) 테니스 알림 요약",
             f"새 빈자리 알림 {total}건 (클라우드 {c.get('alerts', 0)} · 노트북 {p.get('alerts', 0)})",
             f"조회 실패: {', '.join(errs)[:60]}" if errs else "조회 실패 없음"]
    if pc_checked:
        lines.append(f"노트북 마지막 확인: {pc_checked[5:16].replace('T', ' ')}")
    return "\n".join(lines)
