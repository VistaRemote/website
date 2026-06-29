import zhCN from 'antd/locale/zh_CN'
import zhTW from 'antd/locale/zh_TW'
import enUS from 'antd/locale/en_US'
import esES from 'antd/locale/es_ES'
import ptBR from 'antd/locale/pt_BR'
import nlNL from 'antd/locale/nl_NL'
import itIT from 'antd/locale/it_IT'
import jaJP from 'antd/locale/ja_JP'
import koKR from 'antd/locale/ko_KR'
import type { Locale } from './types'

export interface LocaleConfig {
  code: Locale
  label: string
  short: string
  htmlLang: string
  antd: typeof zhCN
}

export const LOCALE_CONFIG: Record<Locale, LocaleConfig> = {
  en: {
    code: 'en',
    label: 'English',
    short: 'EN',
    htmlLang: 'en',
    antd: enUS,
  },
  'zh-CN': {
    code: 'zh-CN',
    label: '简体中文',
    short: '简',
    htmlLang: 'zh-CN',
    antd: zhCN,
  },
  'zh-TW': {
    code: 'zh-TW',
    label: '繁體中文',
    short: '繁',
    htmlLang: 'zh-TW',
    antd: zhTW,
  },
  es: {
    code: 'es',
    label: 'Español',
    short: 'ES',
    htmlLang: 'es',
    antd: esES,
  },
  pt: {
    code: 'pt',
    label: 'Português',
    short: 'PT',
    htmlLang: 'pt',
    antd: ptBR,
  },
  nl: {
    code: 'nl',
    label: 'Nederlands',
    short: 'NL',
    htmlLang: 'nl',
    antd: nlNL,
  },
  it: {
    code: 'it',
    label: 'Italiano',
    short: 'IT',
    htmlLang: 'it',
    antd: itIT,
  },
  ja: {
    code: 'ja',
    label: '日本語',
    short: '日',
    htmlLang: 'ja',
    antd: jaJP,
  },
  ko: {
    code: 'ko',
    label: '한국어',
    short: '한',
    htmlLang: 'ko',
    antd: koKR,
  },
}

export const LOCALE_MENU = (Object.values(LOCALE_CONFIG) as LocaleConfig[]).map(
  (c) => ({ key: c.code, label: c.label }),
)

const STORAGE_KEY = 'vistaremote-locale'

export function isLocale(v: string): v is Locale {
  return v in LOCALE_CONFIG
}

export function loadStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored && isLocale(stored) ? stored : null
}

/** Map navigator.language to supported locale (first visit, no stored preference). */
export function detectBrowserLocale(): Locale | null {
  if (typeof navigator === 'undefined') return null
  const langs = navigator.languages?.length
    ? [...navigator.languages]
    : [navigator.language]

  for (const raw of langs) {
    const tag = raw.toLowerCase()
    if (tag.startsWith('zh-tw') || tag.startsWith('zh-hk') || tag === 'zh-hant') return 'zh-TW'
    if (tag.startsWith('zh')) return 'zh-CN'
    if (tag.startsWith('es')) return 'es'
    if (tag.startsWith('pt')) return 'pt'
    if (tag.startsWith('nl')) return 'nl'
    if (tag.startsWith('it')) return 'it'
    if (tag.startsWith('ja')) return 'ja'
    if (tag.startsWith('ko')) return 'ko'
    if (tag.startsWith('en')) return 'en'
  }
  return null
}

export function storeLocale(locale: Locale): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, locale)
}
