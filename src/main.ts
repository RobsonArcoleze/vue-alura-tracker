import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './router'
import { createPinia } from 'pinia'

createApp(App).use(roteador).use(createPinia()).mount('#app')
