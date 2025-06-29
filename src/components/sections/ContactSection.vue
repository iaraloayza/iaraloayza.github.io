<template>
  <section id="contact" class="relative py-16 sm:py-24 lg:py-32 px-4 sm:px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Contato
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
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