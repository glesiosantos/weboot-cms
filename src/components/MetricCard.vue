<template>
  <div class="bg-white p-4 rounded shadow">
    <h4 class="text-sm text-gray-500">{{ title }}</h4>
    <p class="text-3xl font-bold text-[#2d3436]">{{ value }}</p>
    <p class="text-xs" :style="{ color }">{{ change }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  value: String,
  change: String,
  color: String
})
</script>
