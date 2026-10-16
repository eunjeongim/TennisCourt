"""목동테니스장(양천구시설관리공단 ycs.or.kr) 빈자리 조회. 로그인 필요 → Edge를 자동으로 띄워 로그인한다.

대관신청 화면(/fmcs/4)이 쓰는 REST 응답을 그대로 읽는다.
- place_month_state_list: 코트별 날짜 상태 (state_cd 10 = 예약가능, 20 = 예약불가/마감)
- place_time_state_list: 날짜별 시간대 상태 (use_yn N = 빈자리, Y = 예약됨, E = 지난 시간/마감)

`python mokdong.py` 로 단독 실행하면 지금 빈자리를 출력한다.
"""
import json
import sys
from datetime import date
from pathlib import Path

from playwright.sync_api import sync_playwright

import secret_store

HERE = Path(__file__).parent
BASE = "https://www.ycs.or.kr"
LOGIN_URL = BASE + "/fmcs/133"
RENT_URL = BASE + "/fmcs/4"
COMPANY, PART, RENT_TYPE = "YCS04", "02", "1001"


def load_account():
    user_id, password = secret_store.get("YCS_USER_ID"), secret_store.get("YCS_PASSWORD")
    if not user_id or not password:
        raise RuntimeError("목동 계정 정보가 없어요 (secrets.json의 ycs 또는 GitHub Secrets YCS_USER_ID/YCS_PASSWORD).")
    return user_id, password


def new_page(p):
    # 윈도우 노트북은 설치된 Edge, GitHub 서버(리눅스)는 Playwright 기본 Chromium
    browser = p.chromium.launch(channel="msedge" if sys.platform == "win32" else None, headless=True)
    # 헤드리스 브라우저 UA("HeadlessChrome")는 사이트가 404로 막으므로 일반 Edge UA로 바꾼다
    ua = browser.new_page().evaluate("navigator.userAgent").replace("HeadlessChrome", "Chrome")
    return browser, browser.new_context(user_agent=ua, locale="ko-KR").new_page()


def login(page, user_id, user_password):
    page.goto(LOGIN_URL, wait_until="domcontentloaded")
    page.fill("#user_id", user_id)
    page.fill("#user_password", user_password)
    # 로그인 버튼이 대기열(NetFunnel)을 거쳐 폼을 제출한다
    with page.expect_navigation(timeout=30000):
        page.click("#memberLoginForm button[type=submit]")
    if page.locator("#memberLoginForm").count() > 0:
        raise RuntimeError("목동 로그인 실패: 아이디/비밀번호를 확인하세요. (3회 실패 시 자동입력방지 문자가 필요해져요)")


def fetch_slots(today=None):
    """[(date, start, end, court_name, price), ...] 빈자리 목록."""
    today = today or date.today()
    user_id, user_password = load_account()
    slots = []
    with sync_playwright() as p:
        browser, page = new_page(p)
        try:
            login(page, user_id, user_password)
            page.goto(RENT_URL, wait_until="domcontentloaded")
            req = page.context.request

            def post(path, **form):
                res = req.post(f"{BASE}/rest/{path}",
                               form={"company_code": COMPANY, "part_code": PART, "rent_type": RENT_TYPE, **form},
                               headers={"X-Requested-With": "XMLHttpRequest", "Referer": RENT_URL})
                if not res.ok:
                    raise RuntimeError(f"목동 조회 실패 {path} HTTP {res.status}")
                return json.loads(res.text())

            courts = post("common/place", group_cd="")
            for court in courts:
                place = court["place_cd"]
                days = post("facilities/place_month_state_list", place_code=place, base_date=today.strftime("%Y%m%d"))
                open_days = [d["date"] for d in days if d.get("state_cd") == "10" and d["date"] >= today.isoformat()]
                for d in open_days:
                    for t in post("facilities/place_time_state_list", place_code=place, base_date=d.replace("-", "")):
                        if t.get("use_yn") == "N":
                            slots.append((date.fromisoformat(d), t["start_time"], t["end_time"], t["place_nm"], t.get("rent_amt")))
        finally:
            browser.close()
    return slots


if __name__ == "__main__":
    for s in fetch_slots():
        print(s[0], s[0].strftime("%a"), s[1], "~", s[2], s[3], f"{s[4]:,}원" if s[4] else "")
