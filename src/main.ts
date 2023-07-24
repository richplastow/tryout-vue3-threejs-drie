import './assets/main.css'

import drie from '@janvorisek/drie'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(drie)
app.use(createPinia())
app.use(router)

app.mount('#app')
