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

// Detect forwarding from a deep link, via GitHub Pages' 404.html.
// localhost:5173/tryout-vue3-threejs-drie/about/123/?a=1&b=c&d#scroll-to-id
const REFERRER_KEY = '404_REFERRER'
const referrerPath = sessionStorage.getItem(REFERRER_KEY)
if (referrerPath !== null) {
  sessionStorage.removeItem(REFERRER_KEY) // keep sessionStorage tidy
  const url = new URL(referrerPath, 'x:/') // developer.mozilla.org/docs/Web/API/URL
  router.replace({
    hash: url.hash, // eg '#scroll-to-some-id'
    path: url.pathname, // eg '/about/123'
    query: Object.fromEntries( // eg '?a=1&b=c' -> { abc: "1", b: "c" }
      new URLSearchParams(url.search)),
  })
}

app.mount('#app')
