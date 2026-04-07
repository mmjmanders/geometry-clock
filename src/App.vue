<script setup lang="ts">
import GeometryClock from '@/components/GeometryClock.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { VITE_APP_VERSION } = import.meta.env
const version = VITE_APP_VERSION || 'dev'
</script>

<template>
  <header>
    <h1>Geometry Clock</h1>
  </header>
  <main>
    <GeometryClock />
  </main>
  <footer>
    <FontAwesomeIcon :icon="['fab', 'git-alt']" />
    {{ version }}
  </footer>
</template>

<style scoped></style>
