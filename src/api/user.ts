import tRequest from '@/services'
import type { LoginType } from '@/types'

/**
 * @desc 登陆
 * @param data
 */
export const login = (data: LoginType): Promise<any> =>
  tRequest.post({
    url: '/zjjc/system/user/login',
    data,
  })

/**
 * @desc 获取用户信息
 * @param token
 */
export const getInfo = (token: string) =>
  tRequest.get({
    url: `/zjjc/system/user/getInfo/${token}`,
  })
