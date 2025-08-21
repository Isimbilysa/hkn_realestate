"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { MapPin, Bed, Bath, Square, MessageCircle, Heart, Eye } from "lucide-react"
import { useState } from "react"

const properties = [
  {
    id: 1,
    title: "Modern Villa with Garden",
    price: "$450,000",
    location: "Downtown District",
    type: "House",
    beds: 4,
    baths: 3,
    area: "2,500 sq ft",
    image: "/luxury-modern-house.png",
    featured: true,
  },
  {
    id: 2,
    title: "Prime Commercial Land",
    price: "$280,000",
    location: "Business Center",
    type: "Land",
    area: "5,000 sq ft",
    image: "/urban-commercial-plot.png",
    featured: true,
  },
  {
    id: 3,
    title: "Contemporary Villa",
    price: "$320,000",
    location: "Riverside Area",
    type: "House",
    beds: 3,
    baths: 2,
    area: "1,800 sq ft",
    image: "/contemporary-villa.png",
    featured: false,
  },
  {
    id: 4,
    title: "Mountain View Land",
    price: "$150,000",
    location: "Green Valley",
    type: "Land",
    area: "3,200 sq ft",
    image: "/mountain-view-land.png",
    featured: false,
  },
  {
    id: 5,
    title: "Luxury Ocean Villa",
    price: "$380,000",
    location: "Executive District",
    type: "House",
    beds: 3,
    baths: 2,
    area: "2,100 sq ft",
    image: "/luxury-ocean-villa.png",
    featured: true,
  },
  {
    id: 6,
    title: "Modern Penthouse",
    price: "$200,000",
    location: "Future Development Zone",
    type: "House",
    beds: 2,
    baths: 2,
    area: "1,500 sq ft",
    image: "/modern-penthouse-skyline.png",
    featured: false,
  },
]

export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleWhatsAppContact = (propertyTitle: string) => {
    const message = `Hi! I'm interested in the property: ${propertyTitle}. Can you provide more details?`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="properties" className="py-20 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      <div className="geometric-shape w-64 h-64 top-10 right-10 opacity-10" style={{ animationDelay: "1s" }} />
      <div className="geometric-shape w-48 h-48 bottom-20 left-10 opacity-15" style={{ animationDelay: "3s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2
            className="font-bold text-3xl md:text-4xl text-foreground mb-4"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
              Featured Properties
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium properties and land plots in prime locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="property-card group overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-card/80 backdrop-blur-sm"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {property.featured && (
                  <Badge className="absolute top-3 left-3 bg-gradient-to-r from-accent to-primary text-white border-0 animate-pulse">
                    ⭐ Featured
                  </Badge>
                )}
                <Badge
                  variant="secondary"
                  className="absolute top-3 right-3 bg-background/90 text-foreground backdrop-blur-sm"
                >
                  {property.type}
                </Badge>

                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex gap-2 transition-all duration-300 ${
                    hoveredCard === property.id ? "opacity-100 scale-100" : "opacity-0 scale-75"
                  }`}
                >
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart
                      className={`w-4 h-4 ${favorites.includes(property.id) ? "fill-primary text-primary" : "text-gray-600"}`}
                    />
                  </Button>
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full w-10 h-10 p-0 bg-white/90 hover:bg-white"
                  >
                    <Eye className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {property.title}
                  </h3>
                  <span className="font-bold text-xl text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text">
                    {property.price}
                  </span>
                </div>

                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1 text-accent" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  {property.beds && (
                    <div className="flex items-center">
                      <Bed className="w-4 h-4 mr-1 text-primary" />
                      <span>{property.beds} beds</span>
                    </div>
                  )}
                  {property.baths && (
                    <div className="flex items-center">
                      <Bath className="w-4 h-4 mr-1 text-primary" />
                      <span>{property.baths} baths</span>
                    </div>
                  )}
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-1 text-primary" />
                    <span>{property.area}</span>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                  onClick={() => handleWhatsAppContact(property.title)}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact via WhatsApp
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 bg-transparent"
          >
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  )
}
