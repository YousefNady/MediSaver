import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Shield, Tag, Zap, Users, ChevronRight, CheckCircle2,
  Building2, Star, ArrowRight, Quote,
} from 'lucide-react'
import SectionWrapper from '../components/SectionWrapper'
import PhoneMockup from '../components/PhoneMockup'
import CountUp from '../components/CountUp'
import Reveal, { StaggerContainer, StaggerItem } from '../components/Reveal'
import { FAQAccordion } from '../components/FAQAccordion'
import { useLang } from '../context/LanguageContext'
import { useSEO } from '../hooks/useSEO'
import { categoryIcons, categoryColors } from '../config/serviceCategories'
import { CATEGORY_SLUGS } from '../config/categoryMeta'
import googlePlay from "../assets/google-play.svg";
import appleStoreBlack from "../assets/apple-store-black.svg";
import appleStoreWhite from "../assets/apple-store-white.svg";

const EASE = [0.22, 1, 0.36, 1]

const featureIcons = [Shield, Tag, Zap, Users]
const featureColors = [
  'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400',
  'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
]
const policyRoutes = ['/privacy', '/terms', '/refund']
const policyIcons = [Shield, CheckCircle2, Tag]

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
}

export default function Home() {
  const { t } = useLang()
  const h = t('home')

  useSEO({
    title: `${h.hero.heading1} ${h.hero.heading2} — MediSaver`,
    description: h.hero.subheading,
  })

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              className="text-center lg:text-start"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
                className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-6"
              >
                <span className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-pulse" />
                {h.hero.badge}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6"
              >
                {h.hero.heading1}{' '}
                <span className="text-gradient">{h.hero.heading2}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 dark:text-gray-400"
              >
                {h.hero.subheading}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
                className="space-y-2.5 mb-10 text-start max-w-sm mx-auto lg:mx-0"
              >
                {h.hero.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-gray-700 text-sm font-medium dark:text-gray-300">
                    <CheckCircle2 size={18} className="text-brand-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.36, ease: EASE }}
                className="flex flex-col sm:flex-row items-center lg:items-start gap-3"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.medisaver.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-5 py-3 transition-colors shadow-lg hover:-translate-y-0.5"
                >
                  <img
                    src={googlePlay}
                    alt="Google Play"
                    className="w-8 h-8"
                  />
                  <div>
                    <div className="text-xs text-gray-400 leading-none">{h.hero.getItOn}</div>
                    <div className="text-sm font-bold leading-tight">{h.hero.googlePlay}</div>
                  </div>
                </a>
                <a
                  href="https://apps.apple.com/app/medisaver/id0000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-gray-950 hover:bg-gray-800 text-white rounded-xl px-5 py-3 transition-colors shadow-lg hover:-translate-y-0.5"
                >
                    <img
                      src={appleStoreWhite}
                      alt="Apple Store"
                      className="w-7 h-7"
                    />
                  <div>
                    <div className="text-xs text-gray-400 leading-none">{h.hero.downloadOnThe}</div>
                    <div className="text-sm font-bold leading-tight">{h.hero.appStore}</div>
                  </div>
                </a>
              </motion.div>
            </motion.div>

            {/* Right — Phone mockup */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-brand-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
            {h.stats.map(({ value, label }, i) => (
              <StaggerItem key={i} className="text-center text-white">
                <div className="font-display text-3xl font-extrabold mb-0.5">
                  <CountUp value={value} />
                </div>
                <div className="text-xs font-medium text-white/70">{label}</div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Features */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {h.features.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {h.features.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto dark:text-gray-400">{h.features.subheading}</p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {h.features.items.map(({ title, desc }, i) => {
            const Icon = featureIcons[i]
            return (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="group h-full bg-white rounded-2xl p-6 border border-gray-100 hover:border-brand-100 hover:shadow-xl transition-[border-color,box-shadow] duration-300 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${featureColors[i]}`}>
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

      {/* How it works */}
      <SectionWrapper className="bg-gray-50/50 dark:bg-gray-900/40">
        <div className="text-center mb-14">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {h.howItWorks.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {h.howItWorks.heading}
          </h2>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative" stagger={0.12}>
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-brand-100 z-0" />
          {h.howItWorks.steps.map(({ step, title, desc }) => (
            <StaggerItem key={step} className="relative text-center">
              <div className="relative z-10 w-16 h-16 bg-brand-gradient rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-brand">
                <span className="font-display text-xl font-black text-white">{step}</span>
              </div>
              <h3 className="font-display font-bold text-gray-900 mb-2 dark:text-white">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed dark:text-gray-400">{desc}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      {/* About preview + categories */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal y={20}>
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
              {h.about.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-5 dark:text-white">
              {h.about.heading}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 dark:text-gray-400">{h.about.body1}</p>
            <p className="text-gray-600 leading-relaxed mb-8 dark:text-gray-400">{h.about.body2}</p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors group"
            >
              {h.about.learnMore}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>

          <StaggerContainer className="space-y-3" stagger={0.07}>
            {h.about.categories.map(({ label, count }, i) => {
              const Icon = categoryIcons[i]
              return (
                <StaggerItem key={i}>
                  <Link
                    to={`/categories/${CATEGORY_SLUGS[i]}`}
                    className="flex items-center gap-4 bg-white border border-gray-100 rounded-2xl px-5 py-4 hover:border-brand-100 hover:shadow-md transition-all duration-200 dark:border-gray-800 dark:bg-gray-900"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${categoryColors[i]}`}>
                      <Icon size={18} />
                    </div>
                    <span className="font-medium text-gray-800 flex-1 dark:text-gray-100">{label}</span>
                    <span className="text-sm font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-500/10 px-2.5 py-1 rounded-lg">
                      <CountUp value={count} />
                    </span>
                  </Link>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </SectionWrapper>

      {/* Partners strip */}
      <SectionWrapper className="bg-gray-50/50 !py-14 lg:!py-16 dark:bg-gray-900/40">
        <div className="text-center mb-10">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-2">
            {h.partners.eyebrow}
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
            {h.partners.heading}
          </h2>
        </div>

        <div
          dir="ltr"
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          <div className="flex w-max gap-4 animate-marquee">
            {[...h.partners.names, ...h.partners.names].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-5 py-3 whitespace-nowrap shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <Building2 size={16} className="text-brand-500 shrink-0" />
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper>
        <div className="text-center mb-14">
          <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
            {h.testimonials.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 mb-4 dark:text-white">
            {h.testimonials.heading}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto dark:text-gray-400">{h.testimonials.subheading}</p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {h.testimonials.items.map(({ name, role, quote, rating }, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: EASE }}
                className="h-full bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col dark:border-gray-800 dark:bg-gray-900"
              >
                <Quote size={28} className="text-brand-200 mb-3" />
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 dark:text-gray-400">"{quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {initials(name)}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{name}</div>
                    <div className="text-xs text-gray-400">{role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </SectionWrapper>

      {/* FAQ preview */}
      <SectionWrapper className="bg-gray-50/50 dark:bg-gray-900/40">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-brand-600 text-sm font-semibold tracking-wide uppercase mb-3">
              {h.faq.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {h.faq.heading}
            </h2>
          </div>

          <Reveal>
            <FAQAccordion items={h.faq.items} />
          </Reveal>

          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700 transition-colors group"
            >
              {h.faq.linkText}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Policies */}
      <SectionWrapper>
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-3 dark:text-white">{h.policies.heading}</h2>
          <p className="text-gray-500 dark:text-gray-400">{h.policies.subheading}</p>
        </div>

        <StaggerContainer className="grid sm:grid-cols-3 gap-6">
          {h.policies.items.map(({ title, desc }, i) => {
            const Icon = policyIcons[i]
            return (
              <StaggerItem key={policyRoutes[i]}>
                <Link
                  to={policyRoutes[i]}
                  className="group block h-full bg-white border border-gray-100 rounded-2xl p-6 hover:border-brand-200 hover:shadow-lg transition-all duration-300 dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="w-12 h-12 bg-brand-50 dark:bg-brand-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-brand-100 dark:group-hover:bg-brand-500/20 transition-colors">
                    <Icon size={20} className="text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-display font-bold text-gray-900 mb-2 dark:text-white">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4 dark:text-gray-400">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:gap-2 transition-all">
                    {h.policies.readMore} <ChevronRight size={14} />
                  </span>
                </Link>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </SectionWrapper>

      {/* Trust / CTA section */}
      <SectionWrapper>
        <div className="bg-brand-gradient rounded-3xl px-8 py-12 sm:px-12 sm:py-16 text-center text-white">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: EASE }}
            className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <Star size={28} className="text-white fill-white" />
          </motion.div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">{h.cta.heading}</h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">{h.cta.subheading}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.medisaver.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl px-6 py-3.5 font-semibold transition-colors shadow-lg text-sm hover:-translate-y-0.5 dark:text-white dark:bg-gray-900"
            >
                <img
                src={googlePlay}
                alt="Google Play"
                className="w-8 h-8"
              />
              {h.cta.googlePlay}
            </a>
            <a
              href="https://apps.apple.com/app/medisaver/id0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 rounded-xl px-6 py-3.5 font-semibold transition-colors shadow-lg text-sm hover:-translate-y-0.5 dark:text-white dark:bg-gray-900"
            >
                <img
                src={appleStoreBlack}
                alt="Apple Store"
                className="w-7 h-7"
              />
              {h.cta.appStore}
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}