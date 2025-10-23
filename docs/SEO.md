# SEO Documentation

## Overview
This project implements comprehensive SEO optimization including metadata, Open Graph, Twitter Cards, structured data (JSON-LD), and search engine discoverability features.

## Features

### 1. Metadata System
Every page has type-safe SEO metadata managed through CMS files.

#### File Structure
```
src/cms/
├── home/seo.ts
├── agency/seo.ts
├── saas/seo.ts
└── ecommerce/seo.ts
```

#### Example SEO Data
```typescript
// src/cms/home/seo.ts
import type { SeoProps } from '@/types/seo'

export const seo: SeoProps = {
  title: 'LpApp - Professional Landing Page Builder',
  description: 'Create stunning landing pages with our reusable component library',
  keywords: ['landing page', 'builder', 'components', 'Next.js'],
  canonical: 'https://lpapp.example.com',
  
  og: {
    title: 'LpApp - Build Landing Pages Fast',
    description: 'Professional components for your next project',
    image: 'https://lpapp.example.com/og-image.png',
    type: 'website',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'LpApp - Landing Page Builder',
    description: 'Professional components for your next project',
    image: 'https://lpapp.example.com/twitter-image.png',
  },
}
```

#### Usage in Pages
```typescript
// src/app/page.tsx
import { generateSeoMetadata } from '@/lib/seo'
import { seo } from '@/cms/home/seo'

export const metadata = generateSeoMetadata(seo)
```

### 2. Structured Data (JSON-LD)
Schema.org markup for rich search results.

#### Organization Schema
```tsx
import { OrganizationStructuredData } from '@/components/seo/StructuredData'

<OrganizationStructuredData
  name="Your Company"
  description="Company description"
  url="https://example.com"
  logo="https://example.com/logo.png"
  sameAs={[
    'https://twitter.com/company',
    'https://linkedin.com/company/company'
  ]}
/>
```

#### Available Schema Types
- **Organization**: Company/brand information
- **Product**: Product details with offers
- **Article**: Blog posts and articles
- **WebPage**: General page markup

### 3. Sitemap
Dynamic XML sitemap generation.

**File**: `src/app/sitemap.ts`

**Features**:
- Automatically includes all pages
- Priority levels for different page types
- Change frequency hints
- Uses `NEXT_PUBLIC_SITE_URL` env variable

**Access**: `https://yoursite.com/sitemap.xml`

### 4. Robots.txt
Controls search engine crawling.

**File**: `src/app/robots.ts`

**Configuration**:
```typescript
{
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: ['/api/', '/_next/', '/admin/'],
  },
  sitemap: 'https://yoursite.com/sitemap.xml',
}
```

**Access**: `https://yoursite.com/robots.txt`

## Environment Variables

### Required
```env
# .env.local
NEXT_PUBLIC_SITE_URL=https://yoursite.com
```

Used for:
- Canonical URLs
- Sitemap generation
- Open Graph URLs
- Structured data

## SEO Checklist

### On-Page SEO
- [x] Unique title tags (50-60 characters)
- [x] Meta descriptions (150-160 characters)
- [x] Canonical URLs to prevent duplicates
- [x] Semantic heading hierarchy (h1 → h2 → h3)
- [x] Image alt attributes
- [x] Internal linking structure

### Social Sharing
- [x] Open Graph tags (Facebook, LinkedIn)
- [x] Twitter Card metadata
- [x] Social preview images (1200x630px recommended)

### Technical SEO
- [x] XML sitemap
- [x] Robots.txt
- [x] Structured data (JSON-LD)
- [x] Mobile-responsive design
- [x] Fast loading times (Next.js Image optimization)
- [x] HTTPS (handle in deployment)

### Search Engine Discovery
- [x] Sitemap submitted to Google Search Console
- [ ] Bing Webmaster Tools setup
- [ ] Google Analytics/Tag Manager
- [ ] Schema.org validation

## Type Safety

### SeoProps Type
```typescript
export interface SeoProps {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  
  og?: {
    title?: string
    description?: string
    image?: string
    type?: 'website' | 'article' | 'product'
  }
  
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    title?: string
    description?: string
    image?: string
  }
}
```

## Testing

### Preview Tools
- **Open Graph**: [OpenGraph.xyz](https://www.opengraph.xyz/)
- **Twitter Card**: [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- **Rich Results**: [Google Rich Results Test](https://search.google.com/test/rich-results)
- **Schema Validator**: [Schema.org Validator](https://validator.schema.org/)

### Lighthouse Audit
```bash
npm run build
npm run start
# Run Lighthouse in Chrome DevTools
```

**Target Scores**:
- Performance: > 90
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## Best Practices

### Title Optimization
```typescript
// ✅ Good - descriptive, keyword-rich, proper length
title: 'Professional SaaS Landing Page Templates | LpApp'

// ❌ Bad - too short, generic
title: 'Home'
```

### Description Optimization
```typescript
// ✅ Good - compelling, includes keywords, call to action
description: 'Build high-converting SaaS landing pages in minutes with our professionally designed, customizable templates. Start free today.'

// ❌ Bad - too short, not compelling
description: 'Landing page builder'
```

### Image Optimization
```typescript
// ✅ Good - Next.js Image with proper sizing
<Image
  src="/hero.jpg"
  alt="Professional landing page builder interface"
  width={1200}
  height={630}
  priority
/>

// ❌ Bad - native img, no optimization
<img src="/hero.jpg" />
```

## Performance Tips

1. **Use Next.js Image Component**: Automatic optimization, lazy loading
2. **Minimize Client-Side JS**: Leverage static generation
3. **CDN for Static Assets**: Faster global delivery
4. **Enable Compression**: Gzip/Brotli on server
5. **Lazy Load Below-Fold**: Improve initial load time

## Resources
- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/docs/documents.html)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
