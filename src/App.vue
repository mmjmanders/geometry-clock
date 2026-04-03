<script setup lang="ts">
import GeometryClock from '@/components/GeometryClock.vue'
import GitAltIcon from '@iconify-vue/fa7-brands/git-alt'

const { VITE_APP_VERSION } = import.meta.env
const version = VITE_APP_VERSION || 'dev'
</script>

<template>
  <header>
    <h1>Geometry Clock</h1>
    <div class="version">
      <GitAltIcon />
      {{ version }}
    </div>
  </header>
  <main>
    <GeometryClock />
  </main>
</template>

<style scoped></style>
