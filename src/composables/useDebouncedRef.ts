import { ref, watch } from "vue"

export function useDebouncedRef<T>(initial: T, delay = 500) {
  const state = ref(initial)
  const debounced = ref(initial)
  let timeout: ReturnType<typeof setTimeout>

  watch(state, (val) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      debounced.value = val as T
    }, delay)
  })

  return { state, debounced }
}
