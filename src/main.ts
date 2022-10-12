import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
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

const app = createApp(App)
for (const [name, comp] of Object.entries(ElementPlusIconsVue)) {
  app.component(name, comp)
}
app
  .use(i18n)
  .use(ElementPlus, {
    locale: zhCn
  })
  .use(router)
  .mount('#app')
