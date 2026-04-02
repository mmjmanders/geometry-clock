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
    <polygon v-if="digit > 1" :points="points" stroke-width="2" fill="none" />
  </g>
</template>

<style scoped></style>
