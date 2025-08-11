"use client"

import type React from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const ContactInfo: React.FC = () => {
  const contactDetails = [
    {
      icon: Phone,
      label: "Phone",
      value: "+250 788 123 456",
      action: "tel:+250788123456",
      description: "Call us for immediate assistance",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@hknrealestate.rw",
      action: "mailto:info@hknrealestate.rw",
      description: "Send us an email anytime",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "KG 123 St, Kigali, Rwanda",
      action: "https://maps.google.com/?q=KG+123+St,+Kigali,+Rwanda",
      description: "Visit our office location",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      action: null,
      description: "Our operating hours",
    },
  ]

  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/hknrealestate", label: "Facebook" },
    { icon: Twitter, url: "https://twitter.com/hknrealestate", label: "Twitter" },
    { icon: Instagram, url: "https://instagram.com/hknrealestate", label: "Instagram" },
    { icon: Linkedin, url: "https://linkedin.com/company/hknrealestate", label: "LinkedIn" },
  ]

  const handleWhatsApp = () => {
    const phoneNumber = "+250788123456"
    const message = "Hello! I am interested in your real estate services."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
        <p className="text-gray-600">Get in touch with us through any of these channels.</p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon
          return (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-primary-100 p-3 rounded-lg">
                <IconComponent className="text-primary-600" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-1">{detail.label}</h4>
                {detail.action ? (
                  <a
                    href={detail.action}
                    target={detail.action.startsWith("http") ? "_blank" : undefined}
                    rel={detail.action.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-primary-600 hover:text-primary-700 font-medium transition-colors"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="text-gray-900 font-medium">{detail.value}</p>
                )}
                <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* WhatsApp Quick Contact */}
      <div className="mt-8 p-4 bg-green-50 rounded-lg border border-green-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <MessageCircle className="text-green-600" size={24} />
            <div>
              <h4 className="font-semibold text-gray-900">Quick WhatsApp Contact</h4>
              <p className="text-sm text-gray-600">Get instant responses on WhatsApp</p>
            </div>
          </div>
          <button
            onClick={handleWhatsApp}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Chat Now
          </button>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-8 pt-8 border-t border-gray-200">
        <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 hover:bg-primary-100 p-3 rounded-lg transition-colors group"
                aria-label={social.label}
              >
                <IconComponent className="text-gray-600 group-hover:text-primary-600" size={20} />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
