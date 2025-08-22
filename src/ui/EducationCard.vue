<template>
  <div 
    class="education-orbit-card cursor-pointer transition-all duration-300 hover:scale-110"
    :class="{ 'scale-125 z-10': isActive }"
    @click="$emit('click')"
  >
    <!-- Orbit Ring -->
    <div 
      class="w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 shadow-lg"
      :class="cardClasses"
    >
      <!-- Icon -->
      <component :is="educationIcon" class="w-6 h-6 text-white" />
      
      <!-- Active Indicator -->
      <div 
        v-if="isActive"
        class="absolute inset-0 rounded-full border-2 border-white/50 animate-ping"
      ></div>
    </div>

    <!-- Label -->
    <div 
      class="absolute top-full mt-3 left-1/2 transform -translate-x-1/2 text-center min-w-[120px] transition-all duration-300"
      :class="{ 'opacity-100': isActive, 'opacity-70': !isActive }"
    >
      <p class="text-white font-semibold text-xs leading-tight mb-1">
        {{ education.degree.split(' ').slice(0, 3).join(' ') }}
      </p>
      <p class="text-gray-400 text-xs">{{ education.institution.split(' ')[0] }}</p>
      <div 
        class="mt-1 px-2 py-1 rounded-full text-xs font-medium"
        :class="statusClasses"
      >
        {{ education.status }}
      </div>
    </div>

    <!-- Connection Line to Center -->
    <div 
      v-if="isActive"
      class="absolute w-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-30"
      :style="connectionLineStyle"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'EducationConcentricCard',
  props: {
    education: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  computed: {
    cardClasses() {
      const baseClasses = 'relative transition-all duration-300'
      const colorClasses = {
        purple: 'bg-gradient-to-r from-purple-600 to-purple-700 border-purple-400 hover:from-purple-500 hover:to-purple-600',
        pink: 'bg-gradient-to-r from-pink-600 to-pink-700 border-pink-400 hover:from-pink-500 hover:to-pink-600',
        blue: 'bg-gradient-to-r from-blue-600 to-blue-700 border-blue-400 hover:from-blue-500 hover:to-blue-600'
      }
      
      return `${baseClasses} ${colorClasses[this.education.color] || colorClasses.purple}`
    },

    statusClasses() {
      switch (this.education.status.toLowerCase()) {
        case 'concluído':
          return 'bg-green-500/20 text-green-400'
        case 'em andamento':
          return 'bg-yellow-500/20 text-yellow-400'
        default:
          return 'bg-blue-500/20 text-blue-400'
      }
    },

    educationIcon() {
      switch (this.education.type) {
        case 'graduation':
          return 'GraduationCapIcon'
        case 'postgraduate':
          return 'AcademicCapIcon'
        default:
          return 'BookIcon'
      }
    },

    connectionLineStyle() {
      // Calculate line from card position to center
      const centerX = 0
      const centerY = 0
      const cardRadius = this.education.radius
      
      return {
        height: `${cardRadius}px`,
        left: '50%',
        bottom: '50%',
        transformOrigin: 'bottom',
        transform: 'translateX(-50%)'
      }
    }
  },
  components: {
    GraduationCapIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
        </svg>
      `
    },
    AcademicCapIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
        </svg>
      `
    },
    BookIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.education-orbit-card {
  animation: orbitAppear 0.8s ease-out forwards;
  opacity: 0;
  transform: scale(0);
}

@keyframes orbitAppear {
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>