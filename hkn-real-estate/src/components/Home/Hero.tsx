import { Link } from "react-router-dom"
import { Button } from "../ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-background/30 to-background/50" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-content">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
            Premium Real Estate Solutions
          </div>

          {/* Main Heading */}
          <h1 className="text-hero text-balance mb-8 animate-fade-in-up-delay">
            Your Land,
            <span className="block text-gradient">Your Legacy</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 animate-fade-in-up-delay leading-relaxed">
            Discover exceptional plots of land in prime locations. Build your dream home, secure your investment, or
            develop your vision with our curated selection of premium properties.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up-delay">
            <Link to="/plots">
              <Button className="btn-primary group">
                Explore Properties
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button className="btn-secondary group">
              <Play className="mr-2 h-4 w-4" />
              Watch Our Story
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/20 animate-fade-in-up-delay">
            <p className="text-sm text-muted-foreground mb-6">Trusted by over 1,000+ satisfied clients</p>
            <div className="flex items-center justify-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">500+</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">15+</div>
              <div className="w-px h-8 bg-border" />
              <div className="text-2xl font-bold">98%</div>
            </div>
            <div className="flex items-center justify-center space-x-8 text-xs text-muted-foreground mt-2">
              <span>Properties Sold</span>
              <span>Years Experience</span>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/30 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
