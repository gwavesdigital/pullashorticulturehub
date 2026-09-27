const CACHE_NAME = 'satyadeva-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './ChatGPT Image Sep 27, 2026, 04_55_38 AM (2).png',
  './image_1057484162.jpg',
  './image_777802990.jpg',
  './123.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
