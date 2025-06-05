<template>
  <section id="projects" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-7xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Projetos
      </h2>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          :project="project"
        />
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
      projects: [
        {
          id: 1,
          title: 'Projeto Inovador',
          description: 'Uma aplicação web moderna que demonstra o poder da tecnologia aplicada à solução de problemas reais.',
          gradient: 'from-purple-600 to-purple-800',
          technologies: [
            { name: 'Vue.js', color: 'bg-purple-600' },
            { name: 'Node.js', color: 'bg-green-600' },
            { name: 'PostgreSQL', color: 'bg-blue-600' }
          ],
          projectUrl: '#',
          githubUrl: '#'
        },
        {
          id: 2,
          title: 'App Revolucionário',
          description: 'Interface intuitiva e experiência do usuário excepcional em uma aplicação que redefiniu padrões.',
          gradient: 'from-pink-600 to-purple-800',
          technologies: [
            { name: 'React', color: 'bg-cyan-600' },
            { name: 'Python', color: 'bg-yellow-600' },
            { name: 'Docker', color: 'bg-red-600' }
          ],
          projectUrl: '#',
          githubUrl: '#'
        },
        {
          id: 3,
          title: 'Sistema Inteligente',
          description: 'Solução completa que integra múltiplas tecnologias para entregar resultados extraordinários.',
          gradient: 'from-purple-500 to-pink-600',
          technologies: [
            { name: 'Vue.js', color: 'bg-purple-600' },
            { name: 'TypeScript', color: 'bg-blue-600' },
            { name: 'MongoDB', color: 'bg-green-600' }
          ],
          projectUrl: '#',
          githubUrl: '#'
        }
      ]
    }
  }
}
</script>