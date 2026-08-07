/**
 * MediSaver mark — an original design (replaces the reused client logo).
 * Concept: a medical cross (healthcare) paired with a percent glyph
 * (savings) as a small overlapping badge, on the brand's green→teal
 * gradient. Square viewBox so it doubles as the favicon.
 */
export default function Logo({ className = "h-8 w-auto" }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Badge background */}
      <rect x="1" y="1" width="38" height="38" rx="11" fill="url(#logo_bg)" />

      {/* Medical cross */}
      <rect x="12" y="6" width="6" height="18" rx="2" fill="white" />
      <rect x="6" y="12" width="18" height="6" rx="2" fill="white" />

      {/* Savings badge (percent glyph) */}
      <circle cx="30" cy="30" r="8.5" fill="url(#logo_bg)" stroke="white" strokeWidth="2" />
      <circle cx="30" cy="30" r="7" fill="white" />
      <circle cx="27.4" cy="27.4" r="1.35" fill="url(#logo_badge)" />
      <circle cx="32.6" cy="32.6" r="1.35" fill="url(#logo_badge)" />
      <path d="M27 33l6-6" stroke="url(#logo_badge)" strokeWidth="1.6" strokeLinecap="round" />

      <defs>
        <linearGradient id="logo_bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#00AFA4" />
        </linearGradient>
        <linearGradient id="logo_badge" x1="24" y1="24" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#15803d" />
          <stop offset="1" stopColor="#009990" />
        </linearGradient>
      </defs>
    </svg>
  )
}
