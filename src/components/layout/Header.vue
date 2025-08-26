<template>
  <header class="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div 
          class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer"
          @click="scrollToSection('home')"
        >
          {{ logoText }}
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav-link"
            @click="scrollToSection(item.id)"
            :class="{ 'active': activeSection === item.id }"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white hover:text-purple-400 transition-colors"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-4 pb-4 border-t border-purple-500/20"
      >
        <div class="flex flex-col space-y-4 pt-4">
          <button
            v-for="item in navItems"
            :key="item.id"
            class="nav-link text-center py-2"
            @click="handleMobileNavClick(item.id)"
            :class="{ 'active': activeSection === item.id }"
          >
            {{ item.label }}
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

export default {
  name: 'AppHeader',
  props: {
    logoText: {
      type: String,
      default: '{ code & creativity }'
    }
  },
  emits: ['nav-click'],
  setup(props, { emit }) {
    const isMobileMenuOpen = ref(false)
    const activeSection = ref('home')
    
    const navItems = reactive([
      { id: 'home', label: 'Início' },
      { id: 'about', label: 'Sobre' },
      { id: 'skills', label: 'Habilidades' },
      { id: 'projects', label: 'Projetos' },
      { id: 'experience', label: 'Experiência' },
      { id: 'education', label: 'Formação' },
      { id: 'contact', label: 'Contato' }
    ])

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 80 // altura do header fixo
        const elementPosition = element.offsetTop - headerHeight
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
        
        // Atualizar seção ativa
        activeSection.value = sectionId
        
        // Emitir evento
        emit('nav-click', sectionId)
      }
    }

    const handleMobileNavClick = (sectionId) => {
      scrollToSection(sectionId)
      isMobileMenuOpen.value = false
    }

    // Detectar seção ativa baseada no scroll
    const updateActiveSection = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100 // offset para compensar o header

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          activeSection.value = sections[i]
          break
        }
      }
    }

    // Throttle function para otimizar performance
    const throttle = (func, delay) => {
      let timeoutId
      let lastExecTime = 0
      return function (...args) {
        const currentTime = Date.now()
        
        if (currentTime - lastExecTime > delay) {
          func.apply(this, args)
          lastExecTime = currentTime
        } else {
          clearTimeout(timeoutId)
          timeoutId = setTimeout(() => {
            func.apply(this, args)
            lastExecTime = Date.now()
          }, delay - (currentTime - lastExecTime))
        }
      }
    }

    const throttledUpdateActiveSection = throttle(updateActiveSection, 100)

    onMounted(() => {
      // Detectar seção ativa no scroll
      window.addEventListener('scroll', throttledUpdateActiveSection)
      // Definir seção inicial
      updateActiveSection()
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', throttledUpdateActiveSection)
    })

    return {
      isMobileMenuOpen,
      navItems,
      activeSection,
      toggleMobileMenu,
      scrollToSection,
      handleMobileNavClick
    }
  }
}
</script>

<style scoped>
  .nav-link {
    @apply text-gray-300 hover:text-purple-400 transition-all duration-300 relative bg-transparent border-none cursor-pointer;
  }

  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #ec4899);
    transition: width 0.3s ease;
  }

  .nav-link:hover::after,
  .nav-link.active::after {
    width: 100%;
  }

  .nav-link.active {
    @apply text-purple-400;
  }
</style>