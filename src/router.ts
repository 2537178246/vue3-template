import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { clearRequest } from '@/services/request/cancelRequest'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    component: () => import('./view/home/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '页面丢失啰',
    component: () => import('./view/NoFound/index.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  clearRequest()
  if (to.name) {
    typeof to.name === 'string' ? document.title = to.name : ''
  }
  next()
})
