import { Button } from "@/components/ui/button"
import type { CtaSectionProps } from "@/types"
import Image from "next/image"

export function CtaSection({ 
  title, 
  subtitle, 
  primaryCtaText, 
  primaryCtaHref, 
  secondaryCtaText, 
  secondaryCtaHref,
  backgroundImage 
}: CtaSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt="CTA background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
      )}
      
      {!backgroundImage && (
        <div className="absolute inset-0 bg-linear-to-r from-primary to-primary/80" />
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 text-black">
              <a href={primaryCtaHref}>{primaryCtaText}</a>
            </Button>
            
            {secondaryCtaText && secondaryCtaHref && (
              <Button asChild size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-primary hover:text-black">
                <a href={secondaryCtaHref}>{secondaryCtaText}</a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}