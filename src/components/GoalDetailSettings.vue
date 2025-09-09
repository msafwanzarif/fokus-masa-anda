<template>
  <SettingModal :id="`goal-detail-settings-${goalId}`" :title="`Tetapan > Goals > ${goalName}`">
    <div class="d-flex flex-column justify-content-start w-100">
      <div class="row mb-2">
        <button class="btn btn-outline-light fs-4 col-5 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Label</span>
        </button>
        <div class="col m-0 p-0">
          <input type="text" :disabled="goalId == 'fokus'" v-model="labelState" class="form-control bg-dark text-white fs-4 border border-light" min="1" />
        </div>
      </div>
      <div class="row mb-2">
        <button class="btn btn-outline-light fs-4 col-5 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Minimum {{ goalName }} </span>
        </button>
        <button class="btn btn-outline-light fs-4 col d-flex align-items-center justify-content-between" @click="setMinimum()">
          <DurationDisplayFromSeconds :seconds="minDailyState"
              v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds>
          <IconClockEdit width="2.0rem" height="2.0rem" class="ms-2" />
        </button>
      </div>
      <div class="row mb-2">
        <button class="btn btn-outline-light fs-4 col-5 d-flex align-items-center justify-content-center" disabled>
          <span class="ms-2">Target {{ goalName }} </span>
        </button>
        <button class="btn btn-outline-light fs-4 col d-flex align-items-center justify-content-between" @click="setTarget()">
          <DurationDisplayFromSeconds :seconds="goalInput"
              v-slot="{ bahasa }">{{ bahasa }}</DurationDisplayFromSeconds>
          <IconClockEdit width="2.0rem" height="2.0rem" class="ms-2" />
        </button>
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
          <div>Tahniah! anda {{ label }} hari ini 👏</div>
          <span> Teruskan <b>{{ bahasa }} </b> je lagi untuk capai Target!!! 💪🔥</span>
        </template>
        <span v-else-if="!passedTarget">Jom kita {{ label }}! Luangkan <b>{{ bahasa }}</b> je <span v-if="progress > 0">lagi</span> 😁</span>
      </DurationDisplayFromSeconds></div>
    </div>
    <button data-bs-dismiss="modal"
      class="btn btn-outline-warning w-100 fs-3 mb-3" aria-label="Close"> Kembali
    </button>
  </SettingModal>
  <DurationPicker ref="goalDurationPicker" :id="`goal-duration-picker-${goalId}`" :label="durationLabel" :onSelect="onSelectDuration" :minDuration="minDuration" :maxDuration="maxDuration" />
</template>

<script setup lang="ts">
import { computed, watch, ref, onMounted, nextTick } from 'vue'
import SettingModal from './SettingModal.vue'
import { useFirebaseDoc, useHabitTracker, DurationDisplayFromSeconds } from 'szutils.vue'
import { useDebouncedRef } from '@/composables/useDebouncedRef'
import type { HabitTrackerJSON } from 'node_modules/szutils.vue/dist/composables/useHabitTracker/types'
import DurationPicker from './DurationPicker.vue'
import IconTarget from './icons/IconTarget.vue'
import IconClockEdit from './icons/IconClockEdit.vue'
const props = defineProps<{
  userEmail?: string
  goalName: string,
  goalId: string
  startedOn: number
  currentMode: number
  currentGoal: string
  currentTime: number
}>()
const emit = defineEmits<{
  (e: 'update-label', id:string, label: string): void
  (e: 'record-rep', id:string ): void
}>()

const goalUniqueId = computed(() => isConnected.value ? `${props.userEmail}-fokus-goal-${props.goalId}` : `fokus-goal-${props.goalId}`)
const isConnected = computed(() => !!props.userEmail)
const isLoaded = ref(false)
const shouldSync = computed(() => isConnected.value && isLoaded.value)
function onUpdate(data: any) {
  //console.log("Data got", data)
  //updateGoal()
}

let docPath = "fokus-settings/anon"
const doc = useFirebaseDoc({ onUpdate }, docPath)

const tracker = useHabitTracker(props.goalId, { initialLabel:props.goalName, syncWithFirebase:shouldSync, firebaseDoc: doc})
watch(isConnected, async (connected) => {
  if (connected){
    doc.changeDoc(`fokus-settings/${props.userEmail}/goals/${props.goalId}`)
    await nextTick()
    let data = await doc.getData()
    if(data) tracker.loadFromJSON(data as HabitTrackerJSON)
    isLoaded.value = true
  }
  else {
    isLoaded.value = false
    getFromLocal()
  }
},{ immediate:true })

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
watch(goalInputDebounced, (newGoal) => {
  if (today.value.goal !== newGoal)
    tracker.setDailyGoal(newGoal)
}, {})
watch(currentGoal, (goal) => {
  goalInput.value = goal
}, { immediate: true })

const isActive = computed(() => props.currentMode == 1 && ((props.currentGoal === props.goalId) || (props.goalId == "fokus")))
const elapsed = computed(() => props.startedOn > 0 ? props.currentTime - props.startedOn : 0)
const toAdd = computed(() => isActive.value && elapsed.value > 0 ? props.currentTime - props.startedOn : 0)
const progress = computed(() => today.value.progress + toAdd.value)
const passedMinimum = computed(() => progress.value > minDaily.value)
const toMinimum = computed(() => Math.max(0, minDaily.value - progress.value))
const passedTarget = computed(() => progress.value >= goalInput.value)
const toTarget = computed(() => Math.max(0, goalInput.value - progress.value))
const minProgressPercentage = computed(() => (passedMinimum.value? 100 : (minDaily.value > 0 ? (progress.value / minDaily.value) * 100 : 100)))
const targetProgressPercentage = computed(() => (passedTarget.value? 100 : (goalInput.value > 0 ? (progress.value / goalInput.value) * 100 : 100)))

watch(passedMinimum, (newVal) => {
  if (newVal && toAdd.value > 0) {
    if(isLoaded.value) emit('record-rep', props.goalId)
  }
})
watch(passedTarget, (newVal) => {
  if (newVal && toAdd.value > 0) {
    if(isLoaded.value) emit('record-rep', props.goalId)
  }
})

onMounted(() => {
  //getFromLocal()
})

function getFromLocal(checked = 0){
  if (isConnected.value) return
  console.log("getting from local")
  let email = localStorage.getItem('loggedInAs')
  if (email) {
    if (checked < 5) return setTimeout(() => { getFromLocal(checked++) }, 500)
    let useLocal = prompt('You are no longer logged in as ' + email + '. Do you want to use local data? Click Cancel to go to user settings.', 'Continue with Local Data')
    if (!useLocal) return window.showModal("user-settings")
  }
  let isInLocalStorage = localStorage.getItem(goalUniqueId.value)
  if (isInLocalStorage) {
    let parsed = JSON.parse(isInLocalStorage)
    tracker.loadFromJSON(parsed)
  }
  isLoaded.value = true
}

watch(() => tracker.toJSON(), (newData) => {
  localStorage.setItem(goalUniqueId.value, JSON.stringify(tracker.toJSON(true)))
}, { deep: true })

const goalDurationPicker = ref<InstanceType<typeof DurationPicker> | null>(null)
const minDuration = ref(5) // 5 seconds
const maxDuration = ref(15 * 60 * 60) // 15 hours
const durationLabel = ref("")
const onSelectDuration = ref((n: number) => {})

function setMinimum(){
  durationLabel.value = `Minimum ${label.value} dalam sehari`
  onSelectDuration.value = (n: number) => {
    minDailyState.value = n
  }
  goalDurationPicker.value?.resetAndTrigger(minDailyState.value)
}

function setTarget(){
  durationLabel.value = `Target ${label.value} dalam sehari`
  onSelectDuration.value = (n: number) => {
    goalInput.value = n
  }
  goalDurationPicker.value?.resetAndTrigger(goalInput.value)
}
</script>