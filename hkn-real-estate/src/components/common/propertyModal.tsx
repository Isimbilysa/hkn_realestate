"use client"

import type React from "react"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight, MapPin, Square, Calendar, Phone, Mail } from "lucide-react"
import type { MapProperty} from "../hooks/useMaps"

interface PropertyModalProps {
  property: MapProperty | null
  isOpen: boolean
  onClose: () => void
  onReserve?: (propertyId: string) => void
}

const PropertyModal: React.FC<PropertyModalProps> = ({ property, isOpen, onClose, onReserve }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen || !property) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length)
  }

  const handleReserve = () => {
    onReserve?.(property.id)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin size={16} className="mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
          {/* Image Gallery */}
          <div>
            <div className="relative mb-4">
              <img
                src={property.images[currentImageIndex] || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-80 object-cover rounded-lg"
              />

              {/* Navigation arrows */}
              {property.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              {/* Image counter */}
              {property.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {property.images.length}
                </div>
              )}

              {/* Status badge */}
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
            </div>

            {/* Image thumbnails */}
            {property.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index ? "border-primary-600" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${property.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Property Details */}
          <div>
            <div className="mb-6">
              <div className="text-3xl font-bold text-primary-600 mb-4">{formatPrice(property.price)}</div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Square size={16} className="mr-2" />
                  <span>Property Type: {property.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar size={16} className="mr-2" />
                  <span>Status: {property.status}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {property.status === "available" && (
                <button onClick={handleReserve} className="w-full btn-primary">
                  Reserve This Property
                </button>
              )}

              <div className="grid grid-cols-2 gap-3">
                <a href="tel:+250788123456" className="btn-secondary text-center">
                  <Phone size={16} className="inline mr-2" />
                  Call Us
                </a>
                <a href="mailto:info@hknrealestate.rw" className="btn-secondary text-center">
                  <Mail size={16} className="inline mr-2" />
                  Email Us
                </a>
              </div>

              <button
                onClick={() => {
                  const url = `https://www.google.com/maps/dir/?api=1&destination=${property.coordinates.lat},${property.coordinates.lng}`
                  window.open(url, "_blank")
                }}
                className="w-full btn-secondary"
              >
                <MapPin size={16} className="inline mr-2" />
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyModal
