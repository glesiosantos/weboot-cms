<template>
  <aside
    :class="[
      'bg-white shadow h-screen fixed top-0 left-0 transition-all duration-300 z-40',
      collapsed ? 'w-20' : 'w-64'
    ]"
  >
    <div class="flex items-center justify-center h-16 border-b">
      <span class="text-2xl font-bold">W</span>
    </div>

    <nav class="p-4">
      <ul class="space-y-2">
        <li>
          <a
            class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200 transition"
            href="#"
          >
            <i data-feather="home" class="w-5 h-5" />
            <span v-if="!collapsed">Dashboard</span>
          </a>
        </li>

        <li>
          <a class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200">
            <i data-feather="layers" class="w-5 h-5" />
            <span v-if="!collapsed">Apps</span>
          </a>
        </li>

        <li>
          <a class="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-200">
            <i data-feather="settings" class="w-5 h-5" />
            <span v-if="!collapsed">Configurações</span>
          </a>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import feather from 'feather-icons'
import { onMounted, nextTick } from 'vue'

const props = defineProps({
  collapsed: { type: Boolean, default: false }
})

onMounted(() => nextTick(() => feather.replace()))
</script>
