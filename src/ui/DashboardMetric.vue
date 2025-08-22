<template>
  <div class="dashboard-metric bg-gradient-to-br from-black/60 to-gray-900/20 rounded-xl border border-gray-500/20 p-4 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
    <!-- Header com Ícone -->
    <div class="flex items-center justify-between mb-3">
      <div 
        class="p-2 rounded-lg"
        :class="iconBgClasses"
      >
        <component :is="iconComponent" class="w-4 h-4" :class="iconClasses" />
      </div>
      
      <!-- Trend Badge -->
      <div 
        v-if="trend"
        class="px-2 py-1 rounded-full text-xs font-semibold"
        :class="trendClasses"
      >
        {{ trend }}
      </div>
    </div>

    <!-- Valor Principal -->
    <div class="mb-2">
      <div class="text-2xl font-bold" :class="valueClasses">
        {{ value }}
      </div>
    </div>

    <!-- Label -->
    <div class="text-gray-400 text-sm font-medium">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardMetric',
  props: {
    value: {
      type: [String, Number],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true,
      validator: value => ['graduation-cap', 'star', 'calendar', 'check-circle'].includes(value)
    },
    color: {
      type: String,
      default: 'purple',
      validator: value => ['purple', 'pink', 'blue', 'green', 'yellow'].includes(value)
    },
    trend: {
      type: String,
      default: null
    }
  },
  computed: {
    iconComponent() {
      const iconMap = {
        'graduation-cap': 'GraduationCapIcon',
        'star': 'StarIcon',
        'calendar': 'CalendarIcon',
        'check-circle': 'CheckCircleIcon'
      }
      return iconMap[this.icon] || 'GraduationCapIcon'
    },

    iconBgClasses() {
      const bgMap = {
        purple: 'bg-purple-500/20',
        pink: 'bg-pink-500/20',
        blue: 'bg-blue-500/20',
        green: 'bg-green-500/20',
        yellow: 'bg-yellow-500/20'
      }
      return bgMap[this.color] || bgMap.purple
    },

    iconClasses() {
      const colorMap = {
        purple: 'text-purple-400',
        pink: 'text-pink-400',
        blue: 'text-blue-400',
        green: 'text-green-400',
        yellow: 'text-yellow-400'
      }
      return colorMap[this.color] || colorMap.purple
    },

    valueClasses() {
      const colorMap = {
        purple: 'text-purple-400',
        pink: 'text-pink-400',
        blue: 'text-blue-400',
        green: 'text-green-400',
        yellow: 'text-yellow-400'
      }
      return colorMap[this.color] || colorMap.purple
    },

    trendClasses() {
      if (!this.trend) return ''
      
      if (this.trend.startsWith('+')) {
        return 'bg-green-500/20 text-green-400'
      } else if (this.trend.includes('%')) {
        return 'bg-blue-500/20 text-blue-400'
      }
      return 'bg-gray-500/20 text-gray-400'
    }
  },
  components: {
    GraduationCapIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
        </svg>
      `
    },
    StarIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      `
    },
    CalendarIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
          <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
        </svg>
      `
    },
    CheckCircleIcon: {
      template: `
        <svg fill="currentColor" viewBox="0 0 20 20" class="w-4 h-4">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
        </svg>
      `
    }
  }
}
</script>

<style scoped>
.dashboard-metric {
  animation: metricAppear 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes metricAppear {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>