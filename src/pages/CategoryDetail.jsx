import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2, ArrowRight, ArrowLeft, MapPin, Sparkles } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionWrapper from '../components/SectionWrapper'
import CountUp from '../components/CountUp'
import Reveal, { StaggerContainer, StaggerItem } from '../components/Reveal'
import { useLang } from '../context/LanguageContext'
import { useSEO } from '../hooks/useSEO'
import { CATEGORY_SLUGS, categoryIcons, categoryColors } from '../config/categoryMeta'

export default function CategoryDetail() {
  const { slug } = useParams()
  const { t, isRTL } = useLang()
  const pages = t('categoryPages')
  const page = pages?.[slug]

  useSEO(page ? { title: `${page.title} — MediSaver`, description: page.subtitle } : {})

  if (!page || !CATEGORY_SLUGS.includes(slug)) {
    return <Navigate to="/404" replace />
  }

  const Icon = categoryIcons[slug]
  const BackArrow = isRTL ? ArrowRight : ArrowLeft

  return (
    <>
      <PageHeader badge={page.badge} title={page.title} subtitle={page.subtitle} />

      <SectionWrapper>
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
          <Reveal y={20} className="lg:col-span-2 space-y-8">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${categoryColors[slug]}`}>
              <Icon size={26} />
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">{page.intro}</p>

            <ul className="space-y-3">
              {page.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                  <CheckCircle2 size={20} className="text-brand-500 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/"
              className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:text-brand-700 dark:hover:text-brand-300 transition-colors group"
            >
              <BackArrow size={16} className="group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
              {t('common.backToHome')}
            </Link>
          </Reveal>

          {/* Stats + CTA sidebar */}
          <StaggerContainer className="space-y-4" stagger={0.08}>
            {page.stats.map(({ value, label }, i) => (
              <StaggerItem
                key={i}
                className="bg-gradient-to-br from-brand-50 to-teal-50/50 dark:from-gray-900 dark:to-gray-900 rounded-2xl p-6 border border-brand-100/50 dark:border-gray-800"
              >
                <div className="font-display text-3xl font-extrabold text-gradient mb-1">
                  <CountUp value={value} />
                </div>
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">{label}</div>
              </StaggerItem>
            ))}

            <StaggerItem className="bg-brand-gradient rounded-2xl p-6 text-white">
              <p className="font-display font-bold text-lg mb-2">{t('home.cta.heading')}</p>
              <p className="text-sm text-white/80 mb-5 leading-relaxed">{t('home.cta.subheading')}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors"
              >
                {t('nav.contact')} <ArrowRight size={14} className="rtl:rotate-180" />
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionWrapper>

      {/* Featured providers (5 service categories) */}
      {page.examples && (
        <SectionWrapper className="bg-gray-50/50 dark:bg-gray-900/40 !pt-0 lg:!pt-0">
          <Reveal y={16} className="mb-8">
            <span className="inline-flex items-center gap-1.5 text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase mb-2">
              <Sparkles size={14} />
              {t('common.examplesEyebrow')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {t('common.examplesHeading').replace('{category}', page.badge)}
            </h2>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
            {page.examples.map(({ name, location, tag }, i) => (
              <StaggerItem
                key={i}
                className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-5 hover:border-brand-100 dark:hover:border-brand-500/30 hover:shadow-md transition-all duration-200"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${categoryColors[slug]}`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-gray-900 dark:text-white mb-1.5">{name}</h3>
                <p className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <MapPin size={13} className="shrink-0" />
                  {location}
                </p>
                <span className="inline-block text-xs font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-2.5 py-1 rounded-lg">
                  {tag}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <p className="text-sm text-gray-400 dark:text-gray-500 mt-6">
            {t('common.examplesDisclaimer')}
          </p>
        </SectionWrapper>
      )}

      {/* Plan tiers (Packages category only) */}
      {page.plans && (
        <SectionWrapper className="bg-gray-50/50 dark:bg-gray-900/40 !pt-0 lg:!pt-0">
          <Reveal y={16} className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase mb-2">
              <Sparkles size={14} />
              {t('common.plansEyebrow')}
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {t('common.plansHeading')}
            </h2>
          </Reveal>

          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto" stagger={0.1}>
            {page.plans.map(({ name, price, period, tagline, features, featured }, i) => (
              <StaggerItem
                key={i}
                className={
                  featured
                    ? 'relative bg-brand-gradient rounded-2xl p-7 text-white shadow-brand'
                    : 'relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl p-7'
                }
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-950 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {t('common.mostPopular')}
                  </span>
                )}
                <h3 className={`font-display font-bold text-lg mb-1 ${featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {name}
                </h3>
                <p className={`text-sm mb-4 ${featured ? 'text-white/80' : 'text-gray-500 dark:text-gray-400'}`}>
                  {tagline}
                </p>
                <div className="flex items-baseline gap-1 mb-5">
                  <span className={`font-display text-3xl font-extrabold ${featured ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {price}
                  </span>
                  <span className={featured ? 'text-white/70 text-sm' : 'text-gray-400 dark:text-gray-500 text-sm'}>
                    {period}
                  </span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-sm ${featured ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'}`}>
                      <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${featured ? 'text-white' : 'text-brand-500'}`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={
                    featured
                      ? 'block text-center bg-white text-brand-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors'
                      : 'block text-center bg-brand-50 dark:bg-brand-500/10 text-brand-700 dark:text-brand-400 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-brand-100 dark:hover:bg-brand-500/20 transition-colors'
                  }
                >
                  {t('nav.contact')}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </SectionWrapper>
      )}
    </>
  )
}