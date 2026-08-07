import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'
import { useSEO } from '../hooks/useSEO'

export default function NotFound() {
  const { t, isRTL } = useLang()
  const n = t('notFound')

  useSEO({ title: n.pageTitle, description: n.subtext })

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f0fdf6] to-white dark:from-gray-900 dark:to-gray-950 flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* Decorative blurred blobs — matches hero section style */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">

        {/* Medical cross icon — on-brand for healthcare */}
        <div className="mb-8 relative">
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[2rem] bg-brand-gradient flex items-center justify-center shadow-xl shadow-emerald-200">
            <svg
              className="w-14 h-14 sm:w-20 sm:h-20 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m-3-3h6" />
            </svg>
          </div>
          {/* 404 badge */}
          <span className="absolute -bottom-3 -right-3 bg-white text-emerald-600 dark:text-emerald-400 font-black text-sm px-3 py-1 rounded-full shadow-md border border-emerald-100 dark:border-emerald-500/30 tracking-tight dark:bg-gray-900">
            404
          </span>
        </div>

        {/* Eyebrow */}
        <span className="inline-block bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-500/30 mb-5">
          {n.eyebrow}
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-4 dark:text-white">
          {n.heading}
        </h1>

        {/* Subtext */}
        <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-10 max-w-sm dark:text-gray-400">
          {n.subtext}
        </p>

        {/* CTA buttons */}
        <div className={`flex flex-col sm:flex-row gap-3 w-full sm:w-auto ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-200 hover:opacity-90 transition-opacity text-sm sm:text-base"
          >
            <svg className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {n.homeCta}
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 font-semibold px-8 py-3.5 rounded-xl border border-emerald-200 hover:border-emerald-400 hover:bg-emerald-50 transition-colors text-sm sm:text-base dark:bg-gray-900"
          >
            {n.contactCta}
          </Link>
        </div>

        {/* Quick links — matches your "Our Policies" card style */}
        <div className="mt-14 w-full">
          <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-5">{n.quickLinksLabel}</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {n.quickLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center justify-between bg-white border border-gray-100 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 hover:border-emerald-300 hover:text-emerald-700 hover:shadow-sm transition-all dark:border-gray-800 dark:text-gray-300 dark:bg-gray-900"
              >
                <span>{label}</span>
                <svg
                  className={`w-3.5 h-3.5 text-gray-300 group-hover:text-emerald-500 transition-colors ${isRTL ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}