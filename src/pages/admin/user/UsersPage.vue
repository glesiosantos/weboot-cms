<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <!-- Top Actions -->
    <div
      class="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4"
    >
      <button
        class="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
      >
        <span class="mr-2">+</span> Add New
      </button>
      <input
        v-model="search"
        type="text"
        placeholder="Search..."
        class="border rounded px-4 py-2 w-full sm:w-64"
      />
    </div>

    <!-- Contacts Table -->
    <div class="overflow-x-auto bg-white rounded shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              <input v-model="selectAll" type="checkbox" @change="toggleAll" />
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Position
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr
            v-for="contact in filteredContacts"
            :key="contact.email"
            class="hover:bg-gray-50"
          >
            <td class="px-6 py-4 whitespace-nowrap">
              <input
                v-model="selected"
                type="checkbox"
                :value="contact.email"
              />
            </td>
            <td class="px-6 py-4 whitespace-nowrap flex items-center gap-3">
              <img
                :src="contact.avatar"
                alt=""
                class="w-10 h-10 rounded-full object-cover"
              />
              <span>{{ contact.name }}</span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">{{ contact.position }}</td>
            <td class="px-6 py-4 whitespace-nowrap">{{ contact.email }}</td>
            <td class="px-6 py-4 whitespace-nowrap flex gap-2">
              <button class="text-blue-500 hover:text-blue-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 17h2m-1-1v-4m-4 4h2m6 0h2m-1-1v-4"
                  />
                </svg>
              </button>
              <button class="text-red-500 hover:text-red-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <button class="text-gray-400 hover:text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6 10a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0zm6 0a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Contact {
  name: string
  position: string
  email: string
  avatar: string
}

const contacts = ref<Contact[]>([
  {
    name: 'Donald Risher',
    position: 'Full Stack Developer',
    email: 'DonaldRisher@drezon.com',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Helen Barron',
    position: 'Web Designer',
    email: 'HelenBarron@drezon.com',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    name: 'Philip Theroux',
    position: 'Ui/UX Designer',
    email: 'PhilipTheroux@drezon.com',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    name: 'Gerald Moyer',
    position: 'Backend Developer',
    email: 'GeraldMoyer@drezon.com',
    avatar: 'https://i.pravatar.cc/150?img=4'
  }
])

const search = ref('')
const selected = ref<string[]>([])
const selectAll = ref(false)

const filteredContacts = computed(() =>
  contacts.value.filter((c) =>
    c.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

watch(selected, (val) => {
  selectAll.value = val.length === contacts.value.length
})

const toggleAll = () => {
  if (selectAll.value) {
    selected.value = contacts.value.map((c) => c.email)
  } else {
    selected.value = []
  }
}
</script>
