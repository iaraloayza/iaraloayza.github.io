<template>
  <div class="contact-item group">
    <div class="contact-icon" :class="`bg-gradient-to-r ${color}`">
      <slot />
    </div>
    <div class="flex-1 min-w-0">
      <p class="text-white font-bold text-base sm:text-lg">{{ title }}</p>
      <p class="text-purple-400 text-sm sm:text-base lg:text-lg break-all sm:break-words">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
  const { title, value, color } = defineProps({
    title: String,
    value: String,
    color: String
  })
</script>

<style scoped>
    .contact-item {
    @apply flex items-center space-x-3 sm:space-x-4 lg:space-x-6 p-4 sm:p-5 lg:p-6 bg-purple-900/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105;
    }

    .contact-icon {
    @apply w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0;
    }

    /* Form Styles */
    .form-group {
    @apply space-y-2;
    }

    .form-label {
    @apply block text-white font-bold text-base sm:text-lg;
    }

    .form-input {
    @apply w-full bg-purple-900/20 border border-purple-500/30 rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm sm:text-base;
    }

    .form-input:focus {
    transform: scale(1.02);
    }
</style>