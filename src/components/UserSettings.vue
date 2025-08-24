<template>
  <SettingModal id="user-settings" title="Tetapan > User">
    <div class="d-flex flex-column justify-content-start w-100">
      <span v-if="doc.isAuthenticated" class="mb-2">Email Pengguna: {{ doc.userEmail }}</span>
      <button @click="doc.logout()" v-if="doc.isAuthenticated" class="btn btn-outline-danger w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-clock-bolt">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
          <path d="M12 7v5l3 3" />
          <path d="M19 16l-2 3h4l-2 3" />
        </svg>
        <span class="ms-2">Logout</span>
      </button>
      <button @click="doc.loginWithGoogle()" v-else class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-stack-middle">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 10l4 -2l-8 -4l-8 4l4 2" />
          <path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
          <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
        </svg>
        <span class="ms-2">Login With Google</span>
      </button>
    </div>
    <button data-bs-target="#main-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
    </button>
  </SettingModal>
</template>

<script setup lang="ts">
import SettingModal from './SettingModal.vue'
import { useDocStore } from '@/stores/doc.store'
const doc = useDocStore()
const { isAuthenticated } = doc
</script>