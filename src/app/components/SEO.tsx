import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  canonical?: string;
  ogImage?: string;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage,
}: SEOProps) {
  const siteUrl = "https://halali.com"; // 将来替换为实际域名
  const defaultImage = `${siteUrl}/og-image.png`; // 默认OG图片
  const pageUrl = canonical
    ? `${siteUrl}${canonical}`
    : siteUrl;
  const image = ogImage || defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Halali" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Halali" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}