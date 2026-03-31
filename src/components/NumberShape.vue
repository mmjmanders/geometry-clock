<script setup lang="ts">
import { computed } from 'vue'

const RADIUS = 95

const props = defineProps<{
  digit: number
}>()

const points = computed<string>(() =>
  Array(props.digit)
    .fill(0)
    .map((_, i) => {
      const angle = (i * 360) / props.digit - 90
      const angleRad = (angle * Math.PI) / 180
      const x = RADIUS * Math.cos(angleRad)
      const y = RADIUS * Math.sin(angleRad)
      return { x, y }
    })
    .map(({ x, y }) => `${x},${y}`)
    .join(' '),
)
</script>

<template>
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <polygon transform="translate(100, 100)" :points="points" />
  </svg>
</template>

<style scoped></style>
