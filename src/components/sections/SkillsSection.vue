<template>
  <section id="skills" class="relative py-20 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Habilidades
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

      <!-- Conteúdo principal reestruturado -->
      <div class="space-y-16">
        <!-- Minhas Especialidades abaixo dos stats, em grid 2x2 -->
        <div>
          <div class="grid md:grid-cols-2 gap-8">
            <SkillCategory
              v-reveal="{ delay: 0 }"
              title="Frontend Development"
              :skills="frontendSkills"
              color="purple"
              icon="code"
            />
            <SkillCategory
              v-reveal="{ delay: 120 }"
              title="Mobile Development"
              :skills="mobileSkills"
              color="blue"
              icon="device-mobile"
            />
            <SkillCategory
              v-reveal="{ delay: 240 }"
              title="Backend & Database"
              :skills="backendSkills"
              color="pink"
              icon="server"
            />
            <SkillCategory
              v-reveal="{ delay: 360 }"
              title="Tools & Others"
              :skills="toolsSkills"
              color="indigo"
              icon="cog"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillCategory from '../../ui/SkillCategory.vue'

export default {
  name: 'AboutSection',
  components: { SkillCategory },
  directives: {
    // v-reveal: adiciona fade-in + slide-up quando o elemento entra na viewport
    reveal: {
      mounted(el, binding) {
        const delay = binding?.value?.delay ?? 0
        el.classList.add('reveal-up')
        el.style.transitionDelay = `${delay}ms`

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                el.classList.add('is-visible')
                observer.unobserve(el) // roda uma única vez
              }
            })
          },
          { threshold: 0.2 }
        )
        observer.observe(el)
        // guarda o observer pra limpar no unmounted
        el._revealObserver = observer
      },
      unmounted(el) {
        if (el._revealObserver) {
          el._revealObserver.disconnect()
          delete el._revealObserver
        }
      }
    }
  },
  data() {
    return {
      frontendSkills: [
        { name: 'Vue.js', level: 85 },
        { name: 'React', level: 80 },
        { name: 'JavaScript/TypeScript', level: 88 },
        { name: 'HTML5/CSS3', level: 92 },
        { name: 'TailwindCSS', level: 90 }
      ],
      mobileSkills: [
        { name: 'React Native', level: 70 },
        { name: 'Flutter', level: 85 },
        { name: 'Dart', level: 80 }
      ],
      backendSkills: [
        { name: 'Laravel (PHP)', level: 95 },
        { name: 'Python', level: 80 },
        { name: 'Node.js', level: 80 },
        { name: 'PostgreSQL', level: 95 },
        { name: 'MySQL', level: 95 }
      ],
      toolsSkills: [
        { name: 'Git/GitHub', level: 80 },
        { name: 'Docker', level: 65 },
        { name: 'Figma', level: 80 },
        { name: 'Linux', level: 85 }
      ]
    }
  }
}
</script>

<style scoped>
/* Animação fade-in + slide-up (sem dependências) */
.reveal-up {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 700ms ease, transform 700ms ease;
  will-change: opacity, transform;
}
.reveal-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Acessibilidade: reduz animações quando o usuário prefere */
@media (prefers-reduced-motion: reduce) {
  .reveal-up {
    transition: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>