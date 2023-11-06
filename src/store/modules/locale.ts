import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { defineStore } from 'pinia'
import { Locale } from '@/types'
import type { Store } from '@/types'
import type { Language } from 'element-plus/es/locale'

export const localeStore = defineStore('localeStore', {
  state: (): Store.localState => ({
    /**
     * @type Locale
     */
    localLang: Locale.zn,
    /**
     * @type {
     *   [key: string]: Language
     * }
     */
    elementLangType: {
      zn: zhCn,
      en,
    },
  }),
  getters: {
    /**
     * @type Language
     * @param state
     */
    locale(state): Language {
      return state.elementLangType[state.localLang]
    },
  },
})
