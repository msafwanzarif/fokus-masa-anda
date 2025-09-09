<!-- LoadingModal.vue -->
<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="modal fade show d-block"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <!-- Backdrop -->
      <div class="modal-backdrop fade show"></div>
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content text-center p-4 w-100 border border-light">
          <div class="spinner-border text-light mb-3 align-self-center" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div>
            <slot>Loading, please wait...</slot>
          </div>
        </div>
      </div>

    </div>
  </transition>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false }
})
</script>

<style scoped>
/* Fade transition */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

/* Higher priority than Bootstrap modals */
.modal-dialog {
  z-index: 2000 !important;
}
.modal-backdrop {
  z-index: 1999 !important;
  opacity: 0.8 !important;
}
</style>
