# CMS - Content Management

Questa cartella contiene tutti i contenuti/testi per le landing pages, **organizzati per pagina**.

## 📁 Struttura Cartelle

```
src/cms/
├── defaults/           # ← Contenuti di default riutilizzabili
│   ├── hero.ts
│   ├── pricing.ts
│   ├── testimonials.ts
│   ├── trustLogos.ts
│   └── layout.ts
├── agency/            # ← Contenuti pagina Agency
│   ├── hero.ts
│   ├── testimonials.ts
│   └── layout.ts
├── saas/              # ← Contenuti pagina SaaS  
│   ├── hero.ts
│   ├── pricing.ts
│   ├── testimonials.ts
│   └── layout.ts
├── ecommerce/         # ← Contenuti pagina E-commerce
│   ├── hero.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   └── layout.ts
└── README.md          # ← Questo file
```

## 🎯 Come Funziona

### Cartella `defaults/`
Contiene contenuti generici e riutilizzabili che puoi usare come punto di partenza per nuove pagine.

**Esempio:**
```typescript
// src/cms/defaults/hero.ts
import type { HeroSectionProps } from "@/types"

export const heroData: HeroSectionProps = {
  title: "Build Amazing Landing Pages",
  subtitle: "Create stunning, high-converting landing pages...",
  ctaText: "Get Started Free",
  ctaHref: "/signup",
}
```

### Cartelle Specifiche per Pagina
Ogni landing page ha la sua cartella (es. `agency/`, `saas/`, `ecommerce/`) con contenuti personalizzati.

**Esempio:**
```typescript
// src/cms/agency/hero.ts
import type { HeroSectionProps } from "@/types"

export const heroData: HeroSectionProps = {
  title: "Transform Your Vision Into Digital Reality",
  subtitle: "Award-winning creative agency...",
  ctaText: "View Our Work",
  ctaHref: "/portfolio",
}
```

## ✏️ Modificare i Contenuti

### 1. Modifica contenuti di una pagina esistente

Trova il file corrispondente e modificalo:

```typescript
// src/cms/saas/hero.ts
export const heroData: HeroSectionProps = {
  title: "Il Tuo Nuovo Titolo",          // ← Cambia questo
  subtitle: "Il tuo nuovo sottotitolo",  // ← Cambia questo
  ctaText: "Nuovo Testo Bottone",        // ← Cambia questo
  ctaHref: "/nuovo-link",                // ← Cambia questo
}
```

### 2. Creare una Nuova Landing Page

**Step 1:** Crea una nuova cartella in `src/cms/`
```
src/cms/startup/
```

**Step 2:** Copia i file da `defaults/` o da un'altra pagina
```typescript
// src/cms/startup/hero.ts
import type { HeroSectionProps } from "@/types"

export const heroData: HeroSectionProps = {
  title: "Il Titolo della Tua Startup",
  subtitle: "Il sottotitolo della startup",
  ctaText: "Inizia Ora",
  ctaHref: "/signup",
}
```

**Step 3:** Crea la pagina in `src/app/`
```typescript
// src/app/examples/startup/page.tsx
import { HeroSection } from "@/components/sections";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { headerData, footerData } from "@/cms/startup/layout";
import { heroData } from "@/cms/startup/hero";

export default function StartupLanding() {
  return (
    <div className="min-h-screen">
      <Header {...headerData} />
      <main>
        <HeroSection {...heroData} />
        {/* Aggiungi altre sezioni */}
      </main>
      <Footer {...footerData} />
    </div>
  );
}
```

## 📦 File Disponibili

| File | Componente | Scopo |
|------|-----------|-------|
| `hero.ts` | HeroSection | Header principale con CTA |
| `pricing.ts` | PricingSection | Piani e prezzi |
| `testimonials.ts` | TestimonialsSection | Recensioni clienti |
| `trustLogos.ts` | TrustLogosSection | Loghi partner/clienti |
| `layout.ts` | Header & Footer | Navigazione e footer |

## 🚀 Uso nelle Pagine

### Import dalla cartella specifica:
```typescript
import { heroData } from "@/cms/agency/hero";
import { testimonialsData } from "@/cms/agency/testimonials";
```

### Usa nel componente:
```typescript
<HeroSection {...heroData} />
<TestimonialsSection {...testimonialsData} />
```

## ✨ Vantaggi di Questa Struttura

✅ **Organizzato:** Contenuti di ogni pagina nella sua cartella  
✅ **Riutilizzabile:** Usa i defaults come punto di partenza  
✅ **Type-safe:** TypeScript completo con IntelliSense  
✅ **Version control:** Tutto tracciato in Git  
✅ **Zero dipendenze:** Nessun CMS esterno, nessuna API  
✅ **Veloce:** Contenuti compilati al build time

## 🎨 Tipi di Contenuto

Tutti i contenuti seguono le interfacce TypeScript in `src/types/`:

- `HeroSectionProps` - Sezione hero
- `PricingSectionProps` - Tabelle prezzi  
- `TestimonialsSectionProps` - Testimonial
- `TrustLogosSectionProps` - Griglie di loghi
- `HeaderProps` - Header/navigazione
- `FooterSectionProps` - Footer

Supporto completo IntelliSense durante la modifica!

## 💡 Tips

- Copia i file da `defaults/` quando crei una nuova pagina
- Usa nomi cartelle descrittivi: `startup`, `blog`, `portfolio`, ecc.
- Mantieni lo stesso nome file (`hero.ts`, `pricing.ts`) in tutte le cartelle
- Esporta sempre come `heroData`, `pricingData`, ecc. (non più `heroMockData`)
