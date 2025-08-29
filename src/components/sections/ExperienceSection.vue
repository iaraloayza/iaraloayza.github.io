<template>
  <section id="experience" class="relative py-20 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {{ $t('experience.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500 rounded-full"></div>
        
        <!-- Experience Items -->
        <div class="space-y-16">
          <ExperienceCard
            v-for="(experience, index) in $tm('experience.jobs')"
            :key="index"
            :position="experience.position"
            :company="experience.company"
            :role="experience.role"
            :period="experience.period"
            :location="experience.location"
            :description="experience.description"
            :achievements="experience.achievements"
            :technologies="experience.technologies"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import ExperienceCard from '../../ui/ExperienceCard.vue'

    export default {
    name: 'ExperienceSection',
    components: {
        ExperienceCard
    }
    }
</script>

<style scoped>
    /* Animações específicas da seção */
    .timeline-dot {
    animation: pulse-glow 2s ease-in-out infinite;
    }

    @media (max-width: 768px) {
    .timeline-line {
        left: 2rem;
    }
    }
</style>