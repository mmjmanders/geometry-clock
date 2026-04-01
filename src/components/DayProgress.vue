<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  timestamp: Date
}>()

const radius = 95
const circumference = 2 * Math.PI * radius

const progressFraction = computed<number>(() => {
  const { timestamp } = props
  return (
    (timestamp.getHours() * 60 * 60 + timestamp.getMinutes() * 60 + timestamp.getSeconds()) /
    (24 * 60 * 60)
  )
})

const dashOffset = computed<number>(() => circumference * (1 - progressFraction.value))

const endPosition = computed<{ x: number; y: number }>(() => {
  const theta = progressFraction.value * 2 * Math.PI
  return {
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta),
  }
})
</script>

<template>
  <g transform="rotate(-90)">
    <circle
      stroke-width="1"
      fill="none"
      stroke-linecap="round"
      :r="radius"
      :stroke-dasharray="circumference"
      :stroke-dashoffset="dashOffset"
    />
    <circle :cx="radius" cy="0" r="1" class="dot" />
    <circle :cx="endPosition.x" :cy="endPosition.y" r="2" class="dot" />
  </g>
</template>

<style scoped>
@reference 'tailwindcss';

circle {
  @apply stroke-cyan-400 drop-shadow-sm drop-shadow-cyan-400/50;
}

.dot {
  @apply fill-cyan-400 stroke-none;
}
</style>
