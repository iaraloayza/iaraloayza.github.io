<template>
  <div 
    class="relative"
    :class="[
      'flex items-center',
      position === 'right' ? 'md:justify-end' : 'md:justify-start'
    ]"
  >
    <!-- Timeline Dot with Icon -->
    <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
      <div class="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse-glow flex items-center justify-center shadow-lg">
        <component :is="educationIcon" class="w-4 h-4 text-white" />
      </div>
    </div>
    
    <!-- Education Card -->
    <div 
      class="group relative ml-20 md:ml-0 w-full md:w-5/12 hover-lift"
      :class="[
        position === 'right' ? 'md:mr-16' : 'md:ml-16'
      ]"
    >
      <!-- Glow Effect -->
      <div class="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      <!-- Card Content -->
      <div class="relative bg-black/40 backdrop-blur-lg border border-pink-500/20 rounded-3xl p-8 glass-effect hover-glow">
        <!-- Status Badge -->
        <div class="absolute top-4 right-4">
          <span 
            class="px-3 py-1 rounded-full text-xs font-semibold"
            :class="statusClasses"
          >
            {{ status }}
          </span>
        </div>
        
        <!-- Institution & Degree -->
        <div class="mb-6 pr-20">
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
            {{ degree }}
          </h3>
          <div class="flex flex-col gap-2">
            <p class="text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {{ institution }}
            </p>
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <span class="text-pink-300 font-medium">{{ period }}</span>
              <span class="text-sm text-gray-400 bg-pink-900/20 px-3 py-1 rounded-full">
                {{ location }}
              </span>
            </div>
          </div>
        </div>
        
        <!-- Description -->
        <p class="text-gray-300 leading-relaxed mb-6">
          {{ description }}
        </p>
        
        <!-- Highlights -->
        <div class="mb-6">
          <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
            </svg>
            Destaques
          </h4>
          <ul class="space-y-2">
            <li 
              v-for="(highlight, index) in highlights" 
              :key="index"
              class="text-gray-300 text-sm flex items-start transform hover:translate-x-2 transition-transform duration-300"
            >
              <span class="text-pink-400 mr-3 mt-1">★</span>
              {{ highlight }}
            </li>
          </ul>
        </div>
        
        <!-- Subjects/Technologies -->
        <div class="border-t border-pink-500/20 pt-6">
          <h4 class="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
            {{ subjectsLabel }}
          </h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(subject, index) in subjects" 
              :key="index"
              class="px-3 py-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-full text-xs font-medium text-pink-300 hover:from-pink-500/30 hover:to-purple-500/30 hover:border-pink-400/50 transition-all duration-300 cursor-default"
            >
              {{ subject }}
            </span>
          </div>
        </div>
        
        <!-- Hover Animation Arrow -->
        <div 
          class="absolute top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          :class="[
            position === 'right' ? '-left-4 rotate-180' : '-right-4'
          ]"
        >
          <svg class="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'EducationCard',
    props: {
        position: {
        type: String,
        required: true,
        validator: value => ['left', 'right'].includes(value)
        },
        institution: {
        type: String,
        required: true
        },
        degree: {
        type: String,
        required: true
        },
        period: {
        type: String,
        required: true
        },
        location: {
        type: String,
        required: true
        },
        status: {
        type: String,
        required: true
        },
        description: {
        type: String,
        required: true
        },
        highlights: {
        type: Array,
        required: true
        },
        subjects: {
        type: Array,
        required: true
        },
        type: {
        type: String,
        required: true,
        validator: value => ['graduation', 'course', 'bootcamp', 'certification'].includes(value)
        }
    },
    computed: {
        statusClasses() {
        const baseClasses = 'px-3 py-1 rounded-full text-xs font-semibold'
        
        switch (this.status.toLowerCase()) {
            case 'concluído':
            case 'certificado':
            return `${baseClasses} bg-green-500/20 text-green-400 border border-green-500/40`
            case 'em andamento':
            return `${baseClasses} bg-yellow-500/20 text-yellow-400 border border-yellow-500/40`
            case 'trancado':
            return `${baseClasses} bg-red-500/20 text-red-400 border border-red-500/40`
            default:
            return `${baseClasses} bg-blue-500/20 text-blue-400 border border-blue-500/40`
        }
        },
        
        educationIcon() {
        switch (this.type) {
            case 'graduation':
            return 'GraduationCapIcon'
            case 'bootcamp':
            return 'CodeIcon'
            case 'certification':
            return 'BadgeIcon'
            case 'course':
            default:
            return 'BookIcon'
        }
        },
        
        subjectsLabel() {
        switch (this.type) {
            case 'graduation':
            return 'Principais Disciplinas'
            case 'bootcamp':
            case 'course':
            return 'Tecnologias Estudadas'
            case 'certification':
            return 'Áreas de Conhecimento'
            default:
            return 'Conteúdo'
        }
        }
    },
    components: {
        // Ícones SVG inline para cada tipo
        GraduationCapIcon: {
        template: `
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
            </svg>
        `
        },
        CodeIcon: {
        template: `
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
            <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265L11.5 9.5l1.449 5.184a1 1 0 11-1.898.632L9.736 11h-1.47l-1.315 4.316a1 1 0 11-1.898-.632L6.5 9.5 5.051 4.316a1 1 0 111.898-.632L8.264 9h1.472l1.315-4.316a1 1 0 011.265-.633z" clip-rule="evenodd"></path>
            </svg>
        `
        },
        BadgeIcon: {
        template: `
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
            <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
        `
        },
        BookIcon: {
        template: `
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
            </svg>
        `
        }
    }
    }
</script>

<style scoped>
    .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hover-lift:hover {
    transform: translateY(-8px);
    }

    .hover-glow:hover {
    box-shadow: 
        0 20px 40px rgba(236, 72, 153, 0.2),
        0 0 0 1px rgba(236, 72, 153, 0.1);
    }

    .glass-effect {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(236, 72, 153, 0.2);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
    .hover-lift:hover {
        transform: translateY(-4px);
    }
    }
</style>