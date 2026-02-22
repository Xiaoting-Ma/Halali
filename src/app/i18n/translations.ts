// Translation system with automatic English fallback
// Import all language files
import { en } from './locales/en';
import { zh } from './locales/zh';
import { ar } from './locales/ar';
import { tr } from './locales/tr';
import { id } from './locales/id';
import { ms } from './locales/ms';
import { ur } from './locales/ur';
import { de } from './locales/de';
import { fr } from './locales/fr';
import { nl } from './locales/nl';
import { es } from './locales/es';
import { it } from './locales/it';
import { SupportedLanguage, TranslationKeys } from './types';

// Deep merge function to combine translations with English fallback
function deepMerge<T extends Record<string, any>>(
  base: T,
  override: Partial<T>
): T {
  const result = { ...base };

  for (const key in override) {
    const overrideValue = override[key];
    const baseValue = base[key];

    if (
      overrideValue &&
      typeof overrideValue === 'object' &&
      !Array.isArray(overrideValue) &&
      baseValue &&
      typeof baseValue === 'object' &&
      !Array.isArray(baseValue)
    ) {
      // Recursively merge nested objects
      result[key] = deepMerge(baseValue, overrideValue) as T[Extract<keyof T, string>];
    } else if (overrideValue !== undefined) {
      // Override with the new value if it exists
      result[key] = overrideValue as T[Extract<keyof T, string>];
    }
  }

  return result;
}

// Create complete translations with English fallback for each language
const translations: Record<SupportedLanguage, TranslationKeys> = {
  en: en,
  zh: deepMerge(en, zh),
  ar: deepMerge(en, ar),
  tr: deepMerge(en, tr),
  id: deepMerge(en, id),
  ms: deepMerge(en, ms),
  ur: deepMerge(en, ur),
  de: deepMerge(en, de),
  fr: deepMerge(en, fr),
  nl: deepMerge(en, nl),
  es: deepMerge(en, es),
  it: deepMerge(en, it),
};

export { translations };
export type { SupportedLanguage, TranslationKeys };
