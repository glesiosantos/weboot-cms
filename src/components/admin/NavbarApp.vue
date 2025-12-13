<template>
  <header
    class="flex items-center justify-between h-16 px-4 bg-white border-b shadow"
  >
    <div class="flex items-center">
      <button
        class="lg:hidden mr-4 p-2 hover:bg-light rounded"
        @click="$emit('toggleSidebar')"
      >
        <i class="feather-menu text-2xl" />
      </button>
      <h1 class="text-xl font-semibold text-dark">Dashboard</h1>
    </div>

    <div class="flex items-center space-x-4">
      <i class="feather-bell text-xl text-secondary hover:text-dark" />
      <i class="feather-user text-xl text-secondary hover:text-dark" />
    </div>
  </header>
</template>

<script setup></script>
