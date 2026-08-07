import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * CountUp
 * ────────
 * Animates a numeric stat from 0 up to its target value once it scrolls
 * into view. Understands the mixed string formats used across the site —
 * "200+", "50K+", "4.8★", "30%", "+200" (Arabic/RTL), "★4.8" — by pulling
 * the number out from wherever it sits and keeping the prefix/suffix
 * symbols exactly where they were, then animating only the number.
 *
 * Falls back to rendering the raw string as-is if no number is found.
 */
function parseValue(raw) {
  const str = String(raw).trim()
  const match = str.match(/^(\D*)([\d,]*\.?\d+)(\D*)$/)
  if (!match) return { number: null, prefix: '', suffix: str, decimals: 0 }
  const [, prefix, numStr, suffix] = match
  const cleaned = numStr.replace(/,/g, '')
  const decimals = cleaned.includes('.') ? cleaned.split('.')[1].length : 0
  return { number: parseFloat(cleaned), prefix, suffix, decimals }
}

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export default function CountUp({ value, duration = 1.5, className = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const [display, setDisplay] = useState(0)
  const { number, prefix, suffix, decimals } = parseValue(value)

  useEffect(() => {
    if (!isInView || number === null) return
    let frame
    let start = null

    const tick = (timestamp) => {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / (duration * 1000), 1)
      setDisplay(number * easeOutCubic(progress))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(number)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, number, duration])

  if (number === null) {
    return (
      <span ref={ref} className={className}>
        {suffix}
      </span>
    )
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}
