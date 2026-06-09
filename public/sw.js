// Dinh Dưỡng Việt - Service Worker v1
const CACHE = "ddv-v1";
const FALLBACK = "/404.html";

// Assets to pre-cache on install
const PRECACHE = [
  "/",
  "/thuc-pham",
  "/mon-an",
  "/kien-thuc-dinh-duong",
  "/cong-cu",
  "/cong-cu/nhat-ky",
  "/cong-cu/theo-doi-suc-khoe",
  "/cong-cu/tuong-tac-thuoc",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE).then(function(cache) {
      return cache.addAll(PRECACHE);
    }).then(function() {
      return self.skipWaiting();
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE; }).map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      return self.clients.claim();
    })
  );
});

// Network-first for HTML, cache-first for assets
self.addEventListener("fetch", function(event) {
  var url = new URL(event.request.url);
  var sameOrigin = url.origin === self.location.origin;

  if (!sameOrigin) return;

  // API/search/internal routes - network only
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/api-foods") || url.pathname.startsWith("/api-recipes")) {
    return;
  }

  // HTML pages - network first, fallback to cache, fallback to 404
  if (event.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname === "/" || url.pathname.match(/^\/[a-z]/i)) {
    event.respondWith(
      fetch(event.request).then(function(response) {
        // Cache successful responses
        if (response.status === 200) {
          var copy = response.clone();
          caches.open(CACHE).then(function(cache) { cache.put(url.pathname, copy); });
        }
        return response;
      }).catch(function() {
        return caches.match(url.pathname).then(function(cached) {
          return cached || caches.match(FALLBACK) || new Response("Offline", { status: 503 });
        });
      })
    );
    return;
  }

  // Static assets (images, icons, scripts, styles) - cache first
  event.respondWith(
    caches.match(event.request).then(function(cached) {
      return cached || fetch(event.request).then(function(response) {
        if (response.status === 200) {
          var copy = response.clone();
          caches.open(CACHE).then(function(cache) { cache.put(event.request, copy); });
        }
        return response;
      });
    }).catch(function() {
      // Last resort for images
      if (event.request.destination === "image") {
        return caches.match("/icons/icon-192.png");
      }
      return new Response("", { status: 404 });
    })
  );
});
