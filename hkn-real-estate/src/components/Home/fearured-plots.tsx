import type { Plot } from "../lib/types"
import PlotCard from "../Plots/plot-card"
import { Button } from "../ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Sparkles } from "lucide-react"

interface FeaturedPlotsProps {
  plots: Plot[]
  onViewDetails: (plot: Plot) => void
}

export default function FeaturedPlots({ plots, onViewDetails }: FeaturedPlotsProps) {
  const featured = plots.filter((plot) => plot.availability === "available").slice(0, 3)

  return (
    <section className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center space-content max-w-3xl mx-auto mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Featured Properties
          </div>

          {/* Section Title */}
          <h2 className="text-section-title text-balance mb-6">
            Handpicked Premium
            <span className="block text-gradient">Land Opportunities</span>
          </h2>

          {/* Section Description */}
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover our carefully curated selection of exceptional plots in prime locations. Each property offers
            unique potential for your dream project.
          </p>
        </div>

        {/* Featured Plots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured.map((plot, index) => (
            <div key={plot.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <PlotCard plot={plot} onViewDetails={onViewDetails} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Link to="/plots">
            <Button className="btn-primary group">
              View All Properties
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <p className="text-sm text-muted-foreground mt-4">Over {plots.length} premium properties available</p>
        </div>
      </div>
    </section>
  )
}
