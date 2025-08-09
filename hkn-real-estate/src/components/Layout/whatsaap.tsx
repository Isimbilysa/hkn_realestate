'use client';

import { Button } from '@/components/ui/button';
import { MessageCircleMore } from 'lucide-react';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full p-4 shadow-lg z-50 bg-green-500 hover:bg-green-600 text-white"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircleMore className="h-6 w-6" />
    </Button>
  );
}
