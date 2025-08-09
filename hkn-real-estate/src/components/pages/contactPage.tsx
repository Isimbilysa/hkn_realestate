import ContactForm from '../components/contact/ContactForm';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Have questions about our plots or need assistance? Fill out the form or reach us directly using the details below.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-muted-foreground">info@hknrealestate.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-muted-foreground">123 Plot Avenue, Land City, LC 98765</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
