import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations, DEFAULT_LANGUAGE, STORAGE_KEY, LANGUAGES, getTranslation } from '../i18n'

const LanguageContext = createContext(null)

/**
 * LanguageProvider
 * ─────────────────
 * Wraps the entire app. Provides:
 *   - `lang`      — current ISO code ('en' | 'ar')
 *   - `dir`       — document direction ('ltr' | 'rtl')
 *   - `t(key)`    — translation accessor, e.g. t('nav.home')
 *   - `setLang`   — switch language
 */
export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    // Restore from localStorage on first load
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && LANGUAGES[stored]) return stored
    } catch {
      // localStorage unavailable (SSR / private mode)
    }
    return DEFAULT_LANGUAGE
  })

  const locale = translations[lang] || translations[DEFAULT_LANGUAGE]
  const dir = locale?.dir || LANGUAGES[lang]?.dir || LANGUAGES[DEFAULT_LANGUAGE].dir

  // Sync <html lang> and <html dir> whenever language changes
  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const setLang = useCallback((code) => {
    if (!LANGUAGES[code]) return
    try {
      localStorage.setItem(STORAGE_KEY, code)
    } catch {
      // ignore
    }
    setLangState(code)
  }, [])

  /**
   * t(key) — access a translation value by dot-notation path.
   *
   * Returns the raw value (string, array, or object).
   * Calling t() with no key returns the full locale object.
   *
   * Examples:
   *   t('nav.home')           → 'Home'  (en) | 'الرئيسية' (ar)
   *   t('home.stats')         → Array of stat objects
   *   t('footer.categoriesList') → Array of strings
   */
  const t = useCallback(
    (key) => {
      return getTranslation(translations, lang, key)
    },
    [locale],
  )

  const value = { lang, dir, t, setLang, isRTL: dir === 'rtl' }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

/**
 * useLang() — hook to consume language context in any component.
 *
 * const { t, lang, isRTL, setLang } = useLang()
 */
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside <LanguageProvider>')
  return ctx
}
