import { createApp } from 'vue'
import i18n from '@/i18n'
import App from './App.vue'
import { router } from './router'
import store from './store'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/lib/components/message/style/css'
import 'element-plus/lib/components/loading/style/css'
import './permission'
import './util/rem'
import './index.css'
import './preflight.css'

const app = createApp(App)

app.use(i18n).use(router).use(store).mount('#app')
