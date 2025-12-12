<template>
  <apexchart
    type="area"
    height="300"
    :options="chartOptions"
    :series="series"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const series = ref([
  {
    name: 'Network',
    data: [31, 40, 28, 51, 42, 109, 100]
  }
])

const chartOptions = ref({
  chart: {
    toolbar: { show: false },
    foreColor: '#6b7280',
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 1000,
      animateGradually: {
        enabled: true,
        delay: 150
      }
    }
  },
  stroke: {
    curve: 'smooth',
    width: 3
  },
  colors: ['#26c6da'],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.25,
      opacityTo: 0.05
    }
  },
  xaxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  }
})
</script>
