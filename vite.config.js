import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  vueI18n({
    // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
    compositionOnly: false,

    // you need to set i18n resource including paths !
    include: fileURLToPath(new URL('./src/locales/**', import.meta.url))
  }),
  VitePWA({
    registerType: 'autoUpdate',  // updates SW in background
    manifest: {
      name: 'Fokus ! Manfaatkan Masa Anda',
      short_name: 'Fokus',
      start_url: '.',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#42b883',
      icons: [
        {
          src: '/web-app-manifest-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/web-app-manifest-512x512.png',
          sizes: '512x512',
          type: 'image/png'
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
