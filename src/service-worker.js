// service-worker.js

// public/service-worker.js
// Example: Caching static assets
const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/src/index.html',
  '/src/manifest.json',
  '/src/App.jsx',
  '/src/main.jsx',
  '/src/index.css',
  '/src/Router.jsx',
  '/src/styles/Chatbot.css',
  '/src/pages/Home.jsx',
  '/src/pages/Courses.jsx',
  '/src/pages/ChatBot.jsx',
  '/src/pages/Reports.jsx',
  '/src/components/StockItem.jsx',
  '/src/components/StockContainer.jsx',
  '/src/components/SideBar.jsx',
  '/src/components/NewsContainer.jsx',
  '/src/components/NavBar.jsx',
  '/src/components/CourseContainer.jsx',
  '/src/components/BalanceContainer.jsx',
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
