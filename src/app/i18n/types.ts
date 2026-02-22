// Type definitions for translations
import { en } from './locales/en';

// Infer the translation structure from English (base language)
export type TranslationKeys = typeof en;

// Define supported languages
export type SupportedLanguage = 'en' | 'zh' | 'ar' | 'tr' | 'id' | 'ms' | 'ur' | 'de' | 'fr' | 'nl' | 'es' | 'it';

// Partial translations for other languages (fallback to English)
export type PartialTranslations = Partial<TranslationKeys>;
