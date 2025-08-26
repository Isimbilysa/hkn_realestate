import { Button } from "../ui/button"
import { ArrowRight, MapPin, Home, Award, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 6000) // Total animation time

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat brightness-50 transform scale-110 transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('/keith-kasaija-lii0uaz8Ieo-unsplash.jpg')",
            backgroundPosition: isMobile ? 'center 30%' : 'center center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
        
        {/* Floating elements - responsive positioning */}
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-2 h-2 bg-[#F7BD01] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-20 sm:bottom-32 left-8 sm:left-20 w-2 h-2 bg-[#F7BD01] rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced responsive typing effect */}
        <h1 className="font-serif font-black text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-8 sm:mt-10 leading-tight">
          {/* First line */}
          <span className="block overflow-hidden">
            <span
              className="inline-block text-white animate-typing-line1"
              style={{
                borderRight: typingComplete ? 'none' : `${isMobile ? '2px' : '4px'} solid #F7BD01`
              }}
            > 
              Discover properties with
            </span>
          </span>

          {/* Second line */}
          <span className="block overflow-hidden mt-1 sm:mt-2">
            <span
              className="inline-block text-[#F7BD01] animate-typing-line2 font-extrabold"
              style={{
                borderRight: typingComplete ? 'none' : `${isMobile ? '2px' : '4px'} solid #F7BD01`
              }}
            >
              HKN Real Estate
            </span>
          </span>
        </h1>

        {/* Enhanced responsive subtitle */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-4 sm:mt-6 lg:mt-8 mb-8 sm:mb-10 lg:mb-12 text-gray-100 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-serif px-2 sm:px-0">
          From luxury villas overlooking Kigali's skyline to prime investment land in emerging neighborhoods. 
          <span className="text-[#F7BD01] font-serif block sm:inline mt-1 sm:mt-0"> Your perfect property awaits.</span>
        </p>

        {/* Responsive call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-10 sm:mb-12 lg:mb-16 animate-fade-in-up delay-500 px-4 sm:px-0">
          <Button
            size={isMobile ? "default" : "lg"}
            className="group bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white transform hover:scale-105 transition-all duration-300 shadow-2xl px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-bold rounded-full w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 group-hover:animate-bounce" />
            <span className="whitespace-nowrap">Browse Properties</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 sm:ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>

          <Button
            size={isMobile ? "default" : "lg"}
            variant="outline"
            className="group border-2 sm:border-3 border-[#F7BD01] text-[#F7BD01] hover:bg-[#F7BD01] hover:text-black bg-black/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 text-sm sm:text-base lg:text-lg font-bold rounded-full shadow-xl w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 group-hover:animate-pulse" />
            <span className="whitespace-nowrap">Explore Areas</span>
          </Button>
        </div>

        {/* Enhanced responsive stats with icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto animate-fade-in-up delay-700 px-4 sm:px-0">
          <div className="group text-center p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-105 sm:hover:scale-110 hover:bg-white/15 transition-all duration-300">
            <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
              <div className="p-2 sm:p-3 bg-[#F7BD01]/20 rounded-full">
                <Home className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#F7BD01]" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#F7BD01] mb-2 sm:mb-3">500+</div>
            <div className="text-gray-100 font-serif font-medium text-sm sm:text-base lg:text-lg">Premium Properties</div>
            <div className="text-gray-300 text-xs sm:text-sm mt-1">Verified & Quality Assured</div>
          </div>

          <div className="group text-center p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-105 sm:hover:scale-110 hover:bg-white/15 transition-all duration-300 delay-100">
            <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
              <div className="p-2 sm:p-3 bg-[#F7BD01]/20 rounded-full">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#F7BD01]" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#F7BD01] mb-2 sm:mb-3">1,000+</div>
            <div className="text-gray-100 font-medium text-sm sm:text-base lg:text-lg">Happy Families</div>
            <div className="text-gray-300 text-xs sm:text-sm mt-1">Living Their Dreams</div>
          </div>

          <div className="group text-center p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-105 sm:hover:scale-110 hover:bg-white/15 transition-all duration-300 delay-200 sm:col-span-3 md:col-span-1">
            <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4">
              <div className="p-2 sm:p-3 bg-[#F7BD01]/20 rounded-full">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#F7BD01]" />
              </div>
            </div>
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-[#F7BD01] mb-2 sm:mb-3">15+</div>
            <div className="text-gray-100 font-medium text-sm sm:text-base lg:text-lg">Years of Trust</div>
            <div className="text-gray-300 text-xs sm:text-sm mt-1">Award-Winning Service</div>
          </div>
        </div>
      </div>

      {/* Enhanced responsive animations */}
      <style>{`
        /* Base responsive breakpoints */
        @media (max-width: 475px) {
          .xs\\:text-3xl { font-size: 1.875rem; }
        }

        @keyframes typing-line1 {
          from { 
            width: 0; 
            opacity: 0;
          }
          to { 
            width: 100%; 
            opacity: 1;
          }
        }
        
        @keyframes typing-line2 {
          from { 
            width: 0; 
            opacity: 0;
          }
          to { 
            width: 100%; 
            opacity: 1;
          }
        }
        
        @keyframes blink-caret {
          from, to { border-color: transparent; }
          50% { border-color: #F7BD01; }
        }

        .animate-typing-line1 {
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          animation: typing-line1 2.5s steps(30, end) forwards,
                     blink-caret 1s step-end infinite;
        }

        .animate-typing-line2 {
          width: 0;
          overflow: hidden;
          white-space: nowrap;
          animation: typing-line2 2.5s steps(25, end) 2.8s forwards,
                     blink-caret 1s step-end 2.8s infinite;
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-700 {
          animation-delay: 0.7s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }

        /* Responsive typography adjustments */
        @media (max-width: 640px) {
          .animate-typing-line1,
          .animate-typing-line2 {
            animation-duration: 2s;
          }
          
          .animate-typing-line2 {
            animation-delay: 2.3s;
          }
          
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(15px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

        /* Very small screens */
        @media (max-width: 375px) {
          .animate-typing-line1 {
            animation: typing-line1 1.8s steps(25, end) forwards,
                       blink-caret 1s step-end infinite;
          }

          .animate-typing-line2 {
            animation: typing-line2 1.8s steps(20, end) 2s forwards,
                       blink-caret 1s step-end 2s infinite;
          }
        }

        /* Smooth gradient animation for buttons */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Ensure proper spacing on all devices */
        @media (max-width: 768px) {
          .group:hover .group-hover\\:scale-110 {
            transform: scale(1.05);
          }
        }

        /* Fix for very wide screens */
        @media (min-width: 1920px) {
          .animate-typing-line1,
          .animate-typing-line2 {
            animation-duration: 3s;
          }
          
          .animate-typing-line2 {
            animation-delay: 3.3s;
          }
        }
      `}</style>
    </section>
  )
}