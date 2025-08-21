"use client"

import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { MapPin, Bed, Bath, Square, Phone } from "lucide-react"

interface PropertyCardProps {
  id: number
  title: string
  price: string
  location: string
  image: string
  type: "house" | "land"
  bedrooms?: number
  bathrooms?: number
  area: string
  description: string
}

export default function PropertyCard({
  id,
  title,
  price,
  location,
  image,
  type,
  bedrooms,
  bathrooms,
  area,
  description,
}: PropertyCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleWhatsAppContact = () => {
    const message = `Hi! I'm interested in ${title} (${price}). Can we discuss this property?`
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card
      className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-white border-0 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-64 object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute top-4 left-4">
          <Badge
            variant={type === "house" ? "default" : "secondary"}
            className={`${
              type === "house" ? "bg-red-600 hover:bg-red-700" : "bg-amber-500 hover:bg-amber-600"
            } text-white font-semibold px-3 py-1`}
          >
            {type === "house" ? "House" : "Land"}
          </Badge>
        </div>
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`absolute bottom-4 left-4 right-4 text-white transform transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
              {title}
            </h3>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-red-600">{price}</span>
            <div className="flex items-center space-x-4 text-gray-600">
              {type === "house" && bedrooms && (
                <div className="flex items-center">
                  <Bed className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bedrooms}</span>
                </div>
              )}
              {type === "house" && bathrooms && (
                <div className="flex items-center">
                  <Bath className="w-4 h-4 mr-1" />
                  <span className="text-sm">{bathrooms}</span>
                </div>
              )}
              <div className="flex items-center">
                <Square className="w-4 h-4 mr-1" />
                <span className="text-sm">{area}</span>
              </div>
            </div>
          </div>

          <Button
            onClick={handleWhatsAppContact}
            className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:shadow-lg"
          >
            <Phone className="w-4 h-4 mr-2" />
            Contact via WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
