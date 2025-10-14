// service-worker.js
const CACHE_NAME = 'healthpet-cache-v1';
const urlsToCache = [
  '/',
  '/site/CadastroU.html',
  '/site/Login.html',
  '/style.css',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png'
];

// Instala o Service Worker e adiciona arquivos ao cache
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Adicionando ao cache');
      return cache.addAll(urlsToCache);
    })
  );
});

// Ativa e limpa caches antigos
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Ativando...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Removendo cache antigo:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Intercepta requisições e serve do cache (modo offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
