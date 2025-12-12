import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

import VueApexCharts from 'vue3-apexcharts'
import * as feather from 'feather-icons'

feather.replace()

const app = createApp(App)
app.use(router)
app.use(VueApexCharts)
app.mount('#app')
