<template>
  <!-- <div class="position-absolute" style="z-index: 9999;">{{ last_online }}<button class="btn btn-primary" @click="test">Test 1</button><button class="btn btn-primary" @click="test2">Test 2</button></div> -->
  <div class="container-fluid w-100 h-100" :class="pageState.bg">
    <div class="d-flex flex-column justify-content-between h-100">
      <div class="">
        <div class="d-flex justify-content-between align-items-center px-md-5 mt-2 mt-md-5">
          <svg @click="promptSetting" xmlns="http://www.w3.org/2000/svg" width="10vmin" height="10vmin"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-settings c-pointer">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
          </svg>
          <div class="d-flex align-items-center">
            <button class="btn me-2" :class="pageState.buttonClass" v-if="userEmail"> User: {{ userEmail }}</button>
            <button class="btn me-2" :class="pageState.buttonClass"> {{ currentTime }}</button>

          </div>
        </div>
      </div>
      <div class="">
        <div class="d-flex flex-column justify-content-between h-100 p-3">
          <div class="d-flex justify-content-center d-md-none">
            <svg v-if="mode < 2" xmlns="http://www.w3.org/2000/svg" width="45vmin" height="45vmin" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
            <svg v-if="mode < 2" xmlns="http://www.w3.org/2000/svg" width="30vmin" height="30vmin" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
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
          <div class="d-flex align-items-center justify-content-center mt-5">
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
    <StartPrompt @settings-click="promptSetting" @start-focus="startFocus" />
    <WelcomePrompt :welcome="welcome" :last-online="last_online" @settings-click="promptSetting"
      @start-planning="startPlanning" @start-focus="startFocus" />
    <BreakPrompt :rehat-detail="rehatDetail" :next-rehat="nextRehat" :is-overtime="isOvertime"
      :hours-overtime="hoursOvertime" :minutes-overtime="minutesOvertime" :seconds-overtime="secondsOvertime"
      :timer="timer" :seconds-after-due="secondsAfterDue" @settings-click="promptSetting" @stop-timer="stopTimer"
      @fokus-semula="fokusSemula" @start-break="startBreak" />
    <PausePrompt :hours="hours" :minutes="minutes" :seconds="seconds" @settings-click="promptSetting"
      @stop-timer="stopTimer" @resume-timer="resumeTimer" />
    <FocusPrompt :is-overtime="isOvertime" :hours-overtime="hoursOvertime" :minutes-overtime="minutesOvertime"
      :seconds-overtime="secondsOvertime" :timer="timer" :seconds-after-due="secondsAfterDue"
      @settings-click="promptSetting" @stop-timer="stopTimer" @start-focus="startFocus" />
    <MainSettings @start-day="runStartOfDay" />
    <TimerSettings :timer="timer" />
    <TimerRehatSettings :timer="timer" :stackNotSame="stackNotSame" :stack="stack" @reset-stack="resetStack"
      @change-stack="changeStack" @remove-stack="removeStack" @push-stack="pushStack" />
    <TimerOvertimeSettings :timer="timer" />
    <UserSettings />
  </div>
</template>

<style scoped>
.main-title {
  font-size: 20vmin;
}

.rest-time {
  font-size: 11.5vmin;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue'
import { useFirebaseDoc } from 'szutils.vue'
import SettingModal from '../components/SettingModal.vue'
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
import { useDocStore } from '@/stores/doc.store'


let intervalRun: number | undefined

export default defineComponent({
  name: 'HomeView',
  setup() {
    const doc = useDocStore()
    return { doc }
  },
  components: {
    SettingModal,
    StartPrompt,
    WelcomePrompt,
    BreakPrompt,
    PausePrompt,
    FocusPrompt,
    MainSettings,
    TimerSettings,
    TimerRehatSettings,
    TimerOvertimeSettings,
    UserSettings,
  },
  data() {
    return {
      // 0 Not Started / Stopped
      // 1 Focus
      // 2 Short Break
      // 3 Long Break
      // 4 Planning
      welcome: {
        title: "Selamat Datang",
        dayLine: "Rabu, 5 Feb 2025",
        motivationQuote: "Setiap perjalanan menuju kejayaan pasti ada onak dan duri. Teruskan usaha dan semangat, dan jangan sesekali menyerah. Kerana penghujungnya ada kemanisan yang menanti.",
      } as WelcomeData,
      loading: false,
      mode: 0,
      showClock: true,
      wakeLock: {} as any,
      nextReduce: [0, 0] as number[],
      stack: [1, 1, 1, 2] as number[],
      due: 0,
      current: 0,
      paused_on: 0,
      last_online: 0,
      timer: {
        focusTime: 25,
        focusSecond: 0,
        planTime: 15,
        planSecond: 0,
        break: [0, 5, 20] as [number, number, number],
        breakSecond: [0, 0, 0] as [number, number, number],
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
      } as TimerConfig,
      rehatDetail: [
        null,
        {
          text: "Rehat Sebentar !",
        },
        {
          text: "Masa untuk Rehat !",
        },
      ] as (RehatDetail | null)[],
      states: [
        {
          bg: "",
          bigText: "Fokus",
          timeClass: "fs-1",
          buttonClass: "btn-outline-info",
          countDownClass: "btn-outline-info w-75 me-2",
        },
        {
          bg: "",
          bigText: "Fokus",
          timeClass: "fs-1",
          buttonClass: "btn-outline-info",
          countDownClass: "btn-outline-info w-75 me-2",
        },
        {
          bg: "bg-primary",
          bigText: "Rehat",
          timeClass: "rest-time",
          buttonClass: "btn-outline-white",
          countDownClass: "border border-white text-white w-100 mx-3",
        },
        {
          bg: "bg-success",
          bigText: "Rehat",
          timeClass: "rest-time",
          buttonClass: "btn-outline-white",
          countDownClass: "border border-white text-white w-100 mx-3",
        },
        {
          bg: "",
          bigText: "Planning",
          timeClass: "rest-time",
          buttonClass: "btn-outline-white",
          countDownClass: "border border-white text-white w-100 mx-3",
        },
      ] as PageState[],
      pageState: {} as PageState
    }
  },
  computed: {
    docData(){
      return this.doc?.data
    },
    userEmail(){
      return this.doc?.userEmail
    },
    isOvertime(): boolean {
      return this.secondsAfterDue > this.timer.extra_pad
    },
    validTimer(): boolean {
      return this.focusInSecond > 0 && this.shortBreakInSecond > 0 && this.longBreakInSecond > 0
    },
    focusInSecond(): number {
      return this.timer.focusTime * 60 + (this.timer.focusSecond ? this.timer.focusSecond : 0)
    },
    shortBreakInSecond(): number {
      try {
        return this.timer.break[1] * 60 + (this.timer.breakSecond[1] ? this.timer.breakSecond[1] : 0)
      } catch (error) {
        return 0
      }
    },
    longBreakInSecond(): number {
      try {
        return this.timer.break[2] * 60 + (this.timer.breakSecond[2] ? this.timer.breakSecond[2] : 0)
      } catch (error) {
        return 0
      }
    },
    shortBreakMinute(): number {
      return this.timer.break[1]
    },
    longBreakMinute(): number {
      return this.timer.break[2]
    },
    focusMinute(): number {
      return this.timer.focusTime
    },
    focusSecond(): number {
      return this.timer.focusSecond
    },
    shortBreakSecond(): number {
      return this.timer.breakSecond[1]
    },
    longBreakSecond(): number {
      return this.timer.breakSecond[2]
    },
    stackNotSame(): boolean {
      return JSON.stringify(this.stack) != JSON.stringify(this.timer.stack)
    },
    breakNumber(): number {
      return this.timer.breakNumber
    },
    simpleStack(): boolean {
      return this.timer.simpleStack
    },
    nextRehat(): number {
      if (this.stack[0]) return this.stack[0]
      return 1
    },
    secondsToDue(): number {
      return this.due - this.current
    },
    secondsAfterDue(): number {
      return this.current - this.due
    },
    hours(): string {
      if (!this.due) {
        if (this.timer.focusTime < 60) return ""
        return Math.floor(this.timer.focusTime / 60).toString().padStart(2, "0")
      }
      if (this.paused_on) {
        let time = this.due - this.paused_on
        if (time < 3600) return ""
        return Math.floor(time / 3600).toString().padStart(2, "0")
      }
      var time = this.secondsToDue
      if (this.passedDue) time = this.secondsAfterDue
      if (time < 3600) return ""
      return Math.floor(time / 3600).toString().padStart(2, "0")
    },
    minutes(): string {
      if (!this.due) return (this.timer.focusTime % 60).toString().padStart(2, "0")
      var time = this.secondsToDue
      if (this.paused_on) {
        let time = this.due - this.paused_on
        if (time < 60) return "00"
        return (Math.floor(time / 60) % 60).toString().padStart(2, "0")
      }
      if (this.passedDue) time = this.secondsAfterDue
      if (time < 60) return "00"
      return (Math.floor(time / 60) % 60).toString().padStart(2, "0")
    },
    seconds(): string {
      if (!this.due) return this.timer.focusSecond.toString().padStart(2, "0")
      if (this.paused_on) {
        let time = this.due - this.paused_on
        if (time < 0) return "00"
        return (time % 60).toString().padStart(2, "0")
      }
      var time = this.secondsToDue
      if (this.passedDue) time = this.secondsAfterDue
      if (time < 0) return "00"
      return (time % 60).toString().padStart(2, "0")
    },
    hoursOvertime(): string {
      if (this.secondsPassedOvertime > 0) {
        let time = Math.floor(this.secondsPassedOvertime / 3600)
        if (time <= 0) return ""
        return Math.floor(this.secondsPassedOvertime / 3600).toString().padStart(2, "0")
      }
      return ""
    },
    minutesOvertime(): string {
      if (this.secondsPassedOvertime > 0) {
        return (Math.floor(this.secondsPassedOvertime / 60) % 60).toString().padStart(2, "0")
      }
      return "00"
    },
    secondsPassedOvertime(): number {
      return this.secondsAfterDue - this.timer.extra_pad
    },
    secondsOvertime(): string {
      if (this.secondsPassedOvertime > 0) {
        return (this.secondsPassedOvertime % 60).toString().padStart(2, "0")
      }
      return "00"
    },
    passedDue(): boolean {
      if (this.paused_on) return false
      return Boolean(this.due && this.due <= this.current)
    },
    currentTime(): string {
      if (this.current) return moment(this.current * 1000).format("hh:mm A")
      return "00 : 00 AM"
    }
  },
  watch: {
    docData:{
      handler(newVal, oldVal) {
        if(newVal.last_online == this.last_online) return
        if(newVal.last_online > this.last_online) return this.$router.push('/idle')
      },
      deep: true
    },
    userEmail(newVal,oldVal){
      this.setupSync()
    },
    validTimer(newVal: boolean, oldVal: boolean) {
      if (!newVal) {
        if (this.focusInSecond <= 0) {
          if (this.timer.focusTime < 0) this.timer.focusTime = 0
          if (this.timer.focusTime == 0 && this.timer.focusSecond <= 0) this.timer.focusSecond = 5
        }
        if (this.shortBreakInSecond <= 0) {
          if (this.timer.break[1] < 0) this.timer.break[1] = 0
          if (this.timer.break[1] == 0 && this.timer.breakSecond[1] <= 0) this.timer.breakSecond[1] = 5
        }
        if (this.longBreakInSecond <= 0) {
          if (this.timer.break[2] < 0) this.timer.break[2] = 0
          if (this.timer.break[2] == 0 && this.timer.breakSecond[2] <= 0) this.timer.breakSecond[2] = 5
        }
      }
    },
    focusMinute(newVal: number, oldVal: number) {
      if (this.loading) return
      if (newVal > 0) this.timer.focusSecond = 0
    },
    shortBreakMinute(newVal: number, oldVal: number) {
      if (this.loading) return
      if (newVal > 0) this.timer.breakSecond[1] = 0
    },
    longBreakMinute(newVal: number, oldVal: number) {
      if (this.loading) return
      if (newVal > 0) this.timer.breakSecond[2] = 0
    },
    focusSecond(newVal: number, oldVal: number) {
      if (newVal > 59) this.timer.focusSecond = 59
      if (newVal < 0) this.timer.focusSecond = 0
    },
    shortBreakSecond(newVal: number, oldVal: number) {
      if (newVal > 59) this.timer.breakSecond[1] = 59
      if (newVal < 0) this.timer.breakSecond[1] = 0
    },
    longBreakSecond(newVal: number, oldVal: number) {
      if (newVal > 59) this.timer.breakSecond[2] = 59
      if (newVal < 0) this.timer.breakSecond[2] = 0
    },
    mode(newVal: number, oldVal: number) {
      this.pageState = this.states[newVal] || {
        bg: "",
        bigText: "Fokus",
        timeClass: "fs-1",
        buttonClass: "btn-outline-info",
        countDownClass: "btn-outline-info w-75 me-2",
      }
    },
    passedDue(newVal: boolean, oldVal: boolean) {
      if (newVal) this.promptChange(this.mode)
    },
    breakNumber(newVal: number, oldVal: number) {
      if (newVal > 1 && this.timer.simpleStack) {
        let newStack = Array(newVal - 1).fill(1)
        newStack.push(2)
        this.timer.stack = newStack
      }
    },
    simpleStack(newVal: boolean, oldVal: boolean) {
      if (newVal) {
        let newStack = Array(this.timer.breakNumber - 1).fill(1)
        newStack.push(2)
        this.timer.stack = newStack
      }
    },
    paused_on(newVal: number, oldVal: number) {
      if (newVal) {
        this.promptPause()
      }
    }
  },
  mounted() {
    this.setupSync()
    moment.updateLocale('en', {
      weekdays: [
        "Ahad", "Isnin", "Selasa", "Rabu", "Khamis", "Jumaat", "Sabtu"
      ],
      months: ["Januari", "Februari", "Mac", "April", "Mei", "Jun", "Julai", "Ogos", "September",
        "Oktober", "November", "Disember"
      ]
    });
    this.getFromLocal()
    this.wakeLock = useWakeLock()
    this.pageState = this.states[this.mode] || {
      bg: "",
      bigText: "Fokus",
      timeClass: "fs-1",
      buttonClass: "btn-outline-info",
      countDownClass: "btn-outline-info w-75 me-2",
    }
    this.setTicking()
    // this.runStartOfDay()
  },
  methods: {
    async setupSync(){
      if (!this.doc.isSet || !this.userEmail) return
      this.doc.changeDoc(`fokus-settings/${this.userEmail}`)
      let data = await this.doc.getData()
      console.log('Got data:', data)
      if(data) this.getFromFirebase(data)
      else this.saveToFirebase()
    },
    alert(message: string): void {
      alert(message)
    },
    runStartOfDay(): void {
      this.welcome.title = "Selamat Datang"
      if (this.last_online) this.welcome.title = "Welcome Back!"
      this.resetStack()
      this.stopTimer(this.last_online)
      this.nextReduce = [0, 0]
      this.welcome.dayLine = moment().format("dddd, D MMMM YYYY")
      this.welcome.motivationQuote = "Setiap perjalanan menuju kejayaan pasti ada onak dan duri. Teruskan usaha dan semangat, dan jangan sesekali menyerah. Kerana penghujungnya ada kemanisan yang menanti."
      this.showModal("welcome-prompt")
    },
    resetStack(): void {
      this.stack = [...this.timer.stack]
    },
    releaseAfter(time: number = 0): void {
      if (!time) time = this.timer.extra_pad * 1000
      setTimeout(() => { this.wakeLock.release() }, time)
    },
    pauseTimer(): void {
      this.paused_on = moment().unix()
      this.saveToLocal()
      this.releaseAfter()
    },
    resumeTimer(): void {
      let lag = this.current - this.paused_on
      this.due = this.due + lag
      this.paused_on = 0
      this.saveToLocal()
      this.wakeLock.request()
      this.promptPause()
    },
    saveToLocal(last_online?: number): void {
      if (last_online === undefined) last_online = moment().unix()
      this.last_online = last_online
      let data = {
        mode: this.mode,
        showClock: this.showClock,
        nextReduce: this.nextReduce,
        stack: this.stack,
        due: this.due,
        paused_on: this.paused_on,
        timer: this.timer,
        last_online,
      }
      localStorage.setItem("fokus-data", JSON.stringify(data))
      if(this.userEmail) this.saveToFirebase(last_online)
    },
    saveToFirebase(last_online?: number): void {
      if (last_online === undefined) last_online = moment().unix()
      this.last_online = last_online
      let data = {
        mode: this.mode,
        showClock: this.showClock,
        nextReduce: this.nextReduce,
        stack: this.stack,
        due: this.due,
        paused_on: this.paused_on,
        timer: this.timer,
        last_online,
      }
      this.doc.saveData(data)
    },
    getFromLocal(): void {
      let data = localStorage.getItem("fokus-data")
      // let data = '{"mode":3,"showClock":true,"nextReduce":[36,0],"stack":[1,1],"due":1719028169,"current":1719026369,"paused_on":0,"timer":{"focus":1,"break":[0,5,30],"simpleStack":false,"breakNumber":3,"stack":[2,1,1],"extra_pad":10,"focus_extra_mode":1,"focus_extra_deduct_min":5,"focus_extra_add_rate":0.5,"rest_extra_mode":2,"rest_extra_deduct_min":1,"rest_extra_add_rate":2.5}}'
      if (data) {
        this.loading = true
        let parsed = JSON.parse(data)
        let {
          mode,
          showClock,
          nextReduce,
          stack,
          due,
          paused_on,
          last_online,
          timer } = parsed
        this.mode = mode
        this.showClock = showClock
        this.nextReduce = nextReduce
        this.stack = stack
        this.paused_on = paused_on
        this.due = due
        this.timer = timer
        this.last_online = last_online
        if (timer.focusSecond === undefined) {
          this.timer.focusSecond = 0
          this.timer.breakSecond = [0, 0, 0]
        }
        if (timer.planTime === undefined) {
          this.timer.planTime = 15
          this.timer.planSecond = 0
        }
        if (timer.focusTime === undefined) {
          this.timer.focusTime = timer.focus ? timer.focus : 25
        }
        let last2Hour = moment().subtract(2, "hours").unix()
        if (due && !paused_on && due < last2Hour) this.stopTimer(last_online)
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
      if (!this.last_online) return this.runStartOfDay()
      let hour = moment().hour()
      let startOfDay = moment().startOf('day').add(hour < 6 ? -18 : 6, 'hours').unix()
      console.log("startOfDay", startOfDay)
      console.log("last_online", this.last_online)
      if (this.last_online < startOfDay) return this.runStartOfDay()
    },
    getFromFirebase(data:any): void {
      // let data = '{"mode":3,"showClock":true,"nextReduce":[36,0],"stack":[1,1],"due":1719028169,"current":1719026369,"paused_on":0,"timer":{"focus":1,"break":[0,5,30],"simpleStack":false,"breakNumber":3,"stack":[2,1,1],"extra_pad":10,"focus_extra_mode":1,"focus_extra_deduct_min":5,"focus_extra_add_rate":0.5,"rest_extra_mode":2,"rest_extra_deduct_min":1,"rest_extra_add_rate":2.5}}'
      if (data) {
        this.loading = true
        let {
          mode,
          showClock,
          nextReduce,
          stack,
          due,
          paused_on,
          last_online,
          timer } = data
        this.mode = mode
        this.showClock = showClock
        this.nextReduce = nextReduce
        this.stack = stack
        this.paused_on = paused_on
        this.due = due
        this.timer = timer
        this.last_online = last_online
        if (timer.focusSecond === undefined) {
          this.timer.focusSecond = 0
          this.timer.breakSecond = [0, 0, 0]
        }
        if (timer.planTime === undefined) {
          this.timer.planTime = 15
          this.timer.planSecond = 0
        }
        if (timer.focusTime === undefined) {
          this.timer.focusTime = timer.focus ? timer.focus : 25
        }
        let last2Hour = moment().subtract(2, "hours").unix()
        if (due && !paused_on && due < last2Hour) this.stopTimer(last_online)
        setTimeout(() => {
          this.loading = false
        }, 500)
      }
      if (!this.last_online) return this.runStartOfDay()
      let hour = moment().hour()
      let startOfDay = moment().startOf('day').add(hour < 6 ? -18 : 6, 'hours').unix()
      console.log("startOfDay", startOfDay)
      console.log("last_online", this.last_online)
      if (this.last_online < startOfDay) return this.runStartOfDay()
    },
    changeStack(index: number): void {
      if (!this.simpleStack && this.timer.stack[index] !== undefined) {
        this.timer.stack[index] = this.timer.stack[index] % 2 + 1
      }
    },
    removeStack(index: number): void {
      if (!this.simpleStack) this.timer.stack.splice(index, 1)
    },
    pushStack(): void {
      if (!this.simpleStack) this.timer.stack.push(1)
    },
    stopTimer(last_online?: number): void {
      let mode = this.mode
      this.mode = 0
      this.due = 0
      this.releaseAfter()
      if (this.paused_on) {
        this.paused_on = 0
        this.hideModal("pause-prompt")
        if (last_online) return this.saveToLocal(last_online)
        return this.saveToLocal()
      }
      if (mode == 1) {
        this.hideModal("break-prompt")
        if (last_online) return this.saveToLocal(last_online)
        return this.saveToLocal()
      }
      this.promptFocus(true)
      if (last_online) return this.saveToLocal(last_online)
      return this.saveToLocal()
    },
    fokusSemula(): void {
      this.promptBreak()
      this.startTimer()
    },
    startPlanning(): void {
      this.hideModal("welcome-prompt")
      this.runTimer(4, this.timer.planTime * 60 + this.timer.planSecond)
    },
    startBreak(): void {
      let currentRehat = this.stack.shift() || 1
      this.promptBreak()
      let toAdd = 0
      if (this.timer.focus_extra_mode && this.timer.extra_pad < this.secondsAfterDue) {
        if (this.timer.focus_extra_mode == 1) {
          this.nextReduce[0] = this.secondsPassedOvertime
        }
        else toAdd = Math.floor(this.secondsPassedOvertime * this.timer.focus_extra_add_rate)
      }
      if (!this.stack.length) this.stack = [...this.timer.stack]
      const breakDuration = (this.timer.break[currentRehat] || 0) * 60 + (this.timer.breakSecond[currentRehat] || 0)
      this.runTimer(currentRehat + 1, breakDuration, toAdd)
    },
    startFocus(startOfDay: boolean = false): void {
      this.hideModal("focus-prompt")
      if (startOfDay) return this.runTimer(1, this.focusInSecond)
      if (this.mode == 4) {
        this.hideModal("startPrompt")
        return this.runTimer(1, this.focusInSecond)
      }
      let toAdd = 0
      if (this.timer.rest_extra_mode && this.timer.extra_pad < this.secondsAfterDue) {
        if (this.timer.rest_extra_mode == 1) {
          this.nextReduce[1] = this.secondsPassedOvertime
        }
        else toAdd = Math.floor(this.secondsPassedOvertime * this.timer.rest_extra_add_rate)
      }
      this.runTimer(1, this.focusInSecond, toAdd)
    },
    promptChange(mode: number): void {
      this.releaseAfter()
      if (mode == 1) {
        this.promptBreak()
        return window.notifyMe("Break Time!", "Let's take a break")
      }
      if (mode == 4) {
        return this.showModal("startPrompt")
      }
      this.promptFocus()
      return window.notifyMe("Focus Time!", "Let's go change the world!")
    },
    getModal(id: string): any {
      var myModalEl = document.querySelector(`#${id}`)
      return window.bootstrap.Modal.getOrCreateInstance(myModalEl)
    },
    showModal(id: string): void {
      this.getModal(id).show()
    },
    hideModal(id: string): void {
      this.getModal(id).hide()
    },
    toggleModal(id: string): void {
      this.getModal(id).toggle()
    },
    promptSetting(): void {
      var myModalEl = document.querySelector('#main-settings')
      var modal = window.bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptPause(): void {
      var myModalEl = document.querySelector('#pause-prompt')
      var modal = window.bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptBreak(): void {
      var myModalEl = document.querySelector('#break-prompt')
      var modal = window.bootstrap.Modal.getOrCreateInstance(myModalEl)
      modal.toggle()
    },
    promptFocus(close: boolean = false): void {
      var myModalEl = document.querySelector('#focus-prompt')
      var modal = window.bootstrap.Modal.getOrCreateInstance(myModalEl)
      if (close) return modal.hide()
      modal.toggle()
    },
    startTimer(): void {
      this.runTimer(1, this.focusInSecond)
    },
    runTimer(mode: number, interval: number, toAdd: number = 0): void {
      console.log("running timer m,i,tA", mode, interval, toAdd)
      this.mode = mode
      let seconds = interval
      // let seconds = 2 //Use for testing
      let reduceMode = mode - 1
      if (reduceMode > 0) reduceMode = 1
      let reduceBy = this.nextReduce[reduceMode]
      if (reduceBy) {
        let minimum = reduceMode ? this.timer.rest_extra_deduct_min * 60 : this.timer.focus_extra_deduct_min * 60
        seconds = seconds - reduceBy
        if (seconds < minimum) seconds = minimum
        this.nextReduce[reduceMode] = 0
      }
      let momentToDue = moment().add(seconds, 'seconds')
      if (toAdd) momentToDue.add(toAdd, 'seconds')
      this.setTicking()
      this.due = momentToDue.unix()
      console.log("due", this.due, this.current, this.secondsToDue)
      this.wakeLock.request()
      this.saveToLocal()
      // this.due = moment().add('seconds',2).unix()
    },
    setTicking(): void {
      clearInterval(intervalRun);
      this.updateTime()
      intervalRun = setInterval(this.updateTime, 1000) as unknown as number
    },
    updateTime(): void {
      this.current = moment().unix()
    },
    fastForward(): void {
      this.setTicking()
      this.due = moment().add(3, 'seconds').unix()
    },
    test(): void {
      this.saveToLocal(12)
    },
    test2(): void {
      this.saveToLocal(0)
    },
  },
})
</script>