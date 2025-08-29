import { createI18n } from 'vue-i18n'
import pt from './locales/pt.json'
import en from './locales/en.json'

const messages = {
  pt,
  en
}

const i18n = createI18n({
  legacy: false,            // habilita Composition API (useI18n)
  globalInjection: true,    // mantém $t disponível nos templates
  locale: localStorage.getItem('locale') || 'pt', // idioma padrão
  fallbackLocale: 'pt',
  messages
})

export default i18n