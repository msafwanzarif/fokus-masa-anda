import { createI18n } from 'vue-i18n'

// Use type-safe approach for messages
// @ts-ignore - vite plugin generates this at build time
import messages from '@intlify/vite-plugin-vue-i18n/messages'

const i18n = createI18n({
  locale: 'ms',
  legacy: false,
  messages
})

export default i18n