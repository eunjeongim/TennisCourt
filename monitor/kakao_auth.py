"""카카오 로그인을 한 번 해서 '나에게 보내기'용 refresh_token을 secrets.json에 저장한다.

준비: 카카오 개발자 콘솔에서
  1) 카카오 로그인 활성화 ON
  2) Redirect URI에 http://localhost:8765/callback 등록
  3) 동의항목에서 '카카오톡 메시지 전송(talk_message)' 사용 설정
  4) secrets.json의 kakao.rest_api_key에 REST API 키 입력 (클라이언트 시크릿을 켰다면 client_secret도)
실행: python kakao_auth.py → 브라우저에서 동의 → 끝나면 테스트 메시지가 카톡으로 온다.
"""
import json
import time
import webbrowser
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import parse_qs, urlencode, urlparse

import requests

import kakao
import secret_store

REDIRECT_URI = "http://localhost:8765/callback"
result = {}


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        q = parse_qs(urlparse(self.path).query)
        result["code"] = q.get("code", [None])[0]
        result["error"] = q.get("error_description", q.get("error", [None]))[0]
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.end_headers()
        msg = "완료됐어요. 이 창을 닫으셔도 돼요." if result["code"] else f"실패: {result['error']}"
        self.wfile.write(f"<h2 style='font-family:sans-serif'>{msg}</h2>".encode("utf-8"))

    def log_message(self, *args):
        pass


def main():
    cfg = {"rest_api_key": secret_store.get("KAKAO_REST_API_KEY"), "client_secret": secret_store.get("KAKAO_CLIENT_SECRET")}
    if not cfg.get("rest_api_key"):
        raise SystemExit("secrets.json의 kakao.rest_api_key에 REST API 키를 먼저 넣어 주세요.")
    url = "https://kauth.kakao.com/oauth/authorize?" + urlencode({
        "client_id": cfg["rest_api_key"], "redirect_uri": REDIRECT_URI,
        "response_type": "code", "scope": "talk_message"})
    server = HTTPServer(("127.0.0.1", 8765), Handler)
    print("브라우저에서 카카오 로그인/동의를 진행하세요...")
    webbrowser.open(url)
    server.handle_request()
    if not result.get("code"):
        raise SystemExit(f"인가 실패: {result.get('error')}")

    data = {"grant_type": "authorization_code", "client_id": cfg["rest_api_key"],
            "redirect_uri": REDIRECT_URI, "code": result["code"]}
    if cfg.get("client_secret"):
        data["client_secret"] = cfg["client_secret"]
    res = requests.post(kakao.TOKEN_URL, data=data, timeout=15)
    body = res.json()
    if res.status_code != 200:
        raise SystemExit(f"토큰 발급 실패: {body}")
    # 노트북 secrets.json과 저장소의 암호화 파일(kakao-token.enc)에 함께 저장 → 커밋·푸시하면 GitHub 서버도 사용
    secret_store.save_kakao_token(body["refresh_token"], int(time.time()) + int(body["refresh_token_expires_in"]))
    kakao.send("🎾 테니스코트 빈자리 알림이 연결됐어요!", "https://www.ycs.or.kr/fmcs/4", "목동 대관신청")
    print("완료: 카카오톡으로 테스트 메시지를 보냈어요.")


if __name__ == "__main__":
    main()
