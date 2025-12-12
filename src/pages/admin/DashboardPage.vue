<template>
  <div class="p-6 space-y-6">
    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="p-6 bg-white shadow rounded-lg">
        <p class="text-gray-500">Total Vendas</p>
        <p class="text-2xl font-bold mt-2">R$ 24.590</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg">
        <p class="text-gray-500">Usuários</p>
        <p class="text-2xl font-bold mt-2">1.263</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg">
        <p class="text-gray-500">Tickets</p>
        <p class="text-2xl font-bold mt-2">189</p>
      </div>

      <div class="p-6 bg-white shadow rounded-lg">
        <p class="text-gray-500">Conversões</p>
        <p class="text-2xl font-bold mt-2">7%</p>
      </div>
    </div>

    <!-- Chart placeholder -->
    <div
      class="bg-white p-6 shadow rounded-lg h-80 flex items-center justify-center text-gray-400"
    >
      (gráfico aqui)
    </div>
  </div>
</template>

<script setup lang="ts"></script>
