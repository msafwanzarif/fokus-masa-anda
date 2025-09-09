<!-- ReactiveModal.vue -->
<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="modal fade show d-block"
      tabindex="-1"
      role="dialog"
      data-bs-backdrop="static" data-bs-keyboard="false"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <slot name="title">Default Title</slot>
            </h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <slot>Default body content</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-secondary" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>

      <!-- Backdrop -->
      <!-- <div class="modal-backdrop fade show"></div> -->
    </div>
  </transition>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false }
})
defineEmits(["close"])
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
