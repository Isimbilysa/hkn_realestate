import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { MountainIcon, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground text-primary">
                <MountainIcon className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">HKN Real Estate</span>
                <span className="text-xs opacity-80">Premium Properties</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your trusted partner in finding exceptional land opportunities. Building legacies through premium real
              estate solutions.
            </p>
            <div className="flex space-x-4">
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link
                to="/plots"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Properties
              </Link>
              <Link
                to="/contact"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </Link>
              <Link to="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-3">
              <Link to="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Land Sales
              </Link>
              <Link to="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Property Investment
              </Link>
              <Link to="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Development Consulting
              </Link>
              <Link to="#" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Market Analysis
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-primary-foreground/80" />
                <div className="text-primary-foreground/80">
                  <p>123 Plot Avenue</p>
                  <p>Land City, LC 98765</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/80" />
                <span className="text-primary-foreground/80">info@hknrealestate.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              &copy; {new Date().getFullYear()} HKN Real Estate. All rights reserved.
            </p>
            <nav className="flex space-x-6 text-sm">
              <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Terms of Service
              </Link>
              <Link to="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
