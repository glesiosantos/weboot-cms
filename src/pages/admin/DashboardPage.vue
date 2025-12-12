<template>
  <div class="p-6 space-y-6">
    <!-- ===== Header ===== -->
    <div class="flex items-center justify-between mb-6">
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Network Overview</h1>
        <p class="text-gray-500">
          System status and connected devices statistics
        </p>
      </div>
      <button
        class="px-4 py-2 bg-primary text-white rounded-lg shadow hover:bg-primary/90"
      >
        Refresh Data
      </button>
    </div>

    <!-- ===== Cards ===== -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <DashboardCard
        title="Total Users"
        value="1,024"
        icon="users"
        color="primary"
      />

      <DashboardCard
        title="Active Devices"
        value="342"
        icon="cpu"
        color="blue"
      />

      <DashboardCard
        title="CPU Load"
        value="54%"
        icon="activity"
        color="yellow"
      />

      <DashboardCard
        title="Network Traffic"
        value="2.4GB"
        icon="wifi"
        color="green"
      />
    </div>

    <!-- ===== Main Graph ===== -->
    <div class="bg-white shadow rounded-xl p-6">
      <h2 class="text-lg font-semibold mb-4">Network Activities</h2>
      <NetworkChart />
    </div>

    <!-- ===== Bottom Section ===== -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Pie Chart -->
      <div class="bg-white shadow rounded-xl p-6">
        <h2 class="text-lg font-semibold mb-4">Device Usage</h2>
        <DevicePieChart />
      </div>

      <!-- Device List -->
      <div class="col-span-2 bg-white shadow rounded-xl p-6">
        <h2 class="text-lg font-semibold mb-4">Connected Devices</h2>

        <DeviceList />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardCard from '@/components/DashboardCard.vue'
import NetworkChart from '@/components/NetworkChart.vue'
import DevicePieChart from '@/components/DevicePieChart.vue'
import DeviceList from '@/components/DeviceList.vue'
</script>
