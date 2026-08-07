import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Globe, Menu, X, Sun, Moon } from 'lucide-react'
import Logo from './Logo'
import { useLang } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import { LANGUAGES } from '../i18n'
import SmartDownloadButton from './SmartDownloadButton'


export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { t, lang, setLang, isRTL } = useLang()
  const { isDark, toggleTheme } = useTheme()

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/privacy', label: t('nav.privacy') },
    { to: '/terms', label: t('nav.terms') },
    { to: '/refund', label: t('nav.refund') },
    { to: '/contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en')
  }

  const otherLang = LANGUAGES[lang === 'en' ? 'ar' : 'en']

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800'
          : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group shrink-0"
            aria-label={t('nav.logoLabel')}
          >
            <Logo className="h-8 w-auto" />
            <span className="font-display font-800 text-lg tracking-tight">
              <span className="text-gray-900 dark:text-white">Medi</span>
              <span className="text-gradient">Saver</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location.pathname === to
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right actions: Theme + Language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark mode toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              aria-label={isDark ? t('nav.switchToLight') : t('nav.switchToDark')}
              title={isDark ? t('nav.switchToLight') : t('nav.switchToDark')}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Language switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              aria-label={t('nav.switchLanguage').replace('{language}', otherLang.nativeLabel)}
              title={t('nav.switchLanguage').replace('{language}', otherLang.nativeLabel)}
            >
              <Globe size={14} />
              <span>{otherLang.nativeLabel}</span>
            </button>

            {/* Download CTA */}
            {/*  Smart Download CTA — auto-detects iOS / Android / Desktop */}
            <SmartDownloadButton>
              {t('nav.downloadApp')}
            </SmartDownloadButton>
          </div>

          {/* Mobile: theme + language + menu toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-label={isDark ? t('nav.switchToLight') : t('nav.switchToDark')}
            >
              {isDark ? <Sun size={14} /> : <Moon size={14} />}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-label={t('nav.switchLanguage').replace('{language}', otherLang.nativeLabel)}
            >
              <Globe size={12} />
              <span>{otherLang.nativeLabel}</span>
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              aria-label={t('nav.toggleMenu')}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-gray-100 dark:border-gray-800 py-3 space-y-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  isRTL ? 'text-right' : 'text-left'
                } ${
                  location.pathname === to
                    ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-900/30'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {label}
              </Link>
            ))}
            <div className="pt-2 px-4">

              {/* Smart Download in mobile menu */}
              <SmartDownloadButton className="w-full justify-center py-3 rounded-xl">
                {t('nav.downloadApp')}
              </SmartDownloadButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
