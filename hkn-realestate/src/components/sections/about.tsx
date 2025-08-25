import { Card, CardContent } from "../ui/card"
import { Award, Users, MapPin, Clock, Star, TrendingUp, Shield, CheckCircle } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Award,
    title: "Premium Quality Assurance",
    description: "Every property undergoes rigorous quality checks and legal verification before listing.",
    stat: "100% Verified",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Users,
    title: "Expert Real Estate Team",
    description: "Licensed professionals with deep local market knowledge and international standards.",
    stat: "15+ Experts",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: MapPin,
    title: "Strategic Prime Locations",
    description: "Properties in Kigali's most prestigious and fastest-growing neighborhoods.",
    stat: "20+ Areas",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Clock,
    title: "Proven Track Record",
    description: "5 years of successful transactions and satisfied clients across Rwanda.",
    stat: "Since 2020",
    color: "from-orange-500 to-orange-600"
  },
]

const achievements = [
  {
    icon: Star,
    title: "Customer Satisfaction",
    value: "4.9/5",
    description: "Average rating from our clients"
  },
  {
    icon: TrendingUp,
    title: "Market Growth",
    value: "250%",
    description: "Portfolio growth in 5 years"
  },
  {
    icon: Shield,
    title: "Legal Compliance",
    value: "100%",
    description: "Verified legal documentation"
  }
]

export default function About() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-[#1E3A8A] via-[#1E3A8A]/95 to-[#16275B] text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,#F7BD01_0%,transparent_50%)] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#2563EB_0%,transparent_50%)] opacity-15" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#F7BD01]/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      {/* Geometric patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#F7BD01] rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#F7BD01] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Enhanced Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#F7BD01]/20 backdrop-blur-sm rounded-full mb-8 border border-[#F7BD01]/30">
              <Award className="w-4 h-4 text-[#F7BD01] mr-2" />
              <span className="text-[#F7BD01] font-semibold text-sm">Award-Winning Real Estate</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Why Choose{" "}
              <span className="text-transparent bg-gradient-to-r from-[#F7BD01] to-[#E5A800] bg-clip-text">
                HKN Real Estate?
              </span>
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-xl text-gray-200 leading-relaxed">
                At HKN Real Estate, we don't just sell properties – we create pathways to your dreams. Whether you're 
                seeking your first home, upgrading to luxury, or making strategic investments, our expertise transforms 
                your vision into reality.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Specializing in Rwanda's premium residential and commercial properties, we combine local market mastery 
                with international service standards. Every transaction is built on trust, transparency, and your success.
              </p>
            </div>

            {/* Enhanced Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-[#F7BD01]/30 transition-all duration-500 cursor-pointer transform hover:scale-105"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 relative">
                      <div className={`w-14 h-14 bg-gradient-to-r ${feature.color} opacity-20 rounded-2xl flex items-center justify-center group-hover:opacity-30 transition-opacity duration-300`}></div>
                      <div className="absolute inset-0 w-14 h-14 bg-[#F7BD01]/20 rounded-2xl flex items-center justify-center group-hover:bg-[#F7BD01]/30 transition-all duration-300">
                        <feature.icon className="w-7 h-7 text-[#F7BD01] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-white text-lg group-hover:text-[#F7BD01] transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <span className="text-xs font-bold text-[#F7BD01] bg-[#F7BD01]/20 px-2 py-1 rounded-full">
                          {feature.stat}
                        </span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover effect border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-[#F7BD01] opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-4">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/20 hover:border-[#F7BD01]/30 transition-all duration-300"
                >
                  <achievement.icon className="w-5 h-5 text-[#F7BD01]" />
                  <div>
                    <div className="font-bold text-white text-sm">{achievement.value}</div>
                    <div className="text-xs text-gray-300">{achievement.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Section */}
          <div className="relative order-1 lg:order-2">
            <div className="relative group">
              {/* Main image card */}
              <Card className="overflow-hidden rounded-3xl shadow-2xl border-0 transform group-hover:scale-105 transition-all duration-700">
                <CardContent className="p-0 relative">
                  <img
                    src="/real-estate-team-office.png"
                    alt="HKN Real Estate - Professional team and modern office"
                    className="w-full h-[500px] object-cover"
                  />
                  {/* Image overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/40 via-transparent to-transparent"></div>
                  
                  {/* Professional badge overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-[#1E3A8A] text-lg">Professional Excellence</h4>
                          <p className="text-gray-600 text-sm">Licensed & Certified Team</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#F7BD01] text-[#F7BD01]" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-white to-gray-50 text-[#1E3A8A] rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-[#F7BD01]/20">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-6 h-6 text-[#F7BD01] mr-2" />
                    <div className="text-4xl font-black text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] bg-clip-text">1,000+</div>
                  </div>
                  <div className="text-sm font-bold text-[#1E3A8A]">Happy Families</div>
                  <div className="text-xs text-gray-600">Living Their Dreams</div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 bg-gradient-to-r from-white to-gray-50 text-[#1E3A8A] rounded-2xl p-6 shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-[#F7BD01]/20">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <CheckCircle className="w-6 h-6 text-[#F7BD01] mr-2" />
                    <div className="text-4xl font-black text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] bg-clip-text">500+</div>
                  </div>
                  <div className="text-sm font-bold text-[#1E3A8A]">Properties Sold</div>
                  <div className="text-xs text-gray-600">Successful Transactions</div>
                </div>
              </div>

              <div className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-gradient-to-r from-[#F7BD01] to-[#E5A800] text-black rounded-2xl p-4 shadow-xl hover:scale-110 transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-black mb-1">5+</div>
                  <div className="text-xs font-bold">Years</div>
                </div>
              </div>
            </div>

            {/* Decorative elements around image */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F7BD01]/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "1s" }}></div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}