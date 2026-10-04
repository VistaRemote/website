'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { DEFAULT_LOCALE, type Locale, type Messages } from './types'
import { LOCALE_CONFIG, loadStoredLocale, storeLocale } from './config'
import { messages } from './messages'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  m: Messages
  config: (typeof LOCALE_CONFIG)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return DEFAULT_LOCALE
  return loadStoredLocale() ?? DEFAULT_LOCALE
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storeLocale(next)
    document.documentElement.lang = LOCALE_CONFIG[next].htmlLang
  }, [])

  useEffect(() => {
    document.documentElement.lang = LOCALE_CONFIG[locale].htmlLang
    const meta = messages[locale].meta
    document.title = meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', meta.description)
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', meta.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', meta.description)
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      m: messages[locale],
      config: LOCALE_CONFIG[locale],
    }),
    [locale, setLocale],
  )

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  )
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext)
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider')
  return ctx
}
