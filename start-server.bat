@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 테니스코트 페이지: http://localhost:8080
echo 종료하려면 이 창을 닫으세요.
start "" "http://localhost:8080/index.html"
python -m http.server 8080 --bind 127.0.0.1
