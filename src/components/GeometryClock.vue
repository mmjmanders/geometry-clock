<script setup lang="ts">
import { useClock } from '@/composables'
import DayProgress from '@/components/DayProgress.vue'

const { timestamp } = useClock()
</script>

<template>
  <div class="clock-container">
    <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
      <DayProgress :timestamp="timestamp" />
    </svg>
  </div>
</template>

<style scoped></style>
