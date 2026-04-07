<script setup lang="ts">
import { useClock } from '@/composables'
import DayProgress from '@/components/DayProgress.vue'
import { computed } from 'vue'
import NumberShape from '@/components/NumberShape.vue'

const { timestamp } = useClock()

const hours = computed<number>(() => timestamp.value.getHours() % 12 || 12)
const minutes = computed<number>(() => timestamp.value.getMinutes())
const seconds = computed<number>(() => timestamp.value.getSeconds())

const hourLeft = computed<number>(() => Math.floor(hours.value / 10))
const hourRight = computed<number>(() => hours.value % 10)
const minuteLeft = computed<number>(() => Math.floor(minutes.value / 10))
const minuteRight = computed<number>(() => minutes.value % 10)
const secondLeft = computed<number>(() => Math.floor(seconds.value / 10))
const secondRight = computed<number>(() => seconds.value % 10)
</script>

<template>
  <div class="clock-container">
    <svg viewBox="-400 -400 800 800" xmlns="http://www.w3.org/2000/svg">
      <DayProgress :radius="356" :timestamp="timestamp" />
      <NumberShape pos="left" :radius="384" type="hours" :digit="hourLeft" />
      <NumberShape pos="right" :radius="356" type="hours" :digit="hourRight" />
      <NumberShape pos="left" :radius="176" type="minutes" :digit="minuteLeft" />
      <NumberShape pos="right" :radius="86" type="minutes" :digit="minuteRight" />
      <NumberShape pos="left" :radius="42" type="seconds" :digit="secondLeft" />
      <NumberShape pos="right" :radius="15" type="seconds" :digit="secondRight" />
    </svg>
  </div>
</template>

<style scoped></style>
