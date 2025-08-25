"use client"
import { useState, useEffect } from "react"
import { Button } from "../ui/button"
import { Home, Building, MapPin, Phone, Menu, X,  User } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Properties", href: "/properties", icon: Building },
    { name: "Map View", href: "/map", icon: MapPin },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#F7BD01] rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className={`font-serif font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  HKN
                </span>
                <span className={`font-medium text-sm -mt-1 transition-colors duration-300 ${
                  isScrolled ? 'text-[#1E3A8A]' : 'text-[#F7BD01]'
                }`}>
                  Real Estate
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/20 backdrop-blur-sm ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10' 
                    : 'text-white/90 hover:text-white hover:bg-white/20'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#F7BD01] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* <Button
              variant="ghost"
              size="sm"
              className={`rounded-full p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10' 
                  : 'text-white/80 hover:text-white hover:bg-white/20'
              }`}
            >
              <Search className="w-5 h-5" />
            </Button> */}
            
            {/* <Button
              variant="ghost"
              size="sm"
              className={`rounded-full p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-600 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10' 
                  : 'text-white/80 hover:text-white hover:bg-white/20'
              }`}
            >
              <Heart className="w-5 h-5" />
            </Button> */}

            <div className="w-px h-6 bg-gray-300 opacity-50"></div>

            <Button
              size="sm"
              className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>

            <Button
              size="sm"
              className="bg-[#F7BD01] hover:bg-[#E5A800] text-black px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              List Property
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`rounded-full p-2 transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10' 
                  : 'text-white hover:text-white hover:bg-white/20'
              }`}
            >
              <div className="relative w-6 h-6">
                <Menu 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`} 
                />
                <X 
                  className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`} 
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-6 bg-white/95 backdrop-blur-md rounded-2xl mx-4 mb-4 shadow-xl border border-gray-200/50">
            <div className="space-y-2">
              {navigation.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-[#1E3A8A] hover:bg-[#1E3A8A]/10 rounded-xl transition-all duration-300 group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: isMenuOpen ? 'slideInLeft 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#1E3A8A]/10 transition-colors duration-300">
                    <item.icon className="w-5 h-5 group-hover:text-[#1E3A8A] transition-colors duration-300" />
                  </div>
                  <span className="font-medium">{item.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white rounded-xl py-3 font-semibold shadow-lg">
                  <User className="w-4 h-4 mr-2" />
                  Sign In
                </Button>
                <Button className="w-full bg-[#F7BD01] hover:bg-[#E5A800] text-black rounded-xl py-3 font-bold shadow-lg">
                  List Your Property
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-item {
          position: relative;
          overflow: hidden;
        }
        
        .nav-item::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #F7BD01;
          transition: all 0.3s ease;
        }
        
        .nav-item:hover::before {
          width: 100%;
          left: 0;
        }
      `}</style>
    </header>
  )
}