import PageHeader from '../components/PageHeader'
import { useLang } from '../context/LanguageContext'
import { useSEO } from '../hooks/useSEO'

const renderEmailsOnly = (text) => {
  if (!text) return text;
  
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
  
  return text.split(emailRegex).map((part, index) => {
    if (!part) return null;

    if (part.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      const cleanEmail = part.endsWith('،') || part.endsWith('.') ? part.slice(0, -1) : part;
      const punctuation = part.endsWith('،') ? '،' : (part.endsWith('.') ? '.' : ''); 

      return (
        <span key={index}>
          <a
            href={`mailto:${cleanEmail}`}
            className="text-brand-600 hover:text-brand-700 font-medium break-all inline-block mx-1"
            dir="ltr"
          >
            {cleanEmail}
          </a>
          {punctuation}
        </span>
      );
    }

    return part;
  });
};

export default function Terms() {
  const { t, isRTL } = useLang()
  const content = t('terms')

  useSEO({ title: `${content.header.title} — MediSaver`, description: content.header.subtitle })

  return (
    <>
      <PageHeader
        badge={content.header.badge}
        title={content.header.title}
        subtitle={content.header.subtitle}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-sm dark:border-gray-800 dark:bg-gray-900 ${isRTL ? 'text-right' : ''}`}>
          <div className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-800">
            <h1 className={`font-display text-2xl font-bold text-gray-900 mb-2 dark:text-white ${isRTL ? 'rtl-text' : ''}`}>
              {content.header.title}
            </h1>
            <p className={`text-sm text-gray-500 dark:text-gray-400 ${isRTL ? 'rtl-text' : ''}`}>{content.effectiveDate}</p>
          </div>

          <p className={`text-gray-600 leading-relaxed mb-8 dark:text-gray-400 ${isRTL ? 'rtl-text' : ''}`}>
            {renderEmailsOnly(content.intro)}
          </p>

          <div className="space-y-8">
            {content.sections.map((section) => (
              <div key={section.heading} className="border-b border-gray-50 pb-8 last:border-0 last:pb-0">
                <h2 className={`font-display text-lg font-bold text-gray-900 mb-3 dark:text-white ${isRTL ? 'rtl-text' : ''}`}>
                  {section.heading}
                </h2>
                <p className={`text-gray-600 leading-relaxed dark:text-gray-400 ${isRTL ? 'rtl-text' : ''}`}>
                  {renderEmailsOnly(section.body)}
                </p>
              </div>
            ))}
          </div>

          <div className={`mt-10 pt-8 border-t border-gray-100 dark:border-gray-800 ${isRTL ? 'rtl-text' : ''}`}>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {renderEmailsOnly(content.contactNote)}{' '}
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
