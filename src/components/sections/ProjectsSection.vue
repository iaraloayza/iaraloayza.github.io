<template>
  <section id="projects" class="relative py-20 px-6 z-10">
    <div class="container mx-auto max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {{ $t('projects.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      
      <!-- Grid normal para 3 ou menos projetos -->
      <div v-if="projects.length <= 3" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
        />
      </div>

      <!-- Carrossel para mais de 3 projetos -->
      <div v-else class="relative">
        <button 
          @click="previousSlide"
          :disabled="currentSlide === 0"
          class="carousel-btn carousel-btn-left"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide === 0 }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <div class="carousel-container">
          <div 
            class="carousel-wrapper"
            :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
          >
            <div 
              v-for="project in projects" 
              :key="project.id"
              class="carousel-slide"
            >
              <ProjectCard :project="project" />
            </div>
          </div>
        </div>

        <button 
          @click="nextSlide"
          :disabled="currentSlide >= maxSlides"
          class="carousel-btn carousel-btn-right"
          :class="{ 'opacity-50 cursor-not-allowed': currentSlide >= maxSlides }"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>

        <div class="flex justify-center mt-8 space-x-2">
          <button
            v-for="n in maxSlides + 1"
            :key="n"
            @click="goToSlide(n - 1)"
            class="carousel-indicator"
            :class="{ 'active': currentSlide === n - 1 }"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '../../ui/ProjectCard.vue'

export default {
  name: 'ProjectsSection',
  components: { ProjectCard },
  data() {
    return {
      currentSlide: 0,
      slidesPerView: 3,
      // Apenas chaves e URLs, textos vêm do i18n
      projects: [
        { id: 1, key: 'monitora', gradient: 'from-purple-600 to-purple-800', projectUrl: 'https://monitora.saude.ma.gov.br/', githubUrl: '#', technologies: [{ name: 'Laravel', color: 'bg-red-600' }, { name: 'PostgreSQL', color: 'bg-blue-600' }], inDevelopment: false },
        { id: 2, key: 'hans', gradient: 'from-pink-600 to-purple-800', projectUrl: 'https://hansmais.netlify.app/', githubUrl: '#', apkUrl: '/apk/hans-plus.apk',technologies: [{ name: 'Flutter', color: 'bg-purple-600' }, { name: 'Dart', color: 'bg-blue-600' }, { name: 'Firebase', color: 'bg-yellow-600' }] },
        { id: 3, key: 'renaveh', gradient: 'from-purple-500 to-pink-600', projectUrl: 'https://renaveh.saude.ma.gov.br/', githubUrl: '#', technologies: [{ name: 'Laravel', color: 'bg-red-600' }, { name: 'MySQL', color: 'bg-cyan-600' }], inDevelopment: false },
        { id: 4, key: 'masemfome', gradient: 'from-purple-500 to-pink-600', projectUrl: 'https://maranhaolivredafome.saude.ma.gov.br/', githubUrl: '#', technologies: [{ name: 'Laravel', color: 'bg-red-600' }, { name: 'MySQL', color: 'bg-cyan-600' }], inDevelopment: true },
        { id: 5, key: 'cadserv', gradient: 'from-purple-500 to-pink-600', projectUrl: 'https://cadserv.saude.ma.gov.br/', githubUrl: '#', technologies: [{ name: 'Laravel', color: 'bg-red-600' }, { name: 'MySQL', color: 'bg-cyan-600' }] },
        { id: 6, key: 'plandox', gradient: 'from-purple-500 to-pink-600', projectUrl: '#', githubUrl: '#', technologies: [{ name: 'Python', color: 'bg-yellow-600' }, { name: 'Docker', color: 'bg-blue-600' }, { name: 'Microserviços', color: 'bg-purple-600' }], inDevelopment: true },
        { id: 7, key: 'react', gradient: 'from-purple-500 to-pink-600', projectUrl: '#', githubUrl: '#', technologies: [{ name: 'Laravel', color: 'bg-red-600' }, { name: 'PostgreSQL', color: 'bg-blue-600' }], inDevelopment: true }
      ]
    }
  },
  computed: {
    maxSlides() { return Math.max(0, this.projects.length - this.slidesPerView) },
    slideWidth() { return 100 / this.slidesPerView }
  },
  methods: {
    updateSlidesPerView() {
      if (window.innerWidth < 768) this.slidesPerView = 1
      else if (window.innerWidth < 1024) this.slidesPerView = 2
      else this.slidesPerView = 3
    },
    nextSlide() { if (this.currentSlide < this.maxSlides) this.currentSlide++ },
    previousSlide() { if (this.currentSlide > 0) this.currentSlide-- },
    goToSlide(index) { this.currentSlide = index }
  },
  mounted() {
    this.updateSlidesPerView()
    window.addEventListener('resize', this.updateSlidesPerView)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateSlidesPerView)
  }
}
</script>


<style scoped>
.carousel-container {
  @apply overflow-hidden rounded-3xl;
  /* Adicionando padding para dar espaço para a expansão dos cards */
  padding: 15px 20px;
  margin: 0 -20px; /* Compensando o padding lateral */
}

.carousel-wrapper {
  @apply flex transition-transform duration-500 ease-in-out;
}

.carousel-slide {
  @apply flex-none w-full md:w-1/2 lg:w-1/3 px-4;
  /* Adicionando padding vertical para dar espaço para expansão */
  padding-top: 5px;
  padding-bottom: 5px;
}

.carousel-btn {
  @apply absolute top-1/2 transform -translate-y-1/2 z-20 bg-black/60 backdrop-blur-sm border border-purple-500/30 text-white p-3 rounded-full hover:bg-purple-600/20 hover:border-purple-400/50 transition-all duration-300 hover:scale-110;
}

.carousel-btn-left {
  @apply -left-16;
}

.carousel-btn-right {
  @apply -right-16;
}

.carousel-indicator {
  @apply w-3 h-3 rounded-full bg-purple-500/30 hover:bg-purple-400/50 transition-all duration-300;
}

.carousel-indicator.active {
  @apply bg-purple-400 scale-125;
}

/* Responsividade para dispositivos móveis */
@media (max-width: 768px) {
  .carousel-btn-left {
    @apply -left-8;
  }
  
  .carousel-btn-right {
    @apply -right-8;
  }
  
  .carousel-btn {
    @apply p-2;
  }
  
  .carousel-btn svg {
    @apply w-5 h-5;
  }
}
</style>