import { Button } from "../ui/button"
import { ArrowRight, MapPin, Home } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Background image */}
        <div
          className="w-full h-full bg-cover bg-center brightness-75"
          style={{
            backgroundImage: "url('src/assets/keith-kasaija-lii0uaz8Ieo-unsplash.jpg')"
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Optional geometric pattern */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(247, 189, 1, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255, 215, 0, 0.2) 0%, transparent 50%)
              `,
              backgroundSize: "400px 400px, 300px 300px",
              backgroundPosition: "0 0, 100px 100px",
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif font-black text-5xl md:text-7xl mt-16 leading-tight text-white">
          <span className="inline-block overflow-hidden whitespace-nowrap animate-typing" 
            style={{ background: 'linear-gradient(90deg, #F7BD01, #FFD700)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            Discover Premium Properties with HKN Real Estate
          </span>
        </h1>

        <p className="text-lg md:text-2xl mt-6 mb-10 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
          Experience luxury living in Rwanda's most prestigious locations. From modern villas to prime land plots, find
          your perfect investment with our expert guidance and cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up delay-500">
          <Button
            size="lg"
            className="bg-[#1E3A8A] hover:bg-[#16275B] text-white transform hover:scale-105 transition-all duration-300 shadow-lg px-8 py-4 text-lg font-semibold"
          >
            <Home className="w-6 h-6 mr-3" />
            Explore Properties
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#F7BD01] text-[#F7BD01] hover:bg-[#F7BD01]/20 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            <MapPin className="w-6 h-6 mr-3" />
            Interactive Map
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto animate-fade-in-up delay-700">
          <div className="text-center transform hover:scale-110 transition-all duration-300">
            <div className="text-5xl font-black font-serif text-[#F7BD01] mb-3">500+</div>
            <div className="text-gray-200 font-medium text-lg">Premium Properties</div>
          </div>

          <div className="text-center transform hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl font-black font-serif text-[#F7BD01] mb-3">1000+</div>
            <div className="text-gray-200 font-medium text-lg">Satisfied Clients</div>
          </div>

          <div className="text-center transform hover:scale-110 transition-all duration-300" style={{ animationDelay: "0.4s" }}>
            <div className="text-5xl font-black font-serif text-[#F7BD01] mb-3">15+</div>
            <div className="text-gray-200 font-medium text-lg">Years of Excellence</div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        .animate-typing {
          display: inline-block;
          overflow: hidden;
          white-space: nowrap;
          border-right: 4px solid #F7BD01;
          animation: typing 4s steps(40, end), blink 0.75s step-end infinite;
        }
        @keyframes blink {
          50% { border-color: transparent; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease forwards; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  )
}
