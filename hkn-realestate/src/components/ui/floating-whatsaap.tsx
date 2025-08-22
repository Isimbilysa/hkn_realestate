"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "../ui/button"

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  const whatsappNumber = "+250785064877" // Replace with actual WhatsApp number
  const message = "Hi! I'm interested in learning more about your properties."

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl border p-6 w-80 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-3 animate-pulse">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground" style={{ fontFamily: "var(--font-space-grotesk)" }}>
                    HKN Real Estate
                  </h3>
                  <p className="text-sm text-green-600 font-medium">● Online now</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 p-0 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-4 border border-green-100">
              <p className="text-sm text-gray-700">👋 Hi there! How can we help you find your dream property today?</p>
            </div>

            <Button
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-float border-4 border-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </div>
    </>
  )
}
