import { defineStore } from "pinia"
import { useFirebaseDb, useFirebaseDoc } from "szutils.vue"

export const useDocStore = defineStore("doc", () => {

  const firebaseApp = useFirebaseDoc({}, "fokus-settings/anon")
  firebaseApp.setConfig({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "third-test-18e84.firebaseapp.com",
    projectId: "third-test-18e84",
    storageBucket: "third-test-18e84.firebasestorage.app",
    messagingSenderId: "221696533656",
    appId: "1:221696533656:web:d1b243bbf5d318b07fdced"
  })
  return firebaseApp
  //return { auth, user, userEmail, isSet, isAuthenticated, logout, loginWithGoogle }
})