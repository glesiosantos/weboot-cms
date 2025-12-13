import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

import VueApexCharts from 'vue3-apexcharts'
import { featherDirective } from '@/directives/feather'

const app = createApp(App)
app.use(router)
app.use(VueApexCharts)

app.directive('feather', featherDirective)

app.mount('#app')
