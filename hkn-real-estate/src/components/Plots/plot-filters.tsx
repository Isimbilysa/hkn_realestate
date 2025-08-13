"use client"

import { useState } from "react"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Button } from "../ui/button"

interface PlotFiltersProps {
  onFilterChange: (filters: { minPrice: number; maxPrice: number; minSize: number; maxSize: number }) => void
}

export default function PlotFilters({ onFilterChange }: PlotFiltersProps) {
  const [minPrice, setMinPrice] = useState<string>("")
  const [maxPrice, setMaxPrice] = useState<string>("")
  const [minSize, setMinSize] = useState<string>("")
  const [maxSize, setMaxSize] = useState<string>("")

  const handleApplyFilters = () => {
    onFilterChange({
      minPrice: Number.parseFloat(minPrice) || 0,
      maxPrice: Number.parseFloat(maxPrice) || Number.POSITIVE_INFINITY,
      minSize: Number.parseFloat(minSize) || 0,
      maxSize: Number.parseFloat(maxSize) || Number.POSITIVE_INFINITY,
    })
  }

  const handleClearFilters = () => {
    setMinPrice("")
    setMaxPrice("")
    setMinSize("")
    setMaxSize("")
    onFilterChange({ minPrice: 0, maxPrice: Number.POSITIVE_INFINITY, minSize: 0, maxSize: Number.POSITIVE_INFINITY })
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 border rounded-lg shadow-sm bg-white dark:bg-gray-950">
      <div className="space-y-2">
        <Label htmlFor="minPrice">Min Price</Label>
        <Input
          id="minPrice"
          type="number"
          placeholder="e.g., 100000"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="maxPrice">Max Price</Label>
        <Input
          id="maxPrice"
          type="number"
          placeholder="e.g., 200000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="minSize">Min Size (sq ft)</Label>
        <Input
          id="minSize"
          type="number"
          placeholder="e.g., 5000"
          value={minSize}
          onChange={(e) => setMinSize(e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="maxSize">Max Size (sq ft)</Label>
        <Input
          id="maxSize"
          type="number"
          placeholder="e.g., 15000"
          value={maxSize}
          onChange={(e) => setMaxSize(e.target.value)}
        />
      </div>
      <div className="col-span-full flex justify-end gap-2 mt-2">
        <Button onClick={handleClearFilters} variant="outline">
          Clear Filters
        </Button>
        <Button onClick={handleApplyFilters}>Apply Filters</Button>
      </div>
    </div>
  )
}
