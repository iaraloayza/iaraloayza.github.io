<template>
  <section id="education" class="relative py-24 px-6 z-10">
    <div class="container mx-auto max-w-4xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Formação Acadêmica
      </h2>
      
      <!-- Accordion Container -->
      <div class="space-y-4">
        <EducationAccordionCard
          v-for="(education, index) in educations"
          :key="education.id"
          :education="education"
          :is-open="openCard === education.id"
          @toggle="toggleCard(education.id)"
          :delay="index * 100"
        />
      </div>

      <!-- Resumo Estatísticas -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="text-center p-6 bg-purple-900/10 rounded-xl border border-purple-500/20">
          <div class="text-3xl font-bold text-purple-400 mb-2">{{ totalEducations }}</div>
          <div class="text-gray-300 text-sm">Formações</div>
        </div>
        <div class="text-center p-6 bg-pink-900/10 rounded-xl border border-pink-500/20">
          <div class="text-3xl font-bold text-pink-400 mb-2">{{ averageGrade }}</div>
          <div class="text-gray-300 text-sm">Média Geral</div>
        </div>
        <div class="text-center p-6 bg-blue-900/10 rounded-xl border border-blue-500/20">
          <div class="text-3xl font-bold text-blue-400 mb-2">{{ yearsStudying }}</div>
          <div class="text-gray-300 text-sm">Anos de Estudo</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import EducationAccordionCard from '../../ui/EducationAccordionCard.vue'

export default {
  name: 'EducationSection',
  components: {
    EducationAccordionCard
  },
  data() {
    return {
      openCard: 'eng-computacao', // Card inicial aberto
      educations: [
        {
          id: 'pos-devops',
          institution: 'Instituto Federal de Mato Grosso (IFMT)',
          degree: 'Pós-Graduação em Engenharia DevOps',
          period: '2025 - Presente',
          location: 'Planaltina, GO',
          status: 'Em andamento',
          type: 'postgraduate',
          description: 'Especialização voltada para práticas modernas de desenvolvimento e operações de software, com foco em metodologias ágeis, integração e entrega contínua.',
          highlights: [
            'Projetos práticos de integração e entrega contínua',
            'Implantação de pipelines automatizados com foco em qualidade e performance'
          ],
          subjects: [
            'Projetos Ágeis e DevOps',
            'Integração e Entrega Contínua',
            'Gerenciamento de Mudanças e Infraestrutura',
            'Monitoramento de Aplicações',
            'Testes Automatizados de Software'
          ]
        },
        {
          id: 'eng-computacao',
          institution: 'Universidade Federal do Maranhão (UFMA)',
          degree: 'Bacharelado em Engenharia da Computação',
          period: '2024 - Presente',
          location: 'São Luís, MA',
          status: 'Em andamento',
          type: 'graduation',
          description: 'Formação sólida em Visão Computacional, Machine Learning, Deep Learning, Redes e Automação Industrial. Participação ativa em projetos de pesquisa e extensão.',
          highlights: [
            'Entrega de Portal da Rede de Aplicação de Ciência e Tecnologia (REACT)',
            'Entrega da versão 2.0 do app PlanDox'
          ],
          subjects: ['Machine Learning', 'Computação Gráfica', 'Eng Controle', 'Redes', 'Compiladores']
        },
        {
          id: 'ciencia-tecnologia',
          institution: 'Universidade Federal do Maranhão (UFMA)',
          degree: 'Bacharelado em Ciência e Tecnologia',
          period: '2021 - 2024',
          location: 'São Luís, MA',
          status: 'Concluído',
          type: 'graduation',
          description: 'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web.',
          highlights: [
            'Projetos com Python, C, Java e PHP'
          ],
          subjects: ['Algoritmos', 'Banco de Dados', 'Eng. Software', 'Paradigmas de Programação', 'IA'],
          tccInfo: {
            title: 'Hans+: Uma Ferramenta de Acompanhamento e Informações Sobre a Hanseníase',
            grade: '10',
            advisor: 'Prof. Dr. Davi Viana dos Santos'
          },
          academicPerformance: {
            cra: '8.6',
            maxCra: '10.0'
          }
        }
      ]
    }
  },
  computed: {
    totalEducations() {
      return this.educations.length
    },
    averageGrade() {
      const completed = this.educations.filter(e => e.academicPerformance)
      if (completed.length === 0) return '-'
      const sum = completed.reduce((acc, e) => acc + parseFloat(e.academicPerformance.cra), 0)
      return (sum / completed.length).toFixed(1)
    },
    yearsStudying() {
      return new Date().getFullYear() - 2021
    }
  },
  methods: {
    toggleCard(cardId) {
      this.openCard = this.openCard === cardId ? null : cardId
    }
  }
}
</script>