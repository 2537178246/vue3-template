import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/redirect',
    component: () => import('@/view/redirect/index.vue'),
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/view/redirect/index.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/view/error-page/404.vue')
  },
  {
    path: '/401',
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/',
    redirect: '/home'
  }
]

/**
 * localAsyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const localAsyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/error',
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: '错误页面',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/view/error-page/401.vue'),
        name: 'Page401',
        meta: { title: '401' }
      },
      {
        path: '404',
        component: () => import('@/view/error-page/404.vue'),
        name: 'Page404',
        meta: { title: '404' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '/:pathMatch(.*)*', redirect: '/404' }
]

export const routeList: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  }, {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: () => import('./view/home/index.vue')
  }]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routeList // 前置路由， 必备本地异步路由， 动态可配置路由
})
