import en from "./locales/en.js";
import ar from "./locales/ar.js";

// Registry of all supported languages.
// To add a new language: import its locale file, add it here.
export const LANGUAGES = {
  en: { code: "en", label: "EN", nativeLabel: "English", dir: "ltr" },
  ar: { code: "ar", label: "ع", nativeLabel: "العربية", dir: "rtl" },
};

export const DEFAULT_LANGUAGE = "en";
export const STORAGE_KEY = "medisaver_lang";

export const translations = { en, ar };

/**
 * Safely reads a nested key from a translation object.
 * Supports dot-notation: t('nav.home')
 */
export function getTranslation(translations, lang, key) {
  const locale = translations[lang] || translations[DEFAULT_LANGUAGE];
  if (!key) return locale;
  const readPath = (source) =>
    key
      .split(".")
      .reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : undefined), source);

  const value = readPath(locale);
  if (value !== undefined) return value;

  const fallbackValue = readPath(translations[DEFAULT_LANGUAGE]);
  return fallbackValue !== undefined ? fallbackValue : key;
}
