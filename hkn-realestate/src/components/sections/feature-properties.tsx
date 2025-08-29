"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { MapPin, Bed, Bath, Square, MessageCircle, Heart, Eye, Star, Calendar, TrendingUp, X,  Share2 } from "lucide-react"
import { useState, useEffect } from "react"

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
    image: "/dave-g-Hq21aKDISig-unsplash.jpg",
    featured: true,
    status: "For Sale",
    views: 234,
    saved: 45,
    daysOnMarket: 12,
    propertyFeatures: ["Swimming Pool", "Garden", "Garage", "Modern Kitchen", "Security System", "City Views"],
    description: "Stunning modern villa featuring contemporary design with spacious rooms, beautiful garden, and premium amenities. Perfect for families seeking luxury living in Kigali Heights.",
    yearBuilt: 2022,
    parking: 2,
    propertyId: "HKN-001",
    agent: {
      name: "Sarah Johnson",
      phone: "+250788123456",
      email: "sarah@hknrealestate.com"
    }
  },
  {
    id: 2,
    title: "Prime Commercial Land",
    price: "$280,000",
    location: "Business District, Kigali",
    type: "Commercial Land",
    area: "5,000",
    image: "/fajriyan-nwbrpf9jLZg-unsplash.jpg",
    featured: true,
    status: "For Sale",
    views: 187,
    saved: 32,
    daysOnMarket: 8,
    propertyFeatures: ["Corner Plot", "Main Road", "Utilities Ready", "High Traffic Area", "Development Permit", "Investment Potential"],
    description: "Prime commercial land in the heart of Kigali's business district. Excellent investment opportunity with high development potential and strategic location.",
    yearBuilt: null,
    parking: null,
    propertyId: "HKN-002",
    agent: {
      name: "Michael Thompson",
      phone: "+250788123457",
      email: "michael@hknrealestate.com"
    }
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
    image: "/marek-omasta-2J6NHPQ7F1o-unsplash.jpg",
    featured: false,
    status: "For Sale",
    views: 156,
    saved: 28,
    daysOnMarket: 25,
    propertyFeatures: ["Modern Kitchen", "Terrace", "Security", "Garden", "Guest Room", "Storage"],
    description: "Beautiful contemporary family home with modern amenities and spacious layout. Located in the prestigious Nyarutarama neighborhood with excellent schools nearby.",
    yearBuilt: 2021,
    parking: 1,
    propertyId: "HKN-003",
    agent: {
      name: "Emma Davis",
      phone: "+250788123458",
      email: "emma@hknrealestate.com"
    }
  },
  {
    id: 4,
    title: "Mountain View Residential Land",
    price: "$150,000",
    location: "Musanze Province",
    type: "Residential Land",
    area: "3,200",
    image: "/carlos-gonzalez-krf6J_frF8g-unsplash.jpg",
    featured: false,
    status: "For Sale",
    views: 98,
    saved: 19,
    daysOnMarket: 35,
    propertyFeatures: ["Mountain Views", "Quiet Area", "Development Potential", "Natural Setting", "Privacy", "Good Access Road"],
    description: "Spectacular residential land with breathtaking mountain views in Musanze Province. Perfect for building your dream home in a serene natural environment.",
    yearBuilt: null,
    parking: null,
    propertyId: "HKN-004",
    agent: {
      name: "James Wilson",
      phone: "+250788123459",
      email: "james@hknrealestate.com"
    }
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
    image: "/adrian-macias-X9Irr253kKU-unsplash.jpg",
    featured: true,
    status: "For Sale",
    views: 312,
    saved: 67,
    daysOnMarket: 5,
    propertyFeatures: ["City Views", "Gym", "Wine Cellar", "Smart Home", "Elevator", "Rooftop Terrace"],
    description: "Luxury executive villa with premium finishes and smart home technology. Features include private gym, wine cellar, and stunning city views from the rooftop terrace.",
    yearBuilt: 2023,
    parking: 3,
    propertyId: "HKN-005",
    agent: {
      name: "Lisa Brown",
      phone: "+250788123460",
      email: "lisa@hknrealestate.com"
    }
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
    image: "/dave-kim-rWxFdtN3mkI-unsplash.jpg",
    featured: false,
    status: "For Sale",
    views: 143,
    saved: 34,
    daysOnMarket: 18,
    propertyFeatures: ["Balcony", "Parking", "Elevator", "Swimming Pool", "Gym Access", "24/7 Security"],
    description: "Modern apartment in a well-maintained complex with excellent amenities. Features spacious balcony, parking space, and access to shared facilities including pool and gym.",
    yearBuilt: 2020,
    parking: 1,
    propertyId: "HKN-006",
    agent: {
      name: "David Martinez",
      phone: "+250788123461",
      email: "david@hknrealestate.com"
    }
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<any>(null)
  const [propertyViews, setPropertyViews] = useState<{[key: number]: number}>({})
  const [propertySaves, setPropertySaves] = useState<{[key: number]: number}>({})

  // Initialize views and saves from properties data
  useEffect(() => {
    const initialViews: {[key: number]: number} = {}
    const initialSaves: {[key: number]: number} = {}
    
    properties.forEach(property => {
      initialViews[property.id] = property.views
      initialSaves[property.id] = property.saved
    })
    
    setPropertyViews(initialViews)
    setPropertySaves(initialSaves)
  }, [])

  const toggleFavorite = (id: number, e?: React.MouseEvent) => {
    e?.stopPropagation()
    const wasAlreadyFavorited = favorites.includes(id)
    
    setFavorites((prev) => {
      if (prev.includes(id)) {
        return prev.filter((fav) => fav !== id)
      } else {
        return [...prev, id]
      }
    })

    // Update save count
    setPropertySaves(prev => ({
      ...prev,
      [id]: wasAlreadyFavorited ? prev[id] - 1 : prev[id] + 1
    }))
  }

  const handleViewProperty = (property: any, e?: React.MouseEvent) => {
    e?.stopPropagation()
    
    // Increment view count
    setPropertyViews(prev => ({
      ...prev,
      [property.id]: prev[property.id] + 1
    }))
    
    setSelectedProperty(property)
  }

  const handleWhatsAppContact = (propertyTitle: string, price: string, agent?: any) => {
    const message = `Hi HKN Real Estate! I'm interested in "${propertyTitle}" (ID: ${selectedProperty?.propertyId}) listed at ${price}. Could you please provide more details and arrange a viewing?`
    const phoneNumber = agent?.phone || "250788123456"
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleShare = (property: any) => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this ${property.type.toLowerCase()} in ${property.location}`,
        url: window.location.href
      })
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(`${property.title} - ${property.price} - ${window.location.href}`)
      alert("Property details copied to clipboard!")
    }
  }

  const closeModal = () => {
    setSelectedProperty(null)
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
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-white backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-500 rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleViewProperty(property)}
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
                    <Badge className="bg-gradient-to-r from-[#F7BD01] to-[#E5A800] text-black border-0 font-bold shadow-lg">
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
                    onClick={(e) => toggleFavorite(property.id, e)}
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
                    onClick={(e) => handleViewProperty(property, e)}
                  >
                    <Eye className="w-5 h-5 text-gray-600 hover:text-[#1E3A8A] transition-colors" />
                  </Button>
                  <Button
                    size="sm"
                    className="rounded-full w-12 h-12 p-0 bg-white/95 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleShare(property)
                    }}
                  >
                    <Share2 className="w-5 h-5 text-gray-600 hover:text-[#1E3A8A] transition-colors" />
                  </Button>
                </div>

                {/* Property stats overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center bg-black/70 rounded-full px-3 py-1 backdrop-blur-sm">
                    <Eye className="w-3 h-3 mr-1" />
                    <span className="font-medium">{propertyViews[property.id] || property.views} views</span>
                  </div>
                  <div className="flex items-center bg-black/70 rounded-full px-3 py-1 backdrop-blur-sm">
                    <Heart className="w-3 h-3 mr-1" />
                    <span className="font-medium">{propertySaves[property.id] || property.saved} saved</span>
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
                        <span className="text-sm text-gray-500 line-through mr-2">{property.originalPrice}</span>
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          Save ${parseInt(property.originalPrice.replace('$', '').replace(',', '')) - parseInt(property.price.replace('$', '').replace(',', ''))}</Badge>
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
                <div className="flex items-center text-gray-700 mb-4">
                  <MapPin className="w-4 h-4 mr-2 text-[#F7BD01]" />
                  <span className="text-sm font-medium">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-gray-700 mb-4 pb-4 border-b border-gray-100">
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
                      className="text-xs border-[#F7BD01]/50 text-[#1E3A8A] bg-[#F7BD01]/10 font-medium"
                    >
                      {feature}
                    </Badge>
                  ))}
                  {property.propertyFeatures.length > 2 && (
                    <Badge variant="outline" className="text-xs text-gray-600 border-gray-300">
                      +{property.propertyFeatures.length - 2} more
                    </Badge>
                  )}
                </div>

                {/* Days on Market */}
                <div className="flex items-center justify-between mb-6 text-xs text-gray-600">
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
                  onClick={(e) => {
                    e.stopPropagation()
                    handleWhatsAppContact(property.title, property.price, property.agent)
                  }}
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

      {/* Property Details Modal */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white rounded-t-3xl border-b border-gray-200 p-6 flex justify-between items-center z-10">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{selectedProperty.title}</h2>
                <p className="text-gray-600">Property ID: {selectedProperty.propertyId}</p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full w-10 h-10 p-0"
                onClick={closeModal}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6">
              {/* Property Image */}
              <div className="relative mb-6 rounded-2xl overflow-hidden">
                <img
                  src={selectedProperty.image || "/placeholder.svg"}
                  alt={selectedProperty.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {selectedProperty.featured && (
                    <Badge className="bg-gradient-to-r from-[#F7BD01] to-[#E5A800] text-black border-0 font-bold">
                      ⭐ Featured
                    </Badge>
                  )}
                  <Badge className="bg-[#1E3A8A] text-white border-0 font-medium">
                    {selectedProperty.status}
                  </Badge>
                </div>
                <Badge className="absolute top-4 right-4 bg-white/95 text-gray-700 border-0 font-medium">
                  {selectedProperty.type}
                </Badge>
              </div>

              {/* Price and Location */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] bg-clip-text">
                      {selectedProperty.price}
                    </span>
                    {selectedProperty.originalPrice && (
                      <div className="flex items-center">
                        <span className="text-lg text-gray-500 line-through mr-2">{selectedProperty.originalPrice}</span>
                        <Badge className="bg-green-100 text-green-800">
                          Save ${parseInt(selectedProperty.originalPrice.replace('$', '').replace(',', '')) - parseInt(selectedProperty.price.replace('$', '').replace(',', ''))}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <MapPin className="w-5 h-5 mr-2 text-[#F7BD01]" />
                    <span className="font-medium">{selectedProperty.location}</span>
                  </div>
                </div>
                
                {/* Property Stats */}
                <div className="flex gap-4 text-sm text-gray-600">
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                    <Eye className="w-4 h-4 mr-1" />
                    <span>{propertyViews[selectedProperty.id]} views</span>
                  </div>
                  <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
                    <Heart className="w-4 h-4 mr-1" />
                    <span>{propertySaves[selectedProperty.id]} saved</span>
                  </div>
                </div>
              </div>

              {/* Property Details Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {selectedProperty.beds && (
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Bed className="w-6 h-6 text-[#1E3A8A] mx-auto mb-2" />
                    <div className="font-bold text-lg">{selectedProperty.beds}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                )}
                {selectedProperty.baths && (
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Bath className="w-6 h-6 text-[#1E3A8A] mx-auto mb-2" />
                    <div className="font-bold text-lg">{selectedProperty.baths}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                )}
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <Square className="w-6 h-6 text-[#1E3A8A] mx-auto mb-2" />
                  <div className="font-bold text-lg">{selectedProperty.area}</div>
                  <div className="text-sm text-gray-600">m² Area</div>
                </div>
                {selectedProperty.parking && (
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <div className="w-6 h-6 text-[#1E3A8A] mx-auto mb-2 font-bold text-lg">P</div>
                    <div className="font-bold text-lg">{selectedProperty.parking}</div>
                    <div className="text-sm text-gray-600">Parking</div>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedProperty.description}</p>
              </div>

                {/* Property Features */}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProperty.propertyFeatures?.map((feature: string, idx: number) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs border-[#F7BD01]/50 text-[#1E3A8A] bg-[#F7BD01]/10 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  </div>
    
                      </div> {/* <-- Add this closing tag for the div with className="p-6" */}
                    </div> {/* <-- Add this closing tag for the modal container div */}
                  </div>
      )}</section>
              )}