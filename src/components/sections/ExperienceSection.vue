<template>
  <section id="experience" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Experiência
      </h2>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full"></div>
        
        <!-- Experience Items -->
        <div class="space-y-16">
          <ExperienceCard
            :position="'right'"
            :company="'TechCorp Solutions'"
            :role="'Desenvolvedora Full Stack Sênior'"
            :period="'Jan 2023 - Presente'"
            :location="'São Paulo, SP'"
            :description="'Lidero o desenvolvimento de aplicações web complexas utilizando Vue.js, Node.js e PostgreSQL. Responsável por arquitetar soluções escaláveis e mentorear desenvolvedores juniores.'"
            :achievements="[
              'Aumentei a performance das aplicações em 40%',
              'Implementei arquitetura de microserviços',
              'Liderei equipe de 5 desenvolvedores',
              'Reduzi bugs em produção em 60%'
            ]"
            :technologies="['Vue.js', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']"
          />
          
          <ExperienceCard
            :position="'left'"
            :company="'Digital Innovations'"
            :role="'Desenvolvedora Full Stack'"
            :period="'Mar 2021 - Dez 2022'"
            :location="'São Paulo, SP'"
            :description="'Desenvolvi aplicações web responsivas e APIs RESTful, colaborando diretamente com equipes de design e produto para entregar soluções de alta qualidade.'"
            :achievements="[
              'Desenvolvi 15+ projetos web completos',
              'Integrei sistemas de pagamento online',
              'Otimizei SEO aumentando tráfego em 200%',
              'Implementei testes automatizados'
            ]"
            :technologies="['React', 'Express.js', 'MongoDB', 'Stripe', 'Vercel']"
          />
          
          <ExperienceCard
            :position="'right'"
            :company="'StartupTech'"
            :role="'Desenvolvedora Frontend'"
            :period="'Ago 2019 - Fev 2021'"
            :location="'Remote'"
            :description="'Focada no desenvolvimento de interfaces modernas e experiências de usuário excepcionais, trabalhando em close collaboration com designers UX/UI.'"
            :achievements="[
              'Criei biblioteca de componentes reutilizáveis',
              'Melhorei UX resultando em 50% mais conversões',
              'Implementei Progressive Web App',
              'Adotei metodologias ágeis'
            ]"
            :technologies="['JavaScript', 'SCSS', 'Webpack', 'PWA', 'Figma']"
          />
          
          <ExperienceCard
            :position="'left'"
            :company="'WebStudio Creative'"
            :role="'Desenvolvedora Junior'"
            :period="'Jan 2018 - Jul 2019'"
            :location="'São Luís, MA'"
            :description="'Início da carreira desenvolvendo websites institucionais e sistemas web básicos, aprendendo as melhores práticas de desenvolvimento.'"
            :achievements="[
              'Desenvolvi 20+ websites responsivos',
              'Aprendi frameworks modernos',
              'Colaborei em projetos de e-commerce',
              'Participei de workshops técnicos'
            ]"
            :technologies="['HTML5', 'CSS3', 'jQuery', 'PHP', 'MySQL']"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import ExperienceCard from '../../ui/ExperienceCard.vue'

    export default {
    name: 'ExperienceSection',
    components: {
        ExperienceCard
    }
    }
</script>

<style scoped>
    /* Animações específicas da seção */
    .timeline-dot {
    animation: pulse-glow 2s ease-in-out infinite;
    }

    @media (max-width: 768px) {
    .timeline-line {
        left: 2rem;
    }
    }
</style>