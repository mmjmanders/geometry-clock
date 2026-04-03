<script setup lang="ts">
import GeometryClock from '@/components/GeometryClock.vue'

const { VITE_APP_VERSION } = import.meta.env
const version = VITE_APP_VERSION || 'dev'
</script>

<template>
  <header>
    <h1>Geometry Clock</h1>
    <span class="version">{{ version }}</span>
  </header>
  <main>
    <GeometryClock />
  </main>
</template>

<style scoped></style>
