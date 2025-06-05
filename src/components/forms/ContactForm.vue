<template>
  <div class="relative">
    <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-30"></div>
    <form class="relative bg-black/80 backdrop-blur-lg rounded-3xl p-8 border border-purple-500/20 space-y-6">
      <div class="form-group">
        <label class="form-label">Nome</label>
        <input type="text" class="form-input">
      </div>
      <div class="form-group">
        <label class="form-label">Email</label>
        <input type="email" class="form-input">
      </div>
      <div class="form-group">
        <label class="form-label">Mensagem</label>
        <textarea rows="4" class="form-input resize-none"></textarea>
      </div>
      <button
        type="submit"
        class="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
      >
        Enviar
      </button>
    </form>
  </div>
</template>

<style scoped>
    /* Form Styles */
    .form-group {
    @apply space-y-2;
    }

    .form-label {
    @apply block text-white font-bold text-lg;
    }

    .form-input {
    @apply w-full bg-purple-900/20 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300;
    }

    .form-input:focus {
    transform: scale(1.02);
    }
</style>