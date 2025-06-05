<template>
  <div class="contact-item group">
    <div class="contact-icon" :class="`bg-gradient-to-r ${color}`">
      <slot />
    </div>
    <div>
      <p class="text-white font-bold text-lg">{{ title }}</p>
      <p class="text-purple-400 text-lg">{{ value }}</p>
    </div>
  </div>
</template>

<script setup>
    const props = defineProps({
    title: String,
    value: String,
    color: String
    })
</script>

<style scoped>
    .contact-item {
    @apply flex items-center space-x-6 p-6 bg-purple-900/10 backdrop-blur-sm rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:transform hover:scale-105;
    }

    .contact-icon {
    @apply w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110;
    }

    /* Form Styles */
    .form-group {
    @apply space-y-2;
    }

    .form-label {
    @apply block text-white font-bold text-lg;
    }

    .form-input {
    @apply w-full bg-purple-900/20 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300;
    }

    .form-input:focus {
    transform: scale(1.02);
    }
</style>
