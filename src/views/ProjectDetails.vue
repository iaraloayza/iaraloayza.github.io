<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
    <!-- Header com navegação -->
    <header class="relative z-10 bg-black/30 backdrop-blur-lg border-b border-purple-500/20">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <button 
            @click="goBack" 
            class="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 group flex-shrink-0"
          >
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="font-semibold hidden sm:inline">{{ $t('projects.projectDdetails.backToProjects') }}</span>
            <span class="font-semibold sm:hidden">{{ $t('projects.projectDdetails.back') }}</span>
          </button>
          
          <div class="flex items-center gap-2 sm:gap-4 flex-wrap justify-end">
            <!-- Language Selector - menor em mobile -->
            <div class="order-2 sm:order-1">
              <LanguageSelector @language-changed="onLanguageChanged" />
            </div>
            
            <!-- Development Badge -->
            <span v-if="project?.inDevelopment" class="development-badge-mobile order-1 sm:order-2">
              <div class="pulse-dot"></div>
              <span class="hidden sm:inline">{{ $t('projects.inDevelopment') }}</span>
              <span class="sm:hidden">{{ $t('projects.inDev') }}</span>
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- Loading state -->
    <div v-if="loading" class="flex items-center justify-center min-h-screen">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>

    <!-- Projeto não encontrado -->
    <div v-else-if="!project" class="flex items-center justify-center min-h-screen">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-red-400 mb-4">Projeto não encontrado</h1>
        <p class="text-gray-400 mb-8">O projeto que você está procurando não existe ou foi removido.</p>
        <button @click="goBack" class="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-semibold hover:from-purple-500 hover:to-pink-500 transition-all duration-300">
          Voltar aos Projetos
        </button>
      </div>
    </div>

    <!-- Modal da Galeria Melhorado -->
    <div 
      v-if="showGalleryModal && selectedImage" 
      class="gallery-modal fixed inset-0 bg-black/95 flex items-center justify-center p-4"
      style="z-index: 99999;"
      @click="closeGalleryModal"
    >
      <div class="gallery-modal-container relative w-full h-full max-w-7xl max-h-full flex items-center justify-center" @click.stop>
        
        <!-- Botão fechar -->
        <button 
          @click="closeGalleryModal"
          class="gallery-close-btn absolute top-4 right-4 z-20 text-white/80 hover:text-white transition-colors duration-200 bg-black/50 rounded-full p-2 backdrop-blur-sm"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        
        <!-- Navegação anterior -->
        <button 
          v-if="selectedImageIndex > 0"
          @click="previousImage"
          class="gallery-nav-btn gallery-nav-prev absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white/80 hover:text-white transition-all duration-200 bg-black/50 rounded-full p-3 backdrop-blur-sm hover:bg-black/70 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        
        <!-- Navegação próxima -->
        <button 
          v-if="selectedImageIndex < $tm(project.gallery).length - 1"
          @click="nextImage"
          class="gallery-nav-btn gallery-nav-next absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white/80 hover:text-white transition-all duration-200 bg-black/50 rounded-full p-3 backdrop-blur-sm hover:bg-black/70 hover:scale-110"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        
        <!-- Container principal da imagem -->
        <div class="gallery-image-wrapper relative flex flex-col items-center justify-center w-full h-full px-16 py-16">
          
          <!-- Informações da imagem no topo -->
          <div class="gallery-info-top mb-6 text-center">
            <!-- Contador principal -->
            <div class="gallery-counter text-white/90 text-lg font-semibold mb-2">
              {{ selectedImageIndex + 1 }} / {{ $tm(project.gallery).length }}
            </div>
            
            <!-- Descrição da imagem -->
            <p class="text-white/80 text-base font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
              {{ selectedImage.alt }}
            </p>
            
            <!-- Indicadores de progresso (dots) -->
            <div class="gallery-dots flex justify-center gap-2">
              <button
                v-for="(image, index) in $tm(project.gallery)"
                :key="index"
                @click="goToImage(index)"
                :class="[
                  'gallery-dot w-2 h-2 rounded-full transition-all duration-200',
                  index === selectedImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                ]"
              ></button>
            </div>
          </div>
          
          <!-- Imagem principal -->
          <img 
            :src="selectedImage.url" 
            :alt="selectedImage.alt"
            class="gallery-main-image max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          >
        </div>
      </div>
    </div>

    <!-- Conteúdo principal -->
    <main v-if="!loading && project" class="relative z-10 pt-8">
      <!-- Hero Section -->
      <section class="px-6 py-12">
        <div class="container mx-auto max-w-6xl">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Informações principais -->
            <div>
              <h1 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {{ $t(project.title) }}
              </h1>
              
              <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                {{ $t(project.description) }}
              </p>

              <!-- Tecnologias -->
              <div class="flex flex-wrap gap-3 mb-8">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech.name"
                  :class="tech.color"
                  class="tech-tag"
                >
                  {{ tech.name }}
                </span>
              </div>

              <!-- Links de ação -->
              <div class="flex flex-wrap gap-4">
                <a 
                  v-if="project.projectUrl && project.projectUrl !== '#'"
                  :href="project.projectUrl" 
                  target="_blank"
                  class="action-btn primary"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  {{ $t('projects.projectDdetails.projectLive') }}
                </a>

                <a 
                  v-if="project.apkUrl && project.apkUrl !== '#'"
                  :href="project.apkUrl" 
                  download
                  class="action-btn apk"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  {{ $t('projects.projectDdetails.downloadApk') }}
                </a>
                
                <a 
                  v-if="project.githubUrl && project.githubUrl !== '#'"
                  :href="project.githubUrl" 
                  target="_blank"
                  class="action-btn secondary"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {{ $t('projects.projectDdetails.viewGithub') }}
                </a>
              </div>
            </div>

            <!-- Imagem/Preview do projeto -->
            <div class="order-first lg:order-last">
              <div class="project-preview transform hover:scale-105 transition-all duration-500 relative">
                <!-- Small gradient accent -->
                <div :class="project.gradient" class="absolute top-4 right-4 w-4 h-4 rounded-full bg-gradient-to-br"></div>
                
                <!-- Área para screenshot/preview do projeto -->
                <div class="bg-black/20 rounded-2xl overflow-hidden backdrop-blur-sm relative min-h-[220px] max-h-[400px] flex items-center justify-center">
                  <img 
                    v-if="project.previewImage" 
                    :src="project.previewImage" 
                    :alt="`Preview do projeto ${project.title}`"
                    class="w-full h-auto max-h-full object-contain hover:scale-105 transition-transform duration-500"
                    @error="handleImageError"
                  />
                  <div 
                    :class="project.previewImage ? 'hidden' : 'flex'"
                    class="absolute inset-0 items-center justify-center"
                  >
                    <div class="text-center">
                      <svg class="w-16 h-16 mx-auto mb-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <p class="text-white/60">Preview do Projeto</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Seções de detalhes -->
      <section class="px-6 py-12">
        <div class="container mx-auto max-w-6xl">
          <div class="grid lg:grid-cols-3 gap-8">
            <!-- Informações técnicas -->
            <div class="lg:col-span-2 space-y-8">
              <!-- Sobre o projeto -->
              <div class="detail-card">
                <h2 class="section-title">{{ $t('projects.projectDdetails.aboutProject') }}</h2>
                <div class="prose prose-invert max-w-none">
                  <p class="text-gray-300 leading-relaxed">
                    {{ $t(project.detailedDescription) }}
                  </p>
                  
                  <!-- Área para conteúdo adicional que pode ser personalizado por projeto -->
                  <div v-if="project.features" class="mt-6">
                    <h3 class="text-xl font-bold text-white mb-4">{{ $t('projects.projectDdetails.mainFeatures') }}</h3>
                    <ul class="space-y-2">
                      <li v-for="(feature, index) in $tm(project.features)" :key="index" class="flex items-start gap-3">
                        <svg class="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span class="text-gray-300">{{ feature }}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Processo de desenvolvimento -->
              <div class="detail-card" v-if="project.developmentProcess">
                <h2 class="section-title">{{ $t('projects.projectDdetails.developmentProcess') }}</h2>
                <div class="space-y-4">
                  <div v-for="(step, index) in $tm(project.developmentProcess)" :key="index" class="flex gap-4">
                    <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-sm font-bold">
                      {{ index + 1 }}
                    </div>
                    <div>
                      <h3 class="font-semibold text-white mb-2">{{ step.title }}</h3>
                      <p class="text-gray-300">{{ step.description }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Galeria de imagens -->
              <div class="detail-card" v-if="project.gallery && $tm(project.gallery).length > 0">
              <h2 class="section-title">{{ $t('projects.projectDdetails.gallery') }}</h2>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div v-for="(image, index) in $tm(project.gallery).slice(0, 6)" :key="index" class="gallery-item aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group relative" @click="openGalleryModal(image, index)">
                  <img :src="image.url" :alt="image.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" @error="handleGalleryImageError($event, index)">
                  <!-- Overlay de hover -->
                  <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                    </svg>
                  </div>
                  <!-- Contador de imagens no thumbnail -->
                  <div class="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                    {{ index + 1 }}/{{ $tm(project.gallery).length }}
                  </div>
                </div>
              </div>
              <!-- Botão para ver mais fotos (se houver mais de 6) -->
              <div v-if="$tm(project.gallery).length > 6" class="mt-6 text-center">
                <button @click="openGalleryModal($tm(project.gallery)[0], 0)" class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto hover:transform hover:scale-105">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z"></path>
                  </svg>
                  {{ $t('projects.projectDdetails.viewAllPhotos') }}
                </button>
              </div>
              </div>
              
            </div>

            <!-- Sidebar com informações adicionais -->
            <div class="space-y-6">
              <!-- Status do projeto -->
              <div class="detail-card">
                <h3 class="text-lg font-bold text-white mb-4">{{ $t('projects.projectDdetails.status') }}</h3>
                <div class="flex items-center gap-3">
                  <div :class="project.inDevelopment ? 'bg-yellow-500' : 'bg-green-500'" class="w-3 h-3 rounded-full"></div>
                  <span class="text-gray-300">{{ project.inDevelopment ? $t('projects.inDevelopment') : $t('projects.projectDdetails.completed') }}</span>
                </div>
              </div>

              <!-- Tecnologias detalhadas -->
              <div class="detail-card">
                <h3 class="text-lg font-bold text-white mb-4">{{ $t('projects.projectDdetails.technologies') }}</h3>
                <div class="space-y-3">
                  <div v-for="tech in project.technologies" :key="tech.name" class="flex items-center gap-3">
                    <div :class="tech.color" class="w-4 h-4 rounded"></div>
                    <span class="text-gray-300">{{ tech.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Informações do projeto -->
              <div class="detail-card" v-if="project.projectInfo">
                <h3 class="text-lg font-bold text-white mb-4">{{ $t('projects.projectDdetails.information') }}</h3>
                <div class="space-y-3">
                  <div v-if="$tm(project.projectInfo).duration">
                    <span class="text-purple-400 font-semibold">{{ $t('projects.projectDdetails.duration') }}</span>
                    <p class="text-gray-300">{{ $tm(project.projectInfo).duration }}</p>
                  </div>
                  <div v-if="$tm(project.projectInfo).team">
                    <span class="text-purple-400 font-semibold">{{ $t('projects.projectDdetails.team') }}</span>
                    <p class="text-gray-300">{{ $tm(project.projectInfo).team }}</p>
                  </div>
                  <div v-if="$tm(project.projectInfo).client">
                    <span class="text-purple-400 font-semibold">{{ $t('projects.projectDdetails.client') }}</span>
                    <p class="text-gray-300">{{ $tm(project.projectInfo).client }}</p>
                  </div>
                </div>
              </div>

              <!-- Impacto -->
              <div class="detail-card" v-if="project.impact">
                <h3 class="text-lg font-bold text-white mb-4">{{ $t('projects.projectDdetails.impact') }}</h3>
                <div class="space-y-3">
                  <div v-for="stat in $tm(project.impact)" :key="stat.label" class="text-center">
                    <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {{ stat.value }}
                    </div>
                    <div class="text-sm text-gray-400">{{ stat.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projetos relacionados -->
      <section class="px-6 py-12 bg-black/20">
        <div class="container mx-auto max-w-6xl">
          <h2 class="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {{ $t('projects.projectDdetails.otherProjects') }}
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="relatedProject in relatedProjects" :key="relatedProject.id"
                @click="goToProject(relatedProject.id)"
                class="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <h3 class="text-xl font-bold text-white mb-2">{{ $t(relatedProject.title) }}</h3>
              <p class="text-gray-400 text-sm mb-4">{{ $t(relatedProject.description).substring(0, 100) }}...</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in relatedProject.technologies.slice(0, 2)" :key="tech.name"
                      :class="tech.color" class="tech-tag-small">
                  {{ tech.name }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import LanguageSelector from '../components/layout/LanguageSelector.vue'

export default {
  name: 'ProjectDetails',

  components: {
    LanguageSelector
  },

  data() {
    return {
      loading: true,
      project: null,
      relatedProjects: [],
      showGalleryModal: false,
      selectedImage: null,
      selectedImageIndex: 0,
      allProjects: [
        {
          id: 1,
          title: 'projects.list.monitora.title',
          description: 'projects.projectDdetails.monitora.description',
          previewImage: '/images/logo_monitora_saude.png',
          gallery: 'projects.projectDdetails.monitora.gallery',
          detailedDescription: 'projects.projectDdetails.monitora.detailedDescription',
          gradient: 'from-purple-600 to-purple-800',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: 'https://monitora.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false,
          features: 'projects.projectDdetails.monitora.features',
          developmentProcess: 'projects.projectDdetails.monitora.developmentProcess',
          projectInfo: 'projects.projectDdetails.monitora.projectInfo',
          impact: 'projects.projectDdetails.monitora.impact'
        },
        {
          id: 2,
          title: 'projects.list.hans.title',
          description: 'projects.projectDdetails.hans.description',
          previewImage: '/images/hans+/logo_hans+.jpeg',
          apkUrl: '/apk/hans-plus.apk',
          gallery: 'projects.projectDdetails.hans.gallery',
          detailedDescription: 'projects.projectDdetails.hans.detailedDescription',
          gradient: 'from-pink-600 to-purple-800',
          technologies: [
            { name: 'Flutter', color: 'bg-purple-600' },
            { name: 'Dart', color: 'bg-blue-600' },
            { name: 'Firebase', color: 'bg-yellow-600' }
          ],
          projectUrl: 'https://hansmais.netlify.app/',
          githubUrl: '#',
          inDevelopment: false,
          features: 'projects.projectDdetails.hans.features',
          developmentProcess: 'projects.projectDdetails.hans.developmentProcess',
          projectInfo: 'projects.projectDdetails.hans.projectInfo',
          // impact: [
          //   { value: '500+', label: 'Downloads' },
          //   { value: '95%', label: 'Satisfação' },
          //   { value: '80%', label: 'Adesão ao Tratamento' }
          // ]
        },
        {
          id: 3,
          title: 'projects.projectDdetails.renaveh.title',
          description: 'projects.projectDdetails.renaveh.description',
          previewImage: '/images/renaveh/logo_renaveh.png',
          gallery: 'projects.projectDdetails.renaveh.gallery',
          detailedDescription: 'projects.projectDdetails.renaveh.detailedDescription',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' }
          ],
          projectUrl: 'https://renaveh.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false,
          features: 'projects.projectDdetails.renaveh.features',
          projectInfo: 'projects.projectDdetails.renaveh.projectInfo',
          impact: 'projects.projectDdetails.renaveh.impact'
        },
        {
          id: 4,
          title: 'projects.list.masemfome.title',
          description: 'projects.projectDdetails.masemfome.description',
          previewImage: '/images/masemfome/logo.png',
          detailedDescription: 'projects.projectDdetails.masemfome.detailedDescription',
          gradient: 'from-green-500 to-blue-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' },
            { name: 'Docker', color: 'bg-blue-600' },
            { name: 'APIs REST', color: 'bg-purple-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true,
          features: 'projects.projectDdetails.masemfome.features',
          developmentProcess: 'projects.projectDdetails.masemfome.developmentProcess',
          projectInfo: 'projects.projectDdetails.masemfome.projectInfo'
        },
        {
          id: 5,
          title: 'projects.list.cadserv.title',
          description: 'projects.projectDdetails.cadserv.description',
          previewImage: '/images/cadserv/logo.png',
          detailedDescription: 'projects.projectDdetails.cadserv.detailedDescription',
          gradient: 'from-blue-500 to-indigo-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' }
          ],
          projectUrl: 'https://cadserv.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false,
          features: 'projects.projectDdetails.cadserv.features',
          projectInfo: 'projects.projectDdetails.cadserv.projectInfo'
        },
        {
          id: 6,
          title: 'projects.list.plandox.title',
          description: 'projects.projectDdetails.plandox.description',
          previewImage: '/images/plandox/logo.png',
          detailedDescription: 'projects.projectDdetails.plandox.detailedDescription',
          gradient: 'from-yellow-500 to-orange-600',
          technologies: [
            { name: 'Python', color: 'bg-yellow-600' },
            { name: 'Docker', color: 'bg-blue-600' },
            { name: 'Microserviços', color: 'bg-purple-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true,
          features: 'projects.projectDdetails.plandox.features',
          developmentProcess: 'projects.projectDdetails.plandox.developmentProcess',
          projectInfo: 'projects.projectDdetails.plandox.projectInfo'
        },
        {
          id: 7,
          title: 'projects.list.react.title',
          description: 'projects.projectDdetails.react.description',
          previewImage: '/images/react/logo.png',
          detailedDescription: 'projects.projectDdetails.react.detailedDescription',
          gradient: 'from-teal-500 to-cyan-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true,
          features: 'projects.projectDdetails.react.features',
          developmentProcess: 'projects.projectDdetails.react.developmentProcess',
          projectInfo: 'projects.projectDdetails.react.projectInfo'
        }
      ]
    }
  },
  mounted() {
    this.scrollToTop()
    this.loadProject()

    // Listener para navegação por teclado
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = 'auto' // Garante que o scroll volte ao normal
  },
  methods: {
    onLanguageChanged(newLocale) {
      console.log('Language changed to:', newLocale)
    },

    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // ou 'smooth' se quiser animação
      })
    },

    loadProject() {
      const projectId = parseInt(this.$route.params.id)
      
      // Simular loading
      setTimeout(() => {
        this.project = this.allProjects.find(p => p.id === projectId)
        this.relatedProjects = this.allProjects
          .filter(p => p.id !== projectId)
          .slice(0, 3)
        this.loading = false
        
        // Garantir que a página esteja no topo após carregar
        this.$nextTick(() => {
          this.scrollToTop()
        })
      }, 1000)
    },

    goBack() {
      this.$router.go(-1)
    },

    goToProject(projectId) {
      this.$router.push(`/projeto/${projectId}`)
    },

    handleImageError(event) {
      // Remove a imagem com erro
      event.target.style.display = 'none'
      
      // Mostra o placeholder se ele existir
      const nextElement = event.target.nextElementSibling
      if (nextElement) {
        nextElement.style.display = 'flex'
      }
    },

    goToImage(index) {
      const translatedGallery = this.$tm(this.project.gallery);
      this.selectedImageIndex = index;
      this.selectedImage = translatedGallery[index];
    },

    handleGalleryImageError(event, index) {
      console.warn(`Erro ao carregar imagem da galeria: ${this.project.gallery[index].url}`);
      event.target.src = '/images/placeholder.png'; // imagem placeholder
    },

    openGalleryModal(image, index) {
      this.selectedImage = image;
      this.selectedImageIndex = index;
      this.showGalleryModal = true;
      document.body.style.overflow = 'hidden';
    },
    
    closeGalleryModal() {
      this.showGalleryModal = false;
      this.selectedImage = null;
      document.body.style.overflow = 'auto';
    },
    
    nextImage() {
      const translatedGallery = this.$tm(this.project.gallery);
      if (this.selectedImageIndex < translatedGallery.length - 1) {
        this.goToImage(this.selectedImageIndex + 1);
      }
    },
    
    previousImage() {
      if (this.selectedImageIndex > 0) {
        this.goToImage(this.selectedImageIndex - 1);
      }
    },
    
    handleKeydown(event) {
      if (!this.showGalleryModal) return;
      
      switch(event.key) {
        case 'Escape':
          this.closeGalleryModal();
          break;
        case 'ArrowRight':
          this.nextImage();
          break;
        case 'ArrowLeft':
          this.previousImage();
          break;
      }
    }
  },

  // MÉTODO PARA TRATAR ERRO DE IMAGEM DA GALERIA
  handleGalleryImageError(event, index) {
    // Remove a imagem com erro da galeria
    console.warn(`Erro ao carregar imagem da galeria: ${this.project.gallery[index].url}`)
    // Você pode opcionalmente remover a imagem da galeria ou mostrar um placeholder
    event.target.src = '/images/monitora_saude.png' // imagem placeholder
  },

  watch: {
    '$route'() {
      this.loading = true
      this.loadProject()
    }
  }
}
</script>

<style scoped>
.development-badge {
  @apply bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2;
}

.pulse-dot {
  @apply w-2 h-2 bg-white rounded-full;
  animation: pulse-glow 2s infinite;
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

.tech-tag {
  @apply text-white px-4 py-2 rounded-full text-sm font-semibold;
}

.tech-tag-small {
  @apply text-white px-2 py-1 rounded-full text-xs font-semibold;
}

.action-btn {
  @apply px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 hover:transform hover:scale-105;
}

.action-btn.primary {
  @apply bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500;
}

.action-btn.secondary {
  @apply border-2 border-purple-500/50 text-purple-400 hover:border-purple-400 hover:text-pink-400 hover:bg-purple-500/10;
}

.action-btn.apk {
  @apply bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-500 hover:to-emerald-500;
}

.project-preview {
  @apply relative overflow-hidden;
}

.detail-card {
  @apply bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/30 transition-all duration-300;
}

.section-title {
  @apply text-2xl font-bold text-white mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent;
}

.prose {
  @apply text-gray-300 leading-relaxed;
}

.prose h3 {
  @apply text-xl font-bold text-white mb-4 mt-6;
}

.prose p {
  @apply mb-4;
}

.prose ul {
  @apply space-y-2;
}

.prose li {
  @apply flex items-start gap-3;
}

.gallery-item {
  position: relative;
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Animação de fade para o modal */
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter, .modal-leave-to {
  opacity: 0;
}

/* Animações personalizadas */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.detail-card {
  animation: fadeInUp 0.6s ease-out;
}

/* Estilos da galeria modal */
.gallery-modal {
  backdrop-filter: blur(8px);
}

.gallery-modal-container {
  animation: galleryFadeIn 0.3s ease-out;
}

.gallery-main-image {
  max-height: calc(100vh - 200px);
  animation: imageZoomIn 0.3s ease-out;
}

.gallery-nav-btn {
  transition: all 0.2s ease;
}

.gallery-nav-btn:hover {
  transform: translateY(-50%) scale(1.1);
}

.gallery-close-btn:hover {
  transform: scale(1.1);
}

.gallery-counter {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.gallery-dot {
  cursor: pointer;
}

.gallery-thumbnails {
  max-height: 60px;
}

.gallery-thumbnails::-webkit-scrollbar {
  height: 4px;
}

.gallery-thumbnails::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
}

.gallery-thumbnails::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
}

.gallery-thumbnails::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.5);
}

.development-badge-mobile {
  @apply bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center gap-1 sm:gap-2 flex-shrink-0;
}

/* Animações */
@keyframes galleryFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes imageZoomIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Responsividade */
@media (max-width: 768px) {
  .action-btn {
    @apply w-full justify-center;
  }
  
  .tech-tag {
    @apply text-xs px-3 py-1;
  }

  /* Responsividade da galeria */
  .grid.lg\\:grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .grid.md\\:grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }

  .gallery-image-wrapper {
    padding: 8px;
  }
  
  .gallery-nav-prev {
    left: 8px;
  }
  
  .gallery-nav-next {
    right: 8px;
  }
  
  .gallery-close-btn {
    top: 8px;
    right: 8px;
  }
  
  .gallery-thumbnails {
    display: none; /* Ocultar thumbnails em mobile para economizar espaço */
  }
  
  .gallery-main-image {
    max-height: calc(100vh - 120px);
  }
}

@media (max-width: 640px) {
  .container {
    @apply px-2;
  }
  
  .development-badge-mobile {
    font-size: 10px;
    padding: 4px 8px;
  }
}

@media (max-width: 480px) {
  .gallery-nav-btn {
    padding: 8px;
  }
  
  .gallery-nav-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .gallery-close-btn svg {
    width: 20px;
    height: 20px;
  }
}
</style>