import { Button } from "../ui/button"
import { ArrowRight, MapPin, Home,  Award, Users } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const [typingComplete, setTypingComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 6000) // Total animation time

    return () => clearTimeout(timer)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center brightness-50 transform scale-110 transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage: "url('/keith-kasaija-lii0uaz8Ieo-unsplash.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/70" />
        
        {/* Floating elements for visual interest */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-[#F7BD01] rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-white rounded-full animate-pulse opacity-40"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-[#F7BD01] rounded-full animate-pulse opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Enhanced typing effect */}
        <h1 className="font-serif font-black text-4xl md:text-6xl xl:text-7xl mt-16 leading-tight">
          {/* First line */}
          <span className="block overflow-hidden">
            <span
              className="inline-block text-white animate-typing-line1"
              style={{
                borderRight: typingComplete ? 'none' : '4px solid #F7BD01'
              }}
            > 
              Discover properties with
            </span>
          </span>

          {/* Second line */}
          <span className="block overflow-hidden mt-2">
            <span
              className="inline-block text-[#F7BD01] animate-typing-line2 font-extrabold"
              style={{
                borderRight: typingComplete ? 'none' : '4px solid #F7BD01'
              }}
            >
              HKN Real Estate
            </span>
          </span>
        </h1>

        {/* Enhanced subtitle */}
        <p className="text-xl md:text-2xl mt-8 mb-12 text-gray-100 max-w-4xl mx-auto leading-relaxed animate-fade-in-up font-light">
          From luxury villas overlooking Kigali's skyline to prime investment land in emerging neighborhoods. 
          <span className="text-[#F7BD01] font-medium"> Your perfect property awaits.</span>
        </p>

        {/* Call-to-action buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-500">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#16275B] hover:to-[#1E3A8A] text-white transform hover:scale-105 transition-all duration-300 shadow-2xl px-10 py-5 text-lg font-bold rounded-full"
          >
            <Home className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Browse Properties
            <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group border-3 border-[#F7BD01] text-[#F7BD01] hover:bg-[#F7BD01] hover:text-black bg-black/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300 px-10 py-5 text-lg font-bold rounded-full shadow-xl"
          >
            <MapPin className="w-6 h-6 mr-3 group-hover:animate-pulse" />
            Explore Areas
          </Button>
        </div>

        {/* Enhanced stats with icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-700">
          <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-110 hover:bg-white/15 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#F7BD01]/20 rounded-full">
                <Home className="w-8 h-8 text-[#F7BD01]" />
              </div>
            </div>
            <div className="text-5xl font-black font-serif text-[#F7BD01] mb-3">500+</div>
            <div className="text-gray-100 font-medium text-lg">Premium Properties</div>
            <div className="text-gray-300 text-sm mt-1">Verified & Quality Assured</div>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-110 hover:bg-white/15 transition-all duration-300 delay-100">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#F7BD01]/20 rounded-full">
                <Users className="w-8 h-8 text-[#F7BD01]" />
              </div>
            </div>
            <div className="text-5xl font-black font-serif text-[#F7BD01] mb-3">1,000+</div>
            <div className="text-gray-100 font-medium text-lg">Happy Families</div>
            <div className="text-gray-300 text-sm mt-1">Living Their Dreams</div>
          </div>

          <div className="group text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transform hover:scale-110 hover:bg-white/15 transition-all duration-300 delay-200">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-[#F7BD01]/20 rounded-full">
                <Award className="w-8 h-8 text-[#F7BD01]" />
              </div>
            </div>
            <div className="text-5xl font-black font-serif text-[#F7BD01] mb-3">15+</div>
            <div className="text-gray-100 font-medium text-lg">Years of Trust</div>
            <div className="text-gray-300 text-sm mt-1">Award-Winning Service</div>
          </div>
        </div>

        {/* Trust indicators */}
        {/* <div className="mt-16 flex justify-center items-center space-x-8 opacity-80 animate-fade-in-up delay-1000">
          <div className="flex items-center space-x-2 text-gray-200">
            <Star className="w-5 h-5 text-[#F7BD01] fill-current" />
            <span className="text-sm font-medium">4.9/5 Customer Rating</span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-gray-400"></div>
          <div className="flex items-center space-x-2 text-gray-200">
            <Award className="w-5 h-5 text-[#F7BD01]" />
            <span className="text-sm font-medium">Licensed & Certified</span>
          </div>
        </div> */}
      </div>

      {/* Enhanced animations */}
      <style>{`
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
            transform: translateY(30px);
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

        /* Smooth gradient animation for buttons */
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  )
}