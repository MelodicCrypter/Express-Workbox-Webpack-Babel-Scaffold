// 1. Debug, only when development phase ===================================================
// Comment out in production
workbox.setConfig({ debug: true });

// 2. Cache names ==========================================================================
workbox.core.setCacheNameDetails({
    prefix: 'EWWBS',
    precache: 'precache',
    runtime: 'runtime',
});

// 3. Map the precacheManifest by workbox-webpack-plugin ====================================
// And remove auto-generated hash here... being redundant with Webpack's hashing
const urlsWithHash = [...self.__precacheManifest]
    .filter(c => c.url.includes('/build/'))
    .map(u => {
        return { url: u.url };
    });
const urlsWithNoHash = [...self.__precacheManifest].filter(c => !c.url.includes('/build/'));
const customURLs = [{ url: '/' }, { url: '/fallback' }];
const finalPrecachedManifest = [...urlsWithHash, ...urlsWithNoHash, ...customURLs];

// 4. Warming-up the runtime cache
// As of Workbox 4, the preCache seems to be not working with regards to offline ===========
self.addEventListener('install', event => {
    const url = finalPrecachedManifest.map(precache => precache.url);
    const cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(cache => cache.addAll(url)));
});

// 5. Listen for updates, when user clicks update button ====================================
addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        skipWaiting();
    }
});

// 6. Let SW take control when it has been activated ========================================
workbox.core.clientsClaim();

// 7. Runtime caches ========================================================================
// 7.1 stylesheet
workbox.routing.registerRoute(
    /\.(?:css)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'EWWBS-static-resources',
    }),
);

// 7.2. images ==============================================================================
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

// 8. Using stale-while-revalidate strategy for all other requests. =========================
workbox.routing.setDefaultHandler(new workbox.strategies.StaleWhileRevalidate());

// 9. Provide offline or fallback support ===================================================
workbox.routing.setCatchHandler(({ event }) => {
    switch (event.request.destination) {
        case 'document':
            return caches.match('/fallback');
            break;

        case 'image':
            // return caches.match(FALLBACK_IMAGE_URL);
            console.log('image fallback');
            break;

        case 'font':
            // return caches.match(FALLBACK_FONT_URL);
            console.log('font fallback');
            break;

        default:
            // If we don't have a fallback, just return an error response.
            return Response.error();
    }
});

// 10. Cache cleaning ========================================================================
workbox.precaching.cleanupOutdatedCaches();

// 11. =======================================================================================
workbox.precaching.precacheAndRoute(finalPrecachedManifest);
