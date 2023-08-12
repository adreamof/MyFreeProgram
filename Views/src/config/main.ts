import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '../App.vue'
import router from '../router/GlobalRouterIndex'
import axios from 'axios'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.config.globalProperties.$axios = axios


app.mount('#app')
