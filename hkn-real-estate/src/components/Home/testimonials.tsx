// import Image from 'next/image';
import type {Testimonial} from '../lib/types';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Hear from satisfied customers who found their perfect plot with HKN Real Estate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex flex-col items-center p-6 text-center shadow-md">
              <img
                src={testimonial.clientImageUrl || "/placeholder.svg"}
                alt={testimonial.clientName}
                width={80}
                height={80}
                className="rounded-full object-cover mb-4 border-2 border-primary"
              />
              <CardContent className="p-0">
                <p className="text-lg font-semibold mb-2">{testimonial.clientName}</p>
                <blockquote className="text-muted-foreground italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
