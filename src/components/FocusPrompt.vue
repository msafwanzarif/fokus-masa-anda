<template>
  <div id="focus-prompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
    aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered ">
      <div class="modal-content bg-primary">
        <div class="modal-header">
          <div @click="$emit('settings-click')" class="c-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-settings">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.5 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
          </div>
        </div>
        <div class="modal-body d-flex flex-column justify-content-around align-items-center py-5">
          <h2 class="sub-title text-center mb-3">Masa untuk Fokus !</h2>
          <button v-if="isOvertime" class="btn btn-outline-warning w-75 mb-4">Overtime Rehat: {{ hoursOvertime }}{{
            hoursOvertime ? " : " : "" }}{{ minutesOvertime }} : {{
              secondsOvertime }}</button>
          <button v-else class="btn btn-outline-light w-75 mb-4 d-flex justify-content-center"><span
              style="min-width: 2.3rem;font-weight: bold;">{{ timer.extra_pad - secondsAfterDue }}</span> <span>saat
              sebelum overtime</span></button>
          <GoalSelect :id="'goalSelect'" containerClass="w-75" selectClass="w-100 bg-primary" :mode="1"
            :goalsSelect="goalsSelect" v-model="selectedGoalId" />
        </div>
        <div class="modal-footer d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center">
            <button @click="$emit('stop-timer')" type="button" class="btn btn-outline-danger me-1"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
                class="icon icon-tabler icons-tabler-filled icon-tabler-player-stop">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M17 4h-10a3 3 0 0 0 -3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3 -3v-10a3 3 0 0 0 -3 -3z" />
              </svg></button>
          </div>
          <button @click="$emit('start-focus')" type="button" class="btn btn-success">Let's GO!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sub-title {
  font-size: 8vmin;
}
</style>

<script setup lang="ts">
import type { FocusPromptProps, FocusPromptEmits } from '@/types/components'
import { ref, watch } from 'vue'
import GoalSelect from './GoalSelect.vue'

const props = defineProps<FocusPromptProps>()
const emit = defineEmits<FocusPromptEmits>()

const selectedGoalId = ref("")
watch(() => props.selectedGoalId, (newVal) => {
  selectedGoalId.value = newVal
})
watch(selectedGoalId, (newVal) => {
  emit('update-goal',newVal)
})
function openGoalSettings(){
  return window.showModal(`goal-detail-settings-${selectedGoalId.value}`)
}
</script>
