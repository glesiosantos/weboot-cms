<template>
  <div
    :class="{ dark: isDark }"
    class="flex min-h-screen bg-gray-100 dark:bg-gray-900"
  >
    <!-- Sidebar -->
    <aside
      :class="sidebarOpen ? 'w-56' : 'w-20'"
      class="transition-all duration-300 bg-white dark:bg-gray-800 shadow-lg h-screen fixed left-0 top-0 flex flex-col z-50"
    >
      <!-- Logo -->
      <div class="flex justify-center items-center p-4">
        <img
          src="../assets/logo.png"
          :class="sidebarOpen ? 'h-14' : 'h-12'"
          class="transition-all"
          alt="Logo"
        />
      </div>

      <!-- Menu -->
      <nav class="flex flex-col gap-2 px-3 mt-4">
        <button class="menu-btn" :class="{ 'menu-btn-open': sidebarOpen }">
          <HomeIcon class="w-6 h-6" />
          <span v-if="sidebarOpen">Dashboard</span>
        </button>

        <button class="menu-btn" :class="{ 'menu-btn-open': sidebarOpen }">
          <ChartBarIcon class="w-6 h-6" />
          <span v-if="sidebarOpen">Relatórios</span>
        </button>

        <button class="menu-btn" :class="{ 'menu-btn-open': sidebarOpen }">
          <Cog6ToothIcon class="w-6 h-6" />
          <span v-if="sidebarOpen">Configurações</span>
        </button>
      </nav>
    </aside>

    <!-- Main content -->
    <div class="flex-1 ml-20" :class="{ 'ml-56': sidebarOpen }">
      <!-- Header -->
      <header
        class="w-full bg-white dark:bg-gray-800 shadow h-16 flex items-center px-6 justify-between fixed top-0 z-40"
      >
        <!-- Toggle Sidebar -->
        <button
          class="p-2 rounded-lg border dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
          @click="toggleSidebar"
        >
          <Bars3Icon class="w-7 h-7 text-gray-700 dark:text-gray-200" />
        </button>

        <!-- Right options -->
        <div class="flex items-center gap-6">
          <!-- Dark mode toggle -->
          <button
            class="text-gray-700 dark:text-gray-300"
            @click="toggleDarkMode"
          >
            <SunIcon v-if="isDark" class="w-7 h-7" />
            <MoonIcon v-else class="w-7 h-7" />
          </button>

          <!-- User avatar -->
          <div class="relative">
            fdsfas
            <img
              src="https://i.pravatar.cc/100"
              class="h-10 w-10 rounded-full border cursor-pointer"
              @click="toggleUserMenu"
            />

            <div
              v-if="userMenu"
              class="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-700 shadow-lg rounded-md py-2"
            >
              <button class="submenu-item">Perfil</button>
              <button class="submenu-item">Sair</button>
            </div>
          </div>
        </div>
      </header>

      <main class="pt-20 px-6 pb-10 text-gray-700 dark:text-gray-200">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Heroicons (importados corretamente)
import {
  Bars3Icon,
  HomeIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  SunIcon,
  MoonIcon
} from '@heroicons/vue/24/outline'

const sidebarOpen = ref(false)
const isDark = ref(false)
const userMenu = ref(false)

const toggleSidebar = () => (sidebarOpen.value = !sidebarOpen.value)
const toggleDarkMode = () => (isDark.value = !isDark.value)
const toggleUserMenu = () => (userMenu.value = !userMenu.value)

window.addEventListener('click', (e) => {
  if (!e.target.closest('.relative')) userMenu.value = false
})
</script>

<style scoped>
.menu-btn {
  @apply flex items-center gap-4 px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all cursor-pointer;
}

.menu-btn-open {
  @apply justify-start;
}

.menu-btn:not(.menu-btn-open) {
  @apply justify-center;
}

.submenu-item {
  @apply w-full px-4 py-2 text-left text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600;
}
</style>
