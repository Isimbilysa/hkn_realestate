"use client"

import { Link } from "react-router-dom"
import { MountainIcon, Menu, X } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 hover-lift">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <MountainIcon className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">HKN Real Estate</span>
            <span className="text-xs text-muted-foreground">Premium Properties</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>
          <Link to="/plots" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Properties
          </Link>
          <Link
            to="/contact"
            className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Button className="btn-primary ml-4">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur border-b border-border/40 md:hidden">
            <nav className="container py-6 space-y-4">
              <Link
                to="/"
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/plots"
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </Link>
              <Link
                to="/contact"
                className="block text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="btn-primary w-full mt-4">Get Started</Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
