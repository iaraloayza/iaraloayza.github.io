<template>
  <section id="education" class="relative py-20 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          {{ $t('education.title') }}
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 via-purple-500 to-pink-500 rounded-full"></div>
        
        <!-- Education Items -->
        <div class="space-y-16">
          <EducationCard
            v-for="(education, index) in $tm('education.degrees')"
            :key="index"
            :position="education.position"
            :institution="education.institution"
            :degree="education.degree"
            :period="education.period"
            :location="education.location"
            :status="education.status"
            :description="education.description"
            :highlights="education.highlights"
            :subjects="education.subjects"
            :type="education.type"
            :tcc-info="education.tccInfo || null"
            :academic-performance="education.academicPerformance || null"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import EducationCard from '../../ui/EducationCard.vue'

    export default {
    name: 'EducationSection',
    components: {
        EducationCard
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