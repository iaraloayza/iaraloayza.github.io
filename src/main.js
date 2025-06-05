import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css' // Esta linha deve estar presente

import '@fortawesome/fontawesome-free/css/all.css';

const app = createApp(App)

app.use(router)

app.mount('#app')