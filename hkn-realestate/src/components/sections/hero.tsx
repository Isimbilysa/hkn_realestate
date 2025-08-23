import { Button } from "../ui/button"
import { ArrowRight, MapPin, Home, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-amber-600">
          {/* Geometric pattern overlay with new color scheme */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `
                     radial-gradient(circle at 25% 25%, rgba(247, 189, 1, 0.4) 0%, transparent 50%),
                     radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.3) 0%, transparent 50%),
                     linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%),
                     linear-gradient(-45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%)
                   `,
                backgroundSize: "400px 400px, 300px 300px, 200px 200px, 200px 200px",
                backgroundPosition: "0 0, 100px 100px, 0 0, 50px 50px",
              }}
            ></div>
          </div>
          {/* Animated dots pattern with new colors */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-secondary/50 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-secondary/10" />
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
        <div className="mb-6">
          <Sparkles className="w-10 h-10 text-secondary mx-auto animate-float-gentle" />
        </div>
        <h1 className="font-serif font-black text-5xl md:text-7xl mb-8 leading-tight">
          Discover Premium Properties with <span className="gradient-text animate-shimmer">HKN Real Estate</span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 text-gray-500 max-w-3xl mx-auto leading-relaxed font-sans">
          Experience luxury living in Rwanda's most prestigious locations. From modern villas to prime land plots, find
          your perfect investment with our expert guidance and cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-secondary/25 px-8 py-4 text-lg font-semibold"
          >
            <Home className="w-6 h-6 mr-3" />
            Explore Properties
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-blue/80 text-white hover:bg-grey hover:text-primary bg-transparent glass-effect transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
          >
            <MapPin className="w-6 h-6 mr-3" />
            Interactive Map
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center transform hover:scale-110 transition-all duration-300 animate-scale-in">
            <div className="text-5xl font-black font-serif gradient-text mb-3">500+</div>
            <div className="text-gray-700 font-medium text-lg">Premium Properties</div>
          </div>
          <div
            className="text-center transform hover:scale-110 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl font-black font-serif gradient-text mb-3">1000+</div>
            <div className="text-gray-700 font-medium text-lg">Satisfied Clients</div>
          </div>
          <div
            className="text-center transform hover:scale-110 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-5xl font-black font-serif gradient-text mb-3">15+</div>
            <div className="text-gray-700 font-medium text-lg">Years of Excellence</div>
          </div>
        </div>
      </div>
    </section>
  )
}
