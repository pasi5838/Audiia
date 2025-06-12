
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("teka-hewan-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "style.css",
        "script.js",
        "soal.json",
        "manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
