// Khet Khata service worker — keeps the app working with no internet.
// The cache name below gets a unique build id at build time (see vite.config.ts).
const CACHE = 'khet-khata-mw1tbzrr'
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-64.png']

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE)
      await cache.addAll(SHELL)
      // also cache the hashed JS/CSS bundles that index.html points to
      const html = await (await fetch('./index.html', { cache: 'no-store' })).text()
      const assets = [...html.matchAll(/(?:src|href)="(\.?\/?assets\/[^"]+)"/g)].map((m) => m[1])
      await cache.addAll(assets)
      await self.skipWaiting()
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.filter((k) => k.startsWith('khet-khata-') && k !== CACHE).map((k) => caches.delete(k)))
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (event) => {
  const req = event.request
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return

  // pages: try the network for the latest version, fall back to the saved copy offline
  if (req.mode === 'navigate') {
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req)
          const cache = await caches.open(CACHE)
          cache.put('./index.html', res.clone())
          return res
        } catch {
          return (await caches.match('./index.html')) || Response.error()
        }
      })(),
    )
    return
  }

  // files: saved copy first (bundles are content-hashed), network otherwise
  event.respondWith(
    (async () => {
      const hit = await caches.match(req)
      if (hit) return hit
      const res = await fetch(req)
      if (res.ok) (await caches.open(CACHE)).put(req, res.clone())
      return res
    })(),
  )
})
