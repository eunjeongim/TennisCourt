"""영등포구시설관리공단 대관 달력(srent.y-sisul.or.kr)에서 예약가능 시간대를 읽는다. 로그인 불필요."""
import re
from datetime import date

import requests

BASE = "https://srent.y-sisul.or.kr"

COURTS = {
    "anyangcheon": {"name": "안양천 생활체육공원 테니스장", "path": "/page/rent/s04.od.list.asp"},
    "daerim": {"name": "대림운동장 테니스장", "path": "/daerim/page/rent/s02.od.list.asp"},
}

# <li>18:00~20:00<span class='status_y'><a href="javascript:fn_rent_odchk1('981', '2026-11-01');">예약가능</a></span> (0)</li>
SLOT_RE = re.compile(
    r"<li[^>]*>(\d{2}:\d{2})~(\d{2}:\d{2})<span class='status_y'>"
    r"<a href=\"javascript:fn_rent_odchk1\('\d+', '(\d{4}-\d{2}-\d{2})'\);\">예약가능</a>"
)


def _months_to_check(today, next_month_open_day):
    months = [(today.year, today.month)]
    # 다음 달 사용분은 매월 20일(구민팀)/25일(수시) 이후에 접수가 열리므로 그 전에는 보지 않는다
    if today.day >= next_month_open_day:
        y, m = (today.year + 1, 1) if today.month == 12 else (today.year, today.month + 1)
        months.append((y, m))
    return months


def fetch_slots(court_id, today=None, next_month_open_day=25, session=None):
    """[(date, start, end), ...] 형태로 예약가능 시간대를 돌려준다. 오늘 이전 날짜는 제외."""
    today = today or date.today()
    http = session or requests.Session()
    court = COURTS[court_id]
    slots = []
    for y, m in _months_to_check(today, next_month_open_day):
        res = http.get(f"{BASE}{court['path']}", params={"sch_sym": f"{y}-{m:02d}"},
                       headers={"User-Agent": "Mozilla/5.0 (tennis-court-alert; personal use)"}, timeout=20)
        res.raise_for_status()
        html = res.content.decode("utf-8", errors="replace")
        for start, end, d in SLOT_RE.findall(html):
            day = date.fromisoformat(d)
            if day >= today:
                slots.append((day, start, end))
    return slots


def booking_url(court_id):
    return BASE + COURTS[court_id]["path"]
