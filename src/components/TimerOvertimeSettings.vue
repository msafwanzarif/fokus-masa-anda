<template>
  <SettingModal id="timer-overtime-settings" title="Tetapan > Timer > Overtime">
    <div class="d-flex flex-column justify-content-start w-100">
      <div class="d-flex mb-2">
        <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">OT Padding (saat)</span>
        </button>
        <input v-model="timer.extra_pad" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-4 border border-light" min="1">
      </div>
      <span class="fs-6 mb-0">{{ `* ${timer.extra_pad} saat pertama selepas tempoh fokus atau rehat tidak akan dikira
        sebagai overtime`}} </span>
      <hr class="my-2">
      <label class="form-label fs-4 mt-2"> Jika Fokus Overtime :</label>
      <div class="w-100 mb-2">
        <div class="form-check">
          <input v-model="timer.focus_extra_mode" class="form-check-input" type="radio" name="focusExtraMode"
            id="optionsRadios1" :value="1">
          <label class="form-check-label" for="optionsRadios1">
            Kurangkan Fokus seterusnya
          </label>
        </div>
        <div class="form-check">
          <input v-model="timer.focus_extra_mode" class="form-check-input" type="radio" name="focusExtraMode"
            id="optionsRadios2" :value="2">
          <label class="form-check-label" for="optionsRadios2">
            Tambah masa rehat
          </label>
        </div>
        <div class="form-check">
          <input v-model="timer.focus_extra_mode" class="form-check-input" type="radio" name="focusExtraMode"
            id="optionsRadios3" :value="0">
          <label class="form-check-label" for="optionsRadios3">
            Biarkan
          </label>
        </div>
      </div>
      <div v-if="timer.focus_extra_mode == 2" class="mb-2">
        <div class="d-flex">
          <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Nisbah Tukaran</span>
          </button>
          <input v-model="timer.focus_extra_add_rate" type="number"
            class="form-control w-25 bg-dark text-white fs-4 border border-light" min="1">
        </div>
        <div class="mt-1 ">{{ `* untuk setiap 1 saat overtime fokus, ${timer.focus_extra_add_rate} saat akan ditambah
          pada
          tempoh rehat`}}</div>
      </div>
      <div v-if="timer.focus_extra_mode == 1" class="d-flex mb-2">
        <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Minimum Fokus (minit)</span>
        </button>
        <input v-model="timer.focus_extra_deduct_min" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-4 border border-light" min="1">
      </div>
      <hr class="my-2">
      <label class="form-label fs-4 mt-2"> Jika Rehat Overtime :</label>
      <div class="w-100 mb-2">
        <div class="form-check">
          <input v-model="timer.rest_extra_mode" class="form-check-input" type="radio" name="restExtraMode"
            id="optionsRadios1" :value="1">
          <label class="form-check-label" for="optionsRadios1">
            Kurangkan Rehat seterusnya
          </label>
        </div>
        <div class="form-check">
          <input v-model="timer.rest_extra_mode" class="form-check-input" type="radio" name="restExtraMode"
            id="optionsRadios2" :value="2">
          <label class="form-check-label" for="optionsRadios2">
            Tambah masa Fokus
          </label>
        </div>
        <div class="form-check">
          <input v-model="timer.rest_extra_mode" class="form-check-input" type="radio" name="restExtraMode"
            id="optionsRadios3" :value="0">
          <label class="form-check-label" for="optionsRadios3">
            Biarkan
          </label>
        </div>
      </div>
      <div v-if="timer.rest_extra_mode == 2" class="mb-2">
        <div class="d-flex">
          <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
            <span class="ms-2">Nisbah Tukaran</span>
          </button>
          <input v-model="timer.rest_extra_add_rate" type="number"
            class="form-control w-25 bg-dark text-white fs-4 border border-light" min="1">
        </div>
        <div class="mt-1">{{ `* untuk setiap 1 saat overtime rehat, ${timer.rest_extra_add_rate} saat akan ditambah
          pada
          tempoh fokus`}}</div>
      </div>
      <div v-if="timer.rest_extra_mode == 1" class="d-flex mb-2">
        <button class="btn btn-outline-light fs-4 w-100 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Minimum Rehat (minit)</span>
        </button>
        <input v-model="timer.rest_extra_deduct_min" type="number"
          class="form-control w-25 h-100 bg-dark text-white fs-4 border border-light" min="1">
      </div>
    </div>
    <button data-bs-target="#timer-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
    </button>
  </SettingModal>
</template>

<script setup lang="ts">
import SettingModal from './SettingModal.vue';

defineProps<{
  timer: {
    extra_pad: number;
    focus_extra_mode: number;
    focus_extra_add_rate: number;
    focus_extra_deduct_min: number;
    rest_extra_mode: number;
    rest_extra_add_rate: number;
    rest_extra_deduct_min: number;
  };
}>();
</script>