/**
 * @desc i18n
 */
import { createI18n } from 'vue-i18n'
// 语言包
import { Locale } from '@/types'
import zn from './lang/zh-cn'
import en from './lang/en'

const i18n = createI18n({
  legacy: false,
  locale: Locale.zn,
  messages: {
    zn,
    en,
  },
})

export default i18n
