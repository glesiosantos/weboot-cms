<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Lista -->
    <UserList @add="openDrawer" />

    <!-- Drawer genérico -->
    <BaseDrawer :open="drawerOpen" @close="closeDrawer">
      <template #header>
        <h2 class="text-xl font-semibold">Novo Usuário</h2>
      </template>

      <p>Conteúdo aqui</p>

      <template #footer>
        <button class="px-4 py-2 bg-emerald-500 text-white rounded-lg">
          Salvar
        </button>
      </template>
    </BaseDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserList from './components/UserList.vue'
import BaseDrawer from '@/components/BaseDrawer.vue'

const drawerOpen = ref(false)

const openDrawer = () => {
  drawerOpen.value = true
}

const closeDrawer = () => {
  drawerOpen.value = false
}
</script>
