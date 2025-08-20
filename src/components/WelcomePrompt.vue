<template>
  <div id="welcome-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" :class="{'modal-md': lastOnline,'modal-lg':!lastOnline}">
      <div class="modal-content">
        <div class="modal-header">
          <div @click="$emit('settings-click')" class="c-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-settings">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
          </div>
          <span class="ms-2" v-if="!lastOnline"> <-- butang setting di sini</span>
        </div>
        <div class="modal-body d-flex flex-column justify-content-around align-items-center py-3 py-md-5">
          <h2 class="welcome-title text-center mb-3" :class="{'first-time-title':!lastOnline}">{{ welcome.title }}</h2>
          <p class="text-center fs-6">Hari ini: <b>{{ welcome.dayLine }}</b></p>
          <div v-if="lastOnline" class="py-2 px-5 border border-light rounded-4 mt-2">
            <h2 class="quote-text fs-5 text-center fst-italic">" {{ welcome.motivationQuote }} "</h2>
          </div>
          <div v-else class="mx-4 px-4 py-2 border border-light rounded-2">
            <p class="fs-6 fs-md-5">Jom <b>fokuskan masa anda</b> dengan memanfaatkan <a href="https://medschoolinsiders.com/pre-med/the-pomodoro-technique/" target="_blank">teknik pomodoro</a>, kaedah yang dapat meningkatkan produktiviti anda! </p>
            <p class="fs-6 fs-md-5">Anda boleh tekan butang setting di atas untuk <b>tetapkan timer, susunan rehat dan kawalan overtime</b> yang sesuai dengan anda</p>
            <p class="fs-6 fs-md-5">Pada setiap permulaan hari, anda juga disarankan menggunakan sedikit masa untuk 'Plan' dahulu segala tugasan yang anda ingin buat.</p>
            <p class="fs-6 fs-md-5"><i>"Semoga Berjaya 😄"</i> - Safwan Zarif di <a href="mailto:">safzardevs@gmail.com</a></p>
          </div>
        </div>
        <div class="modal-footer d-flex align-items-center justify-content-center">
          <button type="button" class="btn btn-primary" @click="$emit('start-planning')">Mulakan Planning Dahulu</button>
          <button type="button" class="btn btn-success" @click="$emit('start-focus', true)" data-bs-dismiss="modal">Terus Fokus!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.welcome-title {
  font-size: 6vmin;
}

.first-time-title{
  font-size: 10vmin;
}

.quote-text {
  line-height: 1.3;
}
</style>

<script setup lang="ts">
import type { WelcomePromptProps, WelcomePromptEmits } from '@/types/components'

defineProps<WelcomePromptProps>()
defineEmits<WelcomePromptEmits>()
</script>
