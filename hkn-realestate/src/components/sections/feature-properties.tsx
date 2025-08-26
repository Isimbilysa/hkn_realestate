"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { MapPin, Bed, Bath, Square, MessageCircle, Heart, Eye, Star, Calendar, TrendingUp } from "lucide-react"
import { useState } from "react"

const properties = [
  {
    id: 1,
    title: "Modern Villa with Garden",
    price: "$450,000",
    originalPrice: "$480,000",
    location: "Kigali Heights, Kigali",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,500",
    image: "/public/marek-omasta-2J6NHPQ7F1o-unsplash.jpg",
    featured: true,
    status: "For Sale",
    views: 234,
    saved: 45,
    daysOnMarket: 12,
    propertyFeatures: ["Swimming Pool", "Garden", "Garage"]
  },
  {
    id: 2,
    title: "Prime Commercial Land",
    price: "$280,000",
    location: "Business District, Kigali",
    type: "Commercial Land",
    area: "5,000",
    image: "public/fajriyan-nwbrpf9jLZg-unsplash.jpg",
    featured: true,
    status: "For Sale",
    views: 187,
    saved: 32,
    daysOnMarket: 8,
    propertyFeatures: ["Corner Plot", "Main Road", "Utilities Ready"]
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    price: "$320,000",
    location: "Nyarutarama, Kigali",
    type: "House",
    beds: 3,
    baths: 2,
    area: "1,800",
    image: "public/dave-g-Hq21aKDISig-unsplash.jpg",
    featured: false,
    status: "For Sale",
    views: 156,
    saved: 28,
    daysOnMarket: 25,
    propertyFeatures: ["Modern Kitchen", "Terrace", "Security"]
  },
  {
    id: 4,
    title: "Mountain View Residential Land",
    price: "$150,000",
    location: "Musanze Province",
    type: "Residential Land",
    area: "3,200",
    image: "public/carlos-gonzalez-krf6J_frF8g-unsplash.jpg",
    featured: false,
    status: "For Sale",
    views: 98,
    saved: 19,
    daysOnMarket: 35,
    propertyFeatures: ["Mountain Views", "Quiet Area", "Development Potential"]
  },
  {
    id: 5,
    title: "Luxury Executive Villa",
    price: "$380,000",
    location: "Kimihurura, Kigali",
    type: "Villa",
    beds: 4,
    baths: 3,
    area: "2,100",
    image: "public/adrian-macias-X9Irr253kKU-unsplash.jpg",
    featured: true,
    status: "For Sale",
    views: 312,
    saved: 67,
    daysOnMarket: 5,
    propertyFeatures: ["City Views", "Gym", "Wine Cellar"]
  },
  {
    id: 6,
    title: "Modern Apartment Complex",
    price: "$200,000",
    location: "Remera, Kigali",
    type: "Apartment",
    beds: 2,
    baths: 2,
    area: "1,500",
    image: "public/dave-kim-rWxFdtN3mkI-unsplash.jpg",
    featured: false,
    status: "For Sale",
    views: 143,
    saved: 34,
    daysOnMarket: 18,
    propertyFeatures: ["Balcony", "Parking", "Elevator"]
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleWhatsAppContact = (propertyTitle: string, price: string) => {
    const message = `Hi HKN Real Estate! I'm interested in "${propertyTitle}" listed at ${price}. Could you please provide more details and arrange a viewing?`
    const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="properties" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-[#1E3A8A]/10 to-[#F7BD01]/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-[#F7BD01]/5 to-[#1E3A8A]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-[#F7BD01]/10 rounded-full mb-6">
            <Star className="w-5 h-5 text-[#F7BD01] mr-2" />
            <span className="text-[#1E3A8A] font-semibold text-sm">Premium Properties</span>
          </div>
          
          <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
            <span className="text-[#1E3A8A]">Featured</span>
            <span className="text-transparent bg-gradient-to-r from-[#F7BD01] to-[#E5A800] bg-clip-text"> Properties</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Discover handpicked luxury homes and prime investment opportunities in Rwanda's most desirable locations
          </p>
          
          {/* Property stats */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <TrendingUp className="w-4 h-4 text-[#F7BD01] mr-2" />
              <span>500+ Properties Sold</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center">
              <Star className="w-4 h-4 text-[#F7BD01] mr-2" />
              <span>4.9/5 Customer Rating</span>
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-500 rounded-2xl"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {property.featured && (
                    <Badge className="bg-gradient-to-r from-[#F7BD01] to-[#E5A800] text-black border-0 font-bold shadow-lg animate-pulse">
                      ⭐ Featured
                    </Badge>
                  )}
                  <Badge className="bg-[#1E3A8A] text-white border-0 font-medium shadow-md">
                    {property.status}
                  </Badge>
                </div>
                
                <Badge
                  variant="secondary"
                  className="absolute top-4 right-4 bg-white/95 text-gray-700 border-0 font-medium shadow-md backdrop-blur-sm"
                >
                  {property.type}
                </Badge>

                {/* Hover Actions */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-3 transition-all duration-300 ${
                    hoveredCard === property.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <Button
                    size="sm"
                    className="rounded-full w-12 h-12 p-0 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart
                      className={`w-5 h-5 transition-all duration-300 ${
                        favorites.includes(property.id) 
                          ? "fill-red-500 text-red-500 scale-110" 
                          : "text-gray-600 hover:text-red-500"
                      }`}
                    />
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full w-12 h-12 p-0 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Eye className="w-5 h-5 text-gray-600 hover:text-[#1E3A8A] transition-colors" />
                  </Button>
                </div>

                {/* Property stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm">
                    <Eye className="w-3 h-3 mr-1" />
                    <span>{property.views} views</span>
                  </div>
                  <div className="flex items-center bg-black/50 rounded-full px-3 py-1 backdrop-blur-sm">
                    <Heart className="w-3 h-3 mr-1" />
                    <span>{property.saved} saved</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Price and Title */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-[#1E3A8A] transition-colors duration-300 line-clamp-2">
                      {property.title}
                    </h3>
                    {property.originalPrice && (
                      <div className="flex items-center mt-1">
                        <span className="text-sm text-gray-400 line-through mr-2">{property.originalPrice}</span>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">Save ${parseInt(property.originalPrice.replace('$', '').replace(',', '')) - parseInt(property.price.replace('$', '').replace(',', ''))}</Badge>
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-2xl text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] bg-clip-text">
                      {property.price}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-[#F7BD01]" />
                  <span className="text-sm font-medium">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 pb-4 border-b border-gray-100">
                  {property.beds && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                      <span className="font-medium">{property.beds}</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                      <span className="font-medium">{property.baths}</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1 text-[#1E3A8A]" />
                    <span className="font-medium">{property.area} m²</span>
                  </div>
                </div>

                {/* Property Features */}
                <div className="flex flex-wrap gap-1 mb-6">
                  {property.propertyFeatures.slice(0, 2).map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-[#F7BD01]/30 text-[#1E3A8A] bg-[#F7BD01]/5"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {property.propertyFeatures.length > 2 && (
                    <Badge variant="outline" className="text-xs text-gray-500">
                      +{property.propertyFeatures.length - 2} more
                    </Badge>
                  )}
                </div>

                {/* Days on Market */}
                <div className="flex items-center justify-between mb-6 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Listed {property.daysOnMarket} days ago</span>
                  </div>
                  {property.daysOnMarket <= 10 && (
                    <Badge className="bg-green-100 text-green-800 text-xs">New Listing</Badge>
                  )}
                </div>

                {/* CTA Button */}
                <Button
                  className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl py-3 font-semibold"
                  onClick={() => handleWhatsAppContact(property.title, property.price)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#1E3A8A]/5 to-[#F7BD01]/5 rounded-3xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of premium properties or let our experts help you find your perfect home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white transform hover:scale-105 transition-all duration-300 shadow-lg px-8 py-4 rounded-xl font-semibold"
            >
              View All Properties
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-[#F7BD01] text-[#F7BD01] hover:bg-[#F7BD01] hover:text-black transform hover:scale-105 transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
            >
              Get Personal Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}