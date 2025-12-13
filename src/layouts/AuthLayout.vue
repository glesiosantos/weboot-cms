<template>
  <div class="min-h-screen bg-[#f5f7fa]">
    <!-- TOPBAR -->
    <header class="w-full bg-white shadow-sm border-b">
      <div
        class="max-w-full mx-auto flex items-center justify-between px-6 h-16"
      >
        <!-- Left logo/title -->
        <div class="flex items-center gap-3">
          <img
            src="../assets/logo.png"
            alt="Logo"
            class="w-8 h-8 object-contain"
          />
          <h1 class="text-xl font-semibold text-[#2d3436]">Weboot CMS</h1>
        </div>

        <!-- Right options -->
        <div class="flex items-center gap-6 text-sm">
          <button class="text-[#2d3436] hover:text-[#1abc9c] transition">
            Notifications
          </button>

          <button class="text-[#2d3436] hover:text-[#1abc9c] transition">
            Settings
          </button>

          <div class="flex items-center gap-2">
            <img
              src="https://ui-avatars.com/api/?name=Admin"
              class="w-8 h-8 rounded-full"
              alt=""
            />
            <span class="font-medium text-[#2d3436]">Admin</span>
          </div>
        </div>
      </div>
    </header>

    <!-- MAIN CONTENT -->
    <main class="p-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
