import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const Home:any = () => import('./view/home/index.vue')
const NotFound:any = () => import('./view/NoFound/index.vue')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: '首页',
    component: Home
  },
  {
    path: '/:pathMatch(.*)*',
    name: '页面丢失啰',
    component: NotFound
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})
