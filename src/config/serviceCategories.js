import { Building2, FlaskConical, Radiation, Pill, Stethoscope } from 'lucide-react'

/**
 * Shared icon + color mapping for the five healthcare service categories
 * (Hospitals, Medical Labs, Radiology Centers, Pharmacies, Clinics).
 * Order must match the order of items in home.about.categories (en.js/ar.js)
 * and about.services.categories (en.js/ar.js).
 *
 * Centralized here so Home.jsx and About.jsx don't each redefine the same
 * mapping — add a category in one place and both pages stay in sync.
 */
export const categoryIcons = [Building2, FlaskConical, Radiation, Pill, Stethoscope]

export const categoryColors = [
  'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
  'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400',
  'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  'bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400',
]
