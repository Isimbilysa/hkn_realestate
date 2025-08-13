export interface Plot {
  availability: string
  id: string
  title: string
  price: number
  size: number // in square meters
  location: string
    sizeSqFt: number
  coordinates: {
    lat: number
    lng: number
  }
  images: string[]
  description: string
  features: string[]
  status: "available" | "reserved" | "sold"
  createdAt: string
}

export interface House {
  id: string
  title: string
  price: number
  bedrooms: number
  bathrooms: number
  size: number // in square meters
  location: string
  coordinates: {
    lat: number
    lng: number
  }
  images: string[]
  description: string
  features: string[]
  type: "apartment" | "villa" | "townhouse" | "duplex"
  status: "available" | "reserved" | "sold"
  createdAt: string
}

export interface Testimonial {
  id: string
  name: string
  image: string
  quote: string
  rating: number
  location: string
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
  propertyType?: "plot" | "house"
  propertyId?: string
}

export interface FilterOptions {
  minPrice?: number
  maxPrice?: number
  location?: string
  minSize?: number
  maxSize?: number
  bedrooms?: number
  propertyType?: string
}
