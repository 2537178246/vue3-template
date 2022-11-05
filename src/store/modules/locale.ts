import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { reactive } from 'vue'
import { Store, Locale } from '@/types'
import { defineStore } from 'pinia'

export const localeStore = defineStore('localeStore', () => {
  const localState = reactive<Store.localState>({
    localLang: Locale.zn,
    elementLangType: {
      cn: zhCn,
      en: en
    }
  })
  return { localState }
})
