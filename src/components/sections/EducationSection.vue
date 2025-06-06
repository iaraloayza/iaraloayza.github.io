<template>
  <section id="education" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Formação
      </h2>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 rounded-full"></div>
        
        <!-- Education Items -->
        <div class="space-y-16">
          <EducationCard
            :position="'right'"
            :institution="'Universidade Federal do Maranhão'"
            :degree="'Bacharelado em Ciência da Computação'"
            :period="'2016 - 2020'"
            :location="'São Luís, MA'"
            :status="'Concluído'"
            :description="'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web. Participação ativa em projetos de pesquisa e extensão.'"
            :highlights="[
              'TCC: Sistema Web para Gestão Acadêmica',
              'Bolsista de Iniciação Científica por 2 anos',
              'Participação em 5+ eventos técnicos',
              'CRA: 8.5/10.0'
            ]"
            :subjects="['Algoritmos', 'Banco de Dados', 'Eng. Software', 'Redes', 'IA']"
            :type="'graduation'"
          />
          
          <EducationCard
            :position="'left'"
            :institution="'Rocketseat'"
            :degree="'Ignite - Trilha ReactJS'"
            :period="'2021'"
            :location="'Online'"
            :status="'Certificado'"
            :description="'Bootcamp intensivo focado em desenvolvimento React moderno, incluindo hooks, context API, Next.js, e melhores práticas de desenvolvimento frontend.'"
            :highlights="[
              'Desenvolvimento de 8 projetos práticos',
              'Aprendizado de TypeScript avançado',
              'Implementação de testes automatizados',
              'Deploy e otimização de performance'
            ]"
            :subjects="['React', 'Next.js', 'TypeScript', 'Jest', 'Styled Components']"
            :type="'bootcamp'"
          />
          
          <EducationCard
            :position="'right'"
            :institution="'Alura'"
            :degree="'Formação Vue.js'"
            :period="'2022'"
            :location="'Online'"
            :status="'Certificado'"
            :description="'Especialização completa em Vue.js, abordando desde conceitos básicos até técnicas avançadas de desenvolvimento, incluindo Vuex, Vue Router e composição de aplicações complexas.'"
            :highlights="[
              'Projetos com Vue 3 e Composition API',
              'Gerenciamento de estado com Vuex',
              'Integração com APIs RESTful',
              'Otimização de performance'
            ]"
            :subjects="['Vue.js', 'Vuex', 'Vue Router', 'Composition API', 'Nuxt.js']"
            :type="'course'"
          />
          
          <EducationCard
            :position="'left'"
            :institution="'AWS'"
            :degree="'AWS Solutions Architect Associate'"
            :period="'2023'"
            :location="'Online'"
            :status="'Certificado'"
            :description="'Certificação oficial AWS focada em arquitetura de soluções na nuvem, incluindo design de sistemas escaláveis, segurança, e otimização de custos.'"
            :highlights="[
              'Arquitetura de aplicações na nuvem',
              'Segurança e compliance AWS',
              'Otimização de custos e performance',
              'Certificação válida até 2026'
            ]"
            :subjects="['EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation']"
            :type="'certification'"
          />
          
          <EducationCard
            :position="'right'"
            :institution="'Udemy'"
            :degree="'Machine Learning e Data Science'"
            :period="'2023 - 2024'"
            :location="'Online'"
            :status="'Em Andamento'"
            :description="'Curso abrangente sobre Machine Learning, análise de dados e inteligência artificial, com foco em aplicações práticas usando Python e suas principais bibliotecas.'"
            :highlights="[
              'Algoritmos de ML supervisionado e não supervisionado',
              'Análise e visualização de dados',
              'Deep Learning com TensorFlow',
              'Projetos com datasets reais'
            ]"
            :subjects="['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib']"
            :type="'course'"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import EducationCard from '../../ui/EducationCard.vue'

    export default {
    name: 'EducationSection',
    components: {
        EducationCard
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