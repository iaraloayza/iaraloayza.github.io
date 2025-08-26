<template>
  <section id="experience" class="relative py-20 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Experiência
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full"></div>
        
        <!-- Experience Items -->
        <div class="space-y-16">
          <ExperienceCard
            :position="'left'"
            :company="'Secretaria de Estado da Saúde do Maranhão - SES/MA'"
            :role="'Desenvolvedora Full-Stack Junior'"
            :period="'Jan 2024 - Presente'"
            :location="'São Luís, MA'"
            :description="'Desenvolvo sistemas web full-stack para saúde pública utilizando Laravel e PHP, criando soluções que apoiam a gestão e interoperabilidade de dados entre diferentes áreas da saúde.'"
            :achievements="[
              'Desenvolvi sistemas web completos com Laravel e PHP',
              'Criei APIs RESTful para integração com aplicações móveis',
              'Construí interfaces responsivas priorizando acessibilidade',
              'Automatizei processos de interoperabilidade de dados',
              'Estruturei consultas SQL para relatórios de saúde'
            ]"
            :technologies="['Laravel', 'PHP', 'MySQL', 'PostgreSQL', 'Vue.js', 'Docker', 'Git', 'GitHub', 'Trello', 'Linux']"
          />
          
          <ExperienceCard
            :position="'right'"
            :company="'DartiLab - UFMA'"
            :role="'Estagiária Acadêmica em Engenharia de Software'"
            :period="'Jun 2025 - Presente'"
            :location="'São Luís, MA'"
            :description="'Participo da modernização de sistemas monolíticos, contribuindo para a decomposição em microsserviços e desenvolvimento de interfaces multiplataforma.'"
            :achievements="[
              'Apoio análise e decomposição de sistemas monolíticos',
              'Desenvolvo interfaces multiplataforma com React Native',
              'Implemento microsserviços em Python com FastAPI',
              'Utilizo Docker e Kubernetes para containerização',
              'Contribuo para documentação técnica do projeto'
            ]"
            :technologies="['Python', 'React Native', 'FastAPI', 'Firebase', 'Docker', 'Kubernetes', 'RabbitMQ', 'Git', 'GitHub', 'Linux']"
          />
          
          <ExperienceCard
            :position="'left'"
            :company="'Universidade Federal do Maranhão - UFMA'"
            :role="'Monitora de Projeto e Desenvolvimento de Software'"
            :period="'Mar 2024 - Jul 2024'"
            :location="'São Luís, MA'"
            :description="'Auxiliei estudantes na compreensão de conceitos de engenharia de software, promovendo boas práticas de programação e colaboração em projetos práticos.'"
            :achievements="[
              'Auxiliei alunos em conceitos de engenharia de software',
              'Apoiei desenvolvimento de projetos práticos em grupo',
              'Esclareci dúvidas sobre UML e arquitetura de software',
              'Promovi integração entre teoria e prática',
              'Utilizei metodologias ágeis (Scrum, Kanban)'
            ]"
            :technologies="['UML', 'Git', 'GitHub', 'Jira', 'Scrum', 'Kanban']"
          />
          
          <ExperienceCard
            :position="'right'"
            :company="'Secretaria de Estado da Saúde do Maranhão - SES/MA'"
            :role="'Estagiária em Desenvolvimento Back-End e Ciência de Dados'"
            :period="'Jun 2023 - Dez 2023'"
            :location="'São Luís, MA'"
            :description="'Desenvolvi funcionalidades back-end e realizei análise de dados para apoiar decisões estratégicas na saúde pública, automatizando processos e criando relatórios técnicos.'"
            :achievements="[
              'Desenvolvi funcionalidades back-end em PHP',
              'Criei consultas SQL para relatórios estratégicos',
              'Analisei dados com Python e Julia',
              'Automatizei extração e organização de dados',
              'Apoiei integração entre diferentes fontes de dados'
            ]"
            :technologies="['PHP', 'MySQL', 'PostgreSQL', 'Python', 'Julia', 'Jupyter Notebook']"
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