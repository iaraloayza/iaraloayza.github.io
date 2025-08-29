<template>
  <div class="relative inline-block">
    <button 
      @click="toggleLanguage"
      class="flex items-center gap-2 px-3 py-2 bg-black/30 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-400/40 hover:bg-purple-900/20 text-white transition-all duration-300 transform hover:scale-105"
      :title="$t('nav.language')"
    >
      <span class="text-lg">{{ currentFlag }}</span>
      <span class="text-sm font-medium">{{ currentLang.toUpperCase() }}</span>
      <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'LanguageSelector',
  computed: {
    currentLang() {
      return this.$i18n.locale
    },
    currentFlag() {
      return this.currentLang === 'pt' ? '🇧🇷' : '🇺🇸'
    }
  },
  methods: {
    toggleLanguage() {
      const newLocale = this.$i18n.locale === 'pt' ? 'en' : 'pt'
      this.$i18n.locale = newLocale
      localStorage.setItem('locale', newLocale)
      
      // Opcional: emitir evento para outros componentes
      this.$emit('language-changed', newLocale)
    }
  }
}
</script>