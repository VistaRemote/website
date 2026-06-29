import type { Locale, Messages } from '../types'
import en from './en'
import zhCN from './zh-CN'
import zhTW from './zh-TW'
import es from './es'
import pt from './pt'
import nl from './nl'
import it from './it'
import ja from './ja'
import ko from './ko'

export const messages: Record<Locale, Messages> = {
  en,
  'zh-CN': zhCN,
  'zh-TW': zhTW,
  es,
  pt,
  nl,
  it,
  ja,
  ko,
}
