<template>
  <!-- <div class="position-absolute" style="z-index: 9999;">{{ last_online }}<button class="btn btn-primary" @click="test">Test 1</button><button class="btn btn-primary" @click="test2">Test 2</button></div> -->
  <div class="container-fluid w-100 h-100" :class="pageState.bg">
    <div class="d-flex flex-column justify-content-between h-100 top-pad">
      <div class="">
        <div class="d-flex justify-content-between align-items-center px-md-5">
          <svg @click="promptSetting" xmlns="http://www.w3.org/2000/svg" width="10vmin" height="10vmin"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings c-pointer">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          </svg>
          <div class="d-flex align-items-center">
            <button @click="showModal('user-settings')" id="loggedInIndicator" class="btn me-2"
              :class="pageState.buttonClass" v-show="userEmail" data-bs-toggle="tooltip" data-bs-placement="left"
              :title="userEmail">
              <IconUserCheck />
            </button>
            <button class="btn me-2" :class="pageState.buttonClass">{{ currentTime }}</button>
          </div>
        </div>
      </div>
      <div class="flex-grow-1">
        <div class="d-flex flex-column justify-content-center h-100 p-3">
          <div class="d-flex justify-content-center d-md-none">
            <svg @click="showModal('goal-detail-settings-fokus')" :class="targetClass" v-if="mode < 2"
              xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-target">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
            <svg v-else-if="mode == 2" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-recharging">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
              <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
              <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
              <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
              <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
              <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
              <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
              <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
              <path d="M12 8l-2 4h4l-2 4" />
              <path d="M12 21a9 9 0 0 0 0 -18" />
            </svg>
            <svg v-else-if="mode == 3" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-armchair">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <svg v-else-if="mode == 4" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-notebook">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
              <path d="M13 8l2 0" />
              <path d="M13 12l2 0" />
            </svg>
          </div>
          <div class="d-flex align-items-center justify-content-center mb-2">
            <h1 class="main-title me-md-3">{{ pageState.bigText }}</h1>
            <svg @click="showModal('goal-detail-settings-fokus')" :class="targetClass" v-if="mode < 2"
              xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-target d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
              <path d="M12 12m-5 0a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            </svg>
            <svg v-else-if="mode == 2" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-recharging d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7.038 4.5a9 9 0 0 0 -2.495 2.47" />
              <path d="M3.186 10.209a9 9 0 0 0 0 3.508" />
              <path d="M4.5 16.962a9 9 0 0 0 2.47 2.495" />
              <path d="M10.209 20.814a9 9 0 0 0 3.5 0" />
              <path d="M16.962 19.5a9 9 0 0 0 2.495 -2.47" />
              <path d="M20.814 13.791a9 9 0 0 0 0 -3.508" />
              <path d="M19.5 7.038a9 9 0 0 0 -2.47 -2.495" />
              <path d="M13.791 3.186a9 9 0 0 0 -3.508 -.02" />
              <path d="M12 8l-2 4h4l-2 4" />
              <path d="M12 21a9 9 0 0 0 0 -18" />
            </svg>
            <svg v-else-if="mode == 3" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-armchair d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <svg v-else-if="mode == 3" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-armchair d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M5 11a2 2 0 0 1 2 2v2h10v-2a2 2 0 1 1 4 0v4a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2z" />
              <path d="M5 11v-5a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3v5" />
              <path d="M6 19v2" />
              <path d="M18 19v2" />
            </svg>
            <svg v-else-if="mode == 4" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"
              class="icon icon-tabler icons-tabler-outline icon-tabler-notebook d-none d-md-block">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
              <path d="M13 8l2 0" />
              <path d="M13 12l2 0" />
            </svg>
          </div>
          <GoalSelect :id="'goalSelectNew'" containerClass="w-100" selectClass="w-50 goal-text bg-focus" :mode="mode" :goalsSelect="goalsSelect" v-model="selectedGoalId" />
          <div class="d-flex align-items-center justify-content-center time-box">
            <button @click="mode < 2 ? showClock = !showClock : null"
              class="btn d-flex align-items-center justify-content-center"
              :class="pageState.timeClass, pageState.countDownClass">
              <span class="me-2" v-if="showClock || mode > 1">{{ hours }}{{ hours ? " : " : "" }}{{ minutes }} : {{
                seconds }}</span>
              <svg v-if="mode < 2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-clock">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                <path d="M12 7v5l3 3" />
              </svg>
            </button>
            <button @click="pauseTimer" v-if="mode == 1"
              class="h-100 btn btn-outline-warning text-white d-flex align-items-center justify-content-center me-2">
              <!-- <span class="d-none d-md-block fs-1"> Pause </span> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-pause">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
              </svg>
            </button>
            <button v-if="mode == 0" @click="startTimer"
              class="h-100 btn btn-outline-warning text-white d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-play">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 4v16l13 -8z" />
              </svg>
            </button>
            <button v-else @click="fastForward"
              class="h-100 btn btn-outline-light border border-white text-white d-flex align-items-center justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-player-track-next">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5v14l8 -7z" />
                <path d="M14 5v14l8 -7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class=" text-end">2025 | Safwan Zarif</div>
    </div>

    <!-- Modal Components -->
    <StartPrompt :selectedGoalId="selectedGoalId" :goalsSelect="goalsSelect" @update-goal="updateGoal"
      @settings-click="promptSetting" @start-focus="startFocus" />
    <WelcomePrompt :selectedGoalId="selectedGoalId" :goalsSelect="goalsSelect" @update-goal="updateGoal"
      :welcome="welcome" :last-online="last_online" @settings-click="promptSetting" @start-planning="startPlanning"
      @start-focus="startFocus" :userEmail="userEmail" />
    <BreakPrompt :rehat-detail="rehatDetail" :next-rehat="nextRehat" :is-overtime="isOvertime"
      :hours-overtime="hoursOvertime" :minutes-overtime="minutesOvertime" :seconds-overtime="secondsOvertime"
      :timer="timer" :seconds-after-due="secondsAfterDue" @settings-click="promptSetting" @stop-timer="stopTimer"
      @fokus-semula="fokusSemula" @start-break="startBreak" />
    <PausePrompt :selectedGoalId="selectedGoalId" :goalsSelect="goalsSelect" @update-goal="updateGoal" :hours="hours"
      :minutes="minutes" :seconds="seconds" @settings-click="promptSetting" @stop-timer="stopTimer"
      @resume-timer="resumeTimer" />
    <FocusPrompt :goalsSelect="goalsSelect" @update-goal="updateGoal" :selectedGoalId="selectedGoalId"
      :is-overtime="isOvertime" :hours-overtime="hoursOvertime" :minutes-overtime="minutesOvertime"
      :seconds-overtime="secondsOvertime" :timer="timer" :seconds-after-due="secondsAfterDue"
      @settings-click="promptSetting" @stop-timer="stopTimer" @start-focus="startFocus" />
    <MainSettings @start-day="runStartOfDay" />
    <TimerSettings :timer="timer" />
    <TimerRehatSettings :timer="timer" :stackNotSame="stackNotSame" :stack="stack" @reset-stack="resetStack"
      @change-stack="changeStack" @remove-stack="removeStack" @push-stack="pushStack" />
    <TimerOvertimeSettings :timer="timer" />
    <UserSettings :userEmail="userEmail" />
    <GoalSettings @recordRep="recordRep" :currentMode="mode" :currentTime="current" :currentGoal="selectedGoalId" :startedOn="startedOn" @new-goal="addNewGoal()" :userEmail="userEmail" :goalsList="goalsList" :goalsLabel="goalsLabel" />
    <LoadingModal :show="globalIsLoading">
      <!-- <p>{{ percentLoaded }} %</p> -->
      <p>Loading ... Kejap ye 😃</p>
    </LoadingModal>
  </div>
</template>

<style scoped>
.main-title {
  font-size: 20vmin;
}
.time-box{
  margin-top: 3.5vmin;
}
.focus-time {
  font-size: 6.5vmin;
}
.rest-time {
  font-size: 11.5vmin;
}
.top-pad {
  padding-top: 5vmin;
}
</style>
<script setup lang="ts">
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue'
import { onAuthStateChanged, type Unsubscribe } from 'firebase/auth'
import { useHabitTracker, useFirebaseDoc, generateId } from 'szutils.vue'
import StartPrompt from '../components/StartPrompt.vue'
import WelcomePrompt from '../components/WelcomePrompt.vue'
import BreakPrompt from '../components/BreakPrompt.vue'
import PausePrompt from '../components/PausePrompt.vue'
import FocusPrompt from '../components/FocusPrompt.vue'
import MainSettings from '../components/MainSettings.vue'
import TimerSettings from '../components/TimerSettings.vue'
import TimerRehatSettings from '../components/TimerRehatSettings.vue'
import TimerOvertimeSettings from '../components/TimerOvertimeSettings.vue'
import moment from 'moment'
import { useWakeLock } from '@vueuse/core'
import type {
  TimerConfig,
  WelcomeData,
  RehatDetail,
  PageState
} from '@/types'
import UserSettings from '@/components/UserSettings.vue'
import GoalSettings from '@/components/GoalSettings.vue'
import IconUserCheck from '@/components/icons/IconUserCheck.vue'
import GoalSelect from '@/components/GoalSelect.vue'
import LoadingModal from '@/components/LoadingModal.vue'
import { useGlobalLoading } from '@/composables/useGlobalLoading'

let intervalRun: number | undefined
// --- State ---
const welcome = reactive<WelcomeData>({
  title: 'Selamat Datang',
  dayLine: 'Rabu, 5 Feb 2025',
  motivationQuote: 'Setiap perjalanan menuju kejayaan pasti ada onak dan duri. Teruskan usaha dan semangat, dan jangan sesekali menyerah. Kerana penghujungnya ada kemanisan yang menanti.'
})
const loading = ref(false)
const mode = ref(0)
const showClock = ref(true)
const nextReduce = ref([0, 0])
const stack = ref([1, 1, 1, 2])
const due = ref(0)
const current = ref(0)
const startedOn = ref(0)
const paused_on = ref(0)
const last_online = ref(0)
const timer = reactive<TimerConfig>({
  focusTime: 25,
  focusSecond: 0,
  planTime: 15,
  planSecond: 0,
  break: [0, 5, 20],
  breakSecond: [0, 0, 0],
  simpleStack: true,
  breakNumber: 4,
  stack: [1, 1, 1, 2],
  extra_pad: 10,
  focus_extra_mode: 0,
  focus_extra_deduct_min: 5,
  focus_extra_add_rate: 0.5,
  rest_extra_mode: 0,
  rest_extra_deduct_min: 1,
  rest_extra_add_rate: 5,
})
const rehatDetail = [
  null,
  { text: 'Rehat Sebentar !' },
  { text: 'Masa untuk Rehat !' },
] as (RehatDetail | null)[]
const states = [
  {
    bg: 'bg-focus',
    bigText: 'Fokus',
    timeClass: 'focus-time',
    buttonClass: 'btn-outline-info',
    countDownClass: 'btn-outline-info w-75 me-2',
  },
  {
    bg: 'bg-focus',
    bigText: 'Fokus',
    timeClass: 'focus-time',
    buttonClass: 'btn-outline-info',
    countDownClass: 'btn-outline-info w-75 me-2',
  },
  {
    bg: 'bg-primary',
    bigText: 'Rehat',
    timeClass: 'rest-time',
    buttonClass: 'btn-outline-white',
    countDownClass: 'border border-white text-white w-100 mx-3',
  },
  {
    bg: 'bg-success',
    bigText: 'Rehat',
    timeClass: 'rest-time',
    buttonClass: 'btn-outline-white',
    countDownClass: 'border border-white text-white w-100 mx-3',
  },
  {
    bg: '',
    bigText: 'Planning',
    timeClass: 'rest-time',
    buttonClass: 'btn-outline-white',
    countDownClass: 'border border-white text-white w-100 mx-3',
  },
] as PageState[]
const pageState = ref<PageState>({} as PageState)
const goalsList = ref(["fokus"])
const goalsLabel = ref(["Fokus"])
const goalsSelect = computed(() => {
  let list = [{id:"none", label:"Lain lain"} ,...goalsList.value.map((goal, index) => ({
    id: goal,
    label: goalsLabel.value[index]
  })).filter(goal => goal.id != "fokus")]
  if (list.length < 10) list.push({ id: "new-goal", label: "Tambah Goal Baharu" })
  return list
})
const goalsMap = computed(() => {
  const map: Record<string, string> = {}
  goalsList.value.forEach((goal, index) => {
    map[goal] = goalsLabel.value[index] || ""
  })
  return map
})
const selectedGoalId = ref("")
function openGoalSettings(){
  return showModal(`goal-detail-settings-${selectedGoalId.value}`)
}
function updateGoal(goalId: string) {
  selectedGoalId.value = goalId
}
watch(selectedGoalId, async (newVal, oldVal) => {
  if (mode.value == 1 && startedOn.value > 0 && oldVal && oldVal != 'new-goal') {
    updateHabitTracker(oldVal)
    startedOn.value = moment().unix()
  }
  if (newVal == 'new-goal') {
    let id = await addNewGoal()
    return selectedGoalId.value = id
  }
})

const focusTracker = useHabitTracker('fokus',{ skipWatcher:true })
const { today } = focusTracker
const targetClass = computed(() => {
  if (today.value.isSuccess) return 'text-success c-pointer'
  if (today.value.isPassed) return 'text-info c-pointer'
  if (today.value.progress > 0) return 'text-warning c-pointer opacity-50'
  return 'text-white c-pointer'
})
const trackers = computed(() => {
  let toReturn: Record<string, ReturnType<typeof useHabitTracker>> = {
    fokus: focusTracker,
  }
  for( let goalId of goalsList.value) {
    if (goalId == 'fokus') continue
    toReturn[goalId] = useHabitTracker(goalId,{ skipWatcher:true })
  }
  return toReturn
})

// --- Firebase composable ---
const doc = useFirebaseDoc({}, 'fokus-settings/anon')
const { app, auth, data: docData } = doc

const userEmail = ref("")
let unsubscribe: Unsubscribe | null = null
if (auth.value) unsubscribe = onAuthStateChanged(auth.value, (user) => {
  if (user) {
    // User is signed in
    //console.log("User got");
    userEmail.value = user.email || ""
  } else {
    // User is signed out
    userEmail.value = ""
    //console.log("No user signed in");
  }
});
const isChecked = ref(false)
watch(() => app.value, (newApp, oldApp) => {
  if (isChecked && oldApp && newApp) return
  if (newApp) {
    if(!auth.value) return
    isChecked.value = true
    if (unsubscribe) unsubscribe()
    unsubscribe = onAuthStateChanged(auth.value, (user) => {
      if (user) {
        // User is signed in
        //console.log("User got");
        userEmail.value = user.email || ""
      } else {
        // User is signed out
        userEmail.value = ""
        //console.log("No user signed in");
      }
    });
  }
}, { deep: true, immediate: true })
const wakeLock = useWakeLock()

// --- Computed ---
const isOvertime = computed(() => secondsAfterDue.value > timer.extra_pad)
const validTimer = computed(() => focusInSecond.value > 0 && shortBreakInSecond.value > 0 && longBreakInSecond.value > 0)
const focusInSecond = computed(() => timer.focusTime * 60 + (timer.focusSecond ? timer.focusSecond : 0))
const shortBreakInSecond = computed(() => {
  try {
    return timer.break[1] * 60 + (timer.breakSecond[1] ? timer.breakSecond[1] : 0)
  } catch (error) {
    return 0
  }
})
const longBreakInSecond = computed(() => {
  try {
    return timer.break[2] * 60 + (timer.breakSecond[2] ? timer.breakSecond[2] : 0)
  } catch (error) {
    return 0
  }
})
const shortBreakMinute = computed(() => timer.break[1])
const longBreakMinute = computed(() => timer.break[2])
const focusMinute = computed(() => timer.focusTime)
const focusSecond = computed(() => timer.focusSecond)
const shortBreakSecond = computed(() => timer.breakSecond[1])
const longBreakSecond = computed(() => timer.breakSecond[2])
const stackNotSame = computed(() => JSON.stringify(stack.value) != JSON.stringify(timer.stack))
const breakNumber = computed(() => timer.breakNumber)
const simpleStack = computed(() => timer.simpleStack)
const nextRehat = computed(() => stack.value[0] || 1)
const secondsToDue = computed(() => due.value - current.value)
const secondsAfterDue = computed(() => current.value - due.value)
const hours = computed(() => {
  if (!due.value) {
    if (timer.focusTime < 60) return ''
    return Math.floor(timer.focusTime / 60).toString().padStart(2, '0')
  }
  if (paused_on.value) {
    let time = due.value - paused_on.value
    if (time < 3600) return ''
    return Math.floor(time / 3600).toString().padStart(2, '0')
  }
  let time = secondsToDue.value
  if (passedDue.value) time = secondsAfterDue.value
  if (time < 3600) return ''
  return Math.floor(time / 3600).toString().padStart(2, '0')
})
const minutes = computed(() => {
  if (!due.value) return (timer.focusTime % 60).toString().padStart(2, '0')
  let time = secondsToDue.value
  if (paused_on.value) {
    let time = due.value - paused_on.value
    if (time < 60) return '00'
    return (Math.floor(time / 60) % 60).toString().padStart(2, '0')
  }
  if (passedDue.value) time = secondsAfterDue.value
  if (time < 60) return '00'
  return (Math.floor(time / 60) % 60).toString().padStart(2, '0')
})
const seconds = computed(() => {
  if (!due.value) return timer.focusSecond.toString().padStart(2, '0')
  if (paused_on.value) {
    let time = due.value - paused_on.value
    if (time < 0) return '00'
    return (time % 60).toString().padStart(2, '0')
  }
  let time = secondsToDue.value
  if (passedDue.value) time = secondsAfterDue.value
  if (time < 0) return '00'
  return (time % 60).toString().padStart(2, '0')
})
const hoursOvertime = computed(() => {
  if (secondsPassedOvertime.value > 0) {
    let time = Math.floor(secondsPassedOvertime.value / 3600)
    if (time <= 0) return ''
    return Math.floor(secondsPassedOvertime.value / 3600).toString().padStart(2, '0')
  }
  return ''
})
const minutesOvertime = computed(() => {
  if (secondsPassedOvertime.value > 0) {
    return (Math.floor(secondsPassedOvertime.value / 60) % 60).toString().padStart(2, '0')
  }
  return '00'
})
const secondsPassedOvertime = computed(() => secondsAfterDue.value - timer.extra_pad)
const secondsOvertime = computed(() => {
  if (secondsPassedOvertime.value > 0) {
    return (secondsPassedOvertime.value % 60).toString().padStart(2, '0')
  }
  return '00'
})
const passedDue = computed(() => {
  if (paused_on.value) return false
  return Boolean(due.value && due.value <= current.value)
})
const currentTime = computed(() => {
  if (current.value) return moment(current.value * 1000).format('hh:mm A')
  return '00 : 00 AM'
})

// --- Watchers ---
watch(docData, (newVal, oldVal) => {
  if (newVal?.last_online == last_online.value) return
  if (newVal?.last_online > last_online.value) return window.location.href = '/idle'
}, { deep: true })
watch(userEmail, (email) => {
  setupSync()
  if (email) setTimeout(() => { enableTooltip() }, 5)
})
watch(validTimer, (newVal) => {
  if (!newVal) {
    if (focusInSecond.value <= 0) {
      if (timer.focusTime < 0) timer.focusTime = 0
      if (timer.focusTime == 0 && timer.focusSecond <= 0) timer.focusSecond = 5
    }
    if (shortBreakInSecond.value <= 0) {
      if (timer.break[1] < 0) timer.break[1] = 0
      if (timer.break[1] == 0 && timer.breakSecond[1] <= 0) timer.breakSecond[1] = 5
    }
    if (longBreakInSecond.value <= 0) {
      if (timer.break[2] < 0) timer.break[2] = 0
      if (timer.break[2] == 0 && timer.breakSecond[2] <= 0) timer.breakSecond[2] = 5
    }
  }
})
watch(focusMinute, (newVal) => {
  if (loading.value) return
  if (newVal > 0) timer.focusSecond = 0
})
watch(shortBreakMinute, (newVal) => {
  if (loading.value) return
  if (newVal > 0) timer.breakSecond[1] = 0
})
watch(longBreakMinute, (newVal) => {
  if (loading.value) return
  if (newVal > 0) timer.breakSecond[2] = 0
})
watch(focusSecond, (newVal) => {
  if (newVal > 59) timer.focusSecond = 59
  if (newVal < 0) timer.focusSecond = 0
})
watch(shortBreakSecond, (newVal) => {
  if (newVal > 59) timer.breakSecond[1] = 59
  if (newVal < 0) timer.breakSecond[1] = 0
})
watch(longBreakSecond, (newVal) => {
  if (newVal > 59) timer.breakSecond[2] = 59
  if (newVal < 0) timer.breakSecond[2] = 0
})
watch(mode, (newVal) => {
  pageState.value = states[newVal] || {
    bg: '',
    bigText: 'Fokus',
    timeClass: 'fs-1',
    buttonClass: 'btn-outline-info',
    countDownClass: 'btn-outline-info w-75 me-2',
  }
})
watch(passedDue, (newVal) => {
  if (newVal) promptChange(mode.value)
})
watch(breakNumber, (newVal) => {
  if (newVal > 1 && timer.simpleStack) {
    let newStack = Array(newVal - 1).fill(1)
    newStack.push(2)
    timer.stack = newStack
  }
})
watch(simpleStack, (newVal) => {
  if (newVal) {
    let newStack = Array(timer.breakNumber - 1).fill(1)
    newStack.push(2)
    timer.stack = newStack
  }
})
watch(paused_on, async (newVal) => {
  if (newVal) showModal('pause-prompt')
  else {
    hideModal('pause-prompt')
  }
})

const isLoaded = ref(false)
const isLoading = computed(() => loading.value || !isLoaded.value)
const { isLoading: globalIsLoading, percentLoaded } = useGlobalLoading(isLoading,5)

function setupSync() {
  if (!doc.isSet.value || !userEmail.value) return
  doc.changeDoc(`fokus-settings/${userEmail.value}`)
  localStorage.setItem(`loggedInAs`, userEmail.value)
  doc.getData().then((data: any) => {
    if (data) getFromFirebase(data)
    else saveToFirebase()
    isLoaded.value = true
  })
}
function enableTooltip() {
  var myTooltipEl = document.getElementById('loggedInIndicator')
  var tooltip = new window.bootstrap.Tooltip(myTooltipEl, { offset: [0, 12] })
}
function promptChange(m: number) {
  releaseAfter()
  if (m == 1) {
    promptBreak()
    return window.notifyMe('Break Time!', `Let's take a break`)
  }
  if (m == 4) {
    return showModal('startPrompt')
  }
  promptFocus()
  return window.notifyMe('Focus Time!', `Let's go change the world!`)
}
function promptSetting(): void {
  var myModalEl = document.querySelector('#main-settings')
  var modal = window.bootstrap.Modal.getOrCreateInstance(myModalEl)
  modal.toggle()
}
function promptBreak() {
  var myModalEl = document.querySelector('#break-prompt')
  var modal = (window as any).bootstrap.Modal.getOrCreateInstance(myModalEl)
  modal.toggle()
}
function promptFocus(close = false) {
  var myModalEl = document.querySelector('#focus-prompt')
  var modal = (window as any).bootstrap.Modal.getOrCreateInstance(myModalEl)
  if (close) return modal.hide()
  modal.toggle()
}
function showModal(id: string) {
  const myModalEl = document.querySelector(`#${id}`) as HTMLElement | null
  if (!myModalEl) return
  window.bootstrap.Modal.getOrCreateInstance(myModalEl).show()
}
function hideModal(id: string) {
  const myModalEl = document.querySelector(`#${id}`) as HTMLElement | null
  if (!myModalEl) return
  window.bootstrap.Modal.getOrCreateInstance(myModalEl).hide()
}
function releaseAfter(time = 0) {
  if (!time) time = timer.extra_pad * 1000
  setTimeout(() => { wakeLock.release?.() }, time)
}
function pauseTimer() {
  showModal('pause-prompt')
  paused_on.value = moment().unix()
  //await nextTick()
  setTimeout(() => {
    if (mode.value == 1) {
      updateHabitTracker()
    }
    startedOn.value = 0
    saveToLocal()
    releaseAfter()
  },500)
}
function resumeTimer() {
  let lag = current.value - paused_on.value
  due.value = due.value + lag
  paused_on.value = 0
  startedOn.value = moment().unix()
  hideModal('pause-prompt')
  setTimeout(() => {
    saveToLocal()
    wakeLock.request?.("screen")
  },500)
}
function saveToLocal(lastOnline?: number) {
  if(!isLoaded.value) return
  if (lastOnline === undefined) lastOnline = moment().unix()
  last_online.value = lastOnline
  let data = {
    mode: mode.value,
    showClock: showClock.value,
    nextReduce: nextReduce.value,
    stack: stack.value,
    due: due.value,
    started_on: startedOn.value,
    paused_on: paused_on.value,
    timer: { ...timer },
    last_online: lastOnline,
    goals: goalsList.value,
    goalsLabel: goalsLabel.value,
    selectedGoalId: selectedGoalId.value
  }
  localStorage.setItem('fokus-data', JSON.stringify(data))
  if (userEmail.value) saveToFirebase(lastOnline)
}
function saveToFirebase(lastOnline?: number) {
  if (lastOnline === undefined) lastOnline = moment().unix()
  last_online.value = lastOnline
  let data = {
    mode: mode.value,
    showClock: showClock.value,
    nextReduce: nextReduce.value,
    stack: stack.value,
    due: due.value,
    started_on: startedOn.value,
    paused_on: paused_on.value,
    timer: { ...timer },
    last_online: lastOnline,
    goals: goalsList.value,
    goalsLabel: goalsLabel.value,
    selectedGoalId: selectedGoalId.value
  }
  doc.saveData(data)
}
function getFromLocal(checked = 0) {
  if (userEmail.value) return
  let email = localStorage.getItem('loggedInAs')
  if (email) {
    if (checked < 5) return setTimeout(() => { getFromLocal(checked++) }, 500)
    let useLocal = prompt('You are no longer logged in as ' + email + '. Do you want to use local data? Click Cancel to go to user settings.', 'Continue with Local Data')
    if (!useLocal) return showModal("user-settings")
  }
  let data = localStorage.getItem('fokus-data')
  let parsed
  if (data) {
    parsed = JSON.parse(data)
    loading.value = true
    const { mode: m, showClock: sc, nextReduce: nr, stack: st, due: d, paused_on: po, last_online: lo, timer: t } = parsed
    mode.value = m
    showClock.value = sc
    nextReduce.value = nr
    stack.value = st
    if (parsed.goals) goalsList.value = parsed.goals
    if (parsed.goalsLabel) goalsLabel.value = parsed.goalsLabel
    if (parsed.selectedGoalId) selectedGoalId.value = parsed.selectedGoalId
    Object.assign(timer, t)
    last_online.value = lo
    if (t.focusSecond === undefined) {
      timer.focusSecond = 0
      timer.breakSecond = [0, 0, 0]
    }
    if (t.planTime === undefined) {
      timer.planTime = 15
      timer.planSecond = 0
    }
    if (t.focusTime === undefined) {
      timer.focusTime = t.focus ? t.focus : 25
    }
    let last2Hour = moment().subtract(2, 'hours').unix()
    if (d && !po && d < last2Hour) stopTimer(lo)
    setTimeout(() => {
      loading.value = false
    }, 500)
  }
  if (!last_online.value) return runStartOfDay()
  let hour = moment().hour()
  let startOfDay = moment().startOf('day').add(hour < 6 ? -18 : 6, 'hours').unix()
  if (last_online.value < startOfDay) return runStartOfDay()
  paused_on.value = parsed.paused_on
  due.value = parsed.due
  if (parsed.started_on) startedOn.value = parsed.started_on
  isLoaded.value = true
}
function getFromFirebase(data: any) {
  loading.value = true
  const { mode: m, showClock: sc, nextReduce: nr, stack: st, due: d, paused_on: po, last_online: lo, timer: t } = data
  mode.value = m
  showClock.value = sc
  nextReduce.value = nr
  stack.value = st
  if (data.goals) goalsList.value = data.goals
  if (data.goalsLabel) goalsLabel.value = data.goalsLabel
  if (data.selectedGoalId) selectedGoalId.value = data.selectedGoalId
  Object.assign(timer, t)
  last_online.value = lo
  if (t.focusSecond === undefined) {
    timer.focusSecond = 0
    timer.breakSecond = [0, 0, 0]
  }
  if (t.planTime === undefined) {
    timer.planTime = 15
    timer.planSecond = 0
  }
  if (t.focusTime === undefined) {
    timer.focusTime = t.focus ? t.focus : 25
  }
  let last2Hour = moment().subtract(2, 'hours').unix()
  if (d && !po && d < last2Hour) stopTimer(lo)
  setTimeout(() => {
    loading.value = false
  }, 500)
  if (!last_online.value) return runStartOfDay()
  let hour = moment().hour()
  let startOfDay = moment().startOf('day').add(hour < 6 ? -18 : 6, 'hours').unix()
  if (last_online.value < startOfDay) return runStartOfDay()
  paused_on.value = po
  if(!po){
    hideModal('pause-prompt')
    if(d){
      if(m == 1) hideModal('break-prompt')
      else hideModal('focus-prompt')
      hideModal('welcome-prompt')
      hideModal('startPrompt')
    }
  } 
  due.value = d
  if(!d) {
    hideModal('focus-prompt')
    hideModal('break-prompt')
  }
  if (data.started_on) startedOn.value = data.started_on
}
function runStartOfDay() {
  welcome.title = 'Selamat Datang'
  if (last_online.value) welcome.title = 'Welcome Back!'
  resetStack()
  stopTimer(last_online.value)
  nextReduce.value = [0, 0]
  welcome.dayLine = moment().format('dddd, D MMMM YYYY')
  welcome.motivationQuote = 'Setiap perjalanan menuju kejayaan pasti ada onak dan duri. Teruskan usaha dan semangat, dan jangan sesekali menyerah. Kerana penghujungnya ada kemanisan yang menanti.'
  showModal('welcome-prompt')
  isLoaded.value = true
}
function resetStack() {
  stack.value = [...timer.stack]
}
async function stopTimer(lastOnline?: number) {
  let m = mode.value
  due.value = 0
  if (mode.value == 1) {
    updateHabitTracker()
  }
  await nextTick()
  mode.value = 0
  startedOn.value = 0
  releaseAfter()
  if (paused_on.value) {
    paused_on.value = 0
    await nextTick()
    hideModal('pause-prompt')
    if (lastOnline) return saveToLocal(lastOnline)
    return saveToLocal()
  }
  if (m == 1) {
    hideModal('break-prompt')
    if (lastOnline) return saveToLocal(lastOnline)
    return saveToLocal()
  }
  promptFocus(true)
  if (lastOnline) return saveToLocal(lastOnline)
  return saveToLocal()
}
function fokusSemula() {
  updateHabitTracker()
  startedOn.value = 0
  promptBreak()
  startTimer()
}
function startPlanning() {
  hideModal('welcome-prompt')
  runTimer(4, timer.planTime * 60 + timer.planSecond)
}
async function recordRep(key: string) {
  // if(mode.value == 1) updateHabitTracker('fokus')
  if(startedOn.value < 1) return
  updateHabitTracker(key)
  await nextTick()
  startedOn.value = moment().unix()
}
function updateHabitTracker(goal?: string) {
  if (!goal || goal == "fokus") goal = selectedGoalId.value
  let index = goalsList.value.indexOf(goal)
  if (index === -1) return
  if (!startedOn.value) return
  const tracker = trackers.value[goal]
  if(!tracker) console.error("Tracker not found", goal)
  let seconds = moment().unix() - startedOn.value
  startedOn.value = 0
  //console.log("adding", seconds)

  if(tracker)  tracker.recordRep(seconds, goalsMap.value[goal])
  if(mode.value == 1) focusTracker.recordRep(seconds, "Fokus")
}
function startBreak() {
  let currentRehat = stack.value.shift() || 1
  promptBreak()
  setTimeout(() => {
    updateHabitTracker()
  }, 500)
  let toAdd = 0
  if (timer.focus_extra_mode && timer.extra_pad < secondsAfterDue.value) {
    if (timer.focus_extra_mode == 1) {
      nextReduce.value[0] = secondsPassedOvertime.value
    } else toAdd = Math.floor(secondsPassedOvertime.value * timer.focus_extra_add_rate)
  }
  if (!stack.value.length) stack.value = [...timer.stack]
  const breakDuration = (timer.break[currentRehat] || 0) * 60 + (timer.breakSecond[currentRehat] || 0)
  runTimer(currentRehat + 1, breakDuration, toAdd)
}
function startFocus(startOfDay = false) {
  hideModal('focus-prompt')
  if (startOfDay) return runTimer(1, focusInSecond.value)
  if (mode.value == 4) {
    hideModal('startPrompt')
    return runTimer(1, focusInSecond.value)
  }
  let toAdd = 0
  if (timer.rest_extra_mode && timer.extra_pad < secondsAfterDue.value) {
    if (timer.rest_extra_mode == 1) {
      nextReduce.value[1] = secondsPassedOvertime.value
    } else toAdd = Math.floor(secondsPassedOvertime.value * timer.rest_extra_add_rate)
  }
  runTimer(1, focusInSecond.value, toAdd)
}
function changeStack(index: number) {
  if (!timer.simpleStack && timer.stack[index] !== undefined) {
    timer.stack[index] = timer.stack[index] % 2 + 1
  }
}
function removeStack(index: number) {
  if (!timer.simpleStack) timer.stack.splice(index, 1)
}
function pushStack() {
  if (!timer.simpleStack) timer.stack.push(1)
}
function startTimer() {
  runTimer(1, focusInSecond.value)
}
function runTimer(m: number, interval: number, toAdd = 0) {
  mode.value = m
  let seconds = interval
  let reduceMode = m - 1
  if (reduceMode > 0) reduceMode = 1
  let reduceBy = nextReduce.value[reduceMode]
  if (reduceBy) {
    let minimum = reduceMode ? timer.rest_extra_deduct_min * 60 : timer.focus_extra_deduct_min * 60
    seconds = seconds - reduceBy
    if (seconds < minimum) seconds = minimum
    nextReduce.value[reduceMode] = 0
  }
  let momentToDue = moment().add(seconds, 'seconds')
  if (toAdd) momentToDue.add(toAdd, 'seconds')
  setTicking()
  startedOn.value = moment().unix()
  due.value = momentToDue.unix()
  wakeLock.request?.("screen")
  saveToLocal()
}
function setTicking() {
  clearInterval(intervalRun)
  updateTime()
  intervalRun = setInterval(updateTime, 1000) as unknown as number
}
function updateTime() {
  current.value = moment().unix()
}
function fastForward() {
  setTicking()
  due.value = moment().add(3, 'seconds').unix()
}
function test() {
  saveToLocal(12)
}
function test2() {
  saveToLocal(0)
}

// --- Lifecycle ---
onMounted(() => {
  setupSync()
  moment.updateLocale('en', {
    weekdays: [
      'Ahad', 'Isnin', 'Selasa', 'Rabu', 'Khamis', 'Jumaat', 'Sabtu'
    ],
    months: ['Januari', 'Februari', 'Mac', 'April', 'Mei', 'Jun', 'Julai', 'Ogos', 'September',
      'Oktober', 'November', 'Disember'
    ]
  })
  getFromLocal()
  pageState.value = states[mode.value] || {
    bg: '',
    bigText: 'Fokus',
    timeClass: 'fs-1',
    buttonClass: 'btn-outline-info',
    countDownClass: 'btn-outline-info w-75 me-2',
  }
  setTicking()
})

async function addNewGoal() {
  let id = generateId()
  goalsList.value.push(id)
  goalsLabel.value.push(`New Goal`)
  await nextTick()
  const tracker = trackers.value[id]
  if(!tracker){
    console.error("Tracker Failed to Init")
    return id
  }
  tracker.label.value = `New Goal`
  tracker.minDaily.value = 300
  tracker.setDailyGoal(focusInSecond.value)
  await nextTick()
  showModal(`goal-detail-settings-${id}`)
  return id
}
</script>