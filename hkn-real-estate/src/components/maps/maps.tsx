"use client";

import React, { useMemo } from "react";
import { MapPin, Home, Square } from "lucide-react";
import { useMapContext, type MapMarker } from "../content/mapContext";
import { plots, houses } from "../lib/data";

interface InteractivePropertyMapProps {
  onPropertySelect?: (property: MapMarker) => void;
  selectedPropertyId?: string;
  height?: string;
}

const InteractivePropertyMap: React.FC<InteractivePropertyMapProps> = ({
  onPropertySelect,
  selectedPropertyId,
  height = "24rem", // default to h-96
}) => {
  const { selectedMarker, selectMarker, centerMap } = useMapContext();

  const markers: MapMarker[] = useMemo(() => {
    const plotMarkers: MapMarker[] = plots.map((plot) => ({
      id: `plot-${plot.id}`,
      type: "plot" as const,
      lat: plot.coordinates.lat,
      lng: plot.coordinates.lng,
      title: plot.title,
      price: plot.price,
      data: plot,
    }));

    const houseMarkers: MapMarker[] = houses.map((house) => ({
      id: `house-${house.id}`,
      type: "house" as const,
      lat: house.coordinates.lat,
      lng: house.coordinates.lng,
      title: house.title,
      price: house.price,
      data: house,
    }));

    return [...plotMarkers, ...houseMarkers];
  }, []);

  const handleMarkerClick = (marker: MapMarker) => {
    selectMarker(marker);
    centerMap(marker.lat, marker.lng, 15);
    onPropertySelect?.(marker); // call the passed-in callback if available
  };

  return (
    <div
      className="relative w-full bg-gray-100 rounded-lg overflow-hidden"
      style={{ height }}
    >
      {/* Map placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 300">
            <path
              d="M50 150 Q100 100 200 120 Q300 140 350 150 Q320 200 250 220 Q150 240 80 200 Z"
              fill="rgba(34, 197, 94, 0.3)"
              stroke="rgba(34, 197, 94, 0.6)"
              strokeWidth="2"
            />
          </svg>
        </div>

        {/* Markers */}
        {markers.map((marker) => (
          <button
            key={marker.id}
            className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
              selectedPropertyId === marker.id ||
              selectedMarker?.id === marker.id
                ? "scale-125 z-20"
                : "z-10"
            }`}
            style={{
              left: `${((marker.lng + 30.5) / 1.5) * 100}%`,
              top: `${((marker.lat + 2.5) / 2) * 100}%`,
            }}
            onClick={() => handleMarkerClick(marker)}
          >
            <div
              className={`p-2 rounded-full shadow-lg ${
                marker.type === "plot"
                  ? "bg-green-500 text-white"
                  : "bg-blue-500 text-white"
              } ${
                selectedPropertyId === marker.id ||
                selectedMarker?.id === marker.id
                  ? "ring-4 ring-white"
                  : ""
              }`}
            >
              {marker.type === "plot" ? (
                <Square className="w-4 h-4" />
              ) : (
                <Home className="w-4 h-4" />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default InteractivePropertyMap;
