# Halali 多语言翻译指南

## 概述
本项目使用自定义的翻译系统来支持12种语言。所有翻译内容都集中管理，方便维护和扩展。

## 文件结构

```
/src/app/
  ├── i18n/
  │   └── translations.ts          # 所有翻译内容
  ├── contexts/
  │   └── LanguageContext.tsx      # 语言状态管理
  ├── hooks/
  │   └── useTranslation.ts        # 翻译Hook
  └── components/
      └── LanguageSwitcher.tsx     # 语言切换组件
```

## 如何添加新的翻译内容

### 1. 在 `/src/app/i18n/translations.ts` 中添加翻译键值

```typescript
export const translations = {
  en: {
    // 已有的翻译...
    header: { ... },
    footer: { ... },
    
    // 添加新页面的翻译
    merchants: {
      heroTitle: 'Join Halali as a Merchant',
      heroSubtitle: 'Grow your halal business',
      registerButton: 'Register Now',
      // ... 更多翻译
    },
  },
  
  ar: {
    // 阿拉伯语翻译
    merchants: {
      heroTitle: 'انضم إلى Halali كتاجر',
      heroSubtitle: 'قم بتنمية عملك الحلال',
      registerButton: 'سجل الآن',
    },
  },
  
  // 其他语言...
  zh: {
    merchants: {
      heroTitle: '成为Halali商家',
      heroSubtitle: '发展您的清真业务',
      registerButton: '立即注册',
    },
  },
};
```

### 2. 在组件中使用翻译

```typescript
import { useTranslation } from '@/app/hooks/useTranslation';

export function MerchantsPage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('merchants.heroTitle')}</h1>
      <p>{t('merchants.heroSubtitle')}</p>
      <button>{t('merchants.registerButton')}</button>
    </div>
  );
}
```

## 翻译键的命名规范

使用点号分隔的层级结构：
- `page.section.element`
- 例如：`home.hero.title`、`merchants.features.card1Title`

## 支持的语言列表

| 代码 | 语言 | 本地名称 |
|------|------|----------|
| en | English | English |
| ar | Arabic | العربية |
| tr | Turkish | Türkçe |
| id | Indonesian | Bahasa Indonesia |
| ms | Malay | Bahasa Melayu |
| ur | Urdu | اردو |
| de | German | Deutsch |
| fr | French | Français |
| nl | Dutch | Nederlands |
| es | Spanish | Español |
| it | Italian | Italiano |
| zh | Chinese | 中文 |

## RTL（从右到左）语言支持

系统自动为阿拉伯语（ar）和乌尔都语（ur）设置RTL布局方向。

## 示例：更新一个完整页面

假设要翻译 `HomePage.tsx`：

### 步骤 1: 在 translations.ts 中添加所有文本

```typescript
// /src/app/i18n/translations.ts
export const translations = {
  en: {
    home: {
      heroTitle: 'Make Halal Easy',
      heroSubtitle: "The world's first Halal-Only delivery platform",
      heroDescription: 'From dining to daily life—eat better, live better.',
      orderNow: 'Order Now',
      learnMore: 'Learn More',
      featuresTitle: 'Why Choose Halali',
      feature1Title: '100% Halal Guaranteed',
      feature1Description: 'All restaurants and products are verified halal',
      // ... 添加页面上所有文本
    },
  },
  ar: {
    home: {
      heroTitle: 'اجعل الحلال سهلاً',
      heroSubtitle: 'أول منصة توصيل حلال فقط في العالم',
      // ... 所有阿拉伯语翻译
    },
  },
  // ... 其他语言
};
```

### 步骤 2: 在组件中使用

```typescript
import { useTranslation } from '@/app/hooks/useTranslation';

export function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <section>
        <h1>{t('home.heroTitle')}</h1>
        <h2>{t('home.heroSubtitle')}</h2>
        <p>{t('home.heroDescription')}</p>
        <button>{t('home.orderNow')}</button>
        <button>{t('home.learnMore')}</button>
      </section>
      
      <section>
        <h2>{t('home.featuresTitle')}</h2>
        <div>
          <h3>{t('home.feature1Title')}</h3>
          <p>{t('home.feature1Description')}</p>
        </div>
      </section>
    </div>
  );
}
```

## 已完成翻译的组件

- ✅ Header（所有导航菜单）
- ✅ Footer（所有链接和信息）
- ✅ HomePage（部分示例）

## 待翻译的页面

需要在 `translations.ts` 中添加以下页面的翻译内容：

1. **MerchantsPage** - 商家入驻页面
2. **RidersPage** - 骑手页面
3. **BusinessPage** - 商业合作页面
4. **AboutPage** - 关于我们页面
5. **CareersPage** - 招聘页面
6. **ContactPage** - 联系我们页面

## 最佳实践

1. **保持翻译键的一致性** - 使用清晰的命名
2. **为每个页面创建独立的翻译对象** - 便于管理
3. **始终提供英语翻译** - 作为默认回退语言
4. **测试RTL语言** - 确保阿拉伯语和乌尔都语显示正确
5. **避免硬编码文本** - 所有用户可见的文本都应该使用翻译

## 注意事项

- 如果某个语言的翻译缺失，系统会自动回退到英语
- 翻译会保存在浏览器的localStorage中，页面刷新后保持选择
- 可以在浏览器控制台看到缺失翻译的警告信息
