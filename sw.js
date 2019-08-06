importScripts(
    '/build/wbassets/precache-manifest.9e25a784bf27e7b484484bc2d062b135.js',
    'https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js',
);

// Path prefix to load modules locally
workbox.setConfig({ debug: true });

addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        skipWaiting();
    }
});

// workbox.core.skipWaiting();
workbox.core.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'EWWBS',
    precache: 'precache',
    runtime: 'runtime',
});

// runtime cache
// 1. stylesheet
workbox.routing.registerRoute(
    new RegExp('.css$'),
    new workbox.strategies.CacheFirst({
        cacheName: 'EWWBS-stylesheets-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, // cache for one week
                maxEntries: 20, // only cache 20 request
                purgeOnQuotaError: true,
            }),
        ],
    }),
);
// 2. images
workbox.routing.registerRoute(
    new RegExp('.(png|svg|jpg|jpeg)$'),
    new workbox.strategies.CacheFirst({
        cacheName: 'EWWBS-images-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7,
                maxEntries: 50,
                purgeOnQuotaError: true,
            }),
        ],
    }),
);

// 3. cache news articles result
// workbox.routing.registerRoute(
//     new RegExp('https://newsapi.org/v2/top-headlines'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'My-awesome-cache-news-headline',
//         cacheExpiration: {
//             maxAgeSeconds: 60 * 30, //cache the news content for 30mn
//         },
//     }),
// );

workbox.precaching.precacheAndRoute(self.__precacheManifest);
