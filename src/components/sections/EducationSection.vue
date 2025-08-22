<template>
  <section id="education" class="relative py-24 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Evolução Acadêmica
      </h2>
      
      <!-- Círculos Concêntricos Container -->
      <div class="relative flex items-center justify-center min-h-[600px]">
        <!-- Círculo Externo - Formação Base -->
        <div 
          class="absolute w-96 h-96 md:w-[500px] md:h-[500px] border-2 border-purple-500/20 rounded-full animate-pulse"
          style="animation-duration: 4s;"
        >
          <!-- Label do círculo -->
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 uppercase tracking-wider">
            Fundação
          </div>
        </div>

        <!-- Círculo Médio - Graduação Atual -->
        <div 
          class="absolute w-80 h-80 md:w-96 md:h-96 border-2 border-pink-500/30 rounded-full animate-pulse"
          style="animation-duration: 3s; animation-delay: 0.5s;"
        >
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 uppercase tracking-wider">
            Graduação
          </div>
        </div>

        <!-- Círculo Interno - Especialização -->
        <div 
          class="absolute w-64 h-64 md:w-80 md:h-80 border-2 border-blue-500/40 rounded-full animate-pulse"
          style="animation-duration: 2s; animation-delay: 1s;"
        >
          <div class="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 uppercase tracking-wider">
            Especialização
          </div>
        </div>

        <!-- Centro - Formação Atual -->
        <div class="relative z-10">
          <div 
            class="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110"
            @click="setActiveEducation('center')"
          >
            <svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
          </div>
          
          <div class="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 text-center">
            <p class="text-white font-semibold text-sm">Engenharia da Computação</p>
            <p class="text-purple-400 text-xs">Em Andamento</p>
          </div>
        </div>

        <!-- Educação Cards Posicionados nos Círculos -->
        <EducationConcentricCard
          v-for="education in educations"
          :key="education.id"
          :education="education"
          :is-active="activeEducation === education.id"
          :style="{ 
            transform: `translate(-50%, -50%) rotate(${education.angle}deg) translateX(${education.radius}px) rotate(-${education.angle}deg)`,
            position: 'absolute',
            left: '50%',
            top: '50%'
          }"
          @click="setActiveEducation(education.id)"
        />
      </div>

      <!-- Informação Detalhada da Educação Ativa -->
      <div class="mt-16">
        <transition name="fade" mode="out-in">
          <div v-if="activeEducationData" class="max-w-4xl mx-auto">
            <div class="bg-gradient-to-br from-black/60 to-purple-900/20 rounded-2xl border border-purple-500/20 p-8">
              <!-- Header -->
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 class="text-2xl font-bold text-white mb-2">{{ activeEducationData.degree }}</h3>
                  <p class="text-purple-400 font-medium">{{ activeEducationData.institution }}</p>
                </div>
                <div class="flex items-center gap-4 mt-4 md:mt-0">
                  <span class="text-pink-300 font-medium">{{ activeEducationData.period }}</span>
                  <span 
                    class="px-3 py-1 rounded-full text-xs font-semibold"
                    :class="getStatusClasses(activeEducationData.status)"
                  >
                    {{ activeEducationData.status }}
                  </span>
                </div>
              </div>

              <!-- Performance -->
              <div v-if="activeEducationData.academicPerformance" class="mb-6">
                <div class="flex items-center justify-between p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <span class="text-green-200">Coeficiente de Rendimento</span>
                  <span class="text-xl font-bold text-green-400">
                    {{ activeEducationData.academicPerformance.cra }}/{{ activeEducationData.academicPerformance.maxCra }}
                  </span>
                </div>
              </div>

              <!-- TCC Info -->
              <div v-if="activeEducationData.tccInfo" class="mb-6">
                <div class="p-4 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 class="text-lg font-semibold text-blue-200 mb-2 flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
                    </svg>
                    Trabalho de Conclusão de Curso
                  </h4>
                  <p class="text-blue-200 mb-3">{{ activeEducationData.tccInfo.title }}</p>
                  <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-400">{{ activeEducationData.tccInfo.advisor }}</span>
                    <span class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">
                      Nota: {{ activeEducationData.tccInfo.grade }}
                    </span>
                  </div>
                </div>
              </div>

              <!-- Description -->
              <p class="text-gray-300 leading-relaxed mb-6">{{ activeEducationData.description }}</p>

              <!-- Grid de Highlights e Subjects -->
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Highlights -->
                <div>
                  <h4 class="text-lg font-semibold text-white mb-4 flex items-center">
                    <svg class="w-5 h-5 mr-2 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                    </svg>
                    Destaques
                  </h4>
                  <ul class="space-y-3">
                    <li 
                      v-for="(highlight, index) in activeEducationData.highlights" 
                      :key="index"
                      class="text-gray-300 flex items-start"
                    >
                      <span class="text-pink-400 mr-3 mt-1">★</span>
                      {{ highlight }}
                    </li>
                  </ul>
                </div>

                <!-- Subjects -->
                <div>
                  <h4 class="text-lg font-semibold text-white mb-4">Disciplinas Principais</h4>
                  <div class="flex flex-wrap gap-2">
                    <span 
                      v-for="(subject, index) in activeEducationData.subjects" 
                      :key="index"
                      class="px-3 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg text-sm font-medium text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300"
                    >
                      {{ subject }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import EducationConcentricCard from '../../ui/EducationCard.vue'

export default {
  name: 'EducationSection',
  components: {
    EducationConcentricCard
  },
  data() {
    return {
      activeEducation: 'eng-computacao',
      educations: [
        {
          id: 'ciencia-tecnologia',
          degree: 'Bacharelado em Ciência e Tecnologia',
          institution: 'Universidade Federal do Maranhão (UFMA)',
          period: '2021 - 2024',
          location: 'São Luís, MA',
          status: 'Concluído',
          type: 'graduation',
          angle: 200,
          radius: 200,
          color: 'purple',
          description: 'Formação sólida em fundamentos da computação, algoritmos, estruturas de dados, engenharia de software e desenvolvimento web. Participação ativa em projetos de pesquisa e extensão.',
          highlights: [
            'Projetos com Python, C, Java e PHP',
            'TCC com nota máxima (10.0)',
            'Participação em projetos de extensão'
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
        },
        {
          id: 'eng-computacao',
          degree: 'Bacharelado em Engenharia da Computação',
          institution: 'Universidade Federal do Maranhão (UFMA)',
          period: '2024 - Presente',
          location: 'São Luís, MA',
          status: 'Em andamento',
          type: 'graduation',
          angle: 40,
          radius: 160,
          color: 'pink',
          description: 'Formação sólida em Visão Computacional, Machine Learning, Deep Learning, Redes e Automação Industrial. Participação ativa em projetos de pesquisa e extensão.',
          highlights: [
            'Entrega de Portal da Rede de Aplicação de Ciência e Tecnologia (REACT)',
            'Entrega da versão 2.0 do app PlanDox',
            'Foco em IA e Machine Learning'
          ],
          subjects: ['Machine Learning', 'Computação Gráfica', 'Eng Controle', 'Redes', 'Compiladores']
        },
        {
          id: 'pos-devops',
          degree: 'Pós-Graduação em Engenharia DevOps',
          institution: 'Instituto Federal de Mato Grosso (IFMT)',
          period: '2025 - Presente',
          location: 'Planaltina, GO',
          status: 'Em andamento',
          type: 'postgraduate',
          angle: 120,
          radius: 120,
          color: 'blue',
          description: 'Especialização voltada para práticas modernas de desenvolvimento e operações de software, com foco em metodologias ágeis, integração e entrega contínua, automação de testes e gerenciamento de infraestrutura em ambientes de DevOps.',
          highlights: [
            'Projetos práticos de integração e entrega contínua',
            'Implantação de pipelines automatizados com foco em qualidade e performance',
            'Metodologias ágeis aplicadas'
          ],
          subjects: [
            'Projetos Ágeis e DevOps',
            'Integração e Entrega Contínua',
            'Gerenciamento de Mudanças e Infraestrutura',
            'Monitoramento de Aplicações',
            'Testes Automatizados de Software'
          ]
        }
      ]
    }
  },
  computed: {
    activeEducationData() {
      return this.educations.find(edu => edu.id === this.activeEducation)
    }
  },
  methods: {
    setActiveEducation(educationId) {
      this.activeEducation = educationId
    },
    
    getStatusClasses(status) {
      switch (status.toLowerCase()) {
        case 'concluído':
          return 'bg-green-500/20 text-green-400 border border-green-500/40'
        case 'em andamento':
          return 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/40'
        default:
          return 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
      }
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>