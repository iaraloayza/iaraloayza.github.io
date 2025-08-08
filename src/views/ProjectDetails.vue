<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
    <!-- Background animado -->
    <!-- <div class="fixed inset-0 bg-gradient-to-br from-purple-900/20 to-pink-900/20 pointer-events-none">
      <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Cg fill-opacity="0.03"%3E%3Cpolygon fill="%23ffffff" points="50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
    </div> -->

    <!-- Header com navegação -->
    <header class="relative z-10 bg-black/30 backdrop-blur-lg border-b border-purple-500/20">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <button 
            @click="goBack" 
            class="flex items-center gap-2 text-purple-400 hover:text-pink-400 transition-colors duration-300 group"
          >
            <svg class="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span class="font-semibold">Voltar aos Projetos</span>
          </button>
          
          <div class="flex items-center gap-4">
            <span v-if="project?.inDevelopment" class="development-badge">
              <div class="pulse-dot"></div>
              Em Desenvolvimento
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
          v-if="selectedImageIndex < project.gallery.length - 1"
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
              {{ selectedImageIndex + 1 }} / {{ project.gallery.length }}
            </div>
            
            <!-- Descrição da imagem -->
            <p class="text-white/80 text-base font-medium mb-4 max-w-2xl mx-auto leading-relaxed">
              {{ selectedImage.alt }}
            </p>
            
            <!-- Indicadores de progresso (dots) -->
            <div class="gallery-dots flex justify-center gap-2">
              <button
                v-for="(image, index) in project.gallery"
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

        <!-- Thumbnails na parte inferior (opcional - similar ao Lightroom) -->
        <!-- <div v-if="project.gallery.length > 1" class="gallery-thumbnails absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm rounded-lg p-2 max-w-md overflow-x-auto">
          <button
            v-for="(image, index) in project.gallery"
            :key="index"
            @click="goToImage(index)"
            :class="[
              'gallery-thumbnail flex-shrink-0 w-12 h-8 rounded overflow-hidden border-2 transition-all duration-200',
              index === selectedImageIndex 
                ? 'border-white/80 scale-110' 
                : 'border-white/20 hover:border-white/50'
            ]"
          >
            <img 
              :src="image.url" 
              :alt="image.alt"
              class="w-full h-full object-cover"
            >
          </button>
        </div> -->
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
                {{ project.title }}
              </h1>
              
              <p class="text-xl text-gray-300 mb-8 leading-relaxed">
                {{ project.description }}
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
                  Ver Projeto Live
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
                  Ver no GitHub
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
                <h2 class="section-title">Sobre o Projeto</h2>
                <div class="prose prose-invert max-w-none">
                  <p class="text-gray-300 leading-relaxed">
                    {{ project.detailedDescription || project.description }}
                  </p>
                  
                  <!-- Área para conteúdo adicional que pode ser personalizado por projeto -->
                  <div v-if="project.features" class="mt-6">
                    <h3 class="text-xl font-bold text-white mb-4">Principais Funcionalidades</h3>
                    <ul class="space-y-2">
                      <li v-for="feature in project.features" :key="feature" class="flex items-start gap-3">
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
                <h2 class="section-title">Processo de Desenvolvimento</h2>
                <div class="space-y-4">
                  <div v-for="(step, index) in project.developmentProcess" :key="index" class="flex gap-4">
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
              <div class="detail-card" v-if="project.gallery && project.gallery.length > 0">
                <h2 class="section-title">Galeria</h2>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div 
                    v-for="(image, index) in project.gallery.slice(0, 6)" 
                    :key="index" 
                    class="gallery-item aspect-video bg-gray-800 rounded-lg overflow-hidden cursor-pointer group relative"
                    @click="openGalleryModal(image, index)"
                  >
                    <img 
                      :src="image.url" 
                      :alt="image.alt" 
                      class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      @error="handleGalleryImageError($event, index)"
                    >
                    <!-- Overlay de hover -->
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <svg class="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"></path>
                      </svg>
                    </div>
                    <!-- Contador de imagens no thumbnail -->
                    <div class="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                      {{ index + 1 }}/{{ project.gallery.length }}
                    </div>
                  </div>
                </div>
                
                <!-- Botão para ver mais fotos (se houver mais de 6) -->
                <div v-if="project.gallery.length > 6" class="mt-6 text-center">
                  <button 
                    @click="openGalleryModal(project.gallery[0], 0)"
                    class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto hover:transform hover:scale-105"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Ver todas as {{ project.gallery.length }} fotos
                  </button>
                </div>
              </div>
              
            </div>

            <!-- Sidebar com informações adicionais -->
            <div class="space-y-6">
              <!-- Status do projeto -->
              <div class="detail-card">
                <h3 class="text-lg font-bold text-white mb-4">Status</h3>
                <div class="flex items-center gap-3">
                  <div :class="project.inDevelopment ? 'bg-yellow-500' : 'bg-green-500'" class="w-3 h-3 rounded-full"></div>
                  <span class="text-gray-300">{{ project.inDevelopment ? 'Em Desenvolvimento' : 'Concluído' }}</span>
                </div>
              </div>

              <!-- Tecnologias detalhadas -->
              <div class="detail-card">
                <h3 class="text-lg font-bold text-white mb-4">Tecnologias</h3>
                <div class="space-y-3">
                  <div v-for="tech in project.technologies" :key="tech.name" class="flex items-center gap-3">
                    <div :class="tech.color" class="w-4 h-4 rounded"></div>
                    <span class="text-gray-300">{{ tech.name }}</span>
                  </div>
                </div>
              </div>

              <!-- Informações do projeto -->
              <div class="detail-card" v-if="project.projectInfo">
                <h3 class="text-lg font-bold text-white mb-4">Informações</h3>
                <div class="space-y-3">
                  <div v-if="project.projectInfo.duration">
                    <span class="text-purple-400 font-semibold">Duração:</span>
                    <p class="text-gray-300">{{ project.projectInfo.duration }}</p>
                  </div>
                  <div v-if="project.projectInfo.team">
                    <span class="text-purple-400 font-semibold">Equipe:</span>
                    <p class="text-gray-300">{{ project.projectInfo.team }}</p>
                  </div>
                  <div v-if="project.projectInfo.client">
                    <span class="text-purple-400 font-semibold">Cliente:</span>
                    <p class="text-gray-300">{{ project.projectInfo.client }}</p>
                  </div>
                </div>
              </div>

              <!-- Impacto -->
              <div class="detail-card" v-if="project.impact">
                <h3 class="text-lg font-bold text-white mb-4">Impacto</h3>
                <div class="space-y-3">
                  <div v-for="stat in project.impact" :key="stat.label" class="text-center">
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
            Outros Projetos
          </h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="relatedProject in relatedProjects" :key="relatedProject.id" 
                 @click="goToProject(relatedProject.id)"
                 class="bg-black/40 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer transform hover:scale-105">
              <h3 class="text-xl font-bold text-white mb-2">{{ relatedProject.title }}</h3>
              <p class="text-gray-400 text-sm mb-4">{{ relatedProject.description.substring(0, 100) }}...</p>
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
export default {
  name: 'ProjectDetails',
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
          title: 'Monitora Saúde',
          description: 'Sistema Web para monitoramento e avaliação de indicadores de saúde e processos, oferecendo dados atualizados para apoiar a gestão, o planejamento estratégico e a promoção da saúde no Maranhão.',
          previewImage: '/images/logo_monitora_saude.png',
          gallery: [
            {
              url: '/images/monitora/tela_inicial.png',
              alt: 'Tela inicial do sistema Monitora Saúde'
            },
            {
              url: '/images/monitora/navegacao_indicadores_logout.png',
              alt: 'Navegação entre indicadores com usuário deslogado'
            },
            {
              url: '/images/monitora/login.png',
              alt: 'Tela de login do sistema Monitora Saúde'
            },
            {
              url: '/images/monitora/verificacao_2fa.png',
              alt: 'Verificação em duas etapas (2FA) para segurança de acesso'
            },
            {
              url: '/images/monitora/nav_indicadores_logado.png',
              alt: 'Navegação entre indicadores com usuário logado'
            },
            {
              url: '/images/monitora/dropdown_admin.png',
              alt: 'Menu dropdown de administração do sistema'
            },
            {
              url: '/images/monitora/dashboard_indicador.png',
              alt: 'Dashboard com visualização de indicadores específicos'
            },
            {
              url: '/images/monitora/descricao_indicador.png',
              alt: 'Tela com a descrição detalhada do indicador selecionado'
            },
            {
              url: '/images/monitora/ficha_indicador.png',
              alt: 'Acesso à ficha técnica do indicador de saúde'
            },
            {
              url: '/images/monitora/ficha_aberta.png',
              alt: 'Ficha de indicador com informações detalhadas expandidas'
            },
            {
              url: '/images/monitora/dropdown_indicadores.png',
              alt: 'Menu dropdown com as páginas de gerenciamento de indicadores'
            },
            {
              url: '/images/monitora/index_grupos.png',
              alt: 'Página de gerenciamento de grupos de indicadores'
            },
            {
              url: '/images/monitora/index_indicadores.png',
              alt: 'Página de gerenciamento dos indicadores cadastrados'
            },
            {
              url: '/images/monitora/contato.png',
              alt: 'Tela de contato e suporte do sistema'
            }
          ],
          detailedDescription: 'O Monitora Saúde é uma plataforma web desenvolvida para a Secretaria de Estado da Saúde do Maranhão, com o objetivo de modernizar e centralizar o monitoramento de indicadores de saúde pública. O sistema oferece uma interface intuitiva para visualização de dados em tempo real e dashboards interativos que auxiliam gestores na tomada de decisões estratégicas.',
          gradient: 'from-purple-600 to-purple-800',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: 'https://monitora.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false,
          features: [
            'Dashboards interativos, feitos em Power BI, com indicadores em tempo real',
            // 'Sistema de relatórios customizáveis',
            'Gestão de usuários com diferentes níveis de acesso',
            // 'Integração com bases de dados governamentais',
            'Interface responsiva para dispositivos móveis'
          ],
          developmentProcess: [
            {
              title: 'Análise de Requisitos',
              description: 'Levantamento detalhado das necessidades da Secretaria de Saúde e definição dos indicadores prioritários.'
            },
            {
              title: 'Arquitetura do Sistema',
              description: 'Desenvolvimento da arquitetura MVC utilizando Laravel, com foco em escalabilidade e performance.'
            },
            {
              title: 'Desenvolvimento Backend',
              description: 'Implementação das APIs, integração com PostgreSQL e desenvolvimento dos algoritmos de cálculo de indicadores.'
            },
            {
              title: 'Interface do Usuário',
              description: 'Criação de dashboards intuitivos utilizando tecnologias modernas de visualização de dados.'
            },
            {
              title: 'Testes e Deploy',
              description: 'Realização de testes extensivos e implantação em ambiente de produção com alta disponibilidade.'
            }
          ],
          projectInfo: {
            duration: '4 meses',
            team: '4 desenvolvedores',
            client: 'Secretaria de Estado da Saúde do Maranhão'
          },
          impact: [
            { value: '50+', label: 'Indicadores Monitorados' },
            { value: '200+', label: 'Usuários Ativos' }
          ]
        },
        {
          id: 2,
          title: 'App Hans+',
          description: 'O Hans+ é uma plataforma com versão web e app Android que apoia o tratamento da hanseníase, que permite registrar medicações, monitorar sintomas e acessar informações confiáveis sobre a doença.',
          previewImage: '/images/hans+/logo_hans+.jpeg',
          gallery: [
            {
              url: '/images/hans+/login.jpeg',
              alt: 'Tela de Login do Hans+'
            },
            {
              url: '/images/hans+/cadastro.jpeg',
              alt: 'Tela de cadastro de usuário'
            },
            {
              url: '/images/hans+/redefinir_senha.jpeg',
              alt: 'Tela de solicitação de redefinição de senha'
            },
            {
              url: '/images/hans+/home.jpeg',
              alt: 'Página inicial do Hans+'
            },
            {
              url: '/images/hans+/page_info.jpeg',
              alt: 'Tela de informações sobre hanseníase'
            },
            {
              url: '/images/hans+/page_info2.jpeg',
              alt: 'Continuação da tela de informações sobre hanseníase'
            },
            {
              url: '/images/hans+/page_sinais_sintomas.jpeg',
              alt: 'Página informativa com sinais e sintomas da hanseníase'
            },
            {
              url: '/images/hans+/calendario.jpeg',
              alt: 'Tela do calendário de tratamento'
            },
            {
              url: '/images/hans+/calendario_2remedios.jpeg',
              alt: 'Tela de registro de dois medicamentos no calendário'
            },
            {
              url: '/images/hans+/calendario_2remedios_3.jpeg',
              alt: 'Confirmação do uso da medicação'
            },
            {
              url: '/images/hans+/calendario_2remedios_2.jpeg',
              alt: 'Tela de monitoramento diário de sintomas'
            },
            {
              url: '/images/hans+/sintomas.jpeg',
              alt: 'Tela de registro e histórico de sintomas'
            },
            {
              url: '/images/hans+/profile.jpeg',
              alt: 'Tela de perfil do usuário'
            },
            {
              url: '/images/hans+/edit_conta.jpeg',
              alt: 'Tela de edição de informações da conta'
            },
            {
              url: '/images/hans+/edit_conta2.jpeg',
              alt: 'Tela de edição de e-mail'
            },
            {
              url: '/images/hans+/edit_conta_3.jpeg',
              alt: 'Tela de edição de senha'
            },
            {
              url: '/images/hans+/edit_perfil.jpeg',
              alt: 'Tela de edição de perfil do usuário'
            },
            {
              url: '/images/hans+/edit_tratamento.jpeg',
              alt: 'Tela de edição de dados do tratamento'
            },
            {
              url: '/images/hans+/historico_sintomas.jpeg',
              alt: 'Tela com histórico de sintomas registrados'
            },
            {
              url: '/images/hans+/saiba_mais.jpeg',
              alt: 'Tela com links e informações úteis sobre hanseníase'
            },
            {
              url: '/images/hans+/sobre_nos.jpeg',
              alt: 'Tela sobre a equipe responsável pelo aplicativo'
            },
            {
              url: '/images/hans+/links_sobre_nos.jpeg',
              alt: 'Tela com links externos relacionados à equipe responsável pelo aplicativo'
            }
          ],
          detailedDescription: 'O Hans+ é um aplicativo móvel desenvolvido para apoiar o tratamento da hanseníase e fornecer informações confiáveis sobre a doença. O projeto foi realizado em parceria com o curso de Farmácia da Universidade Federal do Maranhão (UFMA), com suporte técnico e expertise na área da saúde. O aplicativo permite o registro de medicações, o monitoramento diário de sintomas e o acesso a conteúdos educativos. Utiliza Flutter para o desenvolvimento multiplataforma e Firebase para armazenamento seguro dos dados. O Hans+ passou por etapas de levantamento de requisitos, prototipagem e testes de usabilidade, sendo avaliado como uma ferramenta prática, informativa e com grande potencial para auxiliar pacientes no acompanhamento do tratamento da hanseníase.',
          gradient: 'from-pink-600 to-purple-800',
          technologies: [
            { name: 'Flutter', color: 'bg-purple-600' },
            { name: 'Dart', color: 'bg-blue-600' },
            { name: 'Firebase', color: 'bg-yellow-600' }
          ],
          projectUrl: 'https://hansmais.netlify.app/',
          githubUrl: '#',
          inDevelopment: false,
          features: [
            'Aplicativo móvel nativo para Android',
            'Versão web responsiva',
            'Registro de uso de medicamentos diários',
            'Registro de sintomas diários',
            'Base de conhecimento sobre hanseníase',
          ],
          developmentProcess: [
            {
              title: 'Pesquisa e Validação',
              description: 'Estudo aprofundado sobre hanseníase e validação da proposta com profissionais de saúde especializados.'
            },
            {
              title: 'Design UX/UI',
              description: 'Criação de uma interface amigável e acessível, considerando diferentes perfis de usuários.'
            },
            {
              title: 'Desenvolvimento Flutter',
              description: 'Implementação do aplicativo utilizando Flutter para garantir performance nativa em Android e web.'
            },
            {
              title: 'Integração Firebase',
              description: 'Configuração do backend Firebase para autenticação, banco de dados e notificações push.'
            },
            {
              title: 'Testes com Usuários',
              description: 'Validação com pacientes reais e profissionais de saúde para refinamento da experiência.'
            }
          ],
          projectInfo: {
            duration: '3 meses',
            team: '3 desenvolvedores',
            client: 'Universidade Federal do Maranhão (UFMA)'
          },
          // impact: [
          //   { value: '500+', label: 'Downloads' },
          //   { value: '95%', label: 'Satisfação' },
          //   { value: '80%', label: 'Adesão ao Tratamento' }
          // ]
        },
        {
          id: 3,
          title: 'RENAVEH - MA',
          description: 'Sistema web para cadastro de pacientes, gestão de notificações hospitalares e transferências entre hospitais, com área exclusiva para acidentes de trânsito e controle de acessos por papéis e permissões.',
          previewImage: '/images/renaveh/logo_renaveh.png',
          gallery: [
            {
              url: '/images/renaveh/tela_login.png',
              alt: 'Tela de login do sistema Renaveh'
            },
            {
              url: '/images/renaveh/tela_2fa_autenticacao.png',
              alt: 'Tela de autenticação com verificação em duas etapas (2FA)'
            },
            {
              url: '/images/renaveh/dashboard_dados_totais.png',
              alt: 'Dashboard com dados totais do sistema'
            },
            {
              url: '/images/renaveh/dashboard_supast.png',
              alt: 'Dashboard específico da SUPAST (Superintendência da Política de Atenção em Saúde no Trânsito)'
            },
            {
              url: '/images/renaveh/dados_filtrados_supast.png',
              alt: 'Dados filtrados por região no dashboard da SUPAST'
            },
            {
              url: '/images/renaveh/index_pacientes.png',
              alt: 'Página de busca de pacientes cadastrados no sistema'
            },
            {
              url: '/images/renaveh/cadastrar_paciente.png',
              alt: 'Formulário de cadastro de novo paciente'
            },
            {
              url: '/images/renaveh/edit_paciente.png',
              alt: 'Formulário de edição de dados do paciente'
            },
            {
              url: '/images/renaveh/ficha_paciente.png',
              alt: 'Ficha com os dados do paciente cadastrado'
            },
            {
              url: '/images/renaveh/index_not_paciente.png',
              alt: 'Listagem de notificações do paciente referente ao hospital do usuário logado'
            },
            {
              url: '/images/renaveh/index_not_paciente2.png',
              alt: 'Visualização de todas as notificações do paciente, em qualquer hospital'
            },
            {
              url: '/images/renaveh/notificacao_paciente.png',
              alt: 'Detalhes da notificação do paciente'
            },
            {
              url: '/images/renaveh/notificacao_paciente2.png',
              alt: 'Continuação dos detalhes da notificação do paciente'
            },
            {
              url: '/images/renaveh/historico_not_transf.png',
              alt: 'Histórico de transferências de notificações'
            },
            {
              url: '/images/renaveh/cadastro_notificacao.png',
              alt: 'Formulário de cadastro de nova notificação'
            },
            {
              url: '/images/renaveh/cadastro_notificacao2.png',
              alt: 'Cadastro de notificação - Etapa 2'
            },
            {
              url: '/images/renaveh/cadastro_notificacao3.png',
              alt: 'Cadastro de notificação - Etapa 3'
            },
            {
              url: '/images/renaveh/cadastro_notificacao4.png',
              alt: 'Cadastro de notificação - Etapa 4'
            },
            {
              url: '/images/renaveh/cadastro_notificacao5.png',
              alt: 'Cadastro de notificação - Etapa 5'
            },
            {
              url: '/images/renaveh/cadastro_notificacao6.png',
              alt: 'Cadastro de notificação - Etapa 6'
            },
            {
              url: '/images/renaveh/cadastro_notificacao7.png',
              alt: 'Cadastro de notificação - Etapa 7'
            },
            {
              url: '/images/renaveh/cadastro_notificacao8.png',
              alt: 'Cadastro de notificação - Etapa 8'
            },
            {
              url: '/images/renaveh/cadastro_notificacao9.png',
              alt: 'Cadastro de notificação - Etapa 9'
            },
            {
              url: '/images/renaveh/index_notificacao.png',
              alt: 'Página de busca de notificações cadastradas'
            },
            {
              url: '/images/renaveh/search_notificacao.png',
              alt: 'Filtros de busca de notificações aplicados na página de busca'
            },
            {
              url: '/images/renaveh/search_notificacao2.png',
              alt: 'Resultados da busca de notificações com filtros aplicados'
            },
            {
              url: '/images/renaveh/search_notificacao3.png',
              alt: 'Continuação dos resultados da busca de notificações com filtros aplicados'
            },
            {
              url: '/images/renaveh/search_notificacao4.png',
              alt: 'Continuação dos resultados da busca de notificações com filtros aplicados'
            },
            {
              url: '/images/renaveh/excel_relatorio.png',
              alt: 'Exportação de relatórios em formato Excel'
            },
            {
              url: '/images/renaveh/notificacoes_supast.png',
              alt: 'Notificações vinculadas à SUPAST'
            },
            {
              url: '/images/renaveh/notificacoes_supast2.png',
              alt: 'Resultados da busca de notificações SUPAST com filtros aplicados'
            },
            {
              url: '/images/renaveh/index_hospitais.png',
              alt: 'Gerenciamento de hospitais cadastrados'
            },
            {
              url: '/images/renaveh/usuarios_hospitais.png',
              alt: 'Associação entre usuários e hospitais'
            },
            {
              url: '/images/renaveh/index_dae.png',
              alt: 'Listagem de DAEs (Doenças, Agravos e Eventos) registrados'
            },
            {
              url: '/images/renaveh/index_sintomas.png',
              alt: 'Cadastro e listagem de sintomas registrados'
            },
            {
              url: '/images/renaveh/index_auditoria.png',
              alt: 'Tela de auditoria do sistema para rastreamento de ações'
            },
            {
              url: '/images/renaveh/index_usuarios.png',
              alt: 'Lista de usuários do sistema'
            },
            {
              url: '/images/renaveh/visualizar_usuario.png',
              alt: 'Ficha de visualização de usuário'
            },
            {
              url: '/images/renaveh/index_papeis.png',
              alt: 'Gerenciamento de papéis e permissões dos usuários'
            },
            {
              url: '/images/renaveh/index_paginas.png',
              alt: 'Gerenciamento das páginas de permissões do sistema'
            }
          ],
          detailedDescription: 'O RENAVEH (Rede Nacional de Emergências Hospitalares) é um sistema web desenvolvido para otimizar a gestão de emergências hospitalares no Maranhão. A plataforma permite o cadastro e acompanhamento de pacientes em situações de emergência, facilitando a comunicação entre hospitais e agilizando processos de transferência e notificação.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' }
          ],
          projectUrl: 'https://renaveh.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false,
          features: [
            'Cadastro de pacientes',
            'Cadastro de notificações hospitalares',
            'Sistema de transferências de notificações entre hospitais',
            'Módulo especializado para acidentes de trânsito, requisitado pela SUPAST',
            'Controle de acesso por papéis e permissões',
            'Painel de indicadores para gestores',
          ],
          projectInfo: {
            duration: '6 meses',
            team: '4 desenvolvedores',
            client: 'RENAVEH - Maranhão'
          },
          impact: [
            { value: '40.606+', label: 'Casos Notificados (Geral)' },
            { value: '8.042+', label: 'Notificações Imediatas' },
            { value: '4.612+', label: 'Casos Notificados (SUPAST)' },
            { value: '26', label: 'Óbitos Registrados' }
          ]
        },
        {
          id: 4,
          title: 'Maranhão Livre da Fome',
          description: 'Maranhão Livre da Fome é um sistema em desenvolvimento voltado ao enfrentamento da insegurança alimentar no estado, com foco no cadastro e acompanhamento de famílias vulneráveis, avaliação nutricional e integração com políticas públicas.',
          previewImage: '/images/masemfome/logo.png',
          detailedDescription: 'O Maranhão Livre da Fome está sendo desenvolvido como uma plataforma estratégica para apoiar ações integradas de combate à fome e insegurança alimentar no estado do Maranhão. O sistema permitirá o registro detalhado de famílias em situação de vulnerabilidade, o monitoramento nutricional individual e o acompanhamento da efetividade das ações sociais por meio de dashboards e relatórios automatizados. A plataforma integra-se com sistemas governamentais existentes através de APIs, permitindo o aproveitamento de dados já cadastrados e evitando duplicação de esforços no atendimento às famílias.',
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
          features: [
            'Cadastro estruturado de famílias em vulnerabilidade alimentar',
            'Integração com API externa para busca automática de dados familiares por CPF',
            'Importação e sincronização de dados pessoais e endereços das famílias',
            'Atualização e complementação de informações não disponíveis na API externa',
            'Cadastros de avaliações com base em indicadores de saúde',
            'Histórico contínuo de atendimentos e acompanhamentos',
            'Dashboards dinâmicos por região e município',
            'Relatórios automatizados para gestores públicos',
            'Integração com políticas e programas sociais existentes',
            'Apoio à tomada de decisão em políticas de segurança alimentar'
          ],
          developmentProcess: [
            {
              title: 'Diagnóstico e Planejamento',
              description: 'Mapeamento de necessidades, definição dos fluxos de dados e levantamento dos indicadores nutricionais e sociais prioritários.'
            },
            {
              title: 'Integração com Sistemas Governamentais',
              description: 'Desenvolvimento da integração com API do sistema de cadastro geral das famílias, permitindo busca por CPF do responsável familiar e importação automática de dados pessoais e endereços. Esta integração evita retrabalho e garante consistência nas informações entre os sistemas.'
            },
            {
              title: 'Desenvolvimento da Plataforma',
              description: 'Construção do backend e frontend com foco em performance, segurança e usabilidade para os profissionais de campo, incluindo funcionalidades de sincronização e atualização de dados.'
            },
            {
              title: 'Validação de Dados e Fluxos',
              description: 'Implementação de rotinas de validação e complementação de dados importados, permitindo que os profissionais atualizem ou acrescentem informações específicas da área da saúde não contempladas no sistema principal.'
            },
            {
              title: 'Testes Pilotos Regionais',
              description: 'Implantação inicial em regiões-piloto para coleta de feedbacks, validação das funcionalidades e teste da integração com o sistema externo em ambiente real.'
            }
          ],
          projectInfo: {
            duration: 'Em andamento (2 meses)',
            team: '6 desenvolvedores',
            client: 'Secretaria de Estado da Saúde do Maranhão (SES/MA)'
          }
        },
        {
          id: 5,
          title: 'CadServ',
          description: 'Sistema de cadastro e gestão de servidores da SAPAPVS, permitindo registrar dados pessoais, funcionais e sociais, além de gerenciar informações como férias, com acesso por gerentes, coordenadores e a secretaria adjunta.',
          previewImage: '/images/cadserv/logo.png',
          detailedDescription: 'O CadServ é um sistema de gestão de recursos humanos desenvolvido especificamente para a Secretaria Adjunta da Política de Atenção Primária e Vigilância em Saúde (SAPAPVS). A plataforma centraliza informações funcionais, facilitando a administração de servidores e otimizando processos internos da secretaria.',
          gradient: 'from-blue-500 to-indigo-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'MySQL', color: 'bg-cyan-600' }
          ],
          projectUrl: 'https://cadserv.saude.ma.gov.br/',
          githubUrl: '#',
          inDevelopment: false,
          features: [
            'Cadastro completo de servidores',
            'Gestão de dados funcionais e pessoais',
            'Controle de férias e licenças',
            'Sistema de permissões hierárquicas',
            'Relatórios gerenciais',
            'Histórico funcional completo',
            'Interface administrativa intuitiva'
          ],
          projectInfo: {
            duration: '2 meses',
            team: '4 desenvolvedores',
            client: 'SAPAPVS - Secretaria de Saúde do Maranhão'
          }
        },
        {
          id: 6,
          title: 'PlanDox 2.0',
          description: 'PlanDox 2.0 é a nova versão em desenvolvimento de um software desktop para planejamento experimental e análise de qualidade do biodiesel, que terá interface aprimorada, versão mobile e arquitetura baseada em microserviços.',
          previewImage: '/images/plandox/logo.png',
          detailedDescription: 'O PlanDox 2.0 representa uma evolução significativa do software original, incorporando tecnologias modernas e arquitetura de microserviços. Este projeto visa modernizar completamente a experiência de planejamento experimental para análise de biodiesel, oferecendo maior flexibilidade, escalabilidade e acessibilidade através de múltiplas plataformas.',
          gradient: 'from-yellow-500 to-orange-600',
          technologies: [
            { name: 'Python', color: 'bg-yellow-600' },
            { name: 'Docker', color: 'bg-blue-600' },
            { name: 'Microserviços', color: 'bg-purple-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true,
          features: [
            'Interface moderna e intuitiva',
            'Arquitetura baseada em microserviços',
            'Versão mobile complementar',
            'Análise avançada de dados',
            'Integração com equipamentos de laboratório',
            'Relatórios científicos automatizados',
            'Colaboração entre pesquisadores'
          ],
          developmentProcess: [
            {
              title: 'Análise da Versão Anterior',
              description: 'Estudo detalhado do PlanDox original para identificar pontos de melhoria.'
            },
            {
              title: 'Redesign da Arquitetura',
              description: 'Migração para arquitetura de microserviços com Python e Docker.'
            },
            {
              title: 'Desenvolvimento Iterativo',
              description: 'Implementação em sprints com feedback contínuo de pesquisadores.'
            },
            {
              title: 'Testes Laboratoriais',
              description: 'Validação em ambiente real de laboratório de biodiesel.'
            }
          ],
          projectInfo: {
            duration: 'Em andamento (1 mês)',
            team: '4 desenvolvedores',
            client: 'DartiLab - UFMA'
          }
        },
        {
          id: 7,
          title: 'Portal REACT',
          description: 'O portal REACT, em desenvolvimento, será uma plataforma para gestão intuitiva de projetos, notícias, editais e equipes da Rede de Aplicação de Ciência e Tecnologia (REACT), fortalecendo a colaboração acadêmica e profissional.',
          previewImage: '/images/react/logo.png',
          detailedDescription: 'O Portal REACT está sendo desenvolvido como uma plataforma central para a Rede de Aplicação de Ciência e Tecnologia, com o objetivo de conectar pesquisadores, facilitar a colaboração em projetos e centralizar informações acadêmicas. A plataforma servirá como hub de conhecimento e colaboração para a comunidade acadêmica.',
          gradient: 'from-teal-500 to-cyan-600',
          technologies: [
            { name: 'Laravel', color: 'bg-red-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: '#',
          githubUrl: '#',
          inDevelopment: true,
          features: [
            'Gestão completa de projetos de pesquisa',
            'Sistema de notícias e comunicação',
            'Gestão de editais e processos seletivos',
            'Diretório de pesquisadores e equipes',
            'Biblioteca de recursos acadêmicos',
            'Sistema de colaboração entre instituições',
            'Dashboard analítico para gestores'
          ],
          developmentProcess: [
            {
              title: 'Levantamento de Requisitos',
              description: 'Entrevistas com coordenadores e pesquisadores para definir funcionalidades.'
            },
            {
              title: 'Prototipagem',
              description: 'Criação de protótipos interativos para validação com usuários.'
            },
            {
              title: 'Desenvolvimento Backend',
              description: 'Implementação da API e estrutura de dados com Laravel.'
            },
            {
              title: 'Desenvolvimento Frontend',
              description: 'Criação da interface do usuário focada na experiência do pesquisador.'
            }
          ],
          projectInfo: {
            duration: 'Em andamento (2 meses)',
            team: '3 desenvolvedores',
            client: 'Rede REACT - UFMA'
          }
        }
      ]
    }
  },
  mounted() {
    this.loadProject()

    // Listener para navegação por teclado
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
    document.body.style.overflow = 'auto' // Garante que o scroll volte ao normal
  },
  methods: {
    loadProject() {
      const projectId = parseInt(this.$route.params.id)
      
      // Simular loading
      setTimeout(() => {
        this.project = this.allProjects.find(p => p.id === projectId)
        this.relatedProjects = this.allProjects
          .filter(p => p.id !== projectId)
          .slice(0, 3)
        this.loading = false
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
      this.selectedImageIndex = index;
      this.selectedImage = this.project.gallery[index];
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
      if (this.selectedImageIndex < this.project.gallery.length - 1) {
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