import { AlertCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { useLang } from '../context/LanguageContext'
import { useSEO } from '../hooks/useSEO'

const renderTextWithLinks = (text) => {
  if (!text) return text;
  
  const linkRegex = /((?:https?:\/\/[^\s،]+)|(?:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}))/g;
  
  return text.split(linkRegex).map((part, index) => {
    if (!part) return null;

    if (part.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      const cleanEmail = part.endsWith('.') ? part.slice(0, -1) : part;
      return (
        <span key={index}>
          <a
            href={`mailto:${cleanEmail}`}
            className="text-brand-600 hover:text-brand-700 font-medium break-all inline-block mx-1"
            dir="ltr"
          >
            {cleanEmail}
          </a>
          {part.endsWith('.') && '.'}
        </span>
      );
    }

    if (part.match(/^https?:\/\//)) {
      const cleanUrl = part.endsWith('.') ? part.slice(0, -1) : part;
      return (
        <span key={index}>
          <a
            href={cleanUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 hover:text-brand-700 font-medium underline break-all inline-block mx-1"
            dir="ltr"
          >
            {cleanUrl}
          </a>
          {part.endsWith('.') && '.'}
        </span>
      );
    }

    return part;
  });
};

export default function Refund() {
  const { t, isRTL } = useLang()
  const content = t('refund')

  useSEO({ title: `${content.header.title} — MediSaver`, description: content.header.subtitle })
  
  return (
    <>
      <PageHeader
        badge={content.header.badge}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start gap-3 bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/30 rounded-xl px-5 py-4 mb-8">
          <AlertCircle size={18} className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className={`text-sm text-amber-800 dark:text-amber-300 ${isRTL ? 'rtl-text' : ''}`}>
            <span className="font-semibold">{content.importantNotice}: </span>
            {content.noticeBody}
          </p>
        </div>

        <div className={`bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm dark:border-gray-800 dark:bg-gray-900 ${isRTL ? 'text-right' : ''}`}>
          <div className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
            <h1 className={`font-display text-2xl font-bold text-gray-900 mb-2 dark:text-white ${isRTL ? 'rtl-text' : ''}`}>
              {content.header.title}
            </h1>
            <p className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'rtl-text' : ''}`}>{content.effectiveDate}</p>
          </div>

          <div className="space-y-10">
            {content.sections.map((section) => (
              <div key={section.heading} className="border-b border-gray-50 pb-10 last:border-0 last:pb-0">
                <h2 className={`font-display text-xl font-bold text-gray-900 mb-4 dark:text-white ${isRTL ? 'rtl-text' : ''}`}>
                  {section.heading}
                </h2>

                    {section.body && section.body.split('\n\n').map((para, i) => (
                  <p key={i} className={`text-gray-600 leading-relaxed mb-3 dark:text-gray-400 ${isRTL ? 'rtl-text' : ''}`}>
                    {renderTextWithLinks(para)}
                  </p>
                ))}

                {section.subsections && (
                  <div className="mt-4 space-y-4">
                    {section.subsections.map((sub) => (
                      <div key={sub.title} className="bg-gray-50 rounded-xl p-5">
                        <h3 className={`font-semibold text-gray-900 mb-2 text-sm dark:text-white ${isRTL ? 'rtl-text' : ''}`}>
                          {sub.title}
                        </h3>
                        <p className={`text-sm text-gray-600 leading-relaxed dark:text-gray-400 ${isRTL ? 'rtl-text' : ''}`}>
                          {renderTextWithLinks(sub.content)}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.list && (
                  <ol className={`mt-3 space-y-3 ${isRTL ? 'rtl-text' : ''}`}>
                    {section.list.map((item, i) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="shrink-0 w-6 h-6 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 leading-relaxed text-sm dark:text-gray-400">{item}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            ))}
          </div>

          <div className={`mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 ${isRTL ? 'rtl-text' : ''}`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {content.contactNote}{' '}
              <a href="mailto:vaucherlife@gmail.com" className="text-brand-600 hover:text-brand-700 font-medium">
                vaucherlife@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
