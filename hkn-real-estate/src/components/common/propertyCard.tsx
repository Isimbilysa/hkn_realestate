"use client"

import type React from "react"
import { MapPin, Bed, Bath, Square, Eye } from "lucide-react"
import type { House, Plot } from "../lib/types"

interface PropertyCardProps {
  property: House | Plot
  type: "house" | "plot"
  onViewDetails: (id: string) => void
  onBookNow: (id: string) => void
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, type, onViewDetails, onBookNow }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const isHouse = type === "house"
  const houseProperty = isHouse ? (property as House) : null

  return (
    <div className="card overflow-hidden group">
      <div className="relative">
        <img
          src={property.images[0] || "/placeholder.svg"}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              property.status === "available"
                ? "bg-green-100 text-green-800"
                : property.status === "reserved"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {type === "house" ? "House" : "Plot"}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary-600">{formatPrice(property.price)}</div>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
          {isHouse && houseProperty && (
            <>
              <div className="flex items-center">
                <Bed size={16} className="mr-1" />
                <span>{houseProperty.bedrooms} beds</span>
              </div>
              <div className="flex items-center">
                <Bath size={16} className="mr-1" />
                <span>{houseProperty.bathrooms} baths</span>
              </div>
            </>
          )}
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{property.size} m²</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(property.id)}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
          >
            <Eye size={16} className="mr-2" />
            View Details
          </button>
          <button
            onClick={() => onBookNow(property.id)}
            className="flex-1 btn-primary"
            disabled={property.status !== "available"}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
