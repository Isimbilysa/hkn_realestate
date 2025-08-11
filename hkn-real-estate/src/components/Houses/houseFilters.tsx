"use client"

import type React from "react"
import { Search, Filter, X } from "lucide-react"

interface HouseFiltersProps {
  filters: {
    search: string
    minPrice: number
    maxPrice: number
    bedrooms: number
    bathrooms: number
    location: string
    type: string
    status: string
  }
  onFiltersChange: (filters: any) => void
  onClearFilters: () => void
}

const HouseFilters: React.FC<HouseFiltersProps> = ({ filters, onFiltersChange, onClearFilters }) => {
  const handleInputChange = (field: string, value: string | number) => {
    onFiltersChange({
      ...filters,
      [field]: value,
    })
  }

  const locations = ["All Locations", "Kiyovu", "Remera", "Kimihurura", "Gacuriro", "Nyarutarama", "Kigali Heights"]
  const houseTypes = ["All Types", "apartment", "villa", "townhouse", "duplex"]
  const statusOptions = ["All Status", "available", "reserved", "sold"]
  const bedroomOptions = [0, 1, 2, 3, 4, 5, 6]
  const bathroomOptions = [0, 1, 2, 3, 4, 5]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center">
          <Filter size={20} className="mr-2" />
          Filter Houses
        </h3>
        <button onClick={onClearFilters} className="text-gray-500 hover:text-gray-700 flex items-center text-sm">
          <X size={16} className="mr-1" />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="lg:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">Search</label>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search houses..."
              value={filters.search}
              onChange={(e) => handleInputChange("search", e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
          <select
            value={filters.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {locations.map((location) => (
              <option key={location} value={location === "All Locations" ? "" : location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* House Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
          <select
            value={filters.type}
            onChange={(e) => handleInputChange("type", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {houseTypes.map((type) => (
              <option key={type} value={type === "All Types" ? "" : type}>
                {type === "All Types" ? type : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {/* Bedrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bedrooms</label>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleInputChange("bedrooms", Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value={0}>Any</option>
            {bedroomOptions.slice(1).map((num) => (
              <option key={num} value={num}>
                {num}+ bedroom{num !== 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Bathrooms */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Bathrooms</label>
          <select
            value={filters.bathrooms}
            onChange={(e) => handleInputChange("bathrooms", Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value={0}>Any</option>
            {bathroomOptions.slice(1).map((num) => (
              <option key={num} value={num}>
                {num}+ bathroom{num !== 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleInputChange("status", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status === "All Status" ? "" : status}>
                {status === "All Status" ? status : status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Price Range (RWF)</label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice || ""}
              onChange={(e) => handleInputChange("minPrice", Number(e.target.value))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice || ""}
              onChange={(e) => handleInputChange("maxPrice", Number(e.target.value))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseFilters
