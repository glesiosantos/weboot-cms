<template>
  <div>
    <p class="text-sm mb-1">{{ label }}</p>

    <div class="w-full h-2 bg-gray-200 rounded">
      <div class="h-2 rounded bg-[#1abc9c]" :style="{ width: value + '%' }" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  label: String,
  value: Number
})
</script>
