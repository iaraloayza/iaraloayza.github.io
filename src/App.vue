<template>
  <div id="app" class="app-container">
    <!-- Animated Background -->
    <BackgroundAnimation />

    <!-- Main Content -->
    <MainContent />
  </div>
</template>

<script>
  import BackgroundAnimation from './ui/BackgroundAnimation.vue'
  import MainContent from './components/layout/MainContent.vue'

  // Versão com Lazy Loading (Performance melhorada)
  export default {
    name: 'App',
    components: {
      BackgroundAnimation,
      MainContent
    }
  }
</script>