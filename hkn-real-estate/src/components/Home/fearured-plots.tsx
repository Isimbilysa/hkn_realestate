import type { Plot } from '../lib/types';
import PlotCard from '../Plots/plot-card';
import { Button } from '@/components/ui/button';
import {Link} from 'react-router-dom';

interface FeaturedPlotsProps {
  plots: Plot[];
  onViewDetails: (plot: Plot) => void;
}

export default function FeaturedPlots({ plots, onViewDetails }: FeaturedPlotsProps) {
  // Take a subset of plots for featured section, e.g., first 4 available ones
  const featured = plots.filter(plot => plot.availability === 'available').slice(0, 4);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Featured Plots
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Handpicked prime land plots for your consideration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((plot) => (
            <PlotCard key={plot.id} plot={plot} onViewDetails={onViewDetails} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link to="/plots">
            <Button size="lg">View All Plots</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
