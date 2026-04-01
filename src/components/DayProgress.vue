<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  timestamp: Date
}>()

const radius = 95
const circumference = 2 * Math.PI * radius

const dashOffset = computed(
  () =>
    circumference *
    (1 -
      (props.timestamp.getHours() * 60 * 60 +
        props.timestamp.getMinutes() * 60 +
        props.timestamp.getSeconds()) /
        (24 * 60 * 60)),
)
</script>

<template>
  <circle
    stroke-width="1"
    fill="none"
    transform="rotate(-90)"
    stroke-linecap="round"
    :r="radius"
    :stroke-dasharray="circumference"
    :stroke-dashoffset="dashOffset"
  />
</template>

<style scoped>
@reference 'tailwindcss';

circle {
  @apply stroke-cyan-400 drop-shadow-sm drop-shadow-cyan-400/50;
}
</style>
