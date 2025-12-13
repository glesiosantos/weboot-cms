<template>
  <div class="bg-white p-6 rounded-xl shadow">
    <h3 class="font-semibold mb-4">Top Sellers</h3>

    <ul class="space-y-4">
      <li v-for="item in sellers" :key="item.name" class="flex justify-between">
        <div class="flex gap-3">
          <img :src="item.img" class="w-10 h-10 rounded-full" />
          <div>
            <p class="font-medium">{{ item.name }}</p>
            <p class="text-muted text-sm">{{ item.sales }} sales</p>
          </div>
        </div>
        <span class="font-semibold">{{ item.amount }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const sellers = [
  {
    name: 'John Doe',
    sales: 320,
    amount: '$1,200',
    img: 'https://i.pravatar.cc/48'
  },
  {
    name: 'Jane Smith',
    sales: 280,
    amount: '$1,050',
    img: 'https://i.pravatar.cc/49'
  },
  {
    name: 'Alex Brown',
    sales: 220,
    amount: '$900',
    img: 'https://i.pravatar.cc/50'
  }
]
</script>
