<template>
  <div class="tech-category">
    <h3 :class="titleClasses" class="text-xl font-bold mb-4">{{ title }}</h3>
    <div class="space-y-2">
      <div 
        v-for="tech in technologies" 
        :key="tech"
        class="tech-item"
      >
        {{ tech }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TechCategory',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'purple',
      validator: (value) => ['purple', 'pink', 'blue'].includes(value)
    },
    technologies: {
      type: Array,
      required: true
    }
  },
  computed: {
    titleClasses() {
      const colorMap = {
        purple: 'text-purple-400',
        pink: 'text-pink-400',
        blue: 'text-blue-400'
      }
      return colorMap[this.color] || 'text-purple-400'
    }
  }
}
</script>

<style scoped>
  .tech-category {
    @apply bg-purple-900/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105;
  }

  .tech-item {
    @apply text-gray-300 py-2 px-4 bg-black/30 rounded-lg mb-2 hover:bg-purple-900/20 hover:text-purple-300 transition-all duration-300 cursor-default;
  }
</style>