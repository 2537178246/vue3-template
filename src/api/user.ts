import tRequest from '@/services'
import { LoginType } from '@/types'
// 登陆
export function login(data: LoginType): Promise<any> {
  return tRequest.post({
    url: '/zjjc/system/user/login',
    data
  })
}
// 获取用户信息
export function getInfo(token: string) {
  return tRequest.get({
    url: `/zjjc/system/user/getInfo/${token}`
  })
}
