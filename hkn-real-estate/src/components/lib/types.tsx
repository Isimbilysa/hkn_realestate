export interface Plot {
  id: string;
  name: string;
  location: string;
  price: number;
  sizeSqFt: number;
  imageUrl: string;
  description: string;
  availability: 'available' | 'sold' | 'reserved';
  coordinates: { lat: number; lng: number };
}

export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  clientImageUrl: string;
}
