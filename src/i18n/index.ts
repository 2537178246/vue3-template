// \src\i18n\index.ts
import { createI18n } from 'vue-i18n'
// 语言包
import zhCn from './lang/zh-cn'
import en from './lang/en'
import { localeStore } from '@/store'

const i18n = createI18n({
  legacy: false,
  locale: localeStore.state.localLang || 'zhCn',
  messages: {
    zhCn,
    en
  }
})

export default i18n
