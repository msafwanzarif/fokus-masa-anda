<template>
  <SettingModal id="user-settings" title="Tetapan > User">
    <div class="d-flex flex-column justify-content-start w-100">
      <span v-if="userEmail" class="mb-2">Email Pengguna: {{ userEmail }}</span>
      <button @click="logout()" v-if="userEmail" class="btn btn-outline-danger w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <IconLogout width="2.0rem" height="2.0rem" />
        <span class="ms-2">Logout</span>
      </button>
      <button @click="loginWithGoogle()" v-else class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <IconGoogle width="2.0rem" height="2.0rem" />
        <span class="ms-2">Login With Google</span>
      </button>
    </div>
    <button data-bs-target="#main-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
    </button>
  </SettingModal>
</template>

<script setup lang="ts">
defineProps<{
  userEmail?: string
}>()

import IconGoogle from './icons/IconGoogle.vue'
import IconLogout from './icons/IconLogout.vue'
import SettingModal from './SettingModal.vue'
import { useFirebaseDb } from 'szutils.vue'
const doc = useFirebaseDb()
const { isAuthenticated } = doc

async function loginWithGoogle() {
  try {
    await doc.loginWithGoogle()
  } catch (error) {
    console.error("Login failed:", error)
    // Handle login failure (e.g., show an error message to the user)
  }
}

async function logout() {
  try {
    await doc.logout()
    localStorage.setItem("loggedInAs", "")
  } catch (error) {
    console.error("Logout failed:", error)
    // Handle logout failure (e.g., show an error message to the user)
  }
}
</script>