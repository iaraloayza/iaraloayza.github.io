<template>
  <div class="skill-category group">
    <!-- Header with icon and title -->
    <div class="flex items-center space-x-4 mb-6">
      <div :class="iconContainerClasses" class="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="icon === 'code'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
          <path v-else-if="icon === 'device-mobile'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"></path>
          <path v-else-if="icon === 'server'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
          <path v-else-if="icon === 'cog'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      </div>
      <h3 :class="titleClasses" class="text-xl font-bold">{{ title }}</h3>
    </div>
    
    <!-- Skills with progress bars -->
    <div class="space-y-4">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="skill-item group/skill"
      >
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-300">
            {{ skill.name }}
          </span>
          <span :class="levelClasses" class="text-sm font-bold">
            {{ skill.level }}%
          </span>
        </div>
        
        <!-- Progress Bar -->
        <div class="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
          <div 
            :class="progressBarClasses"
            class="h-full rounded-full transition-all duration-1000 ease-out transform origin-left"
            :style="{ width: `${skill.level}%` }"
          >
            <div class="h-full w-full bg-gradient-to-r opacity-70 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCategory',
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'purple',
      validator: (value) => ['purple', 'pink', 'blue', 'indigo'].includes(value)
    },
    skills: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      default: 'code'
    }
  },
  computed: {
    titleClasses() {
      const colorMap = {
        purple: 'text-purple-400 group-hover:text-purple-300',
        pink: 'text-pink-400 group-hover:text-pink-300',
        blue: 'text-blue-400 group-hover:text-blue-300',
        indigo: 'text-indigo-400 group-hover:text-indigo-300'
      }
      return colorMap[this.color] || 'text-purple-400'
    },
    iconContainerClasses() {
      const colorMap = {
        purple: 'bg-gradient-to-r from-purple-600 to-purple-500 group-hover:from-purple-500 group-hover:to-purple-400',
        pink: 'bg-gradient-to-r from-pink-600 to-pink-500 group-hover:from-pink-500 group-hover:to-pink-400',
        blue: 'bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-blue-400',
        indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-500 group-hover:from-indigo-500 group-hover:to-indigo-400'
      }
      return colorMap[this.color] || 'bg-gradient-to-r from-purple-600 to-purple-500'
    },
    levelClasses() {
      const colorMap = {
        purple: 'text-purple-400',
        pink: 'text-pink-400',
        blue: 'text-blue-400',
        indigo: 'text-indigo-400'
      }
      return colorMap[this.color] || 'text-purple-400'
    },
    progressBarClasses() {
      const colorMap = {
        purple: 'bg-gradient-to-r from-purple-600 to-purple-400',
        pink: 'bg-gradient-to-r from-pink-600 to-pink-400',
        blue: 'bg-gradient-to-r from-blue-600 to-blue-400',
        indigo: 'bg-gradient-to-r from-indigo-600 to-indigo-400'
      }
      return colorMap[this.color] || 'bg-gradient-to-r from-purple-600 to-purple-400'
    }
  },
  mounted() {
    // Animate progress bars on mount
    this.$nextTick(() => {
      const progressBars = this.$el.querySelectorAll('.skill-item .h-full')
      progressBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.transform = 'scaleX(1)'
        }, index * 150)
      })
    })
  }
}
</script>

<style scoped>
.skill-category {
  @apply bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform hover:scale-[1.02] hover:bg-black/30;
}

.skill-item {
  @apply transition-all duration-300;
}

.skill-item:hover {
  transform: translateX(4px);
}

/* Progress bar initial state */
.skill-item .h-full {
  transform: scaleX(0);
}

@keyframes shimmer {
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
}

.animate-shimmer {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  background-size: 200px 100%;
  animation: shimmer 2s infinite;
}
</style>