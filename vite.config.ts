import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    script: {
      defineModel: true,
      propsDestructure: true
    }
  }),
    VitePWA({
        registerType: 'autoUpdate',  // updates SW in background
        workbox: {
          // notification click handling (public/notification-sw.js)
          importScripts: ['notification-sw.js'],
        },
        manifest: {
          name: 'Fokus ! Manfaatkan Masa Anda',
          short_name: 'Fokus',
          start_url: '.',
          display: 'standalone',
          background_color: '#222222',  // splash screen, matches the app background
          theme_color: '#42b883',
          icons: [
            // transparent: desktop installs, notifications
            {
              src: '/web-app-manifest-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/web-app-manifest-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            },
            // dark background, padded: Android launcher shapes
            {
              src: '/maskable-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'maskable'
            },
            {
              src: '/maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
            }
          ],
          "screenshots": [
            {
              "src": "/screenshot-wide.png",
              "sizes": "1280x720",
              "type": "image/png",
              "form_factor": "wide"
            },
            {
              "src": "/screenshot-mobile.png",
              "sizes": "375x667",
              "type": "image/png",
              "form_factor": "narrow"
            }
          ]
        }
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
