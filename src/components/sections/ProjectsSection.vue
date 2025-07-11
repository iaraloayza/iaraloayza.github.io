<template>
  <section id="projects" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Projetos
      </h2>
      
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
        <!-- Botão Anterior -->
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

        <!-- Container do carrossel - REMOVIDO overflow-hidden -->
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

        <!-- Botão Próximo -->
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

        <!-- Indicadores -->
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
  components: {
    ProjectCard
  },
  data() {
    return {
      currentSlide: 0,
      slidesPerView: 3, // Número de projetos visíveis por vez
      projects: [
        {
          id: 1,
          title: 'Monitora Saúde',
          description: 'Sistema Web para monitoramento e avaliação de indicadores de saúde e processos, oferecendo dados atualizados para apoiar a gestão, o planejamento estratégico e a promoção da saúde no Maranhão.',
          gradient: 'from-purple-600 to-purple-800',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: 'https://monitora.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false // Projeto finalizado
        },
        {
          id: 2,
          title: 'App Hans+',
          description: 'O Hans+ é uma plataforma com versão web e app Android que apoia o tratamento da hanseníase, que permite registrar medicações, monitorar sintomas e acessar informações confiáveis sobre a doença.',
          gradient: 'from-pink-600 to-purple-800',
          technologies: [
            { name: 'Flutter', color: 'bg-purple-600' },
            { name: 'Dart', color: 'bg-blue-600' },
            { name: 'Firebase', color: 'bg-yellow-600' }
          ],
          projectUrl: 'https://hansmais.netlify.app/',
          githubUrl: '#'
        },
        {
          id: 3,
          title: 'RENAVEH',
          description: 'Sistema web para cadastro de pacientes, gestão de notificações hospitalares e transferências entre hospitais, com área exclusiva para acidentes de trânsito e controle de acessos por papéis e permissões.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' }
          ],
          projectUrl: 'https://renaveh.saude.ma.gov.br/',
          githubUrl: '#'
        },
        {
          id: 4,
          title: 'Maranhão Livre da Fome',
          description: 'O sistema Maranhão Livre da Fome (eixo saúde) combate a insegurança alimentar com o cadastro e acompanhamento de famílias em situação de vulnerabilidade, permitindo registrar avaliações e monitorar o histórico de cada indivíduo.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' },
            { name: 'Docker', color: 'bg-blue-600' }
          ],
          projectUrl: 'https://maranhaolivredafome.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: true // Projeto em desenvolvimento
        },
        {
          id: 5,
          title: 'CadServ',
          description: 'Sistema de cadastro e gestão de servidores da SAPAPVS, permitindo registrar dados pessoais, funcionais e sociais, além de gerenciar informações como férias, com acesso por gerentes, coordenadores e a secretaria adjunta.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' }
          ],
          projectUrl: 'https://cadserv.saude.ma.gov.br/',
          githubUrl: '#'
        },
        {
          id: 6,
          title: 'PlanDox 2.0',
          description: 'PlanDox 2.0 é a nova versão em desenvolvimento de um software desktop para planejamento experimental e análise de qualidade do biodiesel, que terá interface aprimorada, versão mobile e arquitetura baseada em microserviços.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Python', color: 'bg-yellow-600' },
            { name: 'Docker', color: 'bg-blue-600' },
            { name: 'Microserviços', color: 'bg-purple-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true // Projeto em desenvolvimento
        },
        {
          id: 7,
          title: 'Portal REACT',
          description: 'O portal REACT, em desenvolvimento, será uma plataforma para gestão intuitiva de projetos, notícias, editais e equipes da Rede de Aplicação de Ciência e Tecnologia (REACT), fortalecendo a colaboração acadêmica e profissional.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true // Projeto em desenvolvimento
        }
      ]
    }
  },
  computed: {
    maxSlides() {
      // Calcula o número máximo de slides baseado no total de projetos menos os visíveis
      return Math.max(0, this.projects.length - this.slidesPerView)
    },
    slideWidth() {
      return 100 / this.slidesPerView
    }
  },
  methods: {
    updateSlidesPerView() {
      if (window.innerWidth < 768) {
        this.slidesPerView = 1
      } else if (window.innerWidth < 1024) {
        this.slidesPerView = 2
      } else {
        this.slidesPerView = 3
      }
    },
    nextSlide() {
      if (this.currentSlide < this.maxSlides) {
        this.currentSlide++
      }
    },
    previousSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
    goToSlide(index) {
      this.currentSlide = index
    }
  },
  mounted() {
    this.updateSlidesPerView()
    window.addEventListener('resize', this.updateSlidesPerView)
  },
  // Substitua o $once por beforeUnmount
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