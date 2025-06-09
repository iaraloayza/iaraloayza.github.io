<template>
  <section id="skills" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Habilidades
      </h2>

      <h3 class="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h3>
      <div class="grid md:grid-cols-2 gap-12 mb-20">
        <div class="space-y-8">
          <SkillItem name="Laravel" percent="90%" color="from-purple-600 to-pink-500" />
          <SkillItem name="PHP" percent="85%" color="from-pink-500 to-orange-400" />
          <SkillItem name="Python" percent="80%" color="from-emerald-400 to-emerald-600" />
          <SkillItem name="Flutter" percent="80%" color="from-emerald-400 to-emerald-600" />
          <SkillItem name="MySQL" percent="90%" color="from-yellow-400 to-yellow-600" />
          <SkillItem name="PostgreSQL" percent="90%" color="from-blue-500 to-blue-700" />
        </div>
        <div class="space-y-8">
          <SkillItem name="Vue.js" percent="75%" color="from-blue-400 to-blue-800" />
          <SkillItem name="Javascript" percent="70%" color="from-cyan-400 to-cyan-700" />
          <SkillItem name="Firebase" percent="70%" color="from-orange-400 to-red-600" />
          <SkillItem name="Docker" percent="65%" color="from-red-400 to-red-700" />
          <SkillItem name="Tailwind CSS" percent="75%" color="from-teal-400 to-teal-700" />
          <SkillItem name="Git / GitHub" percent="80%" color="from-pink-600 to-pink-800" />
        </div>
      </div>

      <h3 class="text-3xl font-bold mb-8 text-center">Habilidades Complementares</h3>
      <div class="max-w-xl mx-auto space-y-6 text-center">
        <div class="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-xl p-6 hover:border-purple-400/50 transition-all duration-300">
          <p class="text-lg font-medium bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
            Comunicação e trabalho em equipe
          </p>
        </div>
        <div class="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-400/30 rounded-xl p-6 hover:border-blue-400/50 transition-all duration-300">
          <p class="text-lg font-medium bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Inglês técnico (leitura e compreensão)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SkillItem from '../../ui//SkillItem.vue'
</script>