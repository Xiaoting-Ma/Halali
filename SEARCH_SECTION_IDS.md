# Section IDs for Search Navigation

此文件记录了各个页面中section ID的映射关系，用于搜索功能的页面内滚动定位。

## 已添加的 Section IDs

### HomePage (/src/app/components/HomePage.tsx)
- ✅ `id="what-we-do"` - What Halali Does section
- ✅ `id="why-halali"` - Why Halali section
- ✅ `id="downloads"` - Downloads section

### 需要添加的 Section IDs

#### MerchantsPage (/src/app/components/MerchantsPage.tsx)
- `id="onboarding"` - Onboarding Process section
- `id="eligibility"` - Eligibility Requirements section
- `id="why-halali"` - Why Halali section
- `id="form"` - Expression of Interest Form section

#### RidersPage (/src/app/components/RidersPage.tsx)
- `id="working-models"` - Working Models section
- `id="why-ride"` - Why Ride with Halali section
- `id="application-form"` - Application Form section

#### AboutPage (/src/app/components/AboutPage.tsx)
- `id="who-we-are"` - Who We Are section
- `id="vision"` - Our Vision section
- `id="values"` - Our Values section
- `id="verification"` - Halali's Verification Process section
- `id="security"` - Data Security & Privacy section

#### BusinessPage (/src/app/components/BusinessPage.tsx)
- `id="partnerships"` - Business Partnerships section

#### CareersPage (/src/app/components/CareersPage.tsx)
- `id="open-positions"` - Open Positions section
- `id="why-join"` - Why Join Halali section

#### ContactPage (/src/app/components/ContactPage.tsx)
- `id="how-can-we-help"` - How Can We Help section

## 通用规则

1. 所有section元素都应该添加 `scroll-mt-20` class用于固定header的偏移
2. section ID 使用小写字母和连字符（kebab-case）
3. ID 应该语义化，与section内容相关

## 示例代码

```tsx
{/* Section Title */}
<section id="section-name" className="py-12 md:py-16 bg-white scroll-mt-20">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```
