import { onMounted, onUnmounted, ref } from 'vue'

export const useClock = () => {
  let timer: number | undefined = undefined
  const timestamp = ref<Date>(new Date())

  const update = () => {
    timestamp.value = new Date()
  }

  onMounted(() => {
    timer = setInterval(update, 1000)
  })

  onUnmounted(() => {
    clearInterval(timer)
  })

  return { timestamp }
}
