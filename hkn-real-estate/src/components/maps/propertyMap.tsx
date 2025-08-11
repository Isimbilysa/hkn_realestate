import type React from "react"
import { MapPin, Home, Square } from "lucide-react"
import { houses } from "../lib/data"
import { plots } from "../lib/data"

const PropertyMap: React.FC = () => {
  const allProperties = [
    ...houses.map((h) => ({ ...h, type: "house" as const })),
    ...plots.map((p) => ({ ...p, type: "plot" as const })),
  ]

  return (
    <div className="bg-gray-100 rounded-xl p-8 min-h-[400px] relative overflow-hidden">
      {/* Map Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 opacity-50"></div>

      {/* Map Title */}
      <div className="relative z-10 text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Property Locations</h3>
        <p className="text-gray-600">Interactive map showing available properties across Kigali</p>
      </div>

      {/* Simulated Map with Property Markers */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {allProperties.slice(0, 8).map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {property.type === "house" ? (
                  <Home size={20} className="text-blue-600" />
                ) : (
                  <Square size={20} className="text-green-600" />
                )}
                <span className="text-sm font-medium text-gray-900">{property.type}</span>
              </div>
              <MapPin size={16} className="text-gray-400" />
            </div>
            <h4 className="font-semibold text-sm text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
              {property.title}
            </h4>
            <p className="text-xs text-gray-600 mb-2">{property.location}</p>
            <div className="text-sm font-bold text-primary-600">
              {new Intl.NumberFormat("en-RW", {
                style: "currency",
                currency: "RWF",
                minimumFractionDigits: 0,
              }).format(property.price)}
            </div>
          </div>
        ))}
      </div>

      {/* Map Legend */}
      <div className="relative z-10 flex justify-center mt-6 space-x-6">
        <div className="flex items-center space-x-2">
          <Home size={20} className="text-blue-600" />
          <span className="text-sm text-gray-700">Houses</span>
        </div>
        <div className="flex items-center space-x-2">
          <Square size={20} className="text-green-600" />
          <span className="text-sm text-gray-700">Plots</span>
        </div>
      </div>
    </div>
  )
}

export default PropertyMap
