"""아이폰 팝업 알림 (ntfy).

카카오 '나에게 보내기'는 메시지가 쌓이기만 하고 푸시 알림이 뜨지 않아서, 같은 내용을 ntfy로도 보낸다.
아이폰에 ntfy 앱을 설치하고 NTFY_TOPIC(secrets.json의 ntfy.topic 또는 GitHub Secrets)과 같은 주제를 구독하면 된다.
주제 이름을 아는 사람은 누구나 받아 볼 수 있으니 길고 무작위인 이름을 쓴다.
"""
import requests

import secret_store

SERVER = "https://ntfy.sh"


def send(text, url, button="예약하러 가기"):
    topic = secret_store.get("NTFY_TOPIC")
    if not topic:
        return
    title, _, body = text.partition("\n")
    # JSON으로 보내야 한글 제목·버튼이 깨지지 않는다
    msg = {"topic": topic, "title": title if body else "🎾 테니스코트 알림", "message": body or title,
           "click": url, "actions": [{"action": "view", "label": button, "url": url}]}
    res = requests.post(SERVER, json=msg, timeout=15)
    if res.status_code != 200:
        raise RuntimeError(f"ntfy 발송 실패: {res.status_code}")
