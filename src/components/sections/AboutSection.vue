<template>
  <section id="about" class="relative py-20 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {{ $t('about.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <!-- Conteúdo principal reestruturado -->
      <div class="space-y-16">
        
        <!-- Dois cards lado a lado -->
        <div class="grid md:grid-cols-2 gap-8">
          <!-- Card 1 -->
          <div 
            v-reveal="{ delay: 0 }"
            class="transform hover:scale-105 transition-transform duration-300 p-6 bg-purple-900/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40"
          >
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-purple-400 mb-2">{{ $t('about.card1.title') }}</h3>
                <p class="text-gray-300 leading-relaxed text-justify text-base">
                  {{ $t('about.card1.description') }}
                </p>
              </div>
            </div>
          </div>

          <!-- Card 2 -->
          <div 
            v-reveal="{ delay: 120 }"
            class="transform hover:scale-105 transition-transform duration-300 p-6 bg-purple-900/10 backdrop-blur-sm rounded-3xl border border-purple-500/20 hover:border-purple-400/40"
          >
            <div class="flex items-start space-x-4">
              <div class="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-pink-400 mb-2">{{ $t('about.card2.title') }}</h3>
                <p class="text-gray-300 leading-relaxed text-justify text-base">
                  {{ $t('about.card2.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats centralizados logo abaixo dos dois cards -->
        <div 
          v-reveal="{ delay: 0 }"
          class="grid grid-cols-2 gap-6 max-w-md mx-auto"
        >
          <div class="text-center p-4 bg-black/30 rounded-2xl border border-purple-500/20">
            <div class="text-2xl font-bold text-purple-400 mb-1">2+</div>
            <div class="text-gray-300">{{ $t('about.stats.experience') }}</div>
          </div>
          <div class="text-center p-4 bg-black/30 rounded-2xl border border-pink-500/20">
            <div class="text-2xl font-bold text-pink-400 mb-1">5+</div>
            <div class="text-gray-300">{{ $t('about.stats.projects') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection'
}
</script>