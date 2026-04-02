<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  radius: number
  timestamp: Date
}>()

const circumference = 2 * Math.PI * props.radius

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
    x: props.radius * Math.cos(theta),
    y: props.radius * Math.sin(theta),
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
    <circle :cx="endPosition.x" :cy="endPosition.y" r="1" class="dot" />
  </g>
</template>

<style scoped>
@reference '../main.css';

circle {
  @apply stroke-neon-pink drop-shadow-sm drop-shadow-neon-pink/50;
}

.dot {
  @apply fill-neon-pink stroke-none;
}
</style>
