"use client"

import type React from "react"
import { useState, useMemo } from "react"
import { MapPin, Grid, List } from "lucide-react"
import PlotFilters from "../Plots/plot-filters"
import PlotCard from "../Plots/plot-card"
import PlotDetailModal from "../Plots/plot-detail"
import { plots } from "../lib/data"
import type { Plot } from "../lib/types"

const Plots: React.FC = () => {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [filters, setFilters] = useState({
    search: "",
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    location: "",
    status: "",
  })

  const filteredPlots = useMemo(() => {
    return plots.filter((plot) => {
      const matchesSearch =
        plot.title.toLowerCase().includes(filters.search.toLowerCase()) ||
        plot.location.toLowerCase().includes(filters.search.toLowerCase()) ||
        plot.description.toLowerCase().includes(filters.search.toLowerCase())

      const matchesPrice =
        (!filters.minPrice || plot.price >= filters.minPrice) && (!filters.maxPrice || plot.price <= filters.maxPrice)

      const matchesSize =
        (!filters.minSize || plot.size >= filters.minSize) && (!filters.maxSize || plot.size <= filters.maxSize)

      const matchesLocation = !filters.location || plot.location.includes(filters.location)

      const matchesStatus = !filters.status || plot.status === filters.status

      return matchesSearch && matchesPrice && matchesSize && matchesLocation && matchesStatus
    })
  }, [filters])

  const handleViewDetails = (plot: Plot) => {
    setSelectedPlot(plot)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPlot(null)
  }

  const handleReserve = (plotId: string, formData: any) => {
    console.log("Reserving plot:", plotId, formData)
    // TODO: Implement reservation logic
    alert("Reservation submitted successfully! We will contact you soon.")
  }

  const handleClearFilters = () => {
    setFilters({
      search: "",
      minPrice: 0,
      maxPrice: 0,
      minSize: 0,
      maxSize: 0,
      location: "",
      status: "",
    })
  }

  const availablePlots = filteredPlots.filter((plot) => plot.status === "available").length
  const totalPlots = filteredPlots.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Available Plots</h1>
            <p className="text-xl text-primary-100 mb-6 max-w-3xl mx-auto">
              Discover premium plots of land perfect for your dream home or investment across Rwanda's prime locations.
            </p>
            <div className="flex items-center justify-center space-x-6 text-primary-100">
              <div className="flex items-center">
                <MapPin size={20} className="mr-2" />
                <span>{totalPlots} Total Plots</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                <span>{availablePlots} Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-max py-8">
        {/* Filters */}
        <PlotFilters filters={filters} onFiltersChange={setFilters} onClearFilters={handleClearFilters} />

        {/* View Mode Toggle & Results Count */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              {totalPlots} Plot{totalPlots !== 1 ? "s" : ""} Found
            </h2>
            <p className="text-gray-600">{availablePlots} available for immediate purchase</p>
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

        {/* Plots Grid/List */}
        {totalPlots === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <MapPin size={64} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No plots found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
            <button onClick={handleClearFilters} className="btn-primary">
              Clear All Filters
            </button>
          </div>
        ) : (
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
            {filteredPlots.map((plot) => (
              <PlotCard key={plot.id} plot={plot} onViewDetails={handleViewDetails} />
            ))}
          </div>
        )}

        {/* Load More Button (if needed) */}
        {totalPlots > 0 && (
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing all {totalPlots} plot{totalPlots !== 1 ? "s" : ""}
            </p>
          </div>
        )}
      </div>

      {/* Plot Detail Modal */}
      <PlotDetailModal plot={selectedPlot} isOpen={isModalOpen} onClose={handleCloseModal} onReserve={handleReserve} />
    </div>
  )
}

export default Plots
