import { createApp } from 'vue'
import '@/assets/styles/reset.css'
import '@/assets/styles/main.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import { router } from '@/router/index'

const pinia = createPinia()

const app = createApp(App)
app.mount('#app')
app.use(pinia)
app.use(router)
