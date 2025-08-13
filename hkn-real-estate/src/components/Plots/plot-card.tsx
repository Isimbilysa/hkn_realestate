"use client"

import { Button } from "../ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import type { Plot } from "../lib/types"
import { MapPin, Ruler, Eye } from "lucide-react"

interface PlotCardProps {
  plot: Plot
  onViewDetails: (plot: Plot) => void
}

export default function PlotCard({ plot, onViewDetails }: PlotCardProps) {
  const isAvailable = plot.availability === "available"

  return (
    <Card className="card-premium group overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-golden overflow-hidden">
        <img
          src={plot.images[0] || "/placeholder.svg"}
          alt={plot.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              isAvailable
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {plot.availability === "available"
              ? "Available"
              : plot.availability.charAt(0).toUpperCase() + plot.availability.slice(1)}
          </span>
        </div>

        {/* Quick View Button */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            onClick={() => onViewDetails(plot)}
          >
            <Eye className="h-4 w-4" />
          </Button>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="pb-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-balance group-hover:text-primary transition-colors">{plot.title}</h3>
          <div className="flex items-center text-muted-foreground text-sm">
            <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
            <span className="truncate">{plot.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0 pb-4">
        <div className="space-y-4">
          {/* Price */}
          <div className="text-3xl font-bold text-primary">${plot.price.toLocaleString()}</div>

          {/* Details */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center">
              <Ruler className="h-4 w-4 mr-1" />
              <span>{plot.sizeSqFt.toLocaleString()} sq ft</span>
            </div>
            <div className="text-right">
              <span className="text-xs">Price per sq ft</span>
              <div className="font-medium text-foreground">${Math.round(plot.price / plot.sizeSqFt)}</div>
            </div>
          </div>

          {/* Description Preview */}
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{plot.description}</p>
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <Button
          className={`w-full transition-all duration-300 ${
            isAvailable
              ? "btn-primary"
              : "bg-muted text-muted-foreground cursor-not-allowed hover:bg-muted hover:text-muted-foreground"
          }`}
          onClick={() => isAvailable && onViewDetails(plot)}
          disabled={!isAvailable}
        >
          {isAvailable ? "View Details" : "Not Available"}
        </Button>
      </CardFooter>
    </Card>
  )
}
