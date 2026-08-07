// components/SmartDownloadButton.jsx
import { useEffect, useRef, useState } from 'react'
import { useSmartDownload } from '../hooks/useSmartDownload'
import googlePlay from "../assets/google-play.svg";
import appleStoreDark from "../assets/apple-store-black.svg";

// ── SVG icons (no extra deps) ──────────────────────────────────────────────

function GooglePlayIcon() {
  return (
    <img src={googlePlay} alt="Google Play" className="w-8 h-8 shrink-0" />
  )
}

function AppleIcon() {
  return (
    <img src={appleStoreDark} alt="App Store" className="w-8 h-8 shrink-0" />
  )
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M18 6L6 18M6 6l12 12"/>
    </svg>
  )
}

// ── Desktop modal ──────────────────────────────────────────────────────────

function DesktopDropdown({ storeLinks, onClose }) {
  const dropdownRef = useRef(null)
 
  // Close on Escape
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
 
  // Close on outside click
  useEffect(() => {
    const onOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        onClose()
      }
    }
    // Delay by one tick so the button's own click doesn't immediately close it
    const id = setTimeout(() => document.addEventListener('mousedown', onOutside), 0)
    return () => {
      clearTimeout(id)
      document.removeEventListener('mousedown', onOutside)
    }
  }, [onClose])
 
  return (
    <div
      ref={dropdownRef}
      role="menu"
      aria-label="Choose your store"
      className="
        absolute right-0 top-[calc(100%+8px)] z-50
        w-56 bg-white dark:bg-gray-900 rounded-2xl
        shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.5)]
        border border-gray-100 dark:border-gray-800
        overflow-hidden
        origin-top-right
        animate-dropdown
      "
    >
      {/* tiny caret */}
      <div className="absolute -top-1.5 right-5 w-3 h-3 bg-white dark:bg-gray-900 border-l border-t border-gray-100 dark:border-gray-800 rotate-45" />
 
      <div className="p-1.5 flex flex-col gap-0.5">
        <a
          href={storeLinks.android}
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
          onClick={onClose}
          className="
            flex items-center gap-3 px-3 py-2.5 rounded-xl
            text-gray-700 dark:text-gray-200 text-sm font-medium
            hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:text-brand-700 dark:hover:text-brand-400
            transition-colors duration-150
            group
          "
        >
          <GooglePlayIcon />
          <div className="leading-tight">
            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide group-hover:text-brand-400">
              Get it on
            </p>
            <p className="font-semibold">Google Play</p>
          </div>
        </a>
 
        <a
          href={storeLinks.ios}
          target="_blank"
          rel="noopener noreferrer"
          role="menuitem"
          onClick={onClose}
          className="
            flex items-center gap-3 px-3 py-2.5 rounded-xl
            text-gray-700 dark:text-gray-200 text-sm font-medium
            hover:bg-brand-50 dark:hover:bg-brand-500/10 hover:text-brand-700 dark:hover:text-brand-400
            transition-colors duration-150
            group
          "
        >
          <AppleIcon />
          <div className="leading-tight">
            <p className="text-[10px] text-gray-400 dark:text-gray-500 font-medium uppercase tracking-wide group-hover:text-brand-400">
              Download on the
            </p>
            <p className="font-semibold">App Store</p>
          </div>
        </a>
      </div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────

/**
 * SmartDownloadButton
 *
 * Props:
 *   className  – override / extend Tailwind classes on the button
 *   children   – button label (default: "Download App")
 *   variant    – "primary" (green gradient) | "outline" | "plain"
 */
export default function SmartDownloadButton({
  className = '',
  children,
  variant = 'primary',
}) {
  const { device, handleDownload, storeLinks } = useSmartDownload()
  // Start closed — only a real user click should open it
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
 
  const label = children ?? 'Download App'
 
  const baseClass = {
    primary:
      'inline-flex items-center gap-2 bg-brand-gradient text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-brand hover:shadow-lg hover:scale-[1.02] transition-all duration-200',
    outline:
      'inline-flex items-center gap-2 border-2 border-brand-600 dark:border-brand-500 text-brand-600 dark:text-brand-400 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-brand-50 dark:hover:bg-brand-500/10 transition-all duration-200',
    plain:
      'inline-flex items-center gap-2 text-brand-600 text-sm font-semibold hover:underline transition-all duration-200',
  }[variant]
 
  // Outside-click lives here on the container, not inside the dropdown.
  // This avoids the setTimeout race entirely — the ref is always mounted
  // before any click can propagate to document.
useEffect(() => {
    if (!open) return
    const onOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', onOutside)
    return () => document.removeEventListener('mousedown', onOutside)
  }, [open])
 
  
  function onClick() {
    if (device === 'desktop') {
      setOpen((prev) => !prev)
    } else {
      handleDownload()
    }
  }
 
  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={onClick}
        aria-haspopup="menu"
        aria-expanded={open}
        className={`${baseClass} ${className}`}
      >
        {label}
      </button>
 
      {open && (
        <DesktopDropdown
          storeLinks={storeLinks}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  )
}