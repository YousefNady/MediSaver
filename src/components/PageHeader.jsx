import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
}

export default function PageHeader({ title, subtitle, badge }) {
  return (
    <div className="bg-gradient-to-br from-brand-50 via-white to-teal-50/30 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-b border-gray-100 dark:border-gray-800">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {badge && (
          <motion.span
            variants={item}
            className="inline-flex items-center gap-1.5 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-4"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          variants={item}
          className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            variants={item}
            className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </div>
  )
}
