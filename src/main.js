import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import vReveal from './directives/reveal'

// Estilos globais
import './style.css'
import './assets/styles/global.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
app.use(router)
app.use(i18n)
app.directive('reveal', vReveal)
app.mount('#app')