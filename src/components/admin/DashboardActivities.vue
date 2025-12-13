<template>
  <div class="bg-white p-6 rounded-xl shadow">
    <h3 class="font-semibold mb-4">Recent Activities</h3>

    <ul class="space-y-4">
      <li v-for="item in list" :key="item.text" class="flex gap-3">
        <div class="w-2 h-2 bg-primary rounded-full mt-2" />
        <div>
          <p class="font-medium">{{ item.text }}</p>
          <p class="text-muted text-sm">{{ item.time }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const list = [
  { text: 'User John placed a new order', time: '5 min ago' },
  { text: 'Product shipped to customer', time: '30 min ago' },
  { text: 'New user registered', time: '1 hour ago' }
]
</script>
