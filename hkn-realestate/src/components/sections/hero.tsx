import { Button } from "../ui/button"
import { ArrowRight, MapPin, Home, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="geometric-shape w-32 h-32 top-20 left-10 opacity-30" style={{ animationDelay: "0s" }} />
      <div className="geometric-shape w-24 h-24 top-40 right-20 opacity-20" style={{ animationDelay: "2s" }} />
      <div className="geometric-shape w-40 h-40 bottom-32 left-1/4 opacity-25" style={{ animationDelay: "4s" }} />

      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
          {/* Geometric pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                backgroundImage: `
                     radial-gradient(circle at 25% 25%, rgba(220, 38, 38, 0.3) 0%, transparent 50%),
                     radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.3) 0%, transparent 50%),
                     linear-gradient(45deg, transparent 40%, rgba(220, 38, 38, 0.1) 50%, transparent 60%),
                     linear-gradient(-45deg, transparent 40%, rgba(245, 158, 11, 0.1) 50%, transparent 60%)
                   `,
                backgroundSize: "400px 400px, 300px 300px, 200px 200px, 200px 200px",
                backgroundPosition: "0 0, 100px 100px, 0 0, 50px 50px",
              }}
            ></div>
          </div>
          {/* Animated dots pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div
              className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-primary/10" />
      </div>

      {/* Content with enhanced animations */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white animate-fade-in-up">
        <div className="mb-4">
          <Sparkles className="w-8 h-8 text-accent mx-auto animate-pulse" />
        </div>
        <h1 className="font-bold text-4xl md:text-6xl mb-6" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          Find Your Dream Property with{" "}
          <span className=" bg-gradient-to-r from-primary to-accent bg-clip-text animate-pulse-glow">
            HKN Real Estate
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
          Discover premium houses and land plots in prime locations. Your perfect property awaits with innovative
          technology and personalized service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5 mr-2" />
            Browse Properties
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
          >
            <MapPin className="w-5 h-5 mr-2" />
            View Interactive Map
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text mb-2">
              500+
            </div>
            <div className="text-gray-200 font-medium">Properties Listed</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text mb-2">
              1000+
            </div>
            <div className="text-gray-200 font-medium">Happy Clients</div>
          </div>
          <div className="text-center transform hover:scale-110 transition-transform duration-300">
            <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-accent to-primary bg-clip-text mb-2">
              15+
            </div>
            <div className="text-gray-200 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}
