"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle, Star, Award, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { Input } from "../ui/input"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000)
    }, 1500)
  }

  const handleWhatsAppContact = () => {
    const message = "Hi HKN Real Estate! I'm interested in your services. Could we schedule a consultation to discuss available properties and investment opportunities?"
    const whatsappUrl = `https://wa.me/250788123456?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const contactMethods = [
    {
      icon: Phone,
      label: "Call us",
      value: "+250 788 123 456",
      description: "Mon-Fri 8:00-18:00",
      href: "tel:+250788123456",
      color: "text-blue-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@hknrealestate.rw",
      description: "24h response time",
      href: "mailto:info@hknrealestate.rw",
      color: "text-purple-600"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat instantly",
      description: "Quick responses",
      action: handleWhatsAppContact,
      color: "text-green-600"
    }
  ]

  const officeHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "By appointment" }
  ]

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-[#F7BD01]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#F7BD01]/10 rounded-full mb-6">
            <MessageCircle className="w-5 h-5 text-[#F7BD01] mr-2" />
            <span className="text-[#1E3A8A] font-semibold text-sm">Get In Touch</span>
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="text-[#1E3A8A]">Let's Find Your</span>
            <br />
            <span className="text-transparent bg-gradient-to-r from-[#F7BD01] to-[#E5A800] bg-clip-text">Perfect Property</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Ready to buy, sell, or invest? Our expert team is here to guide you through every step of your real estate journey.
          </p>

          {/* Trust indicators */}
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500 mb-8">
            <div className="flex items-center">
              <Star className="w-4 h-4 text-[#F7BD01] mr-2 fill-current" />
              <span>4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center">
              <Award className="w-4 h-4 text-[#F7BD01] mr-2" />
              <span>Licensed Professionals</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
            <div className="flex items-center">
              <Users className="w-4 h-4 text-[#F7BD01] mr-2" />
              <span>1000+ Happy Clients</span>
            </div>
          </div>

          {/* Quick contact methods */}
          <div className="flex flex-wrap justify-center gap-4">
            {contactMethods.map((method, index) => (
              <div key={index}>
                {method.href ? (
                  <a
                    href={method.href}
                    className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-4 text-gray-700 shadow-sm hover:shadow-lg hover:border-[#F7BD01]/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-2 rounded-lg ${method.color} bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{method.label}</div>
                      <div className="text-sm text-gray-600">{method.description}</div>
                    </div>
                  </a>
                ) : (
                  <button
                    onClick={method.action}
                    className="group inline-flex items-center gap-3 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm px-6 py-4 text-gray-700 shadow-sm hover:shadow-lg hover:border-[#F7BD01]/30 transition-all duration-300 hover:scale-105"
                  >
                    <div className={`p-2 rounded-lg ${method.color} bg-gray-50 group-hover:bg-gray-100 transition-colors`}>
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-gray-900">{method.label}</div>
                      <div className="text-sm text-gray-600">{method.description}</div>
                    </div>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main contact layout */}
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Left: Contact Info & Office Details */}
          <div className="space-y-8">
            {/* Office location card */}
            <Card className="bg-gradient-to-br from-[#1E3A8A] to-[#16275B] text-white border-0 shadow-2xl overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Decorative background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#F7BD01]/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-[#F7BD01]/20 rounded-2xl mr-4">
                      <MapPin className="h-8 w-8 text-[#F7BD01]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Visit Our Office</h3>
                      <p className="text-white/80">Professional consultation center</p>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6">
                    <p className="text-lg font-medium mb-2">KG 15 Avenue, Nyarutarama</p>
                    <p className="text-white/80 mb-4">Kigali, Rwanda</p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <Phone className="h-4 w-4 text-[#F7BD01]" />
                          <span className="text-white/80">Phone</span>
                        </div>
                        <div className="font-semibold">+250 788 123 456</div>
                      </div>
                      
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="flex items-center gap-2 text-sm mb-2">
                          <Mail className="h-4 w-4 text-[#F7BD01]" />
                          <span className="text-white/80">Email</span>
                        </div>
                        <div className="font-semibold">info@hknrealestate.rw</div>
                      </div>
                    </div>
                  </div>

                  {/* Office hours */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-[#F7BD01] font-semibold">
                      <Clock className="h-5 w-5" />
                      <span>Office Hours</span>
                    </div>
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-white/90">{schedule.day}</span>
                        <span className="font-medium">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={handleWhatsAppContact}
                    className="w-full mt-8 bg-[#25D366] hover:bg-[#20b357] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Start WhatsApp Chat
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Services highlights */}
            <Card className="bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl">
              <CardContent className="p-6">
                <h4 className="font-bold text-[#1E3A8A] text-lg mb-4">What We Offer</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7BD01] mt-2"></div>
                    <span className="text-gray-100">Free property consultations and market analysis</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7BD01] mt-2"></div>
                    <span className="text-gray-100">Residential and commercial property expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7BD01] mt-2"></div>
                    <span className="text-gray-100">Investment opportunities and portfolio guidance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#F7BD01] mt-2"></div>
                    <span className="text-gray-100">Legal assistance and documentation support</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Form */}
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white p-8">
              <CardTitle className="text-2xl font-bold flex items-center">
                <Send className="w-6 h-6 mr-3 text-[#F7BD01]" />
                Send us a message
              </CardTitle>
              <p className="text-white/80 mt-2">We'll get back to you within 24 hours</p>
            </CardHeader>
            
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll respond within 24 hours.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01] rounded-xl py-3"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01] rounded-xl py-3"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+250 7XX XXX XXX"
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01] rounded-xl py-3"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Property inquiry, consultation, etc."
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01] rounded-xl py-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your property requirements, budget, preferred locations, or any specific questions you have..."
                      rows={6}
                      className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01] rounded-xl"
                    />
                  </div>

                  <Button
                    onClick={() => {
                      if (formData.name && formData.email && formData.message) {
                        handleSubmit({ preventDefault: () => {} } as any)
                      }
                    }}
                    disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                    className="w-full bg-gradient-to-r from-[#F7BD01] to-[#E5A800] hover:from-[#E5A800] hover:to-[#D4940A] text-black font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}