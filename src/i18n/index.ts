// \src\i18n\index.ts
import { createI18n } from 'vue-i18n'
// 语言包
import zn from './lang/zh-cn'
import en from './lang/en'
import { Locale } from '@/types'

const i18n = createI18n({
  legacy: false,
  locale: Locale.zn,
  messages: {
    zn,
    en
  }
})

export default i18n
