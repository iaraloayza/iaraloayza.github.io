<template>
  <footer class="relative z-10 bg-black text-white py-12 px-6 border-t border-purple-800/40">
    <div class="container mx-auto max-w-6xl text-center space-y-6">
      <!-- Redes sociais -->
      <div class="flex justify-center space-x-6">
        <a
          href="https://github.com/iaraloayza"
          target="_blank"
          rel="noopener"
          class="text-purple-400 hover:text-pink-400 transition-transform transform hover:scale-110"
          aria-label="GitHub"
        >
          <i class="fab fa-github fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/ana-iara-loayza-costa-8b0886278"
          target="_blank"
          rel="noopener"
          class="text-purple-400 hover:text-pink-400 transition-transform transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a
          href="mailto:anaiaraloayza11@gmail.com"
          class="text-purple-400 hover:text-pink-400 transition-transform transform hover:scale-110"
          aria-label="Email"
        >
          <i class="fas fa-envelope fa-2x"></i>
        </a>
      </div>

      <!-- Nome e direitos -->
      <p class="text-sm text-gray-400">
        © {{ currentYear }} {{ $t('footer.text') }}
      </p>
    </div>
  </footer>
</template>

<script setup>
  const currentYear = new Date().getFullYear();
</script>