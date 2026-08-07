import { useState, useRef, useEffect, useCallback } from 'react'
import { useLang } from '../context/LanguageContext'

/**
 * FAQAccordion
 * ─────────────
 * A fully accessible, RTL-aware accordion for FAQ content.
 *
 * Props:
 *   items  — array of { q: string, a: string }
 *   category — optional string label shown above the group
 *
 * Features:
 *   - One item open at a time
 *   - Smooth CSS transition (max-height trick, no JS animation loops)
 *   - Plus / Minus icons that rotate/transition
 *   - Full keyboard navigation (Enter, Space, ArrowUp, ArrowDown, Home, End)
 *   - aria-expanded, aria-controls, role="region" for screen readers
 *   - RTL-safe icon placement via dir-aware flex order
 */
export function FAQAccordion({ items = [], category = null }) {
  const { isRTL } = useLang()
  const [openIndex, setOpenIndex] = useState(null)
  const buttonRefs = useRef([])

  const toggle = useCallback((idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx))
  }, [])

  const handleKeyDown = useCallback(
    (e, idx) => {
      const count = items.length
      let next = null
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        next = (idx + 1) % count
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        next = (idx - 1 + count) % count
      } else if (e.key === 'Home') {
        e.preventDefault()
        next = 0
      } else if (e.key === 'End') {
        e.preventDefault()
        next = count - 1
      }
      if (next !== null) buttonRefs.current[next]?.focus()
    },
    [items.length],
  )

  if (!items || items.length === 0) return null

  return (
    <div className="w-full">
      {category && (
        <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          {category}
        </h3>
      )}
      <div
        className="divide-y divide-gray-100 dark:divide-gray-800 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm"
        role="list"
      >
        {items.map((item, idx) => {
          const isOpen = openIndex === idx
          const panelId = `faq-panel-${category ?? 'main'}-${idx}`
          const buttonId = `faq-btn-${category ?? 'main'}-${idx}`

          return (
            <div key={idx} role="listitem" className="group">
              {/* ── Trigger ─────────────────────────────────────────── */}
              <button
                id={buttonId}
                ref={(el) => (buttonRefs.current[idx] = el)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                className={[
                  'flex w-full items-center gap-4 px-5 py-4 text-start transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-1',
                  'first:rounded-t-2xl last:rounded-b-2xl',
                  isOpen
                    ? 'bg-emerald-50/60 dark:bg-emerald-500/10'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-800/60 active:bg-gray-100 dark:active:bg-gray-800',
                ].join(' ')}
              >
                {/* Icon — placed first in DOM, flex-order handles RTL alignment */}
                <span
                  aria-hidden="true"
                  className={[
                    'flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full',
                    'border-2 transition-all duration-300',
                    isOpen
                      ? 'border-emerald-500 bg-emerald-500 text-white'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-400 dark:text-gray-500 group-hover:border-emerald-400 group-hover:text-emerald-400',
                    isRTL ? 'order-last' : 'order-last',
                  ].join(' ')}
                >
                  <svg
                    viewBox="0 0 14 14"
                    width="12"
                    height="12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                  >
                    {/* Horizontal bar always visible */}
                    <line x1="2" y1="7" x2="12" y2="7" />
                    {/* Vertical bar fades in when closed (plus), rotates away when open (minus via parent rotate-45) */}
                    <line
                      x1="7"
                      y1="2"
                      x2="7"
                      y2="12"
                      className={`transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                  </svg>
                </span>

                {/* Question text */}
                <span
                  className={[
                    'flex-1 text-sm font-semibold leading-snug',
                    isOpen ? 'text-emerald-700 dark:text-emerald-400' : 'text-gray-800 dark:text-gray-100',
                  ].join(' ')}
                >
                  {item.q}
                </span>
              </button>

              {/* ── Answer panel ────────────────────────────────────── */}
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={[
                  'overflow-hidden transition-all duration-300 ease-in-out',
                  isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0',
                ].join(' ')}
              >
                <p
                  className={[
                    'px-5 pb-5 pt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400',
                    isRTL ? 'pr-5' : 'pl-5',
                  ].join(' ')}
                >
                  {item.a}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * FAQSection
 * ──────────
 * The full FAQ block, ready to drop into Contact.jsx.
 * Renders a title, subtitle, category tabs (optional), and the accordion.
 *
 * Props:
 *   faqData — the full t('contact.faq') object
 */
export function FAQSection({ faqData }) {
  const { isRTL } = useLang()
  const [activeCategory, setActiveCategory] = useState(0)

  if (!faqData) return null

  const { title, subtitle, categories } = faqData

  // Support flat items array (no categories) and categorized arrays
  const hasCategories = Array.isArray(categories) && categories.length > 0

  return (
    <section aria-labelledby="faq-heading" className="w-full">
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
        <h2
          id="faq-heading"
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          {title}
        </h2>
        {subtitle && (
          <p className="mt-1.5 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {subtitle}
          </p>
        )}
      </div>

      {/* ── Category pills (tab-like) ────────────────────────── */}
      {hasCategories && (
        <div
          className={`mb-6 flex flex-wrap gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
          role="tablist"
          aria-label={title}
        >
          {categories.map((cat, idx) => (
            <button
              key={idx}
              role="tab"
              aria-selected={activeCategory === idx}
              aria-controls={`faq-tabpanel-${idx}`}
              onClick={() => setActiveCategory(idx)}
              className={[
                'rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500',
                activeCategory === idx
                  ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-200 dark:shadow-emerald-500/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700',
              ].join(' ')}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* ── Accordion panels ─────────────────────────────────── */}
      {hasCategories ? (
        categories.map((cat, idx) => (
          <div
            key={idx}
            id={`faq-tabpanel-${idx}`}
            role="tabpanel"
            aria-label={cat.label}
            hidden={activeCategory !== idx}
            className={activeCategory === idx ? 'block' : 'hidden'}
          >
            <FAQAccordion items={cat.items} />
          </div>
        ))
      ) : (
        // Fallback: flat list (no categories)
        <FAQAccordion items={faqData.items} />
      )}
    </section>
  )
}