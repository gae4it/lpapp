import Image from "next/image"
import type { TrustLogosSectionProps } from "@/types"

export function TrustLogosSection({ title = "Trusted by leading companies", logos }: TrustLogosSectionProps) {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center p-4 transition-all duration-300 hover:scale-110"
            >
              {logo.href ? (
                <a href={logo.href} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </a>
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="max-h-12 w-auto object-contain opacity-70"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}