"use client"

import type React from "react"
import { MessageCircle } from "lucide-react"

const WhatsAppButton: React.FC = () => {
  const phoneNumber = "+250788123456" // HKN Real Estate WhatsApp number
  const message = "Hello! I'm interested in your properties. Can you help me?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber.replace("+", "")}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}

export default WhatsAppButton
