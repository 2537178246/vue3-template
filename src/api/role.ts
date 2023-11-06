import tRequest from '@/services'

export const getMenuRoutes = () =>
  tRequest.get({
    url: '/system/menu/getMenuRoutes',
  })
