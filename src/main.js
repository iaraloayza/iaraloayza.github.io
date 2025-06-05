import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Estilos globais
import './style.css' 
import './assets/styles/global.css'

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)

app.mount('#app')