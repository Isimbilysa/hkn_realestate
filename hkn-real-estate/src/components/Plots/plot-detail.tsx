'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Plot } from '@/lib/types';

interface PlotDetailModalProps {
  plot: Plot | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PlotDetailModal({ plot, isOpen, onClose }: PlotDetailModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Reservation Form Submitted:', { plotId: plot?.id, ...formData });
    alert('Your reservation inquiry has been sent! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
    onClose();
  };

  if (!plot) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{plot.name}</DialogTitle>
          <DialogDescription>{plot.location}</DialogDescription>
        </DialogHeader>
        <div className="grid md:grid-cols-2 gap-6 py-4">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              src={plot.imageUrl || "/placeholder.svg"}
              alt={plot.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-3xl font-bold text-primary">${plot.price.toLocaleString()}</p>
            <p className="text-lg text-muted-foreground">{plot.sizeSqFt.toLocaleString()} sq ft</p>
            <p className="text-muted-foreground">{plot.description}</p>
            <p className="text-sm font-medium">
              Availability: <span className={`font-semibold ${plot.availability === 'available' ? 'text-green-600' : 'text-red-600'}`}>
                {plot.availability.toUpperCase()}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-6 border-t pt-6">
          <h3 className="text-xl font-bold mb-4">Inquire About This Plot</h3>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (Optional)</Label>
              <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={formData.message} onChange={handleChange} rows={4} placeholder="I'm interested in this plot..." />
            </div>
            <DialogFooter>
              <Button type="submit" className="w-full sm:w-auto">Submit Inquiry</Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
