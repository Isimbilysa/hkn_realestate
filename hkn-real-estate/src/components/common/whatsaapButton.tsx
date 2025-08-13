"use client"

import { Button } from "../ui/button"
import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/1234567890", "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-premium hover:shadow-xl transition-all duration-300 z-50 no-print hover-lift"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  )
}
