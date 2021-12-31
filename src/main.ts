import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

router.beforeEach((to, from, next) => {
  if (to.name) {
    typeof to.name === 'string' ? document.title = to.name : ''
  }
  next()
})

createApp(App)
  .use(ElementPlus)
  .use(router)
  .mount('#app')
