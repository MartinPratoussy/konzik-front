import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'     // App import
import router from './router'   // Router import
import './style.css'            // Style import

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)

axios.defaults.headers.common = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
};


app.mount('#app')
