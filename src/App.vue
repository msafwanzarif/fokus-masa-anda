<template>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { useFirebaseDb } from 'szutils.vue'
import { onMounted } from 'vue'
const firebase = useFirebaseDb()
onMounted(() => {
  firebase.setConfig({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: "third-test-18e84.firebaseapp.com",
      projectId: "third-test-18e84",
      storageBucket: "third-test-18e84.firebasestorage.app",
      messagingSenderId: "221696533656",
      appId: "1:221696533656:web:d1b243bbf5d318b07fdced"
  })
})
</script>