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
            :institution="'Instituto Federal de Mato Grosso (IFMT)'"
            :degree="'Pós-Graduação em Engenharia DevOps'"
            :period="'2025 - Presente'"
            :location="'Planaltina, GO'"
            :status="'Em andamento'"
            :description="'Especialização voltada para práticas modernas de desenvolvimento e operações de software, com foco em metodologias ágeis, integração e entrega contínua, automação de testes e gerenciamento de infraestrutura em ambientes de DevOps.'"
            :highlights="[
              'Projetos práticos de integração e entrega contínua',
              'Implantação de pipelines automatizados com foco em qualidade e performance'
            ]"
            :subjects="[
              'Projetos Ágeis e DevOps',
              'Integração e Entrega Contínua',
              'Gerenciamento de Mudanças e Infraestrutura',
              'Monitoramento de Aplicações',
              'Testes Automatizados de Software'
            ]"
            :type="'graduation'"
          />
          
          <EducationCard
            :position="'left'"
            :institution="'Universidade Federal do Maranhão (UFMA)'"
            :degree="'Bacharelado em Engenharia da Computação'"
            :period="'2024 - Presente'"
            :location="'São Luís, MA'"
            :status="'Em andamento'"
            :description="'Formação sólida em Visão Computacional, Machine Learning, Deep Learning, Redes e Automação Industrial. Participação ativa em projetos de pesquisa e extensão.'"
            :highlights="[
              'Entrega de Portal da Rede de Aplicação de Ciência e Tecnologia (REACT)',
              'Entrega da versão 2.0 do app PlanDox'
            ]"
            :subjects="['Machine Learning', 'Computação Gráfica', 'Eng Controle', 'Redes', 'Compiladores']"
            :type="'graduation'"
          />
          
          <!-- <EducationCard
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
          /> -->
          
          <EducationCard
            :position="'right'"
            :institution="'Universidade Federal do Maranhão (UFMA)'"
            :degree="'Bacharelado em Ciência e Tecnologia'"
            :period="'2021 - 2024'"
            :location="'São Luís -MA'"
            :status="'Concluído'"
            :description="'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web. Participação ativa em projetos de pesquisa e extensão.'"
            :highlights="[
              'Projetos com Python, C, Java e PHP'
            ]"
            :subjects="['Algoritmos', 'Banco de Dados', 'Eng. Software', 'Paradigmas de Programação', 'IA']"
            :type="'graduation'"
            :tcc-info="{
              title: 'Hans+: Uma Ferramenta de Acompanhamento e Informações Sobre a Hanseníase',
              grade: '10',
              advisor: 'Prof. Dr. Davi Viana dos Santos'
            }"
            :academic-performance="{
              cra: '8.6',
              maxCra: '10.0'
            }"
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