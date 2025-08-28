<template>
  <SettingModal id="goals-settings" title="Tetapan > Goals">
    <div class="d-flex flex-column justify-content-start w-100">
      <button v-for="(goal, index) in goalsList" :key="index" @click="openGoalDetail(index)" class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <IconBullseye width="2.0rem" height="2.0rem" />
        <span class="ms-2">{{ goalsLabel[index] }}</span>
      </button>
      <button v-if="goalsList.length < 10" @click="$emit('new-goal')" class="btn btn-outline-light w-100 fs-3 mb-2 d-flex align-items-center justify-content-center">
        <IconCircleDashedPlus width="2.0rem" height="2.0rem" />
        <span class="ms-2">Tambah</span>
      </button>
    </div>
    <button data-bs-target="#main-settings" data-bs-toggle="modal" data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
    </button>
  </SettingModal>
  <template v-for="(goal, index) in goalsList" :key="index">
    <GoalDetailSettings @update-label="updateLabel" :userEmail="userEmail" :goalName="goalsLabel[index]??''" :goalId="goal" />
  </template>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import GoalDetailSettings from './GoalDetailSettings.vue'
import IconBullseye from './icons/IconBullseye.vue'
import SettingModal from './SettingModal.vue'
import IconHexagonPlus from './icons/IconHexagonPlus.vue'
import IconCircleDashedPlus from './icons/IconCircleDashedPlus.vue'
const props = defineProps<{
  userEmail?: string
  goalsList: Array<string>
  goalsLabel: Array<string>
}>()

const selectedGoalLabel = ref<string>("")
const selectedGoalId = ref<string>("")

function openGoalDetail( index:number ) {
  if(props.goalsLabel[index] === undefined) return
  if(props.goalsList[index] === undefined) return
  selectedGoalLabel.value = props.goalsLabel[index]
  selectedGoalId.value = props.goalsList[index]
  const goalDetailModal = new (window as any).bootstrap.Modal(document.getElementById(`goal-detail-settings-${selectedGoalId.value}`))
  goalDetailModal.show()
}

function updateLabel(id: string, label: string) {
  const index = props.goalsList.findIndex(goal => goal === id)
  if (index !== -1) {
    props.goalsLabel[index] = label
  }
}
</script>