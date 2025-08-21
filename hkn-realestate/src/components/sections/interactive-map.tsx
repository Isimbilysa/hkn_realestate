"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Badge } from "../ui/badge"
import { MapPin, Filter, Home, Building2 } from "lucide-react"

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

  const filteredProperties = mapProperties.filter((property) => filter === "All" || property.type === filter)

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
          attribution: "© OpenStreetMap contributors",
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
          const color = property.type === "House" ? "#0ea5e9" : "#8b5cf6"
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
        const color = property.type === "House" ? "#0ea5e9" : "#8b5cf6"
        const scale = isSelected ? "scale(1.2)" : "scale(1)"
        const ring = isSelected ? "box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.5);" : ""

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
    <section id="map" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
            Interactive Property Map
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore available properties in Kigali, Rwanda on our interactive map. Click on any marker to view details.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="h-96 lg:h-[500px]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Property Locations
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant={filter === "All" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("All")}
                    >
                      <Filter className="w-4 h-4 mr-1" />
                      All
                    </Button>
                    <Button
                      variant={filter === "House" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("House")}
                    >
                      <Home className="w-4 h-4 mr-1" />
                      Houses
                    </Button>
                    <Button
                      variant={filter === "Land" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilter("Land")}
                    >
                      <Building2 className="w-4 h-4 mr-1" />
                      Land
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative h-full p-0">
                <div ref={mapRef} className="w-full h-full rounded-lg" style={{ minHeight: "400px" }} />
              </CardContent>
            </Card>
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Property Details</CardTitle>
              </CardHeader>
              <CardContent>
                {selectedProperty ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{selectedProperty.title}</h3>
                      <p className="text-2xl font-bold text-primary">{selectedProperty.price}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Badge variant={selectedProperty.type === "House" ? "default" : "secondary"}>
                        {selectedProperty.type}
                      </Badge>
                      <Badge variant={selectedProperty.available ? "default" : "destructive"}>
                        {selectedProperty.available ? "Available" : "Sold"}
                      </Badge>
                    </div>

                    {selectedProperty.available && (
                      <Button className="w-full bg-primary hover:bg-primary/90">Contact About This Property</Button>
                    )}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-center py-8">Click on a marker to view property details</p>
                )}
              </CardContent>
            </Card>

            {/* Legend */}
            <Card>
              <CardHeader>
                <CardTitle>Map Legend</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                  <span className="text-sm">Available Houses</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                  <span className="text-sm">Available Land Plots</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                  <span className="text-sm">Sold Properties</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
