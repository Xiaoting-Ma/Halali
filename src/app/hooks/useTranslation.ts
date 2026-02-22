import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations } from '@/app/i18n/translations';

export function useTranslation() {
  const { currentLanguage } = useLanguage();

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[currentLanguage.code as keyof typeof translations];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Fallback to English if translation is missing
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey];
          } else {
            console.warn(`Translation missing for key: ${key} in language: ${currentLanguage.code}`);
            return key; // Return the key itself if translation is missing
          }
        }
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return { t, currentLanguage };
}
