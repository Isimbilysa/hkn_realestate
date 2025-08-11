"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, Play, Users, Award, TrendingUp } from "lucide-react"
import PropertyCard from "../common/propertyCard"
import InteractivePropertyMap from "../maps/maps"
import PropertyModal from "@/components/common/PropertyModal"
import TestimonialCard from "../common/TestimonialCard"
import { houses } from "../lib/data"
import { plots } from "../lib/data"
import { testimonials } from "../lib/data"
import type { MapProperty } from "@/hooks/useMap"

const Home: React.FC = () => {
  const [selectedProperty, setSelectedProperty] = useState<MapProperty | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const featuredProperties = [
    ...houses.slice(0, 2).map((h) => ({ ...h, type: "house" as const })),
    ...plots.slice(0, 2).map((p) => ({ ...p, type: "plot" as const })),
  ]

  const handleViewDetails = (id: string) => {
    const property = [...houses, ...plots].find((p) => p.id === id)
    if (property) {
      const mapProperty: MapProperty = {
        id: property.id,
        title: property.title,
        price: property.price,
        location: property.location,
        coordinates: property.coordinates,
        type: houses.includes(property as any) ? "house" : "plot",
        status: property.status,
        images: property.images,
      }
      setSelectedProperty(mapProperty)
      setIsModalOpen(true)
    }
  }

  const handleBookNow = (id: string) => {
    console.log("Book now for:", id)
    // TODO: Implement booking modal or form
  }

  const handlePropertySelect = (property: MapProperty) => {
    setSelectedProperty(property)
    setIsModalOpen(true)
  }

  const handlePlayVideo = () => {
    console.log("Play virtual tour video")
    // TODO: Implement video modal
  }

  const handleReserveProperty = (propertyId: string) => {
    console.log("Reserve property:", propertyId)
    alert("Reservation request submitted! We will contact you soon.")
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Find Your Dream Property in
                <span className="text-secondary-400"> Rwanda</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-primary-100">
                Premium plots and houses across Kigali and beyond. Your trusted partner for exceptional real estate
                investments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/plots" className="btn-secondary">
                  View Available Plots
                </Link>
                <Link to="/houses" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                  View Houses
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Background Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">100+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">10+</div>
              <div className="text-gray-600">Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Explore Properties by Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our interactive map to discover available plots and houses across prime locations in Kigali. Click on
              any marker to view detailed information.
            </p>
          </div>
          <InteractivePropertyMap
            onPropertySelect={handlePropertySelect}
            selectedPropertyId={selectedProperty?.id}
            height="600px"
          />
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked premium properties that offer exceptional value and prime locations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                type={property.type}
                onViewDetails={handleViewDetails}
                onBookNow={handleBookNow}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/plots" className="inline-flex items-center btn-primary mr-4 mb-4 sm:mb-0">
              View All Plots
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link to="/houses" className="inline-flex items-center btn-secondary">
              View All Houses
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Virtual Tour Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take a Virtual Tour</h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience our properties from the comfort of your home with our immersive drone footage and virtual
              tours.
            </p>
            <div className="relative bg-gray-800 rounded-xl overflow-hidden aspect-video">
              <img
                src="/placeholder.svg?height=400&width=800&text=Virtual+Property+Tour"
                alt="Virtual Property Tour"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={handlePlayVideo}
                  className="bg-primary-600 hover:bg-primary-700 text-white p-6 rounded-full transition-all duration-300 hover:scale-110"
                >
                  <Play size={32} fill="currentColor" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose HKN Real Estate?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide exceptional service and expertise to help you find the perfect property investment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We carefully select only the highest quality properties in prime locations across Rwanda.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600">
                Our experienced team provides personalized consultation to help you make informed decisions.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-primary-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Investment Value</h3>
              <p className="text-gray-600">
                Properties selected for their strong potential for appreciation and return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact our expert team today and let us help you discover the perfect property investment in Rwanda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-secondary">
                Get Started Today
              </Link>
              <a href="tel:+250788123456" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Modal */}
      <PropertyModal
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onReserve={handleReserveProperty}
      />
    </div>
  )
}

export default Home
