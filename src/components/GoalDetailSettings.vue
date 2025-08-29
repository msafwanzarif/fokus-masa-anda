<template>
  <SettingModal :id="`goal-detail-settings-${goalId}`" :title="`Tetapan > Goals > ${goalName}`">
    <div class="d-flex flex-column justify-content-start w-100">
      <div class="row mb-2">
        <button class="btn btn-outline-light fs-4 col-4 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Label</span>
        </button>
        <div class="col m-0 p-0">
          <input type="text" :disabled="goalId == 'fokus'" v-model="labelState" class="form-control bg-dark text-white fs-4 border border-light" min="1" />
        </div>
      </div>
      <div class="row mb-2">
        <button class="btn btn-outline-light fs-4 col-8 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Minimum (Saat)</span>
        </button>
        <div class="col m-0 p-0">
          <input type="number" v-model="minDailyState" class="form-control bg-dark text-white fs-4 border border-light"
            min="1">
          <div class="fs-6 ms-2">* {{ minDailyState }} saat = <DurationDisplayFromSeconds :seconds="minDailyState"
              v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <button class="btn btn-outline-light fs-4 col-8 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Target (Saat)</span>
        </button>
        <div class="col m-0 p-0">
          <input type="number" v-model="goalInput" class="form-control bg-dark text-white fs-4 border border-light"
            min="1">
          <span class="fs-6 ms-2 mb-0">* {{ goalInput }} saat = <DurationDisplayFromSeconds :seconds="goalInput"
              v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds></span>
        </div>
      </div>
      <!-- <DurationDisplayFromSeconds :seconds="today.progress" v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds> -->
      <hr>
      <div class="fs-4 mb-2">Progress Hari Ini</div>
      <div class="progress mt-2" style="height: 2rem;">
        <div class="progress-bar bg-info" :class="{'progress-bar-striped': passedMinimum}" role="progressbar" :style="{ width: `${minProgressPercentage}%` }" aria-valuenow="25" aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
      <div class="d-flex align-items-center justify-content-between w-100">
        <div class="fs-6"><DurationDisplayFromSeconds :seconds="progress" v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds></div>
        <div class="fs-6"><DurationDisplayFromSeconds :seconds="minDaily" v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds></div>
      </div>
      <template v-if="passedMinimum">
        <div class="progress mt-2" style="height: 2rem;">
          <div class="progress-bar bg-success" :class="{'progress-bar-striped': passedTarget}" role="progressbar" :style="{ width: `${targetProgressPercentage}%` }" aria-valuenow="25" aria-valuemin="0"
            aria-valuemax="100"></div>
        </div>
        <div class="d-flex align-items-center justify-content-between w-100">
          <div class="fs-6"><DurationDisplayFromSeconds :seconds="progress" v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds></div>
          <div class="fs-6"><DurationDisplayFromSeconds :seconds="goalInput" v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds></div>
        </div>
      </template>
      <div class="fs-4 mt-2"><DurationDisplayFromSeconds :seconds="passedMinimum?toTarget : toMinimum" v-slot="{ bahasa }">
        <span v-if="passedTarget">Berjaya capai target! Anda memang terbaik!! 🎉🎉 </span>
        <template v-else-if="passedMinimum">
          <div>Tahniah! anda dapat {{ label }} hari ini 👏</div>
          <span> Teruskan <b>{{ bahasa }} </b> je lagi untuk capai Target!!! 💪🔥</span>
        </template>
        <span v-else-if="!passedTarget">Jom kita {{ label }}! Luangkan <b>{{ bahasa }}</b> je <span v-if="progress > 0">lagi</span> 😁</span>
      </DurationDisplayFromSeconds></div>
    </div>
    <button data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close">Kembali
    </button>
  </SettingModal>
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted } from 'vue'
import SettingModal from './SettingModal.vue'
import { useFirebaseDoc, useHabitTracker, DurationDisplayFromSeconds } from 'szutils.vue'
import { useDebouncedRef } from '@/composables/useDebouncedRef'
const progress = computed(() => today.value.progress)
const passedMinimum = computed(() => progress.value >= minDaily.value)
const toMinimum = computed(() => Math.max(0, minDaily.value - progress.value))
const passedTarget = computed(() => progress.value >= goalInput.value)
const toTarget = computed(() => Math.max(0, goalInput.value - progress.value))
const minProgressPercentage = computed(() => (passedMinimum.value? 100 : (minDaily.value > 0 ? (progress.value / minDaily.value) * 100 : 100)))
const targetProgressPercentage = computed(() => (passedTarget.value? 100 : (goalInput.value > 0 ? (progress.value / goalInput.value) * 100 : 100)))
const props = defineProps<{
  userEmail?: string
  goalName: string,
  goalId: string
}>()
const emit = defineEmits<{
  (e: 'update-label', id:string, label: string): void
}>()

const goalUniqueId = computed(() => isConnected.value ? `${props.userEmail}-fokus-goal-${props.goalId}` : `fokus-goal-${props.goalId}`)
const isConnected = computed(() => !!props.userEmail)
function onUpdate(data: any) {
  //console.log("Data got", data)
  //updateGoal()
}

let docPath = "fokus-settings/anon"
if (isConnected.value) docPath = `fokus-settings/${props.userEmail}/goals/${props.goalId}`
const doc = useFirebaseDoc({ onUpdate }, docPath)

const tracker = useHabitTracker(props.goalId, props.goalName, isConnected, doc)
watch(isConnected, () => {
  if (isConnected.value) doc.changeDoc(`fokus-settings/${props.userEmail}/goals/${props.goalId}`)
})

const { label, minDaily, today } = tracker

const { state:labelState, debounced:debouncedLabel } = useDebouncedRef(label.value, 1000)
watch(debouncedLabel, (newLabel) => {
  if(newLabel) label.value = newLabel
  else labelState.value = label.value
}, {})
watch(label, (newLabel) => {
  labelState.value = newLabel
  if(newLabel) emit('update-label', props.goalId, newLabel)
}, {immediate:true})

const { state:minDailyState, debounced:debouncedMinDaily } = useDebouncedRef(minDaily.value, 1000)
watch(debouncedMinDaily, (newLabel) => {
  minDaily.value = newLabel
}, {})
watch(minDaily, (newLabel) => {
  minDailyState.value = newLabel
}, {immediate:true})

const currentGoal = computed(() => today.value.goal)
const { state: goalInput, debounced: goalInputDebounced } = useDebouncedRef(0, 1000)

watch(currentGoal, (goal) => {
  goalInput.value = goal
}, { immediate: true })
onMounted(() => {
  let isInLocalStorage = localStorage.getItem(goalUniqueId.value)
  if (isInLocalStorage) {
    let parsed = JSON.parse(isInLocalStorage)
    tracker.loadFromJSON(parsed)
  }
})
watch(goalInputDebounced, (newGoal) => {
  if (today.value.goal !== newGoal)
    tracker.setDailyGoal(newGoal)
}, {})
watch(() => tracker.toJSON(), (newData) => {
  localStorage.setItem(goalUniqueId.value, JSON.stringify(tracker.toJSON(true)))
}, { deep: true })
</script>