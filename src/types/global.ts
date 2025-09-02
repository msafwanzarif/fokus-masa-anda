// Global type declarations
declare global {
  interface Window {
    bootstrap: any
    notifyMe: (title?: string, message?: string, icon?: string) => void
    showModal: (id: string) => void
    hideModal: (id: string) => void
  }
}

export {}
