import { reactive } from 'vue'
import { LoginType, UserType } from '@/types'
import { getInfo, login } from '@/api/user'
import { useStorage, useToken } from '@/hooks'

export const userObj = reactive<UserType>({
  userId: '',
  username: '',
  password: '',
  token: useToken.getToken(),
  userInfo: {},
  roles: [],
  phone: '',
  name: ''
})

export function setUserInfo(user: UserType) {
  Object.keys(userObj).forEach(key => {
    (user[key]) && (userObj[key] = user[key])
  })
}

export const getUserToken = async(userInfo: LoginType) => {
  const { data: { data }} = await login(userInfo)
  userObj.token = data
  useToken.setToken(data)
  await getUserInfo()
}

export const getUserInfo = async() => {
  const { data: { data }} = await getInfo(userObj.token) as any
  if (!data) throw new Error('获取用户信息失败，请重新登陆。')
  const { id: userId, username, phone, roles, name } = data
  if (username === 'root') {
    roles.push('admin')
  }
  setUserInfo({ userId, username, userInfo: data, phone, roles, name })
  useStorage.setItem('userinfo', data)
  return data
}

export const cancelToken = async() => {
  Object.keys(userObj).forEach(key => {
    userObj[key] = ''
  })
  useToken.removeToken()
  useStorage.clearAll()
}
