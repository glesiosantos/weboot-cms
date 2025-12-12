<template>
  <header class="flex items-center justify-between h-16 bg-white shadow px-4">
    <!-- LEFT -->
    <div class="flex items-center gap-4">
      <button
        class="p-2 hover:bg-gray-100 rounded-lg"
        @click="$emit('toggleSidebar')"
      >
        <i data-feather="menu" class="w-5 h-5" />
      </button>

      <h1 class="text-xl font-semibold">Dashboard</h1>
    </div>

    <!-- RIGHT MENUS -->
    <div class="flex items-center gap-4">
      <!-- Notifications -->
      <div class="relative" @click="toggleNotifs">
        <button class="p-2 hover:bg-gray-100 rounded-lg relative">
          <i data-feather="bell" class="w-5 h-5" />
          <span
            class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1"
          >
            3
          </span>
        </button>

        <div
          v-if="showNotifs"
          class="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-lg p-4 z-50"
        >
          <p class="font-semibold mb-2">Notificações</p>
          <p class="text-gray-600 text-sm">Nenhuma nova notificação.</p>
        </div>
      </div>

      <!-- Messages -->
      <div class="relative" @click="toggleMsgs">
        <button class="p-2 hover:bg-gray-100 rounded-lg">
          <i data-feather="mail" class="w-5 h-5" />
        </button>

        <div
          v-if="showMsgs"
          class="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-lg p-4 z-50"
        >
          <p class="font-semibold mb-2">Mensagens</p>
          <p class="text-gray-600 text-sm">Nenhuma mensagem.</p>
        </div>
      </div>

      <!-- User Menu -->
      <div class="relative" @click="toggleUserMenu">
        <img
          src="https://i.pravatar.cc/40"
          class="w-10 h-10 rounded-full cursor-pointer"
        />

        <div
          v-if="showUser"
          class="absolute right-0 mt-2 w-48 bg-white shadow-xl rounded-lg py-2 z-50"
        >
          <a class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >Meu Perfil</a
          >
          <a class="block px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >Configurações</a
          >
          <div class="border-t my-2" />
          <a
            class="block px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
            >Sair</a
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Dropdown states
import { ref, onMounted, nextTick } from 'vue'
import feather from 'feather-icons'

const showUser = ref(false)
const showMsgs = ref(false)
const showNotifs = ref(false)

function toggleUserMenu() {
  showUser.value = !showUser.value
  showMsgs.value = false
  showNotifs.value = false
}

function toggleMsgs() {
  showMsgs.value = !showMsgs.value
  showUser.value = false
  showNotifs.value = false
}

function toggleNotifs() {
  showNotifs.value = !showNotifs.value
  showUser.value = false
  showMsgs.value = false
}

onMounted(() => {
  nextTick(() => feather.replace())
})
</script>
