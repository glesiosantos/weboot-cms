<template>
  <div class="min-h-screen flex">
    <aside class="w-64 bg-white border-r p-4">
      <h3 class="font-bold mb-6">WeBoot CMS</h3>
      <nav class="flex flex-col gap-2">
        <router-link to="/" class="px-2 py-1 rounded hover:bg-gray-100">
          Dashboard
        </router-link>
        <router-link to="/news" class="px-2 py-1 rounded hover:bg-gray-100">
          Notícias
        </router-link>
        <router-link to="/users" class="px-2 py-1 rounded hover:bg-gray-100">
          Usuários
        </router-link>
        <router-link to="/admins" class="px-2 py-1 rounded hover:bg-gray-100">
          Administradores
        </router-link>
      </nav>
    </aside>
    <main class="flex-1 p-6 bg-gray-50">
      <slot />
    </main>
  </div>
</template>
