<template>
  <div class="min-h-screen bg-gray-100 text-gray-700">
    <!-- Top Bar -->
    <header
      class="w-full bg-white shadow-md h-16 flex items-center px-6 justify-between fixed top-0 left-0 z-50"
    >
      <div class="flex items-center gap-3">
        <img src="/public/logo.png" class="h-7" alt="Logo" />
        <h1 class="text-lg font-semibold">Dashboard</h1>
      </div>

      <div class="flex items-center gap-6">
        <div class="hidden md:flex items-center gap-1 text-gray-600">
          <span class="text-sm">Welcome back,</span>
          <span class="font-semibold">User</span>
        </div>

        <button class="relative text-gray-600">
          <span
            class="absolute -top-1 -right-1 bg-success rounded-full w-2 h-2"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M12 2a7 7 0 00-7 7v4.586l-.707.707A1 1 0 005 17h14a1 1 0 00.707-1.707L19 13.586V9a7 7 0 00-7-7zM10 20a2 2 0 104 0h-4z"
            />
          </svg>
        </button>

        <img
          src="https://i.pravatar.cc/100"
          class="h-9 w-9 rounded-full border shadow"
        />
      </div>
    </header>

    <!-- Content -->
    <main class="pt-20 px-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
