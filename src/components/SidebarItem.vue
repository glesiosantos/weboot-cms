<template>
  <div class="flex items-center gap-4 p-4 hover:bg-gray-200 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :class="iconClass"
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      stroke-width="2"
    >
      <path :d="iconPath" />
    </svg>
    <span v-if="!$parent.isCollapsed" class="text-gray-700">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineProps({
  to: String,
  icon: String,
  label: String
})

const iconMap = {
  home: 'M12 3v12m-6 6h12',
  users: 'M3 3v18h18V3H3z',
  settings: 'M5 3h14v18H5z'
}

const iconClass = computed(() => {
  return `text-gray-500 hover:text-primary transition`
})

const iconPath = computed(() => iconMap[props.icon])
</script>
