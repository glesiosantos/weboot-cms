<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Login</h2>

    <form @submit.prevent="submit">
      <input
        v-model="email"
        type="email"
        placeholder="E-mail"
        class="border p-2 w-full mb-4"
      />

      <input
        v-model="senha"
        type="password"
        placeholder="Senha"
        class="border p-2 w-full mb-4"
      />

      <button class="bg-blue-500 text-white w-full py-2 rounded">
        Enviar Token
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const senha = ref('')
const router = useRouter()

const submit = () => {
  // sua lógica
  router.push({ name: 'token' })
}
</script>
