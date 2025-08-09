import { useState, useEffect } from 'react';
import { plots } from '../lib/data';
import { Plot } from '../lib/types';
import PlotCard from '../components/plots/PlotCard';
import PlotFilters from '../components/plots/PlotFilters';
import PlotDetailModal from '../components/plots/PlotDetailModal';

export default function PlotsPage() {
  const [filteredPlots, setFilteredPlots] = useState<Plot[]>(plots);
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setFilteredPlots(plots); // Initialize with all plots on mount
  }, []);

  const handleFilterChange = (filters: { minPrice: number; maxPrice: number; minSize: number; maxSize: number }) => {
    const { minPrice, maxPrice, minSize, maxSize } = filters;
    const newFilteredPlots = plots.filter((plot) => {
      return (
        plot.price >= minPrice &&
        plot.price <= maxPrice &&
        plot.sizeSqFt >= minSize &&
        plot.sizeSqFt <= maxSize
      );
    });
    setFilteredPlots(newFilteredPlots);
  };

  const handleViewDetails = (plot: Plot) => {
    setSelectedPlot(plot);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPlot(null);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Available Plots</h1>
      <div className="mb-8">
        <PlotFilters onFilterChange={handleFilterChange} />
      </div>
      {filteredPlots.length === 0 ? (
        <div className="text-center text-muted-foreground text-lg py-12">
          No plots found matching your criteria.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPlots.map((plot) => (
            <PlotCard key={plot.id} plot={plot} onViewDetails={handleViewDetails} />
          ))}
        </div>
      )}
      <PlotDetailModal
        plot={selectedPlot}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
