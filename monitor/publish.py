"""조회한 빈자리 전체를 웹페이지용 vacancies.json으로 저장하고 GitHub에 올린다.

내용이 바뀌었거나 마지막 업로드 후 HEARTBEAT_MIN분이 지났을 때만 커밋·푸시한다
(10분마다 커밋하면 기록이 너무 많아지므로). 푸시는 Git Credential Manager에 저장된 로그인으로 한다.
"""
import json
import logging
import subprocess
from datetime import datetime, timedelta
from pathlib import Path

SITE = Path(__file__).resolve().parent.parent
# 실행 위치별로 파일을 나눠 서로 덮어쓰거나 git 충돌이 나지 않게 한다 (웹페이지가 둘을 합쳐 보여줌)
out_path = lambda scope: SITE / f"vacancies-{scope}.json"
HEARTBEAT_MIN = 60
NO_WINDOW = getattr(subprocess, "CREATE_NO_WINDOW", 0)


def _git(*args):
    return subprocess.run(["git", *args], cwd=SITE, capture_output=True, text=True, encoding="utf-8",
                           timeout=120, creationflags=NO_WINDOW)


def sync():
    """웹페이지에서 저장한 알림 설정 등 원격 변경을 받아온다."""
    res = _git("pull", "-q", "--rebase", "--autostash", "origin", "main")
    if res.returncode != 0:
        logging.warning("git pull 실패: %s", res.stderr.strip()[:200])


def build(found, now, meta=None):
    courts = {}
    for cid, slots in found.items():
        courts[cid] = [{"date": d.isoformat(), "start": s, "end": e, **({"court": label} if label else {})}
                       for d, s, e, label in sorted(slots, key=lambda x: (x[0], x[1], x[3]))
                       if not (d == now.date() and s <= now.strftime("%H:%M"))]
    return {"checked_at": now.isoformat(timespec="minutes"), "meta": meta or {}, "courts": courts}


def publish(found, failed_ids=(), meta=None, now=None, scope="pc", use_git=True, extra=None):
    now = now or datetime.now()
    OUT = out_path(scope)
    data = build(found, now, meta)
    data.update(extra or {})  # stats(하루 통계), public(서울시 공공예약 상태)
    old = {}
    try:
        old = json.loads(OUT.read_text(encoding="utf-8"))
    except (FileNotFoundError, json.JSONDecodeError):
        pass
    # 조회에 실패한 코트는 이전 데이터를 유지한다
    for cid in failed_ids:
        if cid in old.get("courts", {}):
            data["courts"][cid] = old["courts"][cid]

    changed = any(data.get(k) != old.get(k) for k in ("courts", "meta", "public"))
    last = datetime.fromisoformat(old["checked_at"]) if old.get("checked_at") else None
    if not changed and last and now - last < timedelta(minutes=HEARTBEAT_MIN):
        return False

    OUT.write_text(json.dumps(data, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")
    if not use_git:  # GitHub Actions에서는 워크플로가 커밋·푸시한다
        return True
    _git("add", OUT.name, "monitor/kakao-token.enc")
    msg = "chore: 빈자리 현황 갱신" if changed else "chore: 빈자리 확인 시각 갱신"
    res = _git("commit", "-m", f"{msg} ({now:%m-%d %H:%M})")
    if res.returncode != 0 and "nothing to commit" not in res.stdout:
        logging.error("git commit 실패: %s %s", res.stdout, res.stderr)
        return False
    _git("pull", "-q", "--rebase", "--autostash", "origin", "main")
    res = _git("push", "-q", "origin", "main")
    if res.returncode != 0:
        logging.error("git push 실패: %s", res.stderr)
        return False
    logging.info("빈자리 현황 업로드 (%s)", "변경" if changed else "확인 시각")
    return True
