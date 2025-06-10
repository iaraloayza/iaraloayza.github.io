<template>
  <div id="app" class="app-container">
    <BackgroundAnimation />
    <router-view /> <!-- Aqui vai aparecer a view baseada na rota atual -->
  </div>
</template>

<script>
import BackgroundAnimation from './ui/BackgroundAnimation.vue'

export default {
  name: 'App',
  components: {
    BackgroundAnimation
  }
}
</script>