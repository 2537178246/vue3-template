import { reactive } from 'vue'
import { localAsyncRoutes, routeList, constantRoutes } from '@/router'
import { RouteType } from '@/types'
import { getMenuRoutes } from '@/api/role'

export const permissionRoute = reactive<RouteType>({
  routes: [],
  addRoutes: []
})

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => route.meta.roles.includes(role))
  }
  return true
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
  const res = []
  routes.forEach((route) => {
    const tmp = { ...route }
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, roles)
      }
      res.push(tmp)
    }
  })

  return res
}

function setRoutes(routes: any[]) {
  permissionRoute.routes = routes
  permissionRoute.addRoutes = constantRoutes.concat(routes)
}

function onlyOneMenu(route) {
  return !route.name && !route.alwaysShow && route.children && route.children.length === 1
}

function findRoute(theRouteList, menuRoute) {
  return theRouteList.find((route) => {
    if (route.name === menuRoute.name) {
      return true
    }
    // 处理只有二级菜单一个子菜单时渲染成一级菜单的清空
    if (onlyOneMenu(route)) {
      const childRoute = route.children[0]
      if (childRoute.name === menuRoute.name) {
        childRoute.meta = {
          ...childRoute.meta,
          title: menuRoute.title,
          icon: menuRoute.icon,
          noCache: !menuRoute.cache,
          roles: menuRoute.roles
        }
        return true
      }
    }
    return false
  })
}

function toRoutes(menuRoutes, theRouteList) {
  const result = []
  menuRoutes.forEach((menuRoute) => {
    const theRoute = findRoute(theRouteList, menuRoute)
    if (theRoute) {
      const route = {
        ...theRoute,
        meta: {
          ...theRoute.meta,
          title: menuRoute.title,
          icon: menuRoute.icon,
          noCache: !menuRoute.cache,
          roles: menuRoute.roles
        }
      }
      if (menuRoute.children && theRoute.children && !onlyOneMenu(theRoute)) {
        route.children = toRoutes(menuRoute.children, theRoute.children)
      }
      result.push(route)
    }
  })
  return result
}

export async function generateRoutes(roles) {
  let accessedRoutes = [...routeList]

  if (import.meta.env.VITE_NODE_ENV !== 'development') {
    const { data: menuRoutes } = await getMenuRoutes() as any
    accessedRoutes = toRoutes(menuRoutes, accessedRoutes)
  }

  accessedRoutes.push(...localAsyncRoutes)

  if (!roles.includes('admin')) {
    accessedRoutes = filterAsyncRoutes(accessedRoutes, roles)
  }

  setRoutes(accessedRoutes)

  return accessedRoutes
}
