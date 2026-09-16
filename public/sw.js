// Dinh dưỡng Việt - Service Worker v2
const CACHE = "ddv-v2";
const FALLBACK = "/404.html";

// Core pages cached on install; other pages are cached after a successful visit.
const PRECACHE_PAGES = [
  "/",
  "/thuc-pham",
  "/mon-an",
  "/kien-thuc-dinh-duong",
  "/cong-cu",
  "/cong-cu/nhat-ky",
  "/cong-cu/theo-doi-suc-khoe",
  "/cong-cu/tuong-tac-thuoc",
];

// Small shared assets and offline search/fallback data.
const PRECACHE = [
  ...PRECACHE_PAGES,
  "/manifest.json",
  "/404.html",
  "/api/search-index.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE).then(async function(cache) {
      await cache.addAll(PRECACHE);

      // The Astro build hashes CSS/JS paths. Read the cached core pages to discover
      // their current assets so the offline shell stays complete across deployments.
      const assets = new Set();
      const assetPattern = /(?:href|src)=["'](\/_astro\/[^"']+\.(?:css|js))["']/g;
      for (const page of PRECACHE_PAGES) {
        const response = await cache.match(page);
        if (!response) continue;
        const html = await response.text();
        for (const match of html.matchAll(assetPattern)) assets.add(match[1]);
      }

      if (assets.size) await cache.addAll([...assets]);
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
