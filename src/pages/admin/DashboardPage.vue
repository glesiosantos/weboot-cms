<template>
  <div class="space-y-6">
    <DashboardCards />
    <DashboardCharts />

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <DashboardActivities class="lg:col-span-1" />
      <DashboardTopSellers class="lg:col-span-1" />
      <DashboardRecentOrders class="lg:col-span-1" />
    </div>
  </div>
</template>

<script setup>
import DashboardCards from '@/components/admin/DashboardCards.vue'
import DashboardCharts from '@/components/admin/DashboardCharts.vue'
import DashboardActivities from '@/components/admin/DashboardActivities.vue'
import DashboardTopSellers from '@/components/admin/DashboardTopSellers.vue'
import DashboardRecentOrders from '@/components/admin/DashboardRecentOrders.vue'
</script>
