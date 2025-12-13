<template>
  <div class="flex">
    <!-- SIDEBAR -->
    <Sidebar :collapsed="collapsed" />

    <!-- MAIN CONTENT -->
    <div
      :class="[
        'flex-1 min-h-screen bg-gray-100 transition-all duration-300',
        collapsed ? 'ml-20' : 'ml-64'
      ]"
    >
      <Header @toggle-sidebar="collapsed = !collapsed" />

      <main class="p-6 overflow-auto">
        <slot />
        <RouterView />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Header from '@/components/admin/HeaderApp.vue'
import Sidebar from '@/components/admin/SidebarApp.vue'
import type { RouterView } from 'vue-router'

const collapsed = ref(true)
</script>
