import {Link} from 'react-router-dom';
import { Button } from '../ui/button';

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            Your Land, Your Legacy.
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Discover prime plots of land for sale, perfect for your dream home, investment, or development project.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <Link to="/plots">
              <Button  className="w-full sm:w-auto">
                View Available Plots
              </Button>
            </Link>
            <Link to="/contact">
              <Button  className="w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
