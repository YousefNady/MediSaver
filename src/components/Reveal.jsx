import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Reveal
 * ───────
 * Fades + slides a block into place the first time it scrolls into view.
 * Used for headings, standalone blocks, and anything that doesn't need
 * per-child staggering (use StaggerContainer/StaggerItem for that).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = '',
  once = true,
  as = 'div',
  ...props
}) {
  const Component = motion[as] || motion.div
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px 0px' }}
      transition={{ duration, delay, ease: EASE }}
      {...props}
    >
      {children}
    </Component>
  )
}

/**
 * StaggerContainer / StaggerItem
 * ────────────────────────────────
 * Pair used for grids/lists where each child should reveal in a cascade
 * rather than all at once. Wrap the grid in StaggerContainer, and each
 * grid cell's content in StaggerItem.
 */
export function StaggerContainer({ children, className = '', stagger = 0.08, once = true, ...props }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-60px 0px' }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className = '', y = 20, ...props }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
