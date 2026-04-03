<script setup lang="ts">
import GeometryClock from '@/components/GeometryClock.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const { VITE_APP_VERSION } = import.meta.env
const version = VITE_APP_VERSION || 'dev'
</script>

<template>
  <header>
    <h1>Geometry Clock</h1>
    <div class="version">
      <FontAwesomeIcon :icon="['fab', 'git-alt']" />
      {{ version }}
    </div>
  </header>
  <main>
    <GeometryClock />
  </main>
</template>

<style scoped></style>
