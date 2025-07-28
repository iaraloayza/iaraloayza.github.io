<template>
  <section id="home" class="relative pt-20 min-h-screen flex items-center justify-center z-10">
    <div class="text-center px-6">
      <div class="mb-8 animate-float">
        <div class="w-40 h-40 relative mx-auto mb-8">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full animate-pulse-glow"></div>
          <div class="absolute inset-2 bg-black rounded-full flex items-center justify-center">
            <span class="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AI</span>
          </div>
        </div>
      </div>

      <div class="space-y-6 animate-fade-in-up">
        <h1 class="text-6xl md:text-8xl font-black leading-tight">
          <span class="block text-white">Olá, eu sou</span>
          <span class="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-gradient">
            Ana Iara Loayza
          </span>
        </h1>

        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Desenvolvedora Full Stack apaixonada por criar 
          <span class="text-purple-400 font-semibold">experiências digitais</span> 
          extraordinárias que transformam ideias em realidade.
        </p>

        <div class="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <a href="#projects">
            <button class="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
              <span class="relative z-10">Ver Projetos</span>
              <div class="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </a>

          <a href="/Curriculo_Ana_Iara_Loayza.pdf" download>
            <button class="group relative overflow-hidden border-2 border-purple-500 hover:border-purple-400 text-purple-400 hover:text-white px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
              <span class="relative z-10">Baixar CV</span>
              <div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
/* Se necessário, adicione estilos específicos aqui */
</style>
