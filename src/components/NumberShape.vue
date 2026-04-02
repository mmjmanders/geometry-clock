<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  radius: number
  digit: number
  type: 'hours' | 'minutes' | 'seconds'
}>()

const points = computed<string>(() =>
  Array(props.digit)
    .fill(0)
    .map((_, i) => {
      const angle = (i * 360) / props.digit
      const angleRad = (angle * Math.PI) / 180
      const x = props.radius * Math.cos(angleRad)
      const y = props.radius * Math.sin(angleRad)
      return { x, y }
    })
    .map(({ x, y }) => `${x},${y}`)
    .join(' '),
)
</script>

<template>
  <g transform="rotate(-90)">
    <circle v-if="digit === 1" :cx="radius" cy="0" r="1" :class="type" stroke-width="1" />
    <polygon v-else-if="digit > 1" :points="points" stroke-width="1" fill="none" :class="type" />
  </g>
</template>

<style scoped>
@reference '../main.css';

.hours {
  @apply stroke-neon-green  drop-shadow-sm drop-shadow-neon-green/50;
}

circle.hours {
  @apply fill-neon-green;
}

.minutes {
  @apply stroke-neon-blue  drop-shadow-sm drop-shadow-neon-blue/50;
}

circle.minutes {
  @apply fill-neon-blue;
}

.seconds {
  @apply stroke-neon-yellow  drop-shadow-sm drop-shadow-neon-yellow/50;
}

circle.seconds {
  @apply fill-neon-yellow;
}
</style>
