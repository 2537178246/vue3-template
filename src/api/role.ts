import tRequest from '@/services'

export function getMenuRoutes() {
  return tRequest.get({
    url: '/system/menu/getMenuRoutes'
  })
}
