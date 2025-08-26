<template>
  <section id="contact" class="relative py-16 sm:py-24 lg:py-20 px-4 sm:px-6 z-10">
    <div class="container mx-auto max-w-6xl">
      <!-- Header -->
      <div class="text-center mb-20">
        <h2 class="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Contato
        </h2>
        <div class="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>

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