"""계정 정보 읽기. GitHub Actions에서는 환경변수(Secrets), 노트북에서는 secrets.json에서 읽는다.

카카오 refresh_token은 2개월마다 갱신되므로 노트북과 GitHub 서버가 같이 쓰도록
저장소의 monitor/kakao-token.enc에 암호화해서 보관한다 (키: KAKAO_TOKEN_KEY, 저장소에는 없음).
"""
import json
import os
from pathlib import Path

HERE = Path(__file__).parent
SECRETS = HERE / "secrets.json"
TOKEN_FILE = HERE / "kakao-token.enc"

# 환경변수 이름 → secrets.json 위치
ENV_MAP = {
    "YCS_USER_ID": ("ycs", "user_id"),
    "YCS_PASSWORD": ("ycs", "user_password"),
    "KAKAO_REST_API_KEY": ("kakao", "rest_api_key"),
    "KAKAO_CLIENT_SECRET": ("kakao", "client_secret"),
    "KAKAO_TOKEN_KEY": ("kakao", "token_key"),
    "NTFY_TOPIC": ("ntfy", "topic"),
}


def _load_file():
    try:
        return json.loads(SECRETS.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return {}


def get(name):
    if os.environ.get(name):
        return os.environ[name]
    section, key = ENV_MAP[name]
    return _load_file().get(section, {}).get(key, "")


def _fernet():
    key = get("KAKAO_TOKEN_KEY")
    if not key:
        return None
    from cryptography.fernet import Fernet
    return Fernet(key.encode())


def load_kakao_token():
    """{'refresh_token': ..., 'expires_at': epoch초}"""
    f = _fernet()
    if f and TOKEN_FILE.exists():
        return json.loads(f.decrypt(TOKEN_FILE.read_bytes()))
    kakao = _load_file().get("kakao", {})
    return {"refresh_token": kakao.get("refresh_token", ""), "expires_at": kakao.get("refresh_token_expires_at")}


def save_kakao_token(refresh_token, expires_at):
    f = _fernet()
    if f:
        TOKEN_FILE.write_bytes(f.encrypt(json.dumps({"refresh_token": refresh_token, "expires_at": expires_at}).encode()))
    if SECRETS.exists():  # 노트북에도 사본을 남겨 둔다
        data = _load_file()
        data.setdefault("kakao", {}).update(refresh_token=refresh_token, refresh_token_expires_at=expires_at)
        SECRETS.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")
