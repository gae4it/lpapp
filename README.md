# LpApp - Landing Page Builder

A modern landing page builder built with the [T3 Stack](https://create.t3.gg/) and a **simple TypeScript-based CMS**.

## ✨ Features

- 🎨 **11 Pre-built Sections** - Hero, Trust Logos, Features, Testimonials, Pricing, FAQ, CTA, and more
- 📝 **Simple CMS** - Type-safe content management with TypeScript files in `src/cms/`
- 🚀 **Next.js 15** - App Router, Server Components, and optimized builds
- 💎 **shadcn/ui** - Beautiful, accessible component library
- 🎯 **TypeScript** - Full type safety throughout
- 🎨 **TailwindCSS v4** - Modern utility-first CSS
- ⚡ **tRPC** - End-to-end type-safe APIs
- 🔐 **NextAuth.js** - Authentication ready
- 📦 **Prisma** - Type-safe database ORM

## 🚀 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   - Visit `http://localhost:3000`
   - View example pages at `/examples/saas`, `/examples/ecommerce`, `/examples/agency`

## 📝 Content Management

All content is managed through TypeScript files in `src/cms/`:

```typescript
// src/cms/hero.ts
export const heroMockData: Record<string, HeroSectionProps> = {
  default: {
    title: "Build Amazing Landing Pages",
    subtitle: "Create stunning pages...",
    ctaText: "Get Started Free",
    ctaHref: "/signup",
  },
};
```

**Benefits:**
- ✅ Type-safe with TypeScript
- ✅ Version controlled with Git
- ✅ No external dependencies
- ✅ Instant updates (no API calls)
- ✅ Easy to use and understand

See [src/cms/README.md](./src/cms/README.md) for full documentation.

## 📚 Documentation

- **[CMS Guide](./src/cms/README.md)** - How to manage content
- **[Component Library](http://localhost:3000)** - View all available sections
- **[Example Pages](http://localhost:3000/examples/saas)** - See pre-built landing pages

## 🎨 Tech Stack

- [Next.js 15](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [TailwindCSS v4](https://tailwindcss.com) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [tRPC](https://trpc.io) - Type-safe APIs
- [Prisma](https://prisma.io) - Database ORM
- [NextAuth.js](https://next-auth.js.org) - Authentication

## 🧩 Available Sections

All sections are fully customizable through Sanity Studio:

1. **Hero Section** - Eye-catching header with CTA buttons
2. **Trust Logos** - Display client/partner logos
3. **Three Cards** - Highlight key features or benefits
4. **Image + Text** - Showcase features with images (left or right layout)
5. **FAQ** - Collapsible questions and answers
6. **Testimonials** - Customer reviews and social proof
7. **Pricing** - Pricing plans with feature lists
8. **CTA Section** - Conversion-focused call-to-action

## 📁 Project Structure

```
lpapp/
├── src/
│   ├── app/
│   │   ├── [slug]/          # Dynamic landing pages from Sanity
│   │   ├── studio/          # Embedded Sanity Studio
│   │   └── examples/        # Demo landing pages
│   ├── components/
│   │   ├── sections/        # Reusable section components
│   │   ├── layout/          # Header & Footer
│   │   └── ui/              # shadcn/ui components
│   ├── sanity/
│   │   ├── schemas/         # Sanity content schemas
│   │   ├── client.ts        # Sanity client config
│   │   └── SectionRenderer.tsx
│   └── mocks/               # Example data
├── docs/                    # Documentation
└── sanity.config.ts         # Sanity Studio config
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables:
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```
4. Deploy!

Your Sanity Studio will be available at `your-domain.com/studio`

## 📖 Learn More

- [T3 Stack Documentation](https://create.t3.gg/)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Components](https://ui.shadcn.com/)
