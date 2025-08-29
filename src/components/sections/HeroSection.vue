<template>
  <section id="home" class="relative pt-20 min-h-screen flex items-center justify-center z-10">
    <div class="container mx-auto px-6 max-w-7xl">
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        
        <!-- Lado esquerdo - Conteúdo textual -->
        <div class="space-y-8 animate-fade-in-up order-2 lg:order-1">
          <div class="space-y-4">
            <div class="flex items-center space-x-4 mb-6">
              <div class="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              <span class="text-purple-400 font-semibold text-lg tracking-wider uppercase">
                {{ $t('hero.role') }}
              </span>
            </div>
            
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black leading-tight">
              <span class="block text-white">{{ $t('hero.greeting') }}</span>
              <span class="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
                {{ $t('hero.name') }}
              </span>
              <span class="block text-gray-300 text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
                {{ $t('hero.surname') }}
              </span>
            </h1>
          </div>
          
          <p class="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-xl">
            {{ $t('hero.description') }}
            <span class="text-purple-400 font-semibold">{{ $t('hero.highlight1') }}</span>
            {{ $t('hero.description2') }}
            <span class="text-pink-400 font-semibold">{{ $t('hero.highlight2') }}</span>.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-6 pt-4">
            <a href="#projects">
              <button class="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 btn-primary">
                <span class="relative z-10 flex items-center justify-center space-x-2">
                  <span>{{ $t('hero.buttons.viewProjects') }}</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </span>
              </button>
            </a>
            
            <a :href="cvDownloadUrl" download>
              <button class="group relative overflow-hidden border-2 border-purple-500 hover:border-purple-400 text-purple-400 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                <span class="relative z-10 flex items-center justify-center space-x-2">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span>{{ $t('hero.buttons.downloadCV') }}</span>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </a>
          </div>
        </div>
        
        <!-- Lado direito - Foto e elementos visuais -->
        <div class="relative order-1 lg:order-2">
          <div class="relative group">
            <!-- Background glow effect -->
            <div class="absolute -inset-8 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-purple-600/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000 animate-pulse-glow"></div>
            
            <!-- Main photo container -->
            <div class="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
              <!-- Outer ring with gradient -->
              <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full p-1 animate-gradient">
                <div class="w-full h-full bg-black rounded-full p-4">
                  <!-- Inner container with photo -->
                  <div class="w-full h-full rounded-full overflow-hidden relative bg-gradient-to-br from-purple-900/50 to-black">
                    <img
                      src="/images/foto_formatura.jpeg"
                      alt="Ana Iara Loayza Costa"
                      class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <!-- Gradient overlay -->
                    <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10"></div>
                  </div>
                </div>
              </div>
              
              <!-- Floating elements -->
              <div class="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-80 animate-float" style="animation-delay: -1s;"></div>
              <div class="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-60 animate-float" style="animation-delay: -3s;"></div>
              <div class="absolute top-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg opacity-70 animate-float" style="animation-delay: -2s;"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
  computed: {
    cvDownloadUrl() {
      const currentLocale = this.$i18n.locale
      return currentLocale === 'pt' 
        ? '/CV_Ana_Iara_Loayza_PT.pdf'
        : '/CV_Ana_Iara_Loayza_EN.pdf'
    }
  }
}
</script>

<style scoped>
/* Animations específicas para elementos flutuantes */
@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.animate-float-delayed {
  animation: float-delayed 4s ease-in-out infinite;
}

/* Enhanced hover effects */
.tech-badge:hover {
  transform: translateY(-2px);
}
</style>