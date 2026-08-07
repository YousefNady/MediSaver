import { Building2, FlaskConical, Radiation, Pill, Stethoscope, Package } from 'lucide-react'

/**
 * Single source of truth for the 6 category detail pages (/categories/:slug).
 *
 * IMPORTANT: these slugs must exactly match:
 *   1. the keys under `categoryPages` in src/i18n/locales/en.js and ar.js
 *   2. the order of `footer.categoriesList` in en.js / ar.js
 *      (Footer.jsx pairs CATEGORY_SLUGS[i] with categoriesList[i] by index)
 *   3. the order of `home.about.categories` / `about.services.categories`
 *      for the first 5 entries (Packages has no card there, only in the footer)
 */
export const CATEGORY_SLUGS = [
  'hospitals',
  'labs',
  'radiology',
  'pharmacies',
  'clinics',
  'packages',
]

// Icon + color per slug — used by CategoryDetail.jsx (the dynamic page).
// Keyed by slug (not index) since Packages doesn't sit in the same
// index-based arrays used by Home.jsx / About.jsx (see serviceCategories.js).
export const categoryIcons = {
  hospitals: Building2,
  labs: FlaskConical,
  radiology: Radiation,
  pharmacies: Pill,
  clinics: Stethoscope,
  packages: Package,
}

export const categoryColors = {
  hospitals: 'bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400',
  labs: 'bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400',
  radiology: 'bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400',
  pharmacies: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400',
  clinics: 'bg-teal-50 text-teal-600 dark:bg-teal-500/10 dark:text-teal-400',
  packages: 'bg-rose-50 text-rose-600 dark:bg-rose-500/10 dark:text-rose-400',
}
