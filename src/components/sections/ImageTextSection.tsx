import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { ImageTextSectionProps } from "@/types"
import { Check } from "lucide-react"

export function ImageLeftTextRightSection({
  title,
  subtitle,
  description,
  image,
  ctaText,
  ctaHref,
  features,
}: ImageTextSectionProps) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-4/3 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            {subtitle && (
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {description}
            </p>
            
            {features && features.length > 0 && (
              <div className="space-y-4">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {ctaText && ctaHref && (
              <div className="pt-4">
                <Button asChild size="lg">
                  <a href={ctaHref}>{ctaText}</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ImageRightTextLeftSection(props: ImageTextSectionProps) {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            {props.subtitle && (
              <p className="text-primary font-semibold text-sm uppercase tracking-wide">
                {props.subtitle}
              </p>
            )}
            
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {props.title}
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              {props.description}
            </p>
            
            {props.features && props.features.length > 0 && (
              <div className="space-y-4">
                {props.features.map((feature) => (
                  <div key={feature.title} className="flex items-start space-x-3">
                    <div className="shrink-0 w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {props.ctaText && props.ctaHref && (
              <div className="pt-4">
                <Button asChild size="lg">
                  <a href={props.ctaHref}>{props.ctaText}</a>
                </Button>
              </div>
            )}
          </div>
          
          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-4/3 relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src={props.image.src}
                alt={props.image.alt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}