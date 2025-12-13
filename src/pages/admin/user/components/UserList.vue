<template>
  <div class="bg-white rounded-xl shadow p-6">
    <div class="flex justify-between items-center mb-6">
      <button
        class="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
        @click="$emit('add')"
      >
        <PlusIcon class="w-5 h-5" />
        Add New
      </button>

      <div class="relative">
        <MagnifyingGlassIcon
          class="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search..."
          class="pl-10 border rounded-lg px-4 py-2 focus:ring focus:ring-emerald-300"
        />
      </div>
    </div>

    <table class="w-full text-left border-t">
      <thead class="text-gray-500">
        <tr>
          <th class="py-3">Name</th>
          <th>Position</th>
          <th>Email</th>
          <th class="text-right">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="user in users"
          :key="user.email"
          class="border-t hover:bg-gray-50 transition"
        >
          <td class="py-4 font-medium">{{ user.name }}</td>
          <td>{{ user.position }}</td>
          <td>{{ user.email }}</td>
          <td class="text-right">
            <div class="flex justify-end items-center gap-3">
              <button class="text-blue-600 hover:text-blue-800">
                <PencilSquareIcon class="w-5 h-5" />
              </button>

              <button class="text-red-500 hover:text-red-700">
                <TrashIcon class="w-5 h-5" />
              </button>

              <button class="text-gray-500 hover:text-gray-700">
                <EllipsisVerticalIcon class="w-5 h-5" />
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import {
  PencilSquareIcon,
  TrashIcon,
  EllipsisVerticalIcon,
  PlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

interface User {
  name: string
  position: string
  email: string
}

const users: User[] = [
  {
    name: 'Donald Risher',
    position: 'Full Stack Developer',
    email: 'donald@empresa.com'
  },
  {
    name: 'Helen Barron',
    position: 'Web Designer',
    email: 'helen@empresa.com'
  }
]
</script>
