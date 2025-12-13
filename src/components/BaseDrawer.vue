<template>
  <transition name="drawer">
    <div v-if="open" class="fixed inset-0 z-50 flex">
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/30 backdrop-blur-sm"
        @click="close"
      />

      <!-- Drawer -->
      <aside
        class="relative ml-auto h-full w-full max-w-md bg-white shadow-2xl rounded-l-2xl flex flex-col"
      >
        <!-- Header -->
        <header class="flex items-center justify-between p-5 border-b">
          <slot name="header" />
          <button class="text-gray-500 hover:text-gray-700" @click="close">
            ✕
          </button>
        </header>

        <!-- Content -->
        <section class="flex-1 overflow-y-auto p-6">
          <slot />
        </section>

        <!-- Footer -->
        <footer v-if="$slots.footer" class="p-5 border-t">
          <slot name="footer" />
        </footer>
      </aside>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'

/* Props */
const props = defineProps<{
  open: boolean
}>()

/* Emits */
const emit = defineEmits<{
  (e: 'close'): void
}>()

/* ✅ Slots tipados (ESSENCIAL) */
defineSlots<{
  header?: () => any
  default: () => any
  footer?: () => any
}>()

const close = () => emit('close')

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Escape' && props.open) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.drawer-enter-active {
  transition:
    transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.3s ease;
}

.drawer-leave-active {
  transition:
    transform 0.35s ease-in,
    opacity 0.25s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(110%);
  opacity: 0;
}
</style>
