import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import type { ThreeCardsSectionProps } from "@/types"
import { Lightbulb, Shield, Zap } from "lucide-react"

// Default icons map
const iconMap = {
  lightbulb: Lightbulb,
  shield: Shield,
  zap: Zap,
}

export function ThreeCardsSection({ title, subtitle, cards }: ThreeCardsSectionProps) {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const IconComponent = card.icon ? iconMap[card.icon as keyof typeof iconMap] : null
            
            return (
              <Card key={card.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  {IconComponent && (
                    <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                  )}
                  {card.image && (
                    <div className="mx-auto mb-4 w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardTitle className="text-xl mb-2">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {card.description}
                  </CardDescription>
                  {card.href && (
                    <a
                      href={card.href}
                      className="inline-block mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Learn more →
                    </a>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}