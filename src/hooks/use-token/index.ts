import Cookies from 'js-cookie'
import config from '../../config.json'

const TOKEN = import.meta.env.VITE_NODE_ENV !== 'development'
  ? config.ProTokenKey
  : config.DevTokenKey ||
  ''

export const useToken = new class {
  private readonly _TokenKey: string
  constructor(tokenKey: string) {
    this._TokenKey = tokenKey
  }
  getToken() {
    return Cookies.get(this._TokenKey)
  }
  setToken(token) {
    return Cookies.set(this._TokenKey, token, { expires: 1 })
  }
  removeToken() {
    return Cookies.remove(this._TokenKey)
  }
}(TOKEN)
