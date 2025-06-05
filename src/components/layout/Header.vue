<template>
  <header class="fixed top-0 w-full bg-black/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <div class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          {{ logoText }}
        </div>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex space-x-8">
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="item.href" 
            class="nav-link"
            @click="handleNavClick(item.id)"
          >
            {{ item.label }}
          </a>
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
          <a 
            v-for="item in navItems" 
            :key="item.id"
            :href="item.href" 
            class="nav-link text-center py-2"
            @click="handleMobileNavClick(item.id)"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { ref, reactive } from 'vue'

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
    
    const navItems = reactive([
      { id: 'home', label: 'Início', href: '#home' },
      { id: 'about', label: 'Sobre', href: '#about' },
      { id: 'projects', label: 'Projetos', href: '#projects' },
      { id: 'skills', label: 'Habilidades', href: '#skills' },
      { id: 'contact', label: 'Contato', href: '#contact' }
    ])

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
    }

    const handleNavClick = (sectionId) => {
      emit('nav-click', sectionId)
    }

    const handleMobileNavClick = (sectionId) => {
      handleNavClick(sectionId)
      isMobileMenuOpen.value = false
    }

    return {
      isMobileMenuOpen,
      navItems,
      toggleMobileMenu,
      handleNavClick,
      handleMobileNavClick
    }
  }
}
</script>

<style scoped>
  .nav-link {
    @apply text-gray-300 hover:text-purple-400 transition-all duration-300 relative;
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

  .nav-link:hover::after {
    width: 100%;
  }
</style>