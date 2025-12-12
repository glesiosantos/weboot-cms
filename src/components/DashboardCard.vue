<template>
  <div
    class="bg-white shadow rounded-xl p-5 flex items-center justify-between border border-gray-100"
  >
    <div>
      <h3 class="text-gray-500 text-sm">{{ title }}</h3>
      <p class="text-2xl font-bold">{{ value }}</p>
    </div>

    <div
      :class="[
        'w-12 h-12 flex items-center justify-center rounded-full text-white',
        colorClass
      ]"
    >
      <component :is="iconComponent" class="w-6 h-6" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Users, Cpu, Activity, Wifi } from 'lucide-vue-next'

interface Props {
  title: string
  value: string
  icon: 'users' | 'cpu' | 'activity' | 'wifi'
  color: 'primary' | 'blue' | 'yellow' | 'green'
}

const props = defineProps<Props>()

const iconMap = {
  users: Users,
  cpu: Cpu,
  activity: Activity,
  wifi: Wifi
}

const iconComponent = computed(() => iconMap[props.icon])

const colorMap = {
  primary: 'bg-primary',
  blue: 'bg-blue-500',
  yellow: 'bg-yellow-500',
  green: 'bg-green-500'
}

const colorClass = computed(() => colorMap[props.color])
</script>
