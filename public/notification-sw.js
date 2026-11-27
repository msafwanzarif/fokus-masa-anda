// Loaded into the generated service worker (vite.config.ts → workbox.importScripts).
// Tapping a timer notification brings the app forward, or opens it if it was closed.
self.addEventListener('notificationclick', (event) => {
  event.notification.close()
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true })
    for (const client of windows) {
      if ('focus' in client) return client.focus()
    }
    if (self.clients.openWindow) return self.clients.openWindow(self.registration.scope)
  })())
})
