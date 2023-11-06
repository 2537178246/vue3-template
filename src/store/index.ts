import { createPinia } from 'pinia'
export { localeStore } from './modules/locale'
export { userStore } from './modules/user'
export { permissionStore } from './modules/permission'

const store = createPinia()

export default store
