"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { MapPin} from "lucide-react"

const mapProperties = [
  { id: 1, title: "Modern Villa", price: "$450,000", type: "House", lat: -1.9441, lng: 30.0619, available: true },
  { id: 2, title: "Commercial Land", price: "$280,000", type: "Land", lat: -1.9506, lng: 30.0588, available: true },
  { id: 3, title: "Luxury Apartment", price: "$320,000", type: "House", lat: -1.9403, lng: 30.0644, available: false },
  { id: 4, title: "Residential Plot", price: "$150,000", type: "Land", lat: -1.9378, lng: 30.0726, available: true },
  {
    id: 5,
    title: "Executive Townhouse",
    price: "$380,000",
    type: "House",
    lat: -1.9355,
    lng: 30.0606,
    available: true,
  },
  { id: 6, title: "Investment Land", price: "$200,000", type: "Land", lat: -1.9462, lng: 30.0677, available: true },
]

export default function InteractiveMap() {
  const [selectedProperty, setSelectedProperty] = useState<(typeof mapProperties)[0] | null>(null)
  const [filter, setFilter] = useState<"All" | "House" | "Land">("All")
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<any>(null)
  const markersRef = useRef<any[]>([])

  // const filteredProperties = mapProperties.filter((property) => filter === "All" || property.type === filter)

  useEffect(() => {
    const loadMap = async () => {
      if (typeof window === "undefined") return

      // Dynamically import Leaflet
      const L = (await import("leaflet")).default

      // Load Leaflet CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      if (mapRef.current && !mapInstanceRef.current) {
        mapInstanceRef.current = L.map(mapRef.current).setView([-1.9441, 30.0619], 13)

        // Add OpenStreetMap tiles
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        }).addTo(mapInstanceRef.current)

        // Custom marker icons
        const createCustomIcon = (color: string, available: boolean) => {
          return L.divIcon({
            className: "custom-marker",
            html: `<div style="
              width: 24px; 
              height: 24px; 
              background-color: ${available ? color : "#9ca3af"}; 
              border: 2px solid white; 
              border-radius: 50%; 
              box-shadow: 0 2px 4px rgba(0,0,0,0.3);
              cursor: pointer;
              transition: transform 0.2s;
            "></div>`,
            iconSize: [24, 24],
            iconAnchor: [12, 12],
          })
        }

        // Add markers for all properties
        mapProperties.forEach((property) => {
          const color = property.type === "House" ? "#1E3A8A" : "#F7BD01"
          const icon = createCustomIcon(color, property.available)

          const marker = L.marker([property.lat, property.lng], { icon })
            .addTo(mapInstanceRef.current)
            .on("click", () => {
              setSelectedProperty(property)
              // Highlight selected marker
              updateMarkers()
            })

          markersRef.current.push({ marker, property })
        })
      }
    }

    loadMap()

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
        markersRef.current = []
      }
    }
  }, [])

  const updateMarkers = () => {
    markersRef.current.forEach(({ marker, property }) => {
      const shouldShow = filter === "All" || property.type === filter

      if (shouldShow) {
        marker.addTo(mapInstanceRef.current)

        // Update marker style for selection
        const isSelected = selectedProperty?.id === property.id
        const color = property.type === "House" ? "#1E3A8A" : "#F7BD01"
        const scale = isSelected ? "scale(1.2)" : "scale(1)"
        const ring = isSelected ? "box-shadow: 0 0 0 3px rgba(30, 58, 138, 0.5);" : ""

        marker.getElement().innerHTML = `<div style="
          width: 24px; 
          height: 24px; 
          background-color: ${property.available ? color : "#9ca3af"}; 
          border: 2px solid white; 
          border-radius: 50%; 
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
          cursor: pointer;
          transition: transform 0.2s;
          transform: ${scale};
          ${ring}
        "></div>`
      } else {
        marker.remove()
      }
    })
  }

  useEffect(() => {
    updateMarkers()
  }, [filter, selectedProperty])

  return (
    <section id="map" className="py-20 bg-[#F9FAFB] relative overflow-hidden">
  {/* Decorative overlay */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,#F7BD01_0%,transparent_50%)] opacity-20" />

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-2">
        Interactive <span className="text-[#F7BD01]">Property Map</span>
      </h2>
      <div className="h-1 w-24 bg-[#F7BD01] mx-auto rounded-full mb-4"></div>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Explore available properties in Kigali, Rwanda. Click on any marker to view details.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Map Area */}
      <div className="lg:col-span-2">
        <Card className="rounded-xl shadow-lg overflow-hidden">
          <CardHeader className="flex items-center justify-between px-6 py-4">
            <h3 className="flex items-center text-white font-semibold">
              <MapPin className="w-5 h-5 mr-2 text-[#F7BD01]" />
              Property Locations
            </h3>
            <div className="flex gap-2">
              {["All", "House", "Land"].map((f) => (
                <Button
                  key={f}
                  size="sm"
                  variant={filter === f ? "default" : "outline"}
                  onClick={() => setFilter(f as any)}
                  className="rounded-full px-4 py-1 text-sm font-medium"
                >
                  {f}
                </Button>
              ))}
            </div>
          </CardHeader>
          <CardContent className="p-0 h-96 lg:h-[500px]">
            <div ref={mapRef} className="w-full h-full" />
          </CardContent>
        </Card>
      </div>

      {/* Property Details + Legend */}
      <div className="space-y-6">
        {/* Selected Property */}
        <Card className="rounded-xl shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedProperty ? (
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{selectedProperty.title}</h3>
                <p className="text-2xl font-bold text-[#F7BD01]">{selectedProperty.price}</p>
                <div className="flex gap-2">
                  <Badge variant="default">{selectedProperty.type}</Badge>
                  <Badge variant={selectedProperty.available ? "default" : "destructive"}>
                    {selectedProperty.available ? "Available" : "Sold"}
                  </Badge>
                </div>
                {selectedProperty.available && (
                  <Button className="w-full bg-[#F7BD01] hover:bg-[#dba901] text-[#1E3A8A] mt-2">
                    Contact About This Property
                  </Button>
                )}
              </div>
            ) : (
              <p className="text-gray-200 text-center py-8">
                Click on a marker to view property details
              </p>
            )}
          </CardContent>
        </Card>

        {/* Map Legend */}
        <Card className="rounded-xl shadow-lg">
          <CardHeader>
            <CardTitle>Legend</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-[#1E3A8A] rounded-full"></span>
              <span className="text-sm text-gray-200">Available Houses</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-[#F7BD01] rounded-full"></span>
              <span className="text-sm text-gray-200">Available Land Plots</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 bg-gray-400 rounded-full"></span>
              <span className="text-sm text-gray-200">Sold Properties</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>

)}
