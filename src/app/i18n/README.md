# 🌍 Translation System

## File Structure

```
/src/app/i18n/
├── translations.ts          # Main entry file with fallback logic
├── types.ts                 # TypeScript type definitions
├── locales/
│   ├── en.ts               # ✅ English (base language - complete)
│   ├── zh.ts               # 🔄 Chinese (TODO)
│   ├── ar.ts               # 🔄 Arabic (TODO)
│   ├── tr.ts               # 🔄 Turkish (TODO)
│   ├── id.ts               # 🔄 Indonesian (TODO)
│   ├── ms.ts               # 🔄 Malay (TODO)
│   ├── ur.ts               # 🔄 Urdu (TODO)
│   ├── de.ts               # 🔄 German (TODO)
│   ├── fr.ts               # 🔄 French (TODO)
│   ├── nl.ts               # 🔄 Dutch (TODO)
│   ├── es.ts               # 🔄 Spanish (TODO)
│   └── it.ts               # 🔄 Italian (TODO)
└── README.md               # This file
```

## How It Works

### ✅ Automatic English Fallback

- English (`en.ts`) is the **base language** with complete translations
- All other language files return empty objects (`{}`) by default
- The system automatically uses English text when a translation is missing
- **No errors** if translations are incomplete!

### 📝 Adding Translations

To add translations for a language (e.g., Chinese):

1. Open `/src/app/i18n/locales/zh.ts`
2. Add your translations:

```typescript
import { PartialTranslations } from '../types';

export const zh: PartialTranslations = {
  header: {
    home: '首页',
    merchants: '商家',
    riders: '骑手',
    // ... more translations
  },
  home: {
    heroTitle: "全球第一",
    downloadApp: '下载应用',
    // ... more translations
  },
  // ... other sections
};
```

3. **That's it!** The system will:
   - Use your Chinese translations where available
   - Automatically fallback to English for missing keys
   - No need to update any other files

### 🔑 Translation Keys Structure

All translations follow this structure:

```
header.*          # Header navigation
footer.*          # Footer content
home.*            # Home page
merchants.*       # Merchants page
riders.*          # Riders page
business.*        # Business page
about.*           # About page
careers.*         # Careers page
contact.*         # Contact page
common.*          # Common UI elements
```

See `/src/app/i18n/locales/en.ts` for the complete key reference.

### 💡 Usage in Components

```typescript
import { useTranslation } from '@/app/hooks/useTranslation';

function MyComponent() {
  const { t } = useTranslation();
  
  return <h1>{t('home.heroTitle')}</h1>;
}
```

## Translation Workflow

### For Individual Translators

1. Get the `en.ts` file (English reference)
2. Open your language file (e.g., `zh.ts`, `ar.ts`)
3. Translate the values (keep the keys in English)
4. Submit your file

### For Project Managers

1. Send `en.ts` to translators
2. Receive translated files
3. Replace the empty language files with completed translations
4. Test by switching language in the app

## Benefits

✅ **No Breaking Changes**: Missing translations show English instead of errors  
✅ **Independent Work**: Each translator works on their own file  
✅ **Type Safety**: TypeScript ensures all keys are valid  
✅ **Easy Maintenance**: Update one language without touching others  
✅ **Git-Friendly**: Small, focused file changes reduce merge conflicts  

## Translation Progress

| Language | Code | Status | Progress |
|----------|------|--------|----------|
| English  | en   | ✅ Complete | 100% |
| Chinese  | zh   | ✅ Complete | 100% |
| Arabic   | ar   | ✅ Complete | 100% |
| Turkish  | tr   | ✅ Complete | 100% |
| Indonesian | id | ✅ Complete | 100% |
| Malay    | ms   | ✅ Complete | 100% |
| Urdu     | ur   | ✅ Complete | 100% |
| German   | de   | ✅ Complete | 100% |
| French   | fr   | ✅ Complete | 100% |
| Dutch    | nl   | ✅ Complete | 100% |
| Spanish  | es   | ✅ Complete | 100% |
| Italian  | it   | ✅ Complete | 100% |

---

**Need help?** Check the English file for examples and key structure.
