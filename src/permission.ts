import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { localAsyncRoutes, router, routeList, constantRoutes } from './router'
import { useToken } from '@/hooks'
import { clearRequest } from '@/services/request/cancel-request'
import config from './config.json'
// import { generateRoutes } from './store'
import appStore from './store'
import { ElMessage } from 'element-plus'
import { RouteRecordRaw } from 'vue-router'
import { storeToRefs } from 'pinia'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const addRoutes = (routeList: Array<RouteRecordRaw>) => {
  routeList.forEach((item) => {
    if (router.hasRoute(item.name)) return
    else router.addRoute(item)
  })
}
router.beforeEach(async(to, from, next) => {
  // start the progress bar
  NProgress.start()
  const { userState } = storeToRefs(appStore.userStore)
  const { cancelToken, getUserInfo } = appStore.userStore
  const { generateRoutes } = appStore.permissionStore
  console.log(userState)
  clearRequest()
  // set page title
  if (to.meta.title) typeof to.meta.title === 'string' ? document.title = to.meta.title : ''
  const hasToken = useToken.getToken()
  if (config.PatternType === 'Business') {
    if (hasToken) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        const hasRoles = userState.value.roles && userState.value.roles.length > 0
        if (hasRoles) {
          next()
        } else {
          try {
            const { roles } = await getUserInfo()
            const accessRoutes = await generateRoutes(roles)
            await addRoutes(accessRoutes)
            next({ ...to, replace: true })
          } catch (e) {
            await cancelToken()
            ElMessage.error('登陆出错，请重试')
            next(`/login?redirect=${to.path}`)
          }
        }
      }
    } else {
      if (config.WhiteRouter.indexOf(to.path) !== -1) next()
      else next(`/login?redirect=${to.path}`)
    }
  } else {
    const constantLength = constantRoutes.flatMap((route) => {
      if (!route.children) {
        return [route]
      }
      return [route.children, route]
    })
    if (router.getRoutes().length > constantLength.length) {
      next()
    } else {
      await addRoutes([...routeList, ...localAsyncRoutes])
      next({ ...to, replace: true })
    }
  }
})

router.afterEach(() => {
  // finish the progress bar
  NProgress.done()
})
