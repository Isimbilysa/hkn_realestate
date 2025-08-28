"use client"

import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Bed, Bath, Square, MessageCircle, Heart } from "lucide-react"
import { useState } from "react"
import type {Property} from "../lib/type"

const properties: Property[] = [
  {
    id: 1,
    title: "Modern Villa with Garden",
    price: "$450,000",
    location: "Kigali Heights, Kigali",
    beds: 4,
    baths: 3,
    area: "2,500 sqft",
    image: "/images/villa.jpg",
    description: "A beautiful modern villa with spacious rooms and a large garden.",
    type: ""
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: "$320,000",
    location: "Downtown Kigali",
    beds: 3,
    baths: 2,
    area: "1,800 sqft",
    image: "/images/apartment.jpg",
    description: "A luxurious apartment with city views and top-class amenities.",
    type: ""
  },
  // ... more properties
]



export default function FeaturedProperties() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [, setHoveredCard] = useState<number | null>(null)
  const [selectedProperty, setSelectedProperty] = useState<any>(null) // for popup

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    )
  }

  const handleWhatsAppContact = (propertyTitle: string, price: string) => {
    const message = `Hi HKN Real Estate! I'm interested in "${propertyTitle}" listed at ${price}. Could you please provide more details and arrange a viewing?`
    const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {properties.map((property, index) => (
            <Card
              key={property.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl bg-white/80 backdrop-blur-sm transform hover:-translate-y-2 transition-all duration-500 rounded-2xl cursor-pointer"
              onMouseEnter={() => setHoveredCard(property.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setSelectedProperty(property)} // 👈 open popup
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: "fadeInUp 0.8s ease-out forwards",
              }}
            >
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg">{property.title}</h3>
                <p className="text-gray-500">{property.location}</p>
                <p className="text-[#1E3A8A] font-bold mt-2">{property.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* === Popup Modal === */}
      <Dialog open={!!selectedProperty} onOpenChange={() => setSelectedProperty(null)}>
        <DialogContent className="max-w-3xl p-6">
          {selectedProperty && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">
                  {selectedProperty.title}
                </DialogTitle>
              </DialogHeader>

              <img
                src={selectedProperty.image}
                alt={selectedProperty.title}
                className="w-full h-80 object-cover rounded-xl mb-6"
              />

              <p className="text-gray-600 mb-4">{selectedProperty.location}</p>
              <p className="text-2xl text-[#1E3A8A] font-bold mb-6">
                {selectedProperty.price}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
                {selectedProperty.beds && (
                  <p>
                    <Bed className="inline w-4 h-4 mr-1" /> {selectedProperty.beds} Beds
                  </p>
                )}
                {selectedProperty.baths && (
                  <p>
                    <Bath className="inline w-4 h-4 mr-1" /> {selectedProperty.baths} Baths
                  </p>
                )}
                <p>
                  <Square className="inline w-4 h-4 mr-1" /> {selectedProperty.area} m²
                </p>
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProperty.propertyFeatures.map((f: string, idx: number) => (
                  <Badge
                    key={idx}
                    variant="outline"
                    className="text-sm border-[#F7BD01]/30 text-[#1E3A8A] bg-[#F7BD01]/5"
                  >
                    {f}
                  </Badge>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => toggleFavorite(selectedProperty.id)}
                  className="flex items-center gap-2"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.includes(selectedProperty.id)
                        ? "fill-red-500 text-red-500"
                        : "text-gray-600"
                    }`}
                  />
                  {favorites.includes(selectedProperty.id) ? "Saved" : "Save"}
                </Button>

                <Button
                  className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white rounded-xl px-6 py-3"
                  onClick={() =>
                    handleWhatsAppContact(selectedProperty.title, selectedProperty.price)
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Contact via WhatsApp
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
