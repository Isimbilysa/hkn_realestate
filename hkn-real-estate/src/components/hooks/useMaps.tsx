"use client"

import { useState, useCallback } from "react"
import type { Plot, House } from "../lib/types"

export interface MapMarker {
  id: string
  type: "plot" | "house"
  lat: number
  lng: number
  title: string
  price: number
  data: Plot | House
}
export type MapProperty = {
  id: string
  title: string
  price: number
  location: string
  coordinates: [number, number]
  type: "house" | "plot"
  status: string
  images: string[]
}


export const useMap = () => {
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null)
  const [mapCenter, setMapCenter] = useState({ lat: -1.9441, lng: 30.0619 }) // Kigali coordinates
  const [zoom, setZoom] = useState(12)

  const selectMarker = useCallback((marker: MapMarker | null) => {
    setSelectedMarker(marker)
  }, [])

  const centerMap = useCallback((lat: number, lng: number, newZoom?: number) => {
    setMapCenter({ lat, lng })
    if (newZoom) setZoom(newZoom)
  }, [])

  return {
    selectedMarker,
    mapCenter,
    zoom,
    selectMarker,
    centerMap,
    setZoom,
  }
}
