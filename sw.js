importScripts(
    '/build/wbassets/precache-manifest.498793ddf0789234069c9c8d4d5a0750.js',
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
);

// Debug, only when development phase ===================================================
// Comment out in production
workbox.setConfig({ debug: true });

// Cache names ==========================================================================
workbox.core.setCacheNameDetails({
    prefix: 'EWWBS',
    precache: 'precache',
    runtime: 'runtime',
});

// Map the precacheManifest by workbox-webpack-plugin ====================================
// And remove auto-generated hash here... being redundant with Webpack's hashing
const urlsWithHash = [...self.__precacheManifest]
    .filter(c => c.url.includes('/build/'))
    .map(u => {
        return { url: u.url };
    });
const urlsWithNoHash = [...self.__precacheManifest].filter(c => !c.url.includes('/build/'));
const customURLs = [{ url: '/' }, { url: '/test' }];
const finalPrecachedManifest = [...urlsWithHash, ...urlsWithNoHash, ...customURLs];

// Warming-up the runtime cache
// As of Workbox 4, the preCache seems to be not working with regards to offline
self.addEventListener('install', event => {
    const url = finalPrecachedManifest.map(precache => precache.url);
    const cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(url)));
});

// Listen for updates, when user clicks update button
addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        skipWaiting();
    }
});

// Let SW take control when it has been activated
workbox.core.clientsClaim();

// Runtime caches
// 1. stylesheet
workbox.routing.registerRoute(
    /\.(?:css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'EWWBS-static-resources',
    }),
);

// 2. images
workbox.routing.registerRoute(
    // new RegExp('.(png|svg|jpg|jpeg)$'),
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'EWWBS-images',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
        ],
    }),
);

// 4. Using stale-while-revalidate strategy for all other requests.
workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate());

// 6. Cache cleaning
workbox.precaching.cleanupOutdatedCaches();

// 7.
workbox.precaching.precacheAndRoute(finalPrecachedManifest);
