<script setup lang="ts">
import { computed } from "vue"

const props = defineProps<{
  progress: number // in degrees (0–360)
  size?: number    // optional icon size
  emptyColor?: string
  fillColor?: string
}>()

const sizePx = computed(() => (props.size ?? 48) + "px")

// mask style based on progress
const maskStyle = computed(() => ({
  WebkitMaskImage: `conic-gradient(white 0deg, white ${props.progress}deg, transparent ${props.progress}deg)`,
  WebkitMaskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  WebkitMaskSize: "contain",
  maskImage: `conic-gradient(white 0deg, white ${props.progress}deg, transparent ${props.progress}deg)`,
  maskRepeat: "no-repeat",
  maskPosition: "center",
  maskSize: "contain",
}))
</script>

<template>
  <div class="relative inline-block" :style="{ width: sizePx, height: sizePx }">
    <!-- Base (empty) -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="position-absolute inset-0 w-100 h-100"
      :style="{ color: emptyColor || '#d1d5db' }"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>

    <!-- Filled (masked) -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="position-absolute inset-0 w-100 h-100"
      :style="[{ color: fillColor || '#f59e0b' }, maskStyle]"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
      <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  </div>
</template>
