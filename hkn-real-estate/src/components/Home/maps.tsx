import {Link } from 'react-router-dom';
import type { Plot } from '../lib/types';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface InteractiveMapProps {
  plots: Plot[];
}

export default function InteractiveMap({ plots }: InteractiveMapProps) {
  // Filter to show only available plots on the map section
  const availablePlots = plots.filter(plot => plot.availability === 'available');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Our Land Portfolio
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Browse our prime land plots available across various locations.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg?height=600&width=900"
              alt="Map of available plots"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
            {/* In a real application, this would be an interactive map with markers */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 text-white text-center p-4">
              <p className="text-lg font-semibold">
                Map view coming soon! For now, see locations listed below.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold">Featured Locations</h3>
            <ul className="grid gap-4">
              {availablePlots.slice(0, 3).map((plot) => (
                <li key={plot.id} className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">{plot.name}</h4>
                    <p className="text-muted-foreground text-sm">{plot.location}</p>
                    <p className="text-sm font-medium">${plot.price.toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/plots">
              <Button variant="outline">View All Plots</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
