import { defineStore } from 'pinia'
import { constantRoutes, localAsyncRoutes, routeList } from '@/router'
import { getMenuRoutes } from '@/api/role'
import type { RouteType } from '@/types'

export const permissionStore = defineStore('permissionStore', {
  state: (): RouteType => ({
    routes: [],
    addRoutes: [],
  }),
  actions: {
    /**
     * @desc Use meta.role to determine if the current user has permission
     * @param roles
     * @param route
     */
    hasPermission(roles, route) {
      if (route.meta && route.meta.roles) {
        return roles.some((role) => route.meta.roles.includes(role))
      }
      return true
    },

    /**
     * Filter asynchronous routing tables by recursion
     * @param routes asyncRoutes
     * @param roles
     */
    filterAsyncRoutes(routes, roles) {
      const res = []
      routes.forEach((route) => {
        const tmp = { ...route }
        if (this.hasPermission(roles, tmp)) {
          if (tmp.children) {
            tmp.children = this.filterAsyncRoutes(tmp.children, roles)
          }
          res.push(tmp)
        }
      })

      return res
    },

    setRoutes(routes: any[]) {
      this.$state.routes = routes
      this.$state.addRoutes = constantRoutes.concat(routes)
    },

    onlyOneMenu(route) {
      return (
        !route.name &&
        !route.alwaysShow &&
        route.children &&
        route.children.length === 1
      )
    },

    findRoute(theRouteList, menuRoute) {
      return theRouteList.find((route) => {
        if (route.name === menuRoute.name) {
          return true
        }
        // 处理只有二级菜单一个子菜单时渲染成一级菜单的清空
        if (this.onlyOneMenu(route)) {
          const childRoute = route.children[0]
          if (childRoute.name === menuRoute.name) {
            childRoute.meta = {
              ...childRoute.meta,
              title: menuRoute.title,
              icon: menuRoute.icon,
              noCache: !menuRoute.cache,
              roles: menuRoute.roles,
            }
            return true
          }
        }
        return false
      })
    },

    toRoutes(menuRoutes, theRouteList) {
      const result = []
      menuRoutes.forEach((menuRoute) => {
        const theRoute = this.findRoute(theRouteList, menuRoute)
        if (theRoute) {
          const route = {
            ...theRoute,
            meta: {
              ...theRoute.meta,
              title: menuRoute.title,
              icon: menuRoute.icon,
              noCache: !menuRoute.cache,
              roles: menuRoute.roles,
            },
          }
          if (
            menuRoute.children &&
            theRoute.children &&
            !this.onlyOneMenu(theRoute)
          ) {
            route.children = this.toRoutes(
              menuRoute.children,
              theRoute.children
            )
          }
          result.push(route)
        }
      })
      return result
    },

    async generateRoutes(roles) {
      let accessedRoutes = [...routeList]

      if (import.meta.env.VITE_NODE_ENV !== 'development') {
        const { data: menuRoutes } = (await getMenuRoutes()) as any
        accessedRoutes = this.toRoutes(menuRoutes, accessedRoutes)
      }

      accessedRoutes.push(...localAsyncRoutes)

      if (!roles.includes('admin')) {
        accessedRoutes = this.filterAsyncRoutes(accessedRoutes, roles)
      }

      this.setRoutes(accessedRoutes)

      return accessedRoutes
    },
  },
})
