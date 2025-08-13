import type { Testimonial } from "../lib/types"
import { Card, CardContent } from "../ui/card"
import { Star, Quote } from "lucide-react"

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="text-center space-content max-w-3xl mx-auto mb-16">
          <h2 className="text-section-title text-balance mb-6">
            What Our Clients
            <span className="block text-gradient">Say About Us</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of satisfied clients who found their perfect property with HKN Real Estate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="card-premium text-center p-8 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</blockquote>

                {/* Client Info */}
                <div className="space-y-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mx-auto border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">Verified Client</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">4.9</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Properties Sold</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
