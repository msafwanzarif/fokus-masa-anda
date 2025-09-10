<template>
  <div :class="containerClass" class="d-flex align-items-center justify-content-center" v-if="mode <= 1">
    <select :class="effectiveSelectClass" :value="modelValue" :id="id"  @change="$emit('update:modelValue', ($event.target as HTMLSelectElement)?.value)"
      class="form-select text-center border c-pointer"
      style="background-image: none;" aria-label="Default select example">
      <option v-if="!modelValue" value="" disabled selected>Set a Goal</option>
      <option v-for="goal in goalsSelect" :key="goal.id" :value="goal.id" :class="getTextClass(goal.id)">{{ goal.label }}</option>
    </select>
    <IconAdjustmentHorizontal :class="{ 'invisible': !modelValue || modelValue === 'none', [iconClass]: true }"
      @click="openGoalSettings" class="ms-2 c-pointer" width="2.0rem" height="2.0rem" />
  </div>
</template>

<script setup lang="ts">
import IconAdjustmentHorizontal from '@/components/icons/IconAdjustmentHorizontal.vue'
import { useHabitTracker } from 'szutils.vue'
import { computed } from 'vue'
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  mode: {
    type: Number,
    required: true
  },
  modelValue: {
    type: String,
    required: false,
    default: ""
  },
  goalsSelect: {
    type: Array<{id: string, label?: string}>,
    required: true
  },
  iconClass: {
    type: String,
    required: false,
    default: ""
  },
  containerClass: {
    type: String,
    required: false,
    default: ""
  },
  innerContainerClass: {
    type: String,
    required: false,
    default: ""
  },
  selectClass: {
    type: String,
    required: false,
    default: ""
  }
})
const effectiveSelectClass = computed(() => {
  let tracker = trackers.value[props.modelValue]
  if(!tracker) return `${props.selectClass} border-white text-white`
  let borderClass = getBorderClass(tracker)
  return `${props.selectClass} ${borderClass}`
})
function getBorderClass(tracker: ReturnType<typeof useHabitTracker>) {
  const { today } = tracker
  if(today.value.isSuccess) return 'border-success text-success'
  if(today.value.isPassed) return 'border-info text-info'
  if(today.value.progress > 0) return 'border-warning text-warning'
  return 'border-white text-white'
}
function getTextClass(id:string){
  let tracker = trackers.value[id]
  if(!tracker) return `text-white`
  const { today } = tracker
  if(today.value.isSuccess) return 'text-success'
  if(today.value.isPassed) return 'text-info'
  if(today.value.progress > 0) return 'text-warning'
  return 'text-white'
}
const trackers = computed(() => {
  let toReturn: Record<string, ReturnType<typeof useHabitTracker>> = {
  }
  for( let goal of props.goalsSelect) {
    if (goal.id == 'none' || goal.id == 'new-goal') continue
    toReturn[goal.id] = useHabitTracker(goal.id,{ skipWatcher:true })
  }
  return toReturn
})
function openGoalSettings(){
  return window.showModal(`goal-detail-settings-${props.modelValue}`)
}
</script>

<style scoped>
.goal-text{
  font-size: 3vmin;
}
</style>