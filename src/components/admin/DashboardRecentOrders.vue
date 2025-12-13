<template>
  <div class="bg-white p-6 rounded-xl shadow">
    <h3 class="font-semibold mb-4">Recent Orders</h3>

    <table class="w-full text-left">
      <thead>
        <tr class="border-b text-muted">
          <th class="py-2">Order ID</th>
          <th class="py-2">Customer</th>
          <th class="py-2">Amount</th>
          <th class="py-2">Status</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="order in orders" :key="order.id" class="border-b text-sm">
          <td class="py-2">{{ order.id }}</td>
          <td class="py-2">{{ order.customer }}</td>
          <td class="py-2">{{ order.amount }}</td>
          <td class="py-2">
            <span
              :class="[
                'px-3 py-1 rounded-full text-white text-xs',
                order.status === 'Paid'
                  ? 'bg-success'
                  : order.status === 'Pending'
                    ? 'bg-warning'
                    : 'bg-danger'
              ]"
            >
              {{ order.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const orders = [
  { id: '#001', customer: 'John', amount: '$120', status: 'Paid' },
  { id: '#002', customer: 'Emma', amount: '$85', status: 'Pending' },
  { id: '#003', customer: 'Alex', amount: '$75', status: 'Canceled' }
]
</script>
