<template>
  <div class="project-card group">
    <!-- Badge de desenvolvimento -->
    <div v-if="project.inDevelopment" class="development-badge">
      <div class="development-icon">
        <div class="pulse-dot"></div>
      </div>
      <span class="development-text">Em Desenvolvimento</span>
    </div>

    <div :class="projectImageClasses" class="project-image" @click="goToProjectDetails">
      <div class="project-overlay">
        <div class="text-white text-xl font-bold">Ver Detalhes</div>
      </div>
    </div>
    <div class="project-content">
      <h3 class="text-2xl font-bold text-white mb-3 cursor-pointer hover:text-purple-400 transition-colors duration-300" @click="goToProjectDetails"> 
        {{ project.title }}
      </h3>
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
        <a 
          :href="project.projectUrl" 
          class="project-link"
          :class="{ 'opacity-50 pointer-events-none': project.inDevelopment && project.projectUrl === '#' }"
        >
          Ver Projeto
        </a>
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
  },
  methods: {
    goToProjectDetails() {
      // Navegar para a página de detalhes do projeto
      this.$router.push(`/projeto/${this.project.id}`)
    }
  }
}
</script>

<style scoped>
.project-card {
  @apply bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 relative;
}

.development-badge {
  @apply absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg;
  backdrop-filter: blur(8px);
}

.development-icon {
  @apply relative flex items-center justify-center;
}

.pulse-dot {
  @apply w-2 h-2 bg-white rounded-full;
  animation: pulse-glow 2s infinite;
}

.development-text {
  @apply text-white font-semibold;
}

@keyframes pulse-glow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.project-image {
  @apply h-64 relative overflow-hidden cursor-pointer;
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
  @apply text-white font-semibold transition-all duration-300 relative text-center;
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