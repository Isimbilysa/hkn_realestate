"use client"

import type React from "react"
import { createContext, useContext, type ReactNode } from "react"
import { useMap, type MapMarker } from "../hooks/useMaps"

interface MapContextType {
  selectedMarker: MapMarker | null
  mapCenter: { lat: number; lng: number }
  zoom: number
  selectMarker: (marker: MapMarker | null) => void
  centerMap: (lat: number, lng: number, zoom?: number) => void
  setZoom: (zoom: number) => void
}

const MapContext = createContext<MapContextType | undefined>(undefined)

export const MapProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const mapState = useMap()

  return <MapContext.Provider value={mapState}>{children}</MapContext.Provider>
}

export const useMapContext = () => {
  const context = useContext(MapContext)
  if (context === undefined) {
    throw new Error("useMapContext must be used within a MapProvider")
  }
  return context
}
export { MapMarker }

