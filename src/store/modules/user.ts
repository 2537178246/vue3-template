import { defineStore } from 'pinia'
import { getInfo, login } from '@/api/user'
import { useStorage, useToken } from '@/hooks'
import type { LoginType, UserType } from '@/types'

export const userStore = defineStore('userStore', {
  /**
   * @desc State For User
   * @type UserType
   */
  state: (): UserType => ({
    userId: '',
    username: '',
    password: '',
    token: useToken.getToken(),
    userInfo: {},
    roles: [],
    phone: '',
    name: '',
  }),
  actions: {
    /**
     * @type UserType
     * @desc SetUser
     * @param user
     */
    setUserInfo(user: UserType) {
      // object hasOwnProperty key
      Object.keys(this.$state).forEach((key) => {
        user[key] && (this.$state[key] = user[key])
      })
    },
    /**
     * @type LoginType
     * @desc getUserToken
     * @param userInfo
     */
    async getUserToken(userInfo: LoginType) {
      const {
        data: { data },
      } = await login(userInfo)
      this.$state.token = data
      useToken.setToken(data)
      await this.getUserInfo()
    },
    /**
     * @return UserType
     */
    async getUserInfo(): Promise<UserType> {
      const {
        data: { data },
      } = (await getInfo(this.$state.token)) as any
      if (!data) throw new Error('获取用户信息失败，请重新登陆。')
      const { id: userId, username, phone, roles, name } = data
      if (username === 'root') {
        roles.push('admin')
      }
      this.setUserInfo({ userId, username, userInfo: data, phone, roles, name })
      useStorage.setItem('userinfo', data)
      return data as UserType
    },
    /**
     * @desc cancelToken
     */
    cancelToken() {
      Object.keys(this.$state).forEach((key) => {
        this.$state[key] = ''
      })
      useToken.removeToken()
      useStorage.clearAll()
    },
  },
})
