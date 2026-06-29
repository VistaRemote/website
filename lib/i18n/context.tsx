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
import { LOCALE_CONFIG, detectBrowserLocale, loadStoredLocale, storeLocale } from './config'
import { messages } from './messages'

interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  m: Messages
  config: (typeof LOCALE_CONFIG)[Locale]
}

const LocaleContext = createContext<LocaleContextValue | null>(null)

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const stored = loadStoredLocale()
    const detected = stored ?? detectBrowserLocale()
    if (detected) setLocaleState(detected)
    setReady(true)
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    storeLocale(next)
    document.documentElement.lang = LOCALE_CONFIG[next].htmlLang
  }, [])

  useEffect(() => {
    if (!ready) return
    document.documentElement.lang = LOCALE_CONFIG[locale].htmlLang
  }, [locale, ready])

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
