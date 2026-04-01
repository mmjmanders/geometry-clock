<script setup lang="ts">
import { useClock } from '@/composables'

const { timestamp } = useClock()
</script>

<template>
  <div>{{ timestamp }}</div>
</template>

<style scoped></style>
