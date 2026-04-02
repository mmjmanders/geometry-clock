<script setup lang="ts">
import GeometryClock from '@/components/GeometryClock.vue'
</script>

<template>
  <header>
    <h1>Geometry Clock</h1>
  </header>
  <main>
    <GeometryClock />
  </main>
</template>

<style scoped>
@reference './main.css';

h1 {
  @apply text-neon-yellow drop-shadow-lg drop-shadow-neon-yellow/50;
}
</style>
