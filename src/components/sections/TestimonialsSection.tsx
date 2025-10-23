import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import type { TestimonialsSectionProps } from "@/types"
import { Star } from "lucide-react"

export function TestimonialsSection({ title = "What our customers say", subtitle, testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-16 bg-gray-900">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-4">
                  {Array.from({ length: testimonial.rating ?? 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center space-x-3">
                  {testimonial.avatar && (
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}