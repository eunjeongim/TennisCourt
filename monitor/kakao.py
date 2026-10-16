"""카카오톡 '나에게 보내기'.

REST API 키는 secret_store(Secrets 또는 secrets.json)에서, refresh_token은 암호화 파일(kakao-token.enc)에서 읽는다.
refresh_token은 kakao_auth.py로 한 번 발급받고, 이후 갱신될 때마다 자동 저장한다.
"""
import json
import time

import requests

import secret_store

TOKEN_URL = "https://kauth.kakao.com/oauth/token"
SEND_URL = "https://kapi.kakao.com/v2/api/talk/memo/default/send"
TEXT_LIMIT = 200  # 텍스트 템플릿 최대 글자 수


def _access_token():
    rest_key = secret_store.get("KAKAO_REST_API_KEY")
    token = secret_store.load_kakao_token()
    if not rest_key or not token.get("refresh_token"):
        raise RuntimeError("카카오 설정이 없어요. kakao_auth.py를 먼저 실행하세요.")
    data = {"grant_type": "refresh_token", "client_id": rest_key, "refresh_token": token["refresh_token"]}
    if secret_store.get("KAKAO_CLIENT_SECRET"):
        data["client_secret"] = secret_store.get("KAKAO_CLIENT_SECRET")
    res = requests.post(TOKEN_URL, data=data, timeout=15)
    body = res.json()
    if res.status_code != 200:
        raise RuntimeError(f"카카오 토큰 갱신 실패({body.get('error_code', res.status_code)}). kakao_auth.py로 다시 로그인하세요.")
    # 만료가 1개월 이내로 남으면 새 refresh_token이 함께 내려온다
    if body.get("refresh_token"):
        secret_store.save_kakao_token(body["refresh_token"], int(time.time()) + int(body.get("refresh_token_expires_in", 0)))
    return body["access_token"]


def refresh_token_days_left():
    exp = secret_store.load_kakao_token().get("expires_at")
    return None if not exp else (exp - time.time()) / 86400


def send(text, url, button="예약하러 가기"):
    if len(text) > TEXT_LIMIT:
        text = text[:TEXT_LIMIT - 1] + "…"
    template = {"object_type": "text", "text": text,
                "link": {"web_url": url, "mobile_web_url": url}, "button_title": button}
    res = requests.post(SEND_URL, headers={"Authorization": f"Bearer {_access_token()}"},
                        data={"template_object": json.dumps(template, ensure_ascii=False)}, timeout=15)
    if res.status_code != 200 or res.json().get("result_code") != 0:
        raise RuntimeError(f"카카오톡 발송 실패: {res.status_code}")
