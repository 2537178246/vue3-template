import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { LoginType, UserType } from '@/types'
import { getInfo, login } from '@/api/user'
import { useStorage, useToken } from '@/hooks'

export const userStore = defineStore('userStore', () => {
  const userState = reactive<UserType>({
    userId: '',
    username: '',
    password: '',
    token: useToken.getToken(),
    userInfo: {},
    roles: [],
    phone: '',
    name: ''
  })

  const setUserInfo = (user: UserType) => {
    // object hasOwnProperty key
    Object.keys(userState).forEach(key => {
      (user[key]) && (userState[key] = user[key])
    })
  }

  const getUserToken = async(userInfo: LoginType) => {
    const { data: { data }} = await login(userInfo)
    userState.token = data
    useToken.setToken(data)
    await getUserInfo()
  }

  const getUserInfo = async() => {
    const { data: { data }} = await getInfo(userState.token) as any
    if (!data) throw new Error('获取用户信息失败，请重新登陆。')
    const { id: userId, username, phone, roles, name } = data
    if (username === 'root') {
      roles.push('admin')
    }
    setUserInfo({ userId, username, userInfo: data, phone, roles, name })
    useStorage.setItem('userinfo', data)
    return data
  }

  const cancelToken = async() => {
    Object.keys(userState).forEach(key => {
      userState[key] = ''
    })
    useToken.removeToken()
    useStorage.clearAll()
  }

  return {
    userState, setUserInfo, getUserToken, getUserInfo, cancelToken
  }
})
