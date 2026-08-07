import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Wraps a page's content so React Router route changes animate in/out
 * instead of snapping instantly. Used together with <AnimatePresence>
 * in App.jsx — see the "key={location.pathname}" pattern there.
 */
export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.35, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
