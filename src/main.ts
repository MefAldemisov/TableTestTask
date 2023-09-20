import '@/assets/styles/reset.css'
import '@/assets/styles/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { router } from '@/router/index'

import App from './App.vue'

const pinia = createPinia()

const app = createApp(App)
app.mount('#app')
app.use(pinia)
app.use(router)
