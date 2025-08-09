import {Link }from 'react-router-dom';
import { MountainIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link href="/" className="flex items-center justify-center gap-2">
        <MountainIcon className="h-6 w-6" />
        <span className="text-lg font-semibold">HKN Real Estate</span>
      </Link>
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
        <Link href="/" className="text-sm font-medium hover:underline underline-offset-4">
          Home
        </Link>
        <Link href="/plots" className="text-sm font-medium hover:underline underline-offset-4">
          Plots
        </Link>
        <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
          Contact
        </Link>
      </nav>
      <Button variant="outline" className="ml-auto md:hidden">
        Menu
      </Button>
    </header>
  );
}
