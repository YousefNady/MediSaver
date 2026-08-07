import { motion } from 'framer-motion'

export default function SectionWrapper({ children, className = '', id }) {
  return (
    <section id={id} className={`py-20 lg:py-28 ${className}`}>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px 0px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}
