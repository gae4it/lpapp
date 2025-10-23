# LpApp - Landing Page Builder

A modern, modular landing page builder built with Next.js, TypeScript, and the T3 Stack.

## 🚀 Overview

LpApp is a production-ready landing page builder that combines the power of modern web technologies with a headless CMS approach. Build beautiful, performant landing pages with reusable components and manage content seamlessly through Prismic CMS.

## ✨ Features

- **🎨 Modern Design System**: Built with shadcn/ui and TailwindCSS
- **📱 Fully Responsive**: Mobile-first design approach
- **⚡ Performance Optimized**: Next.js 15+ with App Router and Server Components
- **🔒 Type Safe**: Full TypeScript support with tRPC for API routes
- **📝 CMS Integration**: Headless content management with Prismic
- **📚 Component Library**: Documented components with Storybook
- **🌙 Dark Mode**: Built-in light/dark theme support
- **🔐 Authentication**: NextAuth.js integration ready
- **📊 Database**: Prisma ORM with PostgreSQL/SQLite support
- **🚀 Production Ready**: Optimized for Vercel deployment

## 🛠️ Tech Stack

### Core Framework
- **Next.js 15+** - React framework with App Router
- **TypeScript 5+** - Type-safe development
- **TailwindCSS 3+** - Utility-first CSS framework

### T3 Stack
- **Prisma** - Database ORM and schema management
- **tRPC v11** - End-to-end type-safe APIs
- **NextAuth.js v5** - Authentication solution

### UI & Components
- **shadcn/ui v2** - Re-usable component library
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Hook Form + Zod** - Form handling and validation

### Content Management
- **Prismic CMS** - Headless CMS with Slice Machine
- **@prismicio/client** - TypeScript SDK for Prismic

### Development Tools
- **Storybook 8+** - Component documentation and testing
- **ESLint + Prettier** - Code formatting and linting
- **Husky** - Git hooks for code quality

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Header/Footer
│   ├── page.tsx           # Home page (component showcase)
│   └── [slug]/            # Dynamic landing pages
├── components/
│   ├── layout/            # Header, Footer, Container
│   ├── ui/                # shadcn/ui components
│   └── sections/          # Landing page sections
├── lib/
│   ├── prismic/           # CMS client and utilities
│   ├── utils.ts           # Utility functions
│   └── validations.ts     # Zod schemas
├── mocks/                 # Mock data for Storybook
├── styles/                # Global styles and Tailwind config
└── types/                 # TypeScript type definitions
```

## 🧱 Available Sections

All sections are fully responsive, type-safe, and documented in Storybook:

1. **HeroSection** - Eye-catching hero with CTA
2. **TrustLogosSection** - Social proof with client logos
3. **ThreeCardsSection** - Feature highlights in card format
4. **ImageLeftTextRightSection** - Content with left-aligned image
5. **ImageRightTextLeftSection** - Content with right-aligned image
6. **FaqSection** - Collapsible FAQ with shadcn/ui Accordion
7. **TestimonialsSection** - Customer testimonials carousel
8. **PricingSection** - Pricing tiers with feature comparison
9. **CtaSection** - Call-to-action section
10. **FooterSection** - Site footer with links and branding
11. **Header** - Navigation header with responsive menu

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm
- PostgreSQL (for production) or SQLite (for development)

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd lpapp
npm install
```

2. **Set up environment variables:**
```bash
cp .env.example .env
# Fill in your Prismic, database, and NextAuth credentials
```

3. **Set up the database:**
```bash
npx prisma migrate dev
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Launch Storybook (optional):**
```bash
npm run storybook
```

### Environment Variables

```bash
# Database
DATABASE_URL="your-database-connection-string"

# Prismic CMS
PRISMIC_ACCESS_TOKEN="your-prismic-access-token"
NEXT_PUBLIC_PRISMIC_ENVIRONMENT="your-prismic-repo-name"

# NextAuth
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Additional provider configs as needed
```

## 📝 Usage

### Creating Landing Pages

1. **Define content in Prismic CMS** using the predefined slices
2. **Create dynamic routes** in `app/[slug]/page.tsx`
3. **Fetch and render** content using the Prismic client

### Adding New Sections

1. **Create component** in `src/components/sections/`
2. **Add TypeScript types** for props
3. **Create Storybook story** with mock data
4. **Add to Prismic** as a new slice type

### Customizing Design

1. **Modify Tailwind config** for brand colors and typography
2. **Update shadcn/ui theme** in `src/styles/globals.css`
3. **Create custom components** following the established patterns

## 📚 Documentation

- **Storybook**: Interactive component documentation
- **Prismic**: Content modeling and API documentation
- **shadcn/ui**: Component library documentation

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push to main

### Key Features for Production:
- **ISR (Incremental Static Regeneration)** for CMS content
- **Image optimization** with Next.js Image component
- **SEO optimization** with metadata API
- **Performance monitoring** with Vercel Analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [T3 Stack](https://create.t3.gg/) for the amazing foundation
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Prismic](https://prismic.io/) for the powerful headless CMS
- [Vercel](https://vercel.com/) for seamless deployment