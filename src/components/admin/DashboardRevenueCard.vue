<template>
  <div
    class="bg-white rounded-xl shadow-sm hover:shadow-md transition px-5 py-5 flex justify-between items-center"
  >
    <!-- LEFT -->
    <div class="space-y-4">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center"
            :class="iconBg"
          >
            <i
              v-feather
              :data-feather="icon"
              class="w-5 h-5"
              :class="iconColor"
            />
          </div>

          <h4 class="font-semibold text-lg" :class="titleColor">
            {{ title }}
          </h4>
        </div>

        <!-- More (visual only por enquanto) -->
        <button class="text-muted hover:text-gray-600">
          <i v-feather data-feather="more-horizontal" class="w-4 h-4" />
        </button>
      </div>

      <!-- Info -->
      <div>
        <p class="text-muted text-sm">
          <span class="font-semibold" :class="percentColor">
            {{ percent }}
          </span>
          {{ period }}
        </p>

        <h3 class="text-2xl font-bold mt-1">
          {{ value }}
        </h3>
      </div>
    </div>

    <!-- RIGHT -->
    <div class="w-32">
      <apexchart
        type="area"
        height="80"
        :options="chartOptions"
        :series="series"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  value: string
  percent: string
  period: string
  icon: string
  iconBg: string
  iconColor: string
  titleColor: string
  percentColor: string
  series: {
    name: string
    data: number[]
  }[]
}>()

const chartOptions = {
  chart: {
    sparkline: { enabled: true },
    animations: {
      enabled: true,
      easing: 'easeinout',
      speed: 800
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 90, 100]
    }
  },
  tooltip: { enabled: false }
}
</script>
