import { Card, CardContent } from "../ui/card"
import { Award, Users, MapPin, Clock } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "We carefully select only the finest properties that meet our high standards for quality and location.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced real estate professionals provide personalized service and expert guidance.",
  },
  {
    icon: MapPin,
    title: "Prime Locations",
    description: "All our properties are strategically located in developing and established neighborhoods.",
  },
  {
    icon: Clock,
    title: "15+ Years Experience",
    description: "With over a decade of experience, we understand the local market like no one else.",
  },
]

export default function About() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose HKN Real Estate?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At HKN Real Estate, we're committed to helping you find the perfect property. Whether you're looking for
              your dream home or a smart investment opportunity, our team of experts is here to guide you every step of
              the way.
            </p>
            <p className="text-muted-foreground mb-8">
              We specialize in both residential properties and commercial land plots, offering a diverse portfolio that
              caters to various needs and budgets. Our deep understanding of the local market ensures you get the best
              value for your investment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img src="/real-estate-team-office.png" alt="HKN Real Estate team" className="w-full h-96 object-cover" />
              </CardContent>
            </Card>

            {/* Stats Overlay */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-lg p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-background border border-border rounded-lg p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
