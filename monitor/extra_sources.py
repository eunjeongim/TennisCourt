"""로그인 없이 빈자리를 읽을 수 있는 추가 코트들.

- fmcs: 은평·강서·성동·관악·구로·강남 시설관리공단 (목동과 같은 업체 시스템, 로그인 불필요)
    place_month_state_list  state_cd 10/11 = 예약가능, 15 = 추첨, 20 = 마감/완료, 30 = 휴관
    place_time_state_list   use_yn N = 빈자리, Y = 예약됨, E = 마감
    ⚠️ 응답의 detail 필드에 예약자 실명이 들어 있는 곳이 있으므로 읽지도 저장하지도 않는다.
- bucheon: 부천시 시설 예약 HTML 달력 (2시간 단위, 다음 달은 매월 20일 10시 오픈)
- jd: JD Tennis Club 공개 일정 API
"""
import re
import time
from concurrent.futures import ThreadPoolExecutor
from datetime import date, timedelta

import requests
import urllib3

urllib3.disable_warnings()  # 관악 공단 서버가 인증서 체인을 불완전하게 보냄
UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36"
DAYS_AHEAD = 14   # 너무 먼 날짜는 보지 않는다 (요청 수 절약)
PAUSE = 0.6       # 같은 사이트에 연속 요청할 때 간격(초)

# id는 웹페이지 courts.js의 id와 같아야 한다
FMCS_COURTS = {
    "jangmi-eunpyeong": dict(name="장미(은평)", base="https://www.efmc.or.kr", page="/fmcs/32", com="EFMC01", part="19", places=["9", "10"]),
    "seonjeong-eunpyeong": dict(name="선정(은평)", base="https://www.efmc.or.kr", page="/fmcs/32", com="EFMC01", part="23", places=["12", "13", "14"]),
    "eunpyeong-gumin": dict(name="은평구민체육센터", base="https://www.efmc.or.kr", page="/fmcs/32", com="EFMC01", part="15", places=["3", "4", "5"]),
    "ujangsan-tennis": dict(name="우장산", base="https://sports.gangseo.seoul.kr", page="/fmcs/64", com="GANGSEO02", part="03", places=["2", "3", "4", "5"]),
    "gangseo-banghwa-tennis": dict(name="강서구립(방화)", base="https://sports.gangseo.seoul.kr", page="/fmcs/64", com="GANGSEO03", part="02", places=["3", "4", "5", "6"]),
    "hwanggeumnae-tennis": dict(name="황금내", base="https://sports.gangseo.seoul.kr", page="/fmcs/64", com="GANGSEO05", part="02", places=["2"]),
    "eungbong-sports-park-tennis": dict(name="응봉", base="https://sports.happysd.or.kr", page="/fmcs/192", com="SUNGDONG10", part="02", places=["1", "2", "3", "4", "5", "7"]),
    "majang-tennis": dict(name="마장", base="https://sports.happysd.or.kr", page="/fmcs/192", com="SUNGDONG11", part="02", places=["1", "2"]),
    "gwanak-gumin": dict(name="관악구민운동장", base="https://booking.gwanakgongdan.or.kr", page="/booking/1515", com="KWAN_AK03", part="02", places=["285", "286", "287", "288"]),
    "gocheok-park-tennis": dict(name="고척근린공원", base="https://www.guro-gurosportsclub.or.kr", page="/fmcs/3", com="GUROSP03", part="03", places=["1", "2", "3"]),
    "bongeun-tennis": dict(name="봉은", base="https://life.gangnam.go.kr", page="/fmcs/54", com="GNCC05", part="04", places=["34", "35", "36", "37"]),
}
BUCHEON_COURTS = {
    "bucheon-stadium-tennis": dict(name="부천종합운동장", seq="115"),
    "bucheon-gymnasium-tennis-hard": dict(name="부천체육관(하드)", seq="192"),
    "bucheon-indoor-tennis": dict(name="부천실내", seq="195"),
}
BUCHEON_URL = "https://reserv.bucheon.go.kr/site/main/lending/lendingDetail"
JD_ID, JD_URL = "jd-tennis-club-yeomchang", "https://www.jdtennisclub.com/"


def _session():
    s = requests.Session()
    s.headers["User-Agent"] = UA
    return s


class _Fmcs:
    """사이트(호스트) 하나에 대한 클라이언트. 구로는 GET이 405라 POST로, 관악은 인증서 검증을 끈다."""

    def __init__(self, base):
        self.base, self.http, self.post_only = base, _session(), False

    def get(self, path, **params):
        time.sleep(PAUSE)
        url = self.base + path
        try:
            r = (self.http.post(url, data=params, timeout=12) if self.post_only
                 else self.http.get(url, params=params, timeout=12))
        except requests.exceptions.SSLError:
            self.http.verify = False
            r = self.http.get(url, params=params, timeout=12)
        if r.status_code == 405 and not self.post_only:
            self.post_only = True
            r = self.http.post(url, data=params, timeout=12)
        r.raise_for_status()
        return r.json()


def _fmcs_court(client, cfg, today):
    """한 코트(여러 면)의 빈자리 [(date, start, end, label)]. label은 면 번호."""
    out = []
    until = today + timedelta(days=DAYS_AHEAD)
    for place in cfg["places"]:
        q = dict(company_code=cfg["com"], part_code=cfg["part"], place_code=place, rent_type="1001", mem_no="")
        open_days = set()
        # 월간 상태는 기준일 주변 6주를 주므로, 기간이 월을 넘으면 다음 달 기준으로 한 번 더 본다
        bases = {today, until} if until.month != today.month else {today}
        for b in bases:
            for d in client.get("/rest/facilities/place_month_state_list", base_date=b.strftime("%Y%m%d"), **q):
                day = date.fromisoformat(d["date"])
                if d.get("state_cd") in ("10", "11") and today <= day <= until:
                    open_days.add(day)
        for day in sorted(open_days):
            for t in client.get("/rest/facilities/place_time_state_list", base_date=day.strftime("%Y%m%d"), **q):
                if t.get("start_time") and t.get("use_yn") == "N":
                    out.append((day, t["start_time"], t["end_time"], f"{cfg['places'].index(place) + 1}면"))
    return out


def fetch_fmcs(enabled_ids, today=None):
    """{court_id: slots}, {court_id: error}. 호스트별로 나눠 병렬 실행 (같은 호스트는 순차)."""
    today = today or date.today()
    by_host = {}
    for cid in enabled_ids:
        if cid in FMCS_COURTS:
            by_host.setdefault(FMCS_COURTS[cid]["base"], []).append(cid)

    def run_host(base, ids):
        client, res, err = _Fmcs(base), {}, {}
        for cid in ids:
            try:
                res[cid] = _fmcs_court(client, FMCS_COURTS[cid], today)
            except Exception as ex:
                # 사이트가 응답하지 않으면 같은 사이트의 나머지 코트는 이번 회차에 건너뛴다
                for rest in ids[ids.index(cid):]:
                    err[rest] = f"사이트 응답 없음: {str(ex)[:80]}"
                break
        return res, err

    found, errors = {}, {}
    with ThreadPoolExecutor(max_workers=6) as pool:
        for res, err in pool.map(lambda kv: run_host(*kv), by_host.items()):
            found.update(res)
            errors.update(err)
    return found, errors


def fetch_bucheon(enabled_ids, today=None):
    today = today or date.today()
    http, found, errors = _session(), {}, {}
    months = {(today.year, today.month)}
    until = today + timedelta(days=DAYS_AHEAD)
    if today.day >= 20:  # 다음 달 사용분은 매월 20일 10시에 열린다
        months.add((until.year, until.month))
    for cid in enabled_ids:
        if cid not in BUCHEON_COURTS:
            continue
        try:
            slots = []
            for y, m in sorted(months):
                time.sleep(PAUSE)
                r = http.get(BUCHEON_URL, params=dict(lending_info_seq=BUCHEON_COURTS[cid]["seq"], inst_cate="01",
                                                      sch_year=y, sch_month=f"{m:02d}"), timeout=12)
                r.raise_for_status()
                h = r.text[r.text.find('id="calendarTable"'):]
                for d, s, e in re.findall(r"fncSubmit\('\d+','(\d{4}-\d\d-\d\d)','(\d\d:\d\d)~(\d\d:\d\d)'", h):
                    day = date.fromisoformat(d)
                    if today <= day <= until:
                        slots.append((day, s, e, ""))
            found[cid] = slots
        except Exception as ex:
            errors[cid] = str(ex)[:120]
    return found, errors


def fetch_jd(enabled_ids, today=None):
    if JD_ID not in enabled_ids:
        return {}, {}
    today = today or date.today()
    http, slots = _session(), []
    try:
        for i in range(DAYS_AHEAD + 1):
            day = today + timedelta(days=i)
            time.sleep(PAUSE)
            r = http.get("https://www.jdtennisclub.com/api/schedules", params={"date": day.isoformat()}, timeout=12)
            r.raise_for_status()
            for court in r.json().get("data", []):
                for s in court.get("slots", []):
                    # 새벽 시간대(00~06시)는 실제 이용 대상이 아니라서 뺀다
                    if s.get("isAvailable") and s["startTime"] >= "06:00":
                        slots.append((day, s["startTime"], s["endTime"], court.get("courtName", "")))
        return {JD_ID: slots}, {}
    except Exception as ex:
        return {}, {JD_ID: str(ex)[:120]}


def court_info():
    """{court_id: (짧은 이름, 예약 URL)}"""
    info = {cid: (c["name"], c["base"] + c["page"]) for cid, c in FMCS_COURTS.items()}
    info.update({cid: (c["name"], f"{BUCHEON_URL}?lending_info_seq={c['seq']}&inst_cate=01") for cid, c in BUCHEON_COURTS.items()})
    info[JD_ID] = ("JD Tennis Club", JD_URL)
    return info


def fetch_all(enabled_ids, today=None):
    found, errors = {}, {}
    with ThreadPoolExecutor(max_workers=3) as pool:
        futs = [pool.submit(f, enabled_ids, today) for f in (fetch_fmcs, fetch_bucheon, fetch_jd)]
        for fut in futs:
            res, err = fut.result()
            found.update(res)
            errors.update(err)
    return found, errors


if __name__ == "__main__":
    import sys
    from collections import Counter
    ids = sys.argv[1:] or list(court_info())
    t0 = time.time()
    found, errors = fetch_all(ids)
    for cid in ids:
        s = found.get(cid)
        print(f"{cid:32} {'ERR ' + errors[cid] if cid in errors else len(s)}",
              "" if not s else Counter(x[0].strftime('%a') for x in s).most_common(3), s[:2] if s else "")
    print(f"{time.time() - t0:.0f}s")
