<template>
  <div 
    class="relative"
    :class="[
      'flex items-center',
      position === 'right' ? 'md:justify-end' : 'md:justify-start'
    ]"
  >
    <!-- Timeline Dot -->
    <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 z-20">
      <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse-glow flex items-center justify-center">
        <div class="w-3 h-3 bg-white rounded-full"></div>
      </div>
    </div>
    
    <!-- Experience Card -->
    <div 
      class="group relative ml-20 md:ml-0 w-full md:w-5/12 hover-lift"
      :class="[
        position === 'right' ? 'md:mr-16' : 'md:ml-16'
      ]"
    >
      <!-- Glow Effect -->
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
      
      <!-- Card Content -->
      <div class="relative bg-black/40 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-8 glass-effect hover-glow">
        <!-- Company & Role -->
        <div class="mb-6">
          <h3 class="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
            {{ role }}
          </h3>
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p class="text-lg font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {{ company }}
            </p>
            <span class="text-sm text-gray-400 bg-purple-900/20 px-3 py-1 rounded-full">
              {{ location }}
            </span>
          </div>
          <p class="text-purple-300 font-medium mt-2">{{ period }}</p>
        </div>
        
        <!-- Description -->
        <p class="text-gray-300 leading-relaxed mb-6">
          {{ description }}
        </p>
        
        <!-- Achievements -->
        <div class="mb-6">
          <h4 class="text-lg font-semibold text-white mb-3 flex items-center">
            <svg class="w-5 h-5 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
            </svg>
            Principais Conquistas
          </h4>
          <ul class="space-y-2">
            <li 
              v-for="(achievement, index) in achievements" 
              :key="index"
              class="text-gray-300 text-sm flex items-start transform hover:translate-x-2 transition-transform duration-300"
            >
              <span class="text-purple-400 mr-3 mt-1">▸</span>
              {{ achievement }}
            </li>
          </ul>
        </div>
        
        <!-- Technologies -->
        <div class="border-t border-purple-500/20 pt-6">
          <h4 class="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
            Tecnologias Utilizadas
          </h4>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(tech, index) in technologies" 
              :key="index"
              class="px-3 py-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full text-xs font-medium text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-default"
            >
              {{ tech }}
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
          <svg class="w-6 h-6 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'ExperienceCard',
    props: {
        position: {
        type: String,
        required: true,
        validator: value => ['left', 'right'].includes(value)
        },
        company: {
        type: String,
        required: true
        },
        role: {
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
        description: {
        type: String,
        required: true
        },
        achievements: {
        type: Array,
        required: true
        },
        technologies: {
        type: Array,
        required: true
        }
    }
    }
</script>

<style scoped>
    /* Animações específicas do card */
    .hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .hover-lift:hover {
    transform: translateY(-8px);
    }

    .hover-glow:hover {
    box-shadow: 
        0 20px 40px rgba(139, 92, 246, 0.2),
        0 0 0 1px rgba(139, 92, 246, 0.1);
    }

    .glass-effect {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(139, 92, 246, 0.2);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
    .hover-lift:hover {
        transform: translateY(-4px);
    }
    }
</style>