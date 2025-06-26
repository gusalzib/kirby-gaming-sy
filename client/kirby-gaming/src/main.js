import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

import { createI18n } from 'vue-i18n'
import ar from './locales/ar.json'
import en from './locales/en.json'

const i18n = createI18n({
  legacy: false,
  locale: 'ar',
  fallbackLocale: 'en',
  messages: { ar, en }
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')
