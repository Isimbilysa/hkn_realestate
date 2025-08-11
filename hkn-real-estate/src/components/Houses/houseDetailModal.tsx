"use client"

import {
  X,
  MapPin,
  Bed,
  Bath,
  Square,
  Calendar,
  CheckCircle,
  Phone,
  Mail,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import type { House } from "../lib/types"
import type React from "react"
import { useState, useEffect } from "react"

interface HouseDetailModalProps {
  house: House | null
  isOpen: boolean
  onClose: () => void
  onReserve: (houseId: string, formData: any) => void
}

const HouseDetailModal: React.FC<HouseDetailModalProps> = ({ house, isOpen, onClose, onReserve }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showReservationForm, setShowReservationForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen || !house) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-RW", {
      style: "currency",
      currency: "RWF",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onReserve(house.id, formData)
    setShowReservationForm(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value })
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % house.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + house.images.length) % house.images.length)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{house.title}</h2>
            <p className="text-gray-600 capitalize">{house.type}</p>
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
                src={house.images[currentImageIndex] || "/placeholder.svg"}
                alt={house.title}
                className="w-full h-80 object-cover rounded-lg"
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

              {/* Navigation arrows */}
              {house.images.length > 1 && (
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
              {house.images.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {house.images.length}
                </div>
              )}
            </div>

            {/* Image thumbnails */}
            {house.images.length > 1 && (
              <div className="flex space-x-2 overflow-x-auto">
                {house.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 ${
                      currentImageIndex === index ? "border-primary-600" : "border-gray-200"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${house.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div>
            <div className="mb-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">{formatPrice(house.price)}</div>
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin size={16} className="mr-1" />
                <span>{house.location}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Bed size={16} className="mr-1" />
                  <span>
                    {house.bedrooms} bed{house.bedrooms !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Bath size={16} className="mr-1" />
                  <span>
                    {house.bathrooms} bath{house.bathrooms !== 1 ? "s" : ""}
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Square size={16} className="mr-1" />
                  <span>{house.size} m²</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Calendar size={16} className="mr-1" />
                <span>Listed on {new Date(house.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-700">{house.description}</p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Features & Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {house.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle size={16} className="text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {house.status === "available" && (
                <button onClick={() => setShowReservationForm(true)} className="w-full btn-primary">
                  Reserve This House
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
            </div>
          </div>
        </div>

        {/* Reservation Form */}
        {showReservationForm && (
          <div className="border-t p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Reserve This House</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <div className="relative">
                    <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <div className="relative">
                  <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Any additional information or questions..."
                />
              </div>
              <div className="flex space-x-3">
                <button type="submit" className="flex-1 btn-primary">
                  Submit Reservation
                </button>
                <button type="button" onClick={() => setShowReservationForm(false)} className="flex-1 btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}

export default HouseDetailModal
