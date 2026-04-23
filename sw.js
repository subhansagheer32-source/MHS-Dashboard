const CACHE_NAME = 'mhs-v13-wallet';
// List the files you want to work offline
const assets = [
  './',
  'index.html',
  'manifest.json',
  'logo.png.png'
];

// Install the service worker and cache the files
self.addEventListener('install', (htmlEvent) => {
  htmlEvent.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Help the app load from cache when there is no internet
self.addEventListener('fetch', (htmlEvent) => {
  htmlEvent.respondWith(
    caches.match(htmlEvent.request).then((response) => {
      return response || fetch(htmlEvent.request);
    })
  );
});
