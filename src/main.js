import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'     // App import
import router from './router'   // Router import
import './style.css'            // Style import

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
