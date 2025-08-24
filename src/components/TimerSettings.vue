<template>
  <SettingModal id="timer-settings" title="Tetapan > Timer">
    <div class="d-flex flex-column justify-content-start w-100">
      <div class="d-flex mb-2 fw-bold">
        <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center fw-bold"
          disabled>
          Tetapan Tempoh
        </button>
        <button class="btn btn-outline-light fs-5 w-25 d-flex align-items-center justify-content-center fw-bold"
          disabled>
          Minit
        </button>
        <button class="btn btn-outline-light fs-5 w-25 d-flex align-items-center justify-content-center fw-bold"
          disabled>
          Saat
        </button>
      </div>
      <div class="d-flex mb-2">
        <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Fokus</span>
        </button>
        <input v-model="timer.focusTime" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        <input v-model="timer.focusSecond" type="number" max="59"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
      </div>
      <div class="d-flex mb-2">
        <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Planning</span>
        </button>
        <input v-model="timer.planTime" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        <input v-model="timer.planSecond" type="number" max="59"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
      </div>
      <div class="d-flex mb-2">
        <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Rehat Pendek</span>
        </button>
        <input v-model="timer.break[1]" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        <input v-model="timer.breakSecond[1]" type="number" max="59"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
      </div>
      <div class="d-flex mb-2">
        <button class="btn btn-outline-light fs-5 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Rehat Panjang</span>
        </button>
        <input v-model="timer.break[2]" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
        <input v-model="timer.breakSecond[2]" type="number" max="59"
          class="form-control w-25 h-100 bg-dark text-white fs-1 border border-light" min="0">
      </div>
      <button data-bs-target="#timer-rehat-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-stack-middle">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M16 10l4 -2l-8 -4l-8 4l4 2" />
          <path d="M12 12l-4 -2l-4 2l8 4l8 -4l-4 -2l-4 2z" fill="currentColor" />
          <path d="M8 14l-4 2l8 4l8 -4l-4 -2" />
        </svg>
        <span class="ms-2">Tetapan Rehat</span>
      </button>
      <button data-bs-target="#timer-overtime-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="icon icon-tabler icons-tabler-outline icon-tabler-clock-bolt">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M20.984 12.53a9 9 0 1 0 -7.552 8.355" />
          <path d="M12 7v5l3 3" />
          <path d="M19 16l-2 3h4l-2 3" />
        </svg>
        <span class="ms-2">Tetapan Overtime</span>
      </button>
    </div>
    <button data-bs-target="#main-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
    </button>
  </SettingModal>
</template>

<script setup lang="ts">
import SettingModal from './SettingModal.vue'

defineProps<{
  timer: {
    planTime: number
    planSecond: number
    focusTime: number
    focusSecond: number
    break: number[]
    breakSecond: number[]
  }
}>()
</script>