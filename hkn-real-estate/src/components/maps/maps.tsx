"use client"

import type React from "react"
import { useMemo } from "react"
import { MapPin, Home, Square } from "lucide-react"
import { useMapContext, type MapMarker } from "../../context/MapContext"
import { plots } from "../lib/data"
import { houses } from "../lib/data"

const InteractivePropertyMap: React.FC = () => {
  const { selectedMarker, selectMarker, centerMap } = useMapContext()

  const markers: MapMarker[] = useMemo(() => {
    const plotMarkers: MapMarker[] = plots.map((plot) => ({
      id: `plot-${plot.id}`,
      type: "plot" as const,
      lat: plot.coordinates.lat,
      lng: plot.coordinates.lng,
      title: plot.title,
      price: plot.price,
      data: plot,
    }))

    const houseMarkers: MapMarker[] = houses.map((house) => ({
      id: `house-${house.id}`,
      type: "house" as const,
      lat: house.coordinates.lat,
      lng: house.coordinates.lng,
      title: house.title,
      price: house.price,
      data: house,
    }))

    return [...plotMarkers, ...houseMarkers]
  }, [])

  const handleMarkerClick = (marker: MapMarker) => {
    selectMarker(marker)
    centerMap(marker.lat, marker.lng, 15)
  }

  return (
    <div className="relative w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
      {/* Map placeholder with interactive markers */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            {/* Rwanda outline placeholder */}
            <path
              d="M50 150 Q100 100 200 120 Q300 140 350 150 Q320 200 250 220 Q150 240 80 200 Z"
              fill="rgba(34, 197, 94, 0.3)"
              stroke="rgba(34, 197, 94, 0.6)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Interactive markers */}
        {markers.map((marker) => (
          <button
            key={marker.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
              selectedMarker?.id === marker.id ? "scale-125 z-20" : "z-10"
            }`}
            style={{
              left: `${((marker.lng + 30.5) / 1.5) * 100}%`,
              top: `${((marker.lat + 2.5) / 2) * 100}%`,
            }}
            onClick={() => handleMarkerClick(marker)}
          >
            <div
              className={`p-2 rounded-full shadow-lg ${
                marker.type === "plot" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
              } ${selectedMarker?.id === marker.id ? "ring-4 ring-white" : ""}`}
            >
              {marker.type === "plot" ? <Square className="w-4 h-4" /> : <Home className="w-4 h-4" />}
            </div>

            {/* Marker tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
              {marker.title} - ${marker.price.toLocaleString()}
            </div>
          </button>
        ))}

        {/* Map controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button className="p-2 bg-white rounded shadow hover:bg-gray-50">
            <MapPin className="w-4 h-4" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white p-3 rounded shadow">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Plots</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>Houses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Selected marker info */}
      {selectedMarker && (
        <div className="absolute top-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
          <h3 className="font-semibold text-lg">{selectedMarker.title}</h3>
          <p className="text-green-600 font-bold">${selectedMarker.price.toLocaleString()}</p>
          <p className="text-sm text-gray-600 capitalize">{selectedMarker.type}</p>
          <button
            className="mt-2 px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700"
            onClick={() => selectMarker(null)}
          >
            View Details
          </button>
        </div>
      )}
    </div>
  )
}

export default InteractivePropertyMap
