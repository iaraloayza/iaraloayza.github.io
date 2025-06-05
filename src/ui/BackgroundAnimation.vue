<template>
  <div class="fixed inset-0 z-0">
    <div class="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
    <div class="absolute top-0 left-0 w-full h-full">
      <div class="floating-shapes">
        <div v-for="shape in shapes" 
             :key="shape.id" 
             :class="shape.classes">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    name: 'BackgroundAnimation',
    data() {
        return {
        shapes: [
            { id: 1, classes: 'shape shape-1' },
            { id: 2, classes: 'shape shape-2' },
            { id: 3, classes: 'shape shape-3' },
            { id: 4, classes: 'shape shape-4' }
        ]
        }
    }
    }
</script>