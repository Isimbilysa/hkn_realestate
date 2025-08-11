"use client"

import type React from "react"
import { Phone, MessageSquare, Clock, Users } from "lucide-react"
import ContactForm from "../common/conctactForm"
import ContactInfo from "../common/contactInfo"
// import OfficeLocationMap from "@/components/maps/OfficeLocationMap"

const Contact: React.FC = () => {
  const handleFormSubmit = (formData: any) => {
    console.log("Contact form submitted:", formData)
    // TODO: Implement actual form submission logic
  }

  const quickStats = [
    { icon: Phone, label: "24/7 Support", value: "Always Available" },
    { icon: Users, label: "Expert Team", value: "5+ Years Experience" },
    { icon: MessageSquare, label: "Quick Response", value: "Within 2 Hours" },
    { icon: Clock, label: "Office Hours", value: "Mon-Sat 8AM-6PM" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary-600 text-white py-16">
        <div className="container-max">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-100 mb-8 max-w-3xl mx-auto">
              Ready to find your dream property? Get in touch with our expert team and let us help you make the right
              investment decision.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {quickStats.map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-primary-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent size={24} />
                    </div>
                    <div className="text-sm font-medium">{stat.label}</div>
                    <div className="text-xs text-primary-200">{stat.value}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <div className="container-max py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <ContactForm
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you as soon as possible. We're here to help with all your real estate needs."
              onSubmit={handleFormSubmit}
            />
          </div>

          {/* Contact Information */}
          <div>
            <ContactInfo />
          </div>
        </div>

        {/* Office Location Map */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in the heart of Kigali, our office is easily accessible and equipped with everything you need for
              a comfortable consultation.
            </p>
          </div>
          {/* <OfficeLocationMap /> */}
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How do I schedule a property viewing?</h3>
              <p className="text-gray-600">
                You can schedule a viewing by calling us, sending an email, or using the contact form above. We'll
                arrange a convenient time for you to visit the property.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What documents do I need to buy a property?</h3>
              <p className="text-gray-600">
                You'll need a valid ID, proof of income, bank statements, and any pre-approval letters. Our team will
                guide you through the complete documentation process.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Do you offer financing assistance?</h3>
              <p className="text-gray-600">
                Yes, we work with several financial institutions and can help connect you with mortgage lenders and
                financing options that suit your needs.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">How long does the buying process take?</h3>
              <p className="text-gray-600">
                The timeline varies depending on financing and legal processes, but typically takes 2-4 weeks from offer
                acceptance to closing. We'll keep you informed throughout.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-900 mb-4">Emergency Contact</h3>
            <p className="text-red-700 mb-6">
              For urgent property matters outside business hours, please call our emergency line.
            </p>
            <a
              href="tel:+250788123456"
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <Phone size={20} className="mr-2" />
              Emergency: +250 788 123 456
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
