/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@intlify/vite-plugin-vue-i18n/messages' {
  const messages: any
  export default messages
}

declare global {
  interface Window {
    bootstrap: {
      Modal: {
        getOrCreateInstance: (element: Element | null) => {
          show: () => void
          hide: () => void
          toggle: () => void
        }
      }
    }
    notifyMe: (title?: string, message?: string, icon?: string) => void
  }
}
