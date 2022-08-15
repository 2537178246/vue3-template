import { reactive } from 'vue'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { Store } from '@/types'

const localStateInit = () => ({
  localLang: 'zhCn',
  elementLangType: {
    'zhCn': zhCn,
    'en': en
  }
})
export const localeStore = reactive<Store.locale>({
  state: localStateInit(),
  async changeState(state: any) {
    console.log(state)
  },
  reset() {
    localeStore.state = localStateInit()
  }
})
