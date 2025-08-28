<template>
  <div class="container h-100 w-100">
    <div class="d-flex flex-column justify-content-center align-items-center h-100">
      <!-- <TargetProgress :progress="275" /> -->
      <p class="text-center px-5">Anda dah lama tidak aktif atau anda sedang guna di tempat lain</p>
      <button class="btn btn-primary" @click="useHere()">
        Gunakan di Sini
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import TargetProgress from '@/components/TargetProgress.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

function useHere(){
  router.push({ name: 'home' });
}
</script>