import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { PricingSectionProps } from "@/types"
import { Check, X } from "lucide-react"

export function PricingSection({ title = "Choose Your Plan", subtitle, tiers }: PricingSectionProps) {
  return (
    <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <Card 
              key={tier.name} 
              className={`relative h-full ${tier.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-1">/{tier.period}</span>
                </div>
                <CardDescription className="mt-4">
                  {tier.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="shrink-0">
                        {feature.startsWith('❌') || feature.includes('Not included') ? (
                          <X className="w-5 h-5 text-gray-400" />
                        ) : (
                          <Check className="w-5 h-5 text-green-500" />
                        )}
                      </div>
                      <span className="text-gray-300">
                        {feature.replace('❌ ', '').replace('✅ ', '')}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-6">
                  <Button 
                    asChild 
                    className={`w-full ${tier.highlighted ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    <a href={tier.ctaHref ?? '/signup'}>
                      {tier.ctaText ?? 'Get Started'}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}