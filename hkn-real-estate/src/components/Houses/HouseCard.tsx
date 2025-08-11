"use client"

import type React from "react"
import { MapPin, Bed, Bath, Square, Calendar, Eye } from "lucide-react"
import type { House } from "../lib/types"

interface HouseCardProps {
  house: House
  onViewDetails: (house: House) => void
}

const HouseCard: React.FC<HouseCardProps> = ({ house, onViewDetails }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="card overflow-hidden group cursor-pointer" onClick={() => onViewDetails(house)}>
      <div className="relative">
        <img
          src={house.images[0] || "/placeholder.svg"}
          alt={house.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              house.status === "available"
                ? "bg-green-100 text-green-800"
                : house.status === "reserved"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {house.status.charAt(0).toUpperCase() + house.status.slice(1)}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
            {house.type}
          </span>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white rounded-full p-3">
              <Eye size={24} className="text-primary-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
          {house.title}
        </h3>
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{house.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-primary-600">{formatPrice(house.price)}</div>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Bed size={16} className="mr-1" />
            <span>
              {house.bedrooms} bed{house.bedrooms !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>
              {house.bathrooms} bath{house.bathrooms !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{house.size} m²</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{new Date(house.createdAt).toLocaleDateString()}</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{house.description}</p>

        <div className="flex flex-wrap gap-1 mb-4">
          {house.features.slice(0, 3).map((feature, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              {feature}
            </span>
          ))}
          {house.features.length > 3 && (
            <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
              +{house.features.length - 3} more
            </span>
          )}
        </div>

        <button className="w-full btn-primary group-hover:bg-primary-700 transition-colors">View Details</button>
      </div>
    </div>
  )
}

export default HouseCard
