import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import {
  Percent,
  BadgeCheck,
  Star,
  Building2,
  FlaskConical,
  Pill,
  Radiation,
  Stethoscope,
} from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const EASE = [0.22, 1, 0.36, 1]

const chipIcons = [
  Building2,
  FlaskConical,
  Pill,
  Radiation,
  Stethoscope,
]

export default function PhoneMockup() {
  const { t } = useLang()
  const p = t('phoneMockup')
  const containerRef = useRef(null)

  // The discount card below floats on an infinite loop. Only run it while
  // the hero is actually on screen, and never for users who've asked for
  // reduced motion — an animation that never stops is otherwise a real
  // battery/CPU drain even after the person has scrolled past it.
  const isInView = useInView(containerRef, { amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()
  const shouldFloat = isInView && !prefersReducedMotion

  const categories = Object.values(p.categories).slice(0, 6)

  return (
    <div ref={containerRef} className="relative w-full h-[470px] sm:h-[500px]">

      {/* =========================
          Soft background glow
      ========================== */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: EASE }}
        className="
          absolute
          right-[10%]
          top-[15%]
          w-[300px]
          h-[300px]
          rounded-full
          bg-emerald-300/20
          dark:bg-emerald-500/10
          blur-[80px]
          pointer-events-none
        "
      />

      {/* =========================
          Main Categories Card
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          y: 35,
          rotate: -3,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: -2,
          scale: 1,
        }}
        transition={{
          duration: 0.9,
          ease: EASE,
        }}
        className="
          absolute
          top-12
          left-[8%]
          sm:left-[10%]
          w-[78%]
          sm:w-[76%]
          max-w-[390px]
          h-[395px]
          sm:h-[415px]
          bg-white
          dark:bg-gray-900
          rounded-[2rem]
          border
          border-gray-100
          dark:border-gray-800
          shadow-[0_25px_70px_rgba(15,23,42,0.14)]
          dark:shadow-[0_25px_70px_rgba(0,0,0,0.35)]
          p-5
          sm:p-6
          flex
          flex-col
          z-10
        "
      >

        {/* Header */}
        <div className="mb-5">
          <p className="text-xs font-semibold tracking-wide text-gray-400 dark:text-gray-500">
            {p.popularCategories}
          </p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 32 }}
            transition={{
              duration: 0.5,
              delay: 0.55,
              ease: EASE,
            }}
            className="mt-2 h-1 rounded-full bg-brand-gradient"
          />
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-3">
          {categories.map((label, i) => {
            const Icon = chipIcons[i % chipIcons.length]

            return (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 14,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.55 + i * 0.08,
                  ease: EASE,
                }}
                whileHover={{
                  y: -3,
                  scale: 1.015,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  min-h-[64px]
                  bg-gray-50
                  dark:bg-gray-800/80
                  border
                  border-transparent
                  hover:border-emerald-100
                  dark:hover:border-emerald-900
                  rounded-2xl
                  px-3
                  transition-colors
                  duration-200
                "
              >
                <div
                  className="
                    shrink-0
                    w-9
                    h-9
                    rounded-xl
                    bg-emerald-100
                    dark:bg-emerald-900/30
                    flex
                    items-center
                    justify-center
                    transition-transform
                    duration-300
                    group-hover:rotate-[-4deg]
                  "
                >
                  <Icon
                    size={17}
                    className="text-brand-600 dark:text-brand-400"
                    strokeWidth={2}
                  />
                </div>

                <span
                  className="
                    text-[10px]
                    sm:text-[11px]
                    font-semibold
                    text-gray-600
                    dark:text-gray-300
                    leading-tight
                  "
                >
                  {label}
                </span>
              </motion.div>
            )
          })}
        </div>

        {/* Rating */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.05,
            ease: EASE,
          }}
          className="
            mt-auto
            pt-5
            border-t
            border-gray-100
            dark:border-gray-800
            flex
            items-center
            gap-2
          "
        >
          <Star
            size={15}
            className="text-amber-400 fill-amber-400 shrink-0"
          />

          <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
            {p.rating}
          </span>

          <span className="text-[10px] text-gray-400 dark:text-gray-500">
            · {p.reviews}
          </span>
        </motion.div>
      </motion.div>

{/* =========================
    Discount Card
========================== */}
<motion.div
  initial={{
    opacity: 0,
    y: -25,
    x: 15,
    rotate: 10,
  }}
  animate={{
    opacity: 1,
    y: 0,
    x: 0,
    rotate: 7,
  }}
  transition={{
    duration: 0.85,
    delay: 0.25,
    ease: EASE,
  }}
  className="
    absolute
    -top-2
    right-[-2%]
    sm:right-[0]
    z-30
    w-[165px]
    sm:w-[180px]
  "
>
  {/* Floating layer */}
  <motion.div
    animate={shouldFloat ? { y: [0, -8, 0] } : { y: 0 }}
    transition={
      shouldFloat
        ? { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        : { duration: 0.3 }
    }
    whileHover={{
      rotate: -2,
      scale: 1.02,
    }}
    className="
      bg-brand-gradient
      rounded-[1.5rem]
      p-4
      sm:p-5
      text-white
      shadow-[0_20px_50px_rgba(16,185,129,0.30)]
      cursor-default
    "
  >
    {/* Icon */}
    <div
      className="
        w-9
        h-9
        bg-white/25
        rounded-xl
        flex
        items-center
        justify-center
        mb-4
      "
    >
      <Percent size={18} strokeWidth={2.5} />
    </div>

    {/* Exclusive */}
    <p className="text-[10px] sm:text-[11px] font-medium opacity-75 mb-1">
      {p.exclusive}
    </p>

    {/* Discount title */}
    <p className="text-sm font-bold leading-tight mb-3">
      {p.discounts}
    </p>

    {/* Percentage */}
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.5,
        delay: 0.85,
        ease: EASE,
      }}
      className="
        text-[2.1rem]
        sm:text-[2.25rem]
        font-black
        leading-none
      "
    >
      60%
    </motion.div>

    {/* Valid */}
    <p className="text-[10px] sm:text-[11px] opacity-75 mt-2">
      {p.validAt}
    </p>
  </motion.div>
</motion.div>

      {/* =========================
          Verified Badge
      ========================== */}
      <motion.div
        initial={{
          opacity: 0,
          x: -20,
          y: -15,
          scale: 0.94,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.7,
          delay: 1,
          ease: EASE,
        }}
        className="
          absolute
          left-[1%]
          sm:left-[-17%]
          bottom-14
          z-40
          bg-white
          dark:bg-gray-900
          rounded-2xl
          shadow-[0_15px_40px_rgba(15,23,42,0.14)]
          dark:shadow-[0_15px_40px_rgba(0,0,0,0.35)]
          px-3
          py-2.5
          flex
          items-center
          gap-2.5
          border
          border-gray-100
          dark:border-gray-800
        "
      >
        <div
          className="
            w-9
            h-9
            bg-green-100
            dark:bg-green-900/40
            rounded-xl
            flex
            items-center
            justify-center
          "
        >
          <BadgeCheck
            size={17}
            className="text-green-600 dark:text-green-400"
            strokeWidth={2.25}
          />
        </div>

        <div>
          <div className="text-xs font-bold text-gray-800 dark:text-gray-100">
            {p.verified}
          </div>

          <div className="text-[10px] text-gray-500 dark:text-gray-400">
            {p.providers}
          </div>
        </div>
      </motion.div>

    </div>
  )
}