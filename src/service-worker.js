// service-worker.js

// public/service-worker.js
// Example: Caching static assets
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/App.jsx',
  '/main.jsx',
  '/index.css',
  '/Router.jsx',
  '/styles/Chatbot.css',
  '/pages/Home.jsx',
  '/pages/Courses.jsx',
  '/pages/ChatBot.jsx',
  '/pages/Reports.jsx',
  '/components/StockItem.jsx',
  '/components/StockContainer.jsx',
  '/components/StockItem.jsx',
  '/components/StockItem.jsx',
  // Add other static assets to cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
