export interface StartPromptProps {
  goalsSelect: Array<{ id: string; label?: string }>
  selectedGoalId: string
}

export interface StartPromptEmits {
  (e: 'settings-click'): void
  (e: 'start-focus'): void
  (e: 'update-goal', goalId: string): void
}

export interface WelcomePromptProps {
  welcome: {
    title: string
    dayLine: string
    motivationQuote: string
  }
  userEmail?:string
  lastOnline: number
  goalsSelect: Array<{ id: string; label?: string }>
  selectedGoalId: string
}

export interface WelcomePromptEmits {
  (e: 'settings-click'): void
  (e: 'start-planning'): void
  (e: 'start-focus', startOfDay: boolean): void
  (e: 'update-goal', goalId: string): void
}

export interface BreakPromptProps {
  rehatDetail: Array<{ text: string } | null>
  nextRehat: number
  isOvertime: boolean
  hoursOvertime: string
  minutesOvertime: string
  secondsOvertime: string
  timer: {
    extra_pad: number
    break: number[]
    breakSecond: number[]
  }
  secondsAfterDue: number
}

export interface BreakPromptEmits {
  (e: 'settings-click'): void
  (e: 'stop-timer'): void
  (e: 'fokus-semula'): void
  (e: 'start-break'): void
}

export interface PausePromptProps {
  hours: string
  minutes: string
  seconds: string
  goalsSelect: Array<{ id: string; label?: string }>
  selectedGoalId: string
}

export interface PausePromptEmits {
  (e: 'settings-click'): void
  (e: 'stop-timer'): void
  (e: 'resume-timer'): void
  (e: 'update-goal', goalId: string): void
}

export interface FocusPromptProps {
  isOvertime: boolean
  hoursOvertime: string
  minutesOvertime: string
  secondsOvertime: string
  timer: {
    extra_pad: number
  }
  secondsAfterDue: number,
  goalsSelect: Array<{ id: string; label?: string }>
  selectedGoalId: string
}

export interface FocusPromptEmits {
  (e: 'settings-click'): void
  (e: 'stop-timer'): void
  (e: 'start-focus'): void
  (e: 'update-goal', goalId: string): void
}

export interface MainSettingsProps {
  // No props needed for now
}

export interface MainSettingsEmits {
  (e: 'start-day'): void
}
