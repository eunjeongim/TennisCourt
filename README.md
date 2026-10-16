# 테니스코트 예약 도우미

영등포구청역 주변 공공·사설 테니스코트 지도와 빈자리 카카오톡 알림.
웹앱: <https://eunjeongim.github.io/TennisCourt/>

## 폴더 구성

| 경로 | 내용 |
|---|---|
| `index.html` | 웹앱 화면 (지도, 테니스코트 리스트, 빈자리 현황, 알림 설정) |
| `courts.js` | 코트 데이터 (위치, 교통, 요금, 예약 링크) |
| `config.js` | 카카오맵 JavaScript 키 |
| `alert-settings.json` | 알림 설정 (웹페이지 🔔 알림 설정에서 저장) |
| `vacancies-cloud.json`, `vacancies-pc.json` | 빈자리 조회 결과 (감시 프로그램이 자동 갱신) |
| `manifest.webmanifest`, `sw.js`, `icons/` | 홈 화면 앱(PWA) 설정과 아이콘 |
| `monitor/` | 빈자리 감시 프로그램 (Python) |
| `.github/workflows/monitor.yml` | GitHub Actions 자동 실행 (07~23시, 10분 간격) |

## 빈자리 감시

- **GitHub Actions** (`MONITOR_SCOPE=cloud`): 목동·은평·성동·구로·강남·JD. 노트북이 꺼져 있어도 동작.
- **노트북 작업 스케줄러** `TennisCourtAlert` (`MONITOR_SCOPE=pc`): 해외 접속을 막는 영등포·부천·관악·강서.
- 계정 정보는 `monitor/secrets.json`(노트북, 저장소에 올리지 않음)과 GitHub Secrets에 보관.
- 카카오 권한이 만료되면 `python monitor/kakao_auth.py`를 다시 실행하고 `monitor/kakao-token.enc`를 커밋.
- 실제 대중교통 소요시간 갱신: `python monitor/update_transit.py --write` (ODsay API 키 필요).
