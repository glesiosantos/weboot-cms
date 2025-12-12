<template>
  <div class="relative">
    <!-- Avatar -->
    <img
      src="https://i.pravatar.cc/100"
      class="h-9 w-9 rounded-full cursor-pointer border"
      @click="toggleMenu"
    />

    <!-- Dropdown -->
    <div
      v-if="isMenuOpen"
      class="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 py-2 z-10"
    >
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">
        View Profile
      </a>
      <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-200">
        Logout
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>
