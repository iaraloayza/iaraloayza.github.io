<template>
  <section id="about" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Sobre Mim
      </h2>
      
      <div class="grid lg:grid-cols-2 gap-16 items-center">
        <div class="relative group">
          <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-1000"></div>
          <div class="relative w-full h-96 bg-gradient-to-br from-purple-900/50 to-black rounded-3xl overflow-hidden">
            <!-- Imagem de perfil -->
            <img 
              src="../../../public/images/foto_formatura.jpeg" 
              alt="Ana Iara Loayza Costa"
              class="w-full h-full object-cover"
            />
            <!-- Overlay gradient para manter o efeito visual -->
            <div class="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
            <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div class="absolute bottom-6 left-6 text-2xl font-bold text-white drop-shadow-lg">
              Ana Iara Loayza Costa
            </div>
          </div>
        </div>
        
        <div class="space-y-8">
          <div class="space-y-6 text-lg leading-relaxed text-gray-300">
            <p class="transform hover:scale-105 transition-transform duration-300 p-6 bg-purple-900/10 rounded-2xl border border-purple-500/20">
              Sou uma desenvolvedora apaixonada por tecnologia, especializada em criar 
              <span class="text-purple-400 font-semibold">soluções web e mobile modernas</span> 
              que combinam funcionalidade excepcional com design impactante.
            </p>
            
            <p class="transform hover:scale-105 transition-transform duration-300 p-6 bg-purple-900/10 rounded-2xl border border-purple-500/20">
              Trabalho com as mais recentes tecnologias como Vue.js, Laravel e Python, 
              sempre em busca de <span class="text-pink-400 font-semibold">inovação</span> 
              e excelência em cada projeto.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            <TechCategory 
              title="Frontend" 
              color="purple"
              :technologies="frontendTech"
            />
            
            <TechCategory 
              title="Mobile" 
              color="blue"
              :technologies="mobileTech"
            />
            
            <TechCategory 
              title="Backend" 
              color="pink"
              :technologies="backendTech"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TechCategory from '../../ui/TechCategory.vue'

export default {
  name: 'AboutSection',
  components: {
    TechCategory
  },
  data() {
    return {
      frontendTech: [
        'Vue.js / React',
        'JavaScript / TypeScript',
        'HTML5 / CSS3',
        'TailwindCSS'
      ],
      mobileTech: [
        'Flutter',
        'Dart'
      ],
      backendTech: [
        'Laravel (PHP) / Python',
        'Express / FastAPI',
        'PostgreSQL / Firebase',
        'Docker'
      ]
    }
  }
}
</script>