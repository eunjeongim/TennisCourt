// 오프라인 캐시: 페이지·코트 데이터는 '네트워크 우선, 실패 시 캐시', 지도 라이브러리·폰트는 '캐시 우선'
// 코트 데이터나 페이지를 고치면 CACHE 버전을 올려 주세요.
const CACHE = "tennis-v16";
const CORE = ["./", "./index.html", "./courts.js", "./config.js", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/logo.svg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  // 카카오맵 SDK·지도 타일은 브라우저에 맡긴다 (도메인 인증·용량 문제)
  if (/kakao|daumcdn|openstreetmap/.test(url.hostname)) return;

  const sameOrigin = url.origin === location.origin;
  if (sameOrigin) {
    e.respondWith(fetch(e.request)
      .then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res; })
      .catch(() => caches.match(e.request, { ignoreSearch: true })));
  } else if (/cdnjs|fonts\.(googleapis|gstatic)/.test(url.hostname)) {
    e.respondWith(caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return res;
    })));
  }
});
