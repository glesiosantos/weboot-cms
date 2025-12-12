<template>
  <div
    :class="{
      'w-64': !isCollapsed,
      'w-20': isCollapsed,
      'transition-all': true
    }"
    class="bg-white shadow-lg fixed h-full"
  >
    <div class="p-4 flex justify-between items-center">
      <h1 class="text-lg font-semibold">Weboot CMS</h1>
      <button class="text-primary" @click="toggleCollapse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 12h12m-6-6v12"
          />
        </svg>
      </button>
    </div>

    <nav class="mt-10 space-y-6">
      <SidebarItem to="/" icon="home" label="Dashboard" />
      <SidebarItem to="/users" icon="users" label="Users" />
      <SidebarItem to="/settings" icon="settings" label="Settings" />
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapsed = ref(false)

function toggleCollapse() {
  isCollapsed.value = !isCollapsed.value
}
</script>
