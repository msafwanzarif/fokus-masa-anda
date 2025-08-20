<template>
  <SettingModal id="timer-rehat-settings" title="Tetapan > Timer > Rehat">
      <div class="d-flex flex-column justify-content-start w-100">
        <label class="form-label fs-5">Jenis Susunan Rehat</label>
        <div class="w-100 mb-2 ">
          <div class="btn-group w-100" role="group" aria-label="Basic radio toggle button group">
            <input v-model="timer.simpleStack" type="radio" class="btn-check" name="jenismudah" id="jenismudah"
              :value="true">
            <label class="btn btn-outline-light fs-4" for="jenismudah">Mudah</label>
            <input v-model="timer.simpleStack" type="radio" class="btn-check" name="jenismudah" id="jeniscustom"
              :value="false">
            <label class="btn btn-outline-light fs-4" for="jeniscustom">Custom</label>
          </div>
        </div>
        <div v-if="timer.simpleStack" class="d-flex mb-2">
          <button class="btn btn-outline-light fs-3 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Bilangan Rehat</span>
          </button>
          <input v-model="timer.breakNumber" type="number"
            class="form-control w-25 h-100 bg-dark text-white fs-2 border border-light" min="1">
        </div>
        <hr>
        <label class="form-label fs-4">Susunan Cycle Rehat</label>
        <div class="w-100">
          <div class="list-group">
            <div v-for="item, index in timer.stack" class="list-group-item">
              <div class="d-flex align-items-center justify-content-between">
                <span :class="{ 'fw-bold': item == 2 }">{{ index + 1 }}) Rehat {{ item == 1 ? "Pendek" : "Panjang"
                }}</span>
                <div class="d-flex align-items-center">
                  <button v-if="!timer.simpleStack" @click="$emit('change-stack', index)" class="btn btn-outline-light me-2">
                    Tukar </button>
                  <button v-if="!timer.simpleStack" @click="$emit('remove-stack', index)" class="btn btn-outline-light"> Buang
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button v-if="!timer.simpleStack" @click="$emit('push-stack')" class="btn btn-outline-light w-100 mt-3">
            Tambah</button>
        </div>
        <template v-if="stackNotSame">
          <hr>
          <label class="form-label fs-4">Susunan Sekarang</label>
          <div class="w-100">
            <div class="list-group">
              <div v-for="item, index in stack" class="list-group-item">
                <span :class="{ 'fw-bold': item == 2 }">{{ index + 1 }}) Rehat {{ item == 1 ? "Pendek" : "Panjang"
                }}</span>
              </div>
            </div>
            <button @click="$emit('reset-stack')" class="btn btn-outline-light w-100 mt-3"> Samakan</button>
          </div>
        </template>
      </div>
      <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
        class="btn btn-outline-warning w-100 fs-3 mt-5" aria-label="Close">Kembali
      </button>
    </SettingModal>
</template>

<script setup lang="ts">
import SettingModal from './SettingModal.vue';
interface Props{
  timer: {
    simpleStack: boolean;
    breakNumber: number;
    stack: number[];
  };
  stackNotSame: boolean;
  stack: number[];
}
interface Emits{
  (e: 'change-stack', index:number): void;
  (e: 'remove-stack', index:number): void;
  (e: 'push-stack'): void;
  (e: 'reset-stack'): void;
}
defineProps<Props>();
defineEmits<Emits>()
</script>