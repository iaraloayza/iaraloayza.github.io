<template>
  <section id="skills" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Habilidades
      </h2>
      <div class="grid md:grid-cols-2 gap-12">
        <div class="space-y-8">
          <SkillItem name="JavaScript" percent="90%" color="from-purple-600 to-pink-500" />
          <SkillItem name="Vue.js" percent="85%" color="from-pink-500 to-orange-400" />
          <SkillItem name="Node.js" percent="80%" color="from-emerald-400 to-emerald-600" />
        </div>
        <div class="space-y-8">
          <SkillItem name="Python" percent="75%" color="from-blue-400 to-blue-800" />
          <SkillItem name="React" percent="70%" color="from-cyan-400 to-cyan-700" />
          <SkillItem name="Docker" percent="65%" color="from-red-400 to-red-700" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
    import SkillItem from '../../ui//SkillItem.vue'
</script>