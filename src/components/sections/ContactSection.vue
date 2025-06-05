<template>
  <section id="contact" class="relative py-32 px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Contato
      </h2>
      <div class="grid lg:grid-cols-2 gap-16">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup>
    import ContactInfo from '../../ui/ContactInfo.vue'
    import ContactForm from '../forms/ContactForm.vue'
</script>