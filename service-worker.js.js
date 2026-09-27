const CACHE_NAME = 'satyadeva-pwa-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './ChatGPT Image Sep 27, 2026, 04_55_38 AM (2).png',
  './image_1057484162.jpg',
  './image_777802990.jpg',
  './123.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});