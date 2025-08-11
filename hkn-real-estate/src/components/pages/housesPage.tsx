"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { Home, Grid, List } from "lucide-react"
import HouseFilters from "../Houses/houseFilters"
import HouseCard from "../Houses/HouseCard"
import HouseDetailModal from "../Houses/houseDetailModal"
import { houses } from "../lib/data"
import type { House } from "../lib/types"

const Houses: React.FC = () => {
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filters, setFilters] = useState({
    search: "",
    minPrice: 0,
    maxPrice: 0,
    bedrooms: 0,
    bathrooms: 0,
    location: "",
    type: "",
    status: "",
  })

  const filteredHouses = useMemo(() => {
    return houses.filter((house) => {
      const matchesSearch =
        house.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        house.location.toLowerCase().includes(filters.search.toLowerCase()) ||
        house.description.toLowerCase().includes(filters.search.toLowerCase()) ||
        house.type.toLowerCase().includes(filters.search.toLowerCase())

      const matchesPrice =
        (!filters.minPrice || house.price >= filters.minPrice) && (!filters.maxPrice || house.price <= filters.maxPrice)

      const matchesBedrooms = !filters.bedrooms || house.bedrooms >= filters.bedrooms

      const matchesBathrooms = !filters.bathrooms || house.bathrooms >= filters.bathrooms

      const matchesLocation = !filters.location || house.location.includes(filters.location)

      const matchesType = !filters.type || house.type === filters.type

      const matchesStatus = !filters.status || house.status === filters.status

      return (
        matchesSearch &&
        matchesPrice &&
        matchesBedrooms &&
        matchesBathrooms &&
        matchesLocation &&
        matchesType &&
        matchesStatus
      )
    })
  }, [filters])

  const handleViewDetails = (house: House) => {
    setSelectedHouse(house)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedHouse(null)
  }

  const handleReserve = (houseId: string, formData: any) => {
    console.log("Reserving house:", houseId, formData)
    // TODO: Implement reservation logic
    alert("Reservation submitted successfully! We will contact you soon.")
  }

  const handleClearFilters = () => {
    setFilters({
      search: "",
      minPrice: 0,
      maxPrice: 0,
      bedrooms: 0,
      bathrooms: 0,
      location: "",
      type: "",
      status: "",
    })
  }

  const availableHouses = filteredHouses.filter((house) => house.status === "available").length
  const totalHouses = filteredHouses.length

  // Group houses by type for stats
  const housesByType = filteredHouses.reduce(
    (acc, house) => {
      acc[house.type] = (acc[house.type] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Houses for Sale</h1>
            <p className="text-xl text-primary-100 mb-6 max-w-3xl mx-auto">
              Discover premium houses ready for you to call home. From modern apartments to luxury villas across
              Rwanda's finest locations.
            </p>
            <div className="flex items-center justify-center space-x-6 text-primary-100">
              <div className="flex items-center">
                <Home size={20} className="mr-2" />
                <span>{totalHouses} Total Houses</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span>{availableHouses} Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-max py-8">
        {/* Property Type Stats */}
        {Object.keys(housesByType).length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Types</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(housesByType).map(([type, count]) => (
                <div key={type} className="text-center">
                  <div className="text-2xl font-bold text-primary-600">{count}</div>
                  <div className="text-gray-600 capitalize">
                    {type}
                    {count !== 1 ? "s" : ""}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Filters */}
        <HouseFilters filters={filters} onFiltersChange={setFilters} onClearFilters={handleClearFilters} />

        {/* View Mode Toggle & Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {totalHouses} House{totalHouses !== 1 ? "s" : ""} Found
            </h2>
            <p className="text-gray-600">{availableHouses} available for immediate purchase</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-primary-600 text-white" : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>

        {/* Houses Grid/List */}
        {totalHouses === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Home size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No houses found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
            <button onClick={handleClearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
            {filteredHouses.map((house) => (
              <HouseCard key={house.id} house={house} onViewDetails={handleViewDetails} />
            ))}
          </div>
        )}

        {/* Load More Button (if needed) */}
        {totalHouses > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing all {totalHouses} house{totalHouses !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>

      {/* House Detail Modal */}
      <HouseDetailModal
        house={selectedHouse}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onReserve={handleReserve}
      />
    </div>
  )
}

export default Houses
