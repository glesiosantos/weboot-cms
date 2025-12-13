<template>
  <div
    class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 px-6 py-5 flex justify-between items-center"
  >
    <!-- LEFT -->
    <div class="space-y-4">
      <!-- Header -->
      <div class="flex items-center justify-between relative">
        <div class="flex items-center gap-3">
          <!-- Icon -->
          <div
            class="w-10 h-10 rounded-lg flex items-center justify-center"
            :class="iconBg"
          >
            <i
              v-feather
              :data-feather="icon"
              class="w-5 h-5"
              :class="iconColor"
            />
          </div>

          <h4
            class="font-semibold text-lg leading-none truncate max-w-[120px]"
            :class="titleColor"
          >
            {{ label }}
          </h4>
        </div>

        <!-- More -->
        <button @click.stop="toggle">
          <i
            v-feather
            data-feather="more-horizontal"
            class="text-muted w-4 h-4 cursor-pointer"
          />
        </button>

        <!-- Dropdown -->
        <div
          v-if="open"
          class="absolute right-0 top-7 z-20 w-40 bg-white rounded-lg shadow-lg border border-gray-100"
        >
          <ul class="py-2 text-sm">
            <li
              v-for="item in actions"
              :key="item.label"
              class="flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-50 text-gray-600"
              @click="item.onClick"
            >
              <i v-feather :data-feather="item.icon" class="w-4 h-4" />
              {{ item.label }}
            </li>

            <li class="my-1 border-t border-gray-100" />

            <li
              class="flex items-center gap-3 px-4 py-2 cursor-pointer text-danger hover:bg-red-50"
              @click="onDelete"
            >
              <i v-feather data-feather="trash-2" class="w-4 h-4" />
              Delete
            </li>
          </ul>
        </div>
      </div>

      <!-- Value -->
      <div>
        <p class="text-muted text-sm">
          <span class="font-semibold" :class="percentColor">
            {{ percent }}
          </span>
          {{ period }}
        </p>

        <h3 class="text-2xl font-bold mt-1">
          {{ value }}
        </h3>
      </div>
    </div>

    <!-- RIGHT -->
    <div v-if="chart" class="w-32 translate-x-1 self-end">
      <apexchart
        type="area"
        height="80"
        :options="chart.options"
        :series="chart.series"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps<{
  label: string
  value: string
  percent: string
  period: string
  icon: string
  iconBg: string
  iconColor: string
  titleColor: string
  percentColor: string
  chart?: {
    series: any[]
    options: any
  }
}>()

const open = ref(false)

const toggle = () => (open.value = !open.value)
const close = () => (open.value = false)

const actions = [
  { label: 'Refresh', icon: 'refresh-cw', onClick: close },
  { label: 'Edit', icon: 'edit', onClick: close },
  { label: 'Action', icon: 'activity', onClick: close }
]

const onDelete = () => {
  close()
  console.log('Delete clicked')
}

// Close on click outside
const onClickOutside = (e: MouseEvent) => {
  if (!(e.target as HTMLElement).closest('.relative')) {
    close()
  }
}

onMounted(() => document.addEventListener('click', onClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', onClickOutside))
</script>
