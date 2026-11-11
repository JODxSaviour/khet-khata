// Indian Farm Management service worker — keeps the app working with no internet.
// The cache name below gets a unique build id at build time (see vite.config.ts).
const CACHE = 'khet-khata-mwcgaf8z'
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './icons/favicon-64.png', './brand/logo-full.webp']

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
    // only the app itself (hash routes keep the path); other pages such as /download/ are left alone so
    // they never replace the saved app page
    const path = new URL(req.url).pathname
    const scope = new URL(self.registration.scope).pathname
    if (path !== scope && path !== scope + 'index.html') return
    event.respondWith(
      (async () => {
        try {
          const res = await fetch(req)
          if (res.ok && res.type === 'basic') (await caches.open(CACHE)).put('./index.html', res.clone())
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

// ---------- phone alerts ----------
// The app saves the next two weeks of daily alerts in IndexedDB "kk-alerts" (see src/lib/alerts.ts).
// When the phone wakes us (periodic sync, about once or twice a day) we show today's alert once, after
// the hour the person chose.
const kvOpen = () =>
  new Promise((res, rej) => {
    const r = indexedDB.open('kk-alerts', 1)
    r.onupgradeneeded = () => r.result.createObjectStore('kv')
    r.onsuccess = () => res(r.result)
    r.onerror = () => rej(r.error)
  })
const kv = async (key, value) => {
  const db = await kvOpen()
  return new Promise((res, rej) => {
    const tx = db.transaction('kv', value === undefined ? 'readonly' : 'readwrite')
    const r = value === undefined ? tx.objectStore('kv').get(key) : tx.objectStore('kv').put(value, key)
    tx.oncomplete = () => { res(r.result); db.close() }
    tx.onerror = () => { rej(tx.error); db.close() }
  })
}
const pad2 = (n) => String(n).padStart(2, '0')
const localDay = (d) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`

async function dailyAlert() {
  const cfg = await kv('cfg')
  if (!cfg || !cfg.on || self.Notification?.permission !== 'granted') return
  const now = new Date()
  const day = localDay(now)
  if (now.getHours() < (cfg.hour ?? 7) || (await kv('shown')) === day) return
  const a = ((await kv('days')) || {})[day]
  await kv('shown', day)
  if (!a) return
  await self.registration.showNotification(a.title, {
    body: a.body,
    icon: './icons/icon-192.png',
    badge: './icons/badge-96.png',
    tag: 'kk-daily',
    data: { url: './#/dashboard' },
  })
}

self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'kk-alerts') event.waitUntil(dailyAlert())
})

self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  const url = new URL((event.notification.data && event.notification.data.url) || './', self.registration.scope).href
  event.waitUntil(
    (async () => {
      const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
      const w = wins.find((c) => c.url.startsWith(self.registration.scope))
      if (w) {
        await w.focus()
        return w.navigate ? w.navigate(url).catch(() => {}) : undefined
      }
      return self.clients.openWindow(url)
    })(),
  )
})

// the app can ask for a check right away (used after the alert time changes)
self.addEventListener('message', (event) => {
  if (event.data === 'kk-alerts-check') event.waitUntil(dailyAlert())
})
