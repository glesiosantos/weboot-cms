<template>
  <div class="space-y-4">
    <div
      v-for="device in devices"
      :key="device.id"
      class="flex items-center justify-between border-b pb-3"
    >
      <div class="flex items-center gap-3">
        <component :is="device.icon" class="w-6 h-6 text-primary" />

        <div>
          <p class="font-medium text-gray-800">{{ device.name }}</p>
          <p class="text-xs text-gray-500">{{ device.location }}</p>
        </div>
      </div>

      <span class="text-sm font-semibold text-gray-700">
        {{ device.usage }}%
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Smartphone, Laptop, Tablet, Tv } from 'lucide-vue-next'

const devices = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    location: 'Kitchen',
    usage: 28,
    icon: Smartphone
  },
  {
    id: 2,
    name: 'Macbook Pro 16',
    location: 'Office',
    usage: 67,
    icon: Laptop
  },
  { id: 3, name: 'Samsung Tablet', location: 'Hall', usage: 34, icon: Tablet },
  { id: 4, name: 'SmartTV LG', location: 'Living Room', usage: 55, icon: Tv }
]
</script>
