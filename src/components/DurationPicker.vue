<template>
  <div :id="id" class="modal fade" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content">
        <div class="modal-body d-flex flex-column justify-content-around align-items-center py-5">
          <div class="fs-4 text-center mb-2">Set Durasi Untuk:</div>
          <div class="fs-5 text-center mb-3 fw-bold">{{ label || id }}</div>
          <div class="row mb-2 w-100 px-4">
            <button class="btn btn-outline-light fs-4 col-5 d-flex align-items-center justify-content-center" disabled>
              <span class="ms-2">Jam</span>
            </button>
            <div class="col-7 m-0 p-0">
              <input type="number" v-model="hourInput" min="0" class="form-control bg-dark text-white fs-4 border border-light" />
            </div>
            <button class="btn btn-outline-light fs-4 col-5 d-flex align-items-center justify-content-center" disabled>
              <span class="ms-2">Minit</span>
            </button>
            <div class="col-7 m-0 p-0">
              <input type="number" v-model="minuteInput" min="0" max="59" class="form-control bg-dark text-white fs-4 border border-light" />
            </div>
            <button class="btn btn-outline-light fs-4 col-5 d-flex align-items-center justify-content-center" disabled>
              <span class="ms-2">Saat</span>
            </button>
            <div class="col-7 m-0 p-0">
              <input type="number" v-model="secondInput" min="0" max="59" class="form-control bg-dark text-white fs-4 border border-light" />
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex align-items-center justify-content-end">
          <button type="button" class="btn btn-outline-warning me-2" data-bs-dismiss="modal">Cancel</button>
          <button type="button" class="btn btn-success" @click="setDuration()">Set</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDebouncedRef } from '@/composables/useDebouncedRef'
import { computed, nextTick, watch } from 'vue'

const props = defineProps<{
  id: string,
  minDuration?: number,
  maxDuration?: number,
  label?: string,
  onSelect: (n: number) => void,
}>()

async function resetAndTrigger(duration:number){
  resetDuration(duration)
  await nextTick()
  window.showModal(props.id)
}

defineExpose({
  resetAndTrigger,
})

function resetDuration(duration:number){
  let totalSeconds = duration
  hourInput.value = Math.floor(totalSeconds / 3600)
  totalSeconds %= 3600
  minuteInput.value = Math.floor(totalSeconds / 60)
  secondInput.value = totalSeconds % 60
}

const {state:hourInput, debounced:hourDebounced} = useDebouncedRef(0, 500)
const {state:minuteInput, debounced:minuteDebounced} = useDebouncedRef(0, 500)
const {state:secondInput, debounced:secondDebounced} = useDebouncedRef(0, 500)

const secondsTotal = computed(() => hourDebounced.value * 3600 + minuteDebounced.value * 60 + secondDebounced.value)

watch(secondsTotal, (newVal) => {
  if(props.minDuration && newVal < props.minDuration) return resetDuration(props.minDuration)
  if(props.maxDuration && newVal > props.maxDuration) return resetDuration(props.maxDuration)
})

function setDuration(){
  props.onSelect(secondsTotal.value)
  window.hideModal(props.id)
}

</script>