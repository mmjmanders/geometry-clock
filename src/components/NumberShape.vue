<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  radius: number
  digit: number
  type: 'hours' | 'minutes' | 'seconds'
  pos: 'left' | 'right'
}>()

const pointsArray = computed<{ x: number; y: number }[]>(() =>
  Array(props.digit)
    .fill(0)
    .map((_, i) => {
      const angle = (i * 360) / props.digit
      const angleRad = (angle * Math.PI) / 180
      return {
        x: props.radius * Math.cos(angleRad),
        y: props.radius * Math.sin(angleRad),
      }
    }),
)

const points = computed<string>(() => pointsArray.value.map(({ x, y }) => `${x},${y}`).join(' '))

const id = computed<string>(() => `clock-${props.type}-${props.pos}`)
</script>

<template>
  <g :id="id" transform="rotate(-90)">
    <circle v-if="digit === 1" :cx="radius" cy="0" r="1.5" :class="type" stroke-width="1.5" />
    <template v-else-if="digit > 1">
      <polygon :points="points" stroke-width="1.5" fill="none" :class="type" />
      <circle
        v-for="(point, i) in pointsArray"
        :key="i"
        :cx="point.x"
        :cy="point.y"
        r="1.5"
        :class="type"
        stroke-width="1.5"
      />
    </template>
  </g>
</template>

<style scoped>
@reference '../main.css';

circle {
  @apply drop-shadow-sm;
}

.hours {
  @apply stroke-neon-green drop-shadow-neon-green/50;
}

circle.hours {
  @apply fill-neon-green;
}

.minutes {
  @apply stroke-neon-blue drop-shadow-neon-blue/50;
}

circle.minutes {
  @apply fill-neon-blue;
}

.seconds {
  @apply stroke-neon-yellow drop-shadow-neon-yellow/50;
}

circle.seconds {
  @apply fill-neon-yellow;
}
</style>
