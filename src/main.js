import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './style.css' // Esta linha deve estar presente

const app = createApp(App)

app.use(router)

app.mount('#app')