"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
  }

  const handleWhatsAppContact = () => {
    const message = "Hi! I'm interested in your real estate services. Can we discuss available properties?"
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#1E3A8A]">
            Contact <span className="text-[#F7BD01]">HKN Real Estate</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Buying, selling or renting — we’re here to help. Reach out and our team will get back to you shortly.
          </p>

          {/* Quick actions strip */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+12345678900"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-[#1E3A8A] shadow-sm hover:shadow transition"
            >
              <Phone className="h-4 w-4 text-[#F7BD01]" /> Call us
            </a>
            <a
              href="mailto:info@hknrealestate.com"
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-[#1E3A8A] shadow-sm hover:shadow transition"
            >
              <Mail className="h-4 w-4 text-[#F7BD01]" /> Email
            </a>
            <button
              onClick={handleWhatsAppContact}
              className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-[#1E3A8A] shadow-sm hover:shadow transition"
            >
              <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
            </button>
          </div>
        </header>

        {/* Split panel layout */}
        <div className="grid gap-8 lg:grid-cols-[450px,1fr] ">
          {/* Left: sticky info panel */}
          <aside className="lg:sticky lg:top-24 h-max">
            <div className="overflow-hidden rounded-2xl ring-1 ring-gray-200  transform hover:scale-105 transition-all duration-300">
              {/* Brand band */}
              <div className="bg-[#1E3A8A] text-white p-6">
                <h3 className="text-xl font-semibold">Visit our office</h3>
                <p className="mt-2 text-white/80 flex items-start gap-2"><MapPin className="h-4 w-4 mt-1 text-[#F7BD01]"/>123 Real Estate Ave, Business District, City 12345</p>

                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-[#F7BD01]"/>Phone</div>
                    <div className="mt-1 font-medium">+1 (234) 567-8900</div>
                    <div className="text-xs text-white/70">Mon–Fri 9:00–18:00</div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-3">
                    <div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-[#F7BD01]"/>Email</div>
                    <div className="mt-1 font-medium">info@hknrealestate.com</div>
                    <div className="text-xs text-white/70">Reply within 24h</div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-[#F7BD01]"/>Saturday: 10:00–16:00 · Sunday: Closed</div>

                <Button
                  onClick={handleWhatsAppContact}
                  className="mt-6 w-full bg-[#25D366] hover:bg-[#20b357] text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4"/> Chat on WhatsApp
                </Button>
              </div>

              {/* Light details block */}
              <div className="bg-white p-6">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-3"><span className="mt-[6px] h-2 w-2 rounded-full bg-[#F7BD01]"/> Free consultations & tailored tours</li>
                  <li className="flex items-start gap-3"><span className="mt-[6px] h-2 w-2 rounded-full bg-[#F7BD01]"/> Residential & commercial expertise</li>
                  <li className="flex items-start gap-3"><span className="mt-[6px] h-2 w-2 rounded-full bg-[#F7BD01]"/> Kigali & nationwide coverage</li>
                </ul>
              </div>
            </div>
          </aside>

          {/* Right: form */}
          <main>
            <Card className="bg-white shadow-xl rounded-2xl border border-gray-200">
              <CardHeader>
                <CardTitle className="text-[#1E3A8A]">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white-700 mb-2">Full Name</label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        required
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01]"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white-700 mb-2">Email Address</label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        required
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white-700 mb-2">Phone Number</label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+250 7xx xxx xxx"
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#F7BD01]"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-white-700 mb-2">Subject</label>
                      <Input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Buying · Selling · Viewing · Other"
                        className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#000000]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white-700 mb-2">Message</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your property requirements..."
                      rows={6}
                      required
                      className="border-gray-300 focus:border-[#F7BD01] focus:ring-[#000000] color-[#000000]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#F7BD01] hover:bg-[#dba901] text-[#1E3A8A] font-semibold"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </section>
  )
}
