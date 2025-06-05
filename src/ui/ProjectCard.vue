<template>
  <div class="project-card group">
    <div :class="projectImageClasses" class="project-image">
      <div class="project-overlay">
        <div class="text-white text-xl font-bold">Ver Detalhes</div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="text-2xl font-bold text-white mb-3">{{ project.title }}</h3>
      <p class="text-gray-400 mb-6 leading-relaxed">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="tech in project.technologies" 
          :key="tech.name"
          :class="tech.color"
          class="tech-tag"
        >
          {{ tech.name }}
        </span>
      </div>
      <div class="flex gap-4">
        <a :href="project.projectUrl" class="project-link">Ver Projeto</a>
        <a :href="project.githubUrl" class="project-link">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    projectImageClasses() {
      return `bg-gradient-to-br ${this.project.gradient}`
    }
  }
}
</script>

<style scoped>
    .project-card {
    @apply bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20;
    }

    .project-image {
    @apply h-64 relative overflow-hidden;
    }

    .project-overlay {
    @apply absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm;
    }

    .project-content {
    @apply p-8;
    }

    .tech-tag {
    @apply text-white px-3 py-1 rounded-full text-sm font-semibold;
    }

    .project-link {
    @apply text-purple-400 hover:text-pink-400 font-semibold transition-colors duration-300 relative;
    }

    .project-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    transition: width 0.3s ease;
    }

    .project-link:hover::after {
    width: 100%;
    }
</style>