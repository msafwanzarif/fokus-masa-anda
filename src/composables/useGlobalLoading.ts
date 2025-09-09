// src/composables/useGlobalLoading.ts
import { ref, computed, watch, onUnmounted, toValue, type Ref, type MaybeRefOrGetter } from "vue"

interface Source {
  flag: Ref<boolean>
  weight: number
}

const sources = new Set<Source>()
const sourceCount = ref(0)

export function useGlobalLoading(flag: MaybeRefOrGetter<boolean>, weight: number = 1) {
  const normalized = ref(toValue(flag))

  // keep ref synced with flag
  watch(
    () => toValue(flag),
    (val) => (normalized.value = val),
    { immediate: true }
  )

  const source: Source = { flag: normalized, weight }
  sources.add(source)
  sourceCount.value = sources.size

  onUnmounted(() => {
    sources.delete(source)
    sourceCount.value = sources.size
  })
  const totalWeight = computed(() => {
    if(sourceCount.value < 1) return 0
    let weight = 0
    for (const src of sources) {
      weight += src.weight
    }
    return weight
  })
  const finishedWeight = computed(() => {
    if(sourceCount.value < 1) return 0
    let weight = 0
    for (const src of sources) {
      if (!src.flag.value) weight += src.weight
    }
    return weight
  })
  const percentLoaded = computed(() => {
    return (finishedWeight.value / totalWeight.value) * 100
  })

  const isLoading = computed(() => percentLoaded.value < 100)
  const isLoaded = computed(() => percentLoaded.value >= 100)

  return { percentLoaded, finishedWeight, totalWeight, isLoading, isLoaded }
}
