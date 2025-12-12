<template>
  <apexchart type="donut" height="280" :options="options" :series="series" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const series = ref([44, 55, 13, 33])

const options = ref({
  labels: ['Mobile', 'Desktop', 'Tablet', 'TV'],
  colors: ['#0EA5E9', '#22C55E', '#FACC15', '#6366F1'],
  legend: {
    position: 'bottom'
  }
})
</script>
