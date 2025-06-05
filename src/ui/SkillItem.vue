<template>
  <div>
    <div class="flex justify-between mb-2">
      <span class="font-semibold text-white">{{ name }}</span>
      <span class="text-sm text-purple-300">{{ percent }}</span>
    </div>
    <div class="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-500"
        :class="`bg-gradient-to-r ${color}`"
        :style="{ width: percent }"
      ></div>
    </div>
  </div>
</template>

<script setup>
    defineProps({
    name: String,
    percent: String,
    color: String
    })
</script>

<style scoped>
    /* Skills */
    .skill-item {
    @apply bg-purple-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300;
    }

    .skill-header {
    @apply flex justify-between items-center mb-4;
    }

    .skill-name {
    @apply text-white font-bold text-lg;
    }

    .skill-percent {
    @apply text-purple-400 font-semibold;
    }

    .skill-bar {
    @apply w-full bg-gray-800/50 rounded-full h-3 overflow-hidden;
    }

    .skill-progress {
    @apply h-full rounded-full transition-all duration-1000 ease-out;
    animation: skill-fill 2s ease-out;
    }
</style>