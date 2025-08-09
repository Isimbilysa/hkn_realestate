import HeroSection from '../components/home/HeroSection';
import InteractiveMap from '../components/home/InteractiveMap';
import FeaturedPlots from '../components/home/FeaturedPlots';
import DroneVideo from '../components/home/DroneVideo';
import TestimonialsSection from '../components/home/TestimonialsSection';
import { plots, testimonials } from '../lib/data';
import { useState } from 'react';
import PlotDetailModal from '../components/plots/PlotDetailModal';
import { Plot } from '../lib/types';

export default function HomePage() {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (plot: Plot) => {
    setSelectedPlot(plot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlot(null);
  };

  return (
    <main>
      <HeroSection />
      <InteractiveMap plots={plots} />
      <FeaturedPlots plots={plots} onViewDetails={handleViewDetails} />
      <DroneVideo />
      <TestimonialsSection testimonials={testimonials} />
      <PlotDetailModal
        plot={selectedPlot}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
