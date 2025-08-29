<template>
  <div id="startPrompt" class="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <div @click="onSettingsClick" class="c-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-settings">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            </svg>
          </div>
        </div>
        <div class="modal-body d-flex flex-column justify-content-around align-items-center py-5">
          <h2 class="sub-title text-center mb-3">Let's do this!</h2>
          <p class="text-center fs-5">Mulakan dengan Bismillah 😄</p>
          <div class="d-flex w-75 align-items-center justify-content-center">
            <select v-model="selectedGoalId" id="goalSelectStart" class="w-100 form-select bg-dark text-center text-white border border-white c-pointer" style="background-image: none;" aria-label="Default select example">
              <option v-if="!selectedGoalId" value="" disabled selected>Set a Goal</option>
              <option v-for="goal in goalsSelect" :key="goal.id" :value="goal.id">{{ goal.label }}</option>
            </select>
            <IconAdjustmentHorizontal :class="{'invisible': !selectedGoalId || selectedGoalId === 'none'}" @click="openGoalSettings" class="ms-2 c-pointer" width="2.0rem" height="2.0rem" />
          </div>
        </div>
        <div class="modal-footer d-flex align-items-center justify-content-center">
          <button @click="onStartFocus" type="button" class="btn btn-success">Let's GO!</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { StartPromptProps, StartPromptEmits } from '@/types'
import { onMounted, ref, watch } from 'vue'
import IconAdjustmentHorizontal from './icons/IconAdjustmentHorizontal.vue'

const props = defineProps<StartPromptProps>()

onMounted(() => {
  //console.log("start",props.goalsSelect)
})

const emit = defineEmits<StartPromptEmits>()
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

const onSettingsClick = () => {
  emit('settings-click')
}

const onStartFocus = () => {
  emit('start-focus')
}
</script>

<style scoped>
.sub-title {
  font-size: 8vmin;
}

.c-pointer {
  cursor: pointer;
}
</style>