"""courts.js의 대중교통 소요시간·경로를 실제 길찾기 결과로 갱신한다 (ODsay 대중교통 API).

준비: https://lab.odsay.com 가입 → 애플리케이션 등록(서버 플랫폼, 내 PC 공인 IP 등록) → API 키 발급
     secrets.json의 "odsay": {"api_key": "..."} 에 넣거나 환경변수 ODSAY_API_KEY
실행: python update_transit.py           (바뀔 내용만 미리 보기)
     python update_transit.py --write   (courts.js에 반영)
"""
import json
import os
import sys
import time
from pathlib import Path
from urllib.parse import quote

import requests

HERE = Path(__file__).parent
COURTS_JS = HERE.parent / "courts.js"
HOME = (126.89567, 37.52487)  # 영등포구청역 (경도, 위도)
API = "https://api.odsay.com/v1/api/searchPubTransPathT"


def api_key():
    if os.environ.get("ODSAY_API_KEY"):
        return os.environ["ODSAY_API_KEY"]
    try:
        return json.loads((HERE / "secrets.json").read_text(encoding="utf-8")).get("odsay", {}).get("api_key", "")
    except FileNotFoundError:
        return ""


def line_name(lane):
    name = lane.get("name", "")  # 예: "수도권 5호선", "수도권 신분당선"
    return name.replace("수도권 ", "").replace("(급행)", " 급행")


def describe(path):
    """ODsay 경로 하나 → (총 분, '5호선 영등포구청 → 오목교 (2정거장) + 도보 7분')"""
    parts, walk_tail = [], 0
    subs = path["subPath"]
    for i, sp in enumerate(subs):
        t = sp["trafficType"]
        if t == 1:  # 지하철
            prefix = "환승 " if parts else ""
            parts.append(f"{prefix}{line_name(sp['lane'][0])} {sp['startName']} → {sp['endName']} ({sp['stationCount']}정거장)")
        elif t == 2:  # 버스
            prefix = "환승 " if parts else ""
            parts.append(f"{prefix}버스 {sp['lane'][0].get('busNo', '')} {sp['startName']} → {sp['endName']} ({sp['stationCount']}정거장)")
        elif t == 3 and i == len(subs) - 1:
            walk_tail = sp.get("sectionTime", 0)
    route = " ".join(parts) or "도보"
    if walk_tail:
        route += f" + 도보 {walk_tail}분"
    return path["info"]["totalTime"], route


def main(write=False):
    key = api_key()
    if not key:
        raise SystemExit("ODsay API 키가 없어요. 파일 맨 위 설명을 참고하세요.")
    src = COURTS_JS.read_text(encoding="utf-8")
    head, courts = src[:src.index("[")], json.loads(src[src.index("["):src.rindex("]") + 1])
    changed = 0
    for c in courts:
        time.sleep(0.4)
        url = f"{API}?SX={HOME[0]}&SY={HOME[1]}&EX={c['lng']}&EY={c['lat']}&apiKey={quote(key)}"
        res = requests.get(url, timeout=20).json()
        paths = res.get("result", {}).get("path")
        if not paths:
            print(f"- {c['name']}: 경로 없음 {res.get('error', '')}")
            continue
        minutes, route = describe(min(paths, key=lambda p: p["info"]["totalTime"]))
        old = c["transit"]
        if (old["min"], old["route"]) != (minutes, route):
            changed += 1
            print(f"* {c['name']}: {old['min']}분 → {minutes}분 | {route}")
            c["transit"] = {"min": minutes, "route": route, "source": "ODsay"}
    if write and changed:
        COURTS_JS.write_text(head + json.dumps(courts, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
        print(f"courts.js 갱신: {changed}곳 (sw.js의 CACHE 버전을 올리고 커밋하세요)")
    else:
        print(f"바뀔 곳 {changed}곳" + ("" if write else " — 반영하려면 --write"))


if __name__ == "__main__":
    main(write="--write" in sys.argv)
