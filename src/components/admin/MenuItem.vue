<template>
  <router-link
    class="flex items-center px-3 py-2 hover:bg-primary/80 rounded transition-colors"
    :to="to"
  >
    <i :class="`feather-${icon} text-xl flex-none`" />
    <span v-if="open" class="ml-3 text-sm font-medium">
      {{ label }}
    </span>
  </router-link>
</template>

<script setup>
defineProps({
  icon: String,
  label: String,
  to: { type: String, default: '#' },
  open: Boolean
})
</script>
