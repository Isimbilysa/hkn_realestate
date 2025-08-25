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
    <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/95 to-[#16275B] text-white relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#F7BD01_0%,transparent_40%)] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Why Choose <span className="text-[#F7BD01]">HKN Real Estate?</span>
            </h2>

            <p className="text-lg text-gray-200 mb-6">
              At HKN Real Estate, we're committed to helping you find the perfect property. Whether you're looking for
              your dream home or a smart investment opportunity, our team of experts is here to guide you every step of
              the way.
            </p>

            <p className="text-gray-300 mb-10">
              We specialize in both residential properties and commercial land plots, offering a diverse portfolio that
              caters to various needs and budgets. Our deep understanding of the local market ensures you get the best
              value for your investment.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F7BD01]/20 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-[#F7BD01]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <Card className="overflow-hidden rounded-2xl shadow-2xl border-0">
              <CardContent className="p-0">
                <img
                  src="/real-estate-team-office.png"
                  alt="HKN Real Estate team"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>

            {/* Stats Overlays */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 text-[#1E3A8A] border border-[#F7BD01] rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F7BD01] mb-1">1000+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/95 text-[#1E3A8A] border border-[#F7BD01] rounded-xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#F7BD01] mb-1">500+</div>
                <div className="text-sm font-medium">Properties Sold</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
