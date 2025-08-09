import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Plot } from '@/lib/types';

interface PlotCardProps {
  plot: Plot;
  onViewDetails: (plot: Plot) => void;
}

export default function PlotCard({ plot, onViewDetails }: PlotCardProps) {
  const isAvailable = plot.availability === 'available';

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48">
        <Image
          src={plot.imageUrl || "/placeholder.svg"}
          alt={plot.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
        {!isAvailable && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-bold">
            {plot.availability.toUpperCase()}
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{plot.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{plot.location}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold text-primary mb-2">${plot.price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">{plot.sizeSqFt.toLocaleString()} sq ft</p>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={() => onViewDetails(plot)}
          disabled={!isAvailable}
        >
          {isAvailable ? 'View Details' : 'Not Available'}
        </Button>
      </CardFooter>
    </Card>
  );
}
