import { userStore } from './modules/user'
import { localeStore } from './modules/locale'
import { permissionStore } from './modules/permission'
import { useResetFun } from '@/hooks'

export interface IAppStore {
  userStore: ReturnType<typeof userStore>
  localeStore: ReturnType<typeof localeStore>
  permissionStore: ReturnType<typeof permissionStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.userStore = userStore()
  appStore.localeStore = localeStore()
  appStore.permissionStore = permissionStore()

  // 重写reset方法
  useResetFun(appStore)
}

export default appStore
