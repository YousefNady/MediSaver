import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, ArrowRight } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import SectionWrapper from '../components/SectionWrapper'
import CountUp from '../components/CountUp'
import Reveal, { StaggerContainer, StaggerItem } from '../components/Reveal'
import { useLang } from '../context/LanguageContext'
import { useSEO } from '../hooks/useSEO'
import { categoryIcons, categoryColors } from '../config/serviceCategories'

const EASE = [0.22, 1, 0.36, 1]

const valueIcons = [Target, Eye, Heart, Shield]
const valueColors = [
  'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
  'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
]

export default function About() {
  const { t } = useLang()
  const a = t('about')

  useSEO({
    title: `${a.header.title} — MediSaver`,
    description: a.header.subtitle,
  })

  return (
    <>
      <PageHeader
        badge={a.header.badge}
        title={a.header.title}
        subtitle={a.header.subtitle}
      />

      {/* Story */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal y={20}>
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
              {a.story.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-5 dark:text-white">
              {a.story.heading}
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed dark:text-gray-400">
              <p>{a.story.body1}</p>
              <p>{a.story.body2}</p>
              <p>{a.story.body3}</p>
            </div>
          </Reveal>

          <StaggerContainer className="grid grid-cols-2 gap-4" stagger={0.1}>
            {a.story.stats.map(({ stat, label }, i) => (
              <StaggerItem
                key={i}
                className="bg-gradient-to-br from-brand-50 to-teal-50/50 dark:from-gray-900 dark:to-gray-900 rounded-2xl p-6 border border-brand-100/50 dark:border-gray-800"
              >
                <div className="font-display text-3xl font-extrabold text-gradient mb-1">
                  <CountUp value={stat} />
                </div>
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide dark:text-gray-400">{label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-gray-50/50 dark:bg-gray-900/40">
        <div className="text-center mb-12">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {a.values.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {a.values.heading}
          </h2>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {a.values.items.map(({ title, desc }, i) => {
            const Icon = valueIcons[i]
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${valueColors[i]}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 mb-2 dark:text-white">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-400">{desc}</p>
                </motion.div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </SectionWrapper>

      {/* Services */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {a.services.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {a.services.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto dark:text-gray-400">{a.services.subheading}</p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {a.services.categories.map(({ title, desc }, i) => {
            const Icon = categoryIcons[i]
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="group h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-100 hover:shadow-lg transition-[border-color,box-shadow] duration-300 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${categoryColors[i]} group-hover:scale-110 transition-transform`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 mb-2 dark:text-white">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-400">{desc}</p>
                </motion.div>
              </StaggerItem>
            )
          })}

          {/* CTA card */}
          <StaggerItem className="bg-brand-gradient rounded-2xl p-6 flex flex-col justify-between text-white h-full">
            <div>
              <h3 className="font-display font-bold text-xl mb-2">{a.services.ctaCard.title}</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6">{a.services.ctaCard.body}</p>
            </div>
            <a
              href="https://play.google.com/store/apps/details?id=com.medisaver.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-700 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-gray-50 transition-colors self-start dark:bg-gray-900 dark:text-brand-400 dark:hover:bg-gray-800"
            >
              {a.services.ctaCard.button} <ArrowRight size={14} />
            </a>
          </StaggerItem>
        </StaggerContainer>
      </SectionWrapper>

      {/* Partner CTA */}
      <SectionWrapper className="bg-gray-50/50 dark:bg-gray-900/40">
        <Reveal className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4 dark:text-white">{a.partner.heading}</h2>
          <p className="text-gray-500 text-lg mb-8 dark:text-gray-400">{a.partner.body}</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-brand-gradient text-white font-semibold px-8 py-3.5 rounded-xl shadow-brand hover:shadow-lg hover:scale-[1.02] transition-all"
          >
            {a.partner.button} <ArrowRight size={16} />
          </Link>
        </Reveal>
      </SectionWrapper>
    </>
  )
}
