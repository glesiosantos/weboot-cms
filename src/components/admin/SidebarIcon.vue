<template>
  <aside
    class="flex flex-col bg-primary text-white w-20 lg:w-64 transition-all duration-300"
    :class="{ 'w-20': !open, 'w-64': open }"
  >
    <!-- Logo -->
    <div
      class="flex items-center justify-center h-16 border-b border-primary/50"
    >
      <span class="text-xl font-bold">Logo</span>
    </div>

    <!-- Menu -->
    <nav class="flex-1 flex flex-col py-4 space-y-2">
      <MenuItem icon="home" label="Dashboard" :open="open" />
      <MenuItem icon="user" label="Usuários" :open="open" />
      <MenuItem icon="settings" label="Configurações" :open="open" />
    </nav>

    <!-- Colapsar -->
    <button
      class="py-2 text-center text-secondary hover:text-white"
      @click="$emit('toggle')"
    >
      <i class="feather-chevron-left" />
    </button>
  </aside>
</template>

<script setup>
import MenuItem from '@/components/admin/MenuItem.vue'
defineProps({ open: Boolean })
</script>
