import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { registerStore } from './store'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import i18n from '@/i18n'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './permission'
import './assets/css/styles/index.css'
import './util/rem'
import './index.css'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, comp)
}

app
  .use(pinia)
  .use(router)
  .use(ElementPlus, {
    locale: zhCn
  })

registerStore()

app.use(i18n)

app.mount('#app')
