export interface TimerConfig {
  focusTime: number
  focusSecond: number
  planTime: number
  planSecond: number
  break: [number, number, number]
  breakSecond: [number, number, number]
  simpleStack: boolean
  breakNumber: number
  stack: number[]
  extra_pad: number
  focus_extra_mode: number
  focus_extra_deduct_min: number
  focus_extra_add_rate: number
  rest_extra_mode: number
  rest_extra_deduct_min: number
  rest_extra_add_rate: number
}
