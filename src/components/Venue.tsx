
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-20 px-4 bg-gradient-to-b from-white to-bitcoin-lightgray/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Venue</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at the magnificent Leela Palace Bangalore, where luxury meets innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg mb-6 shadow-xl relative group">
              <div className="absolute inset-0 bg-bitcoin-blue/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1080&q=80"
                alt="Leela Palace Bangalore"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg relative group">
                <div className="absolute inset-0 bg-bitcoin-orange/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Conference Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg relative group">
                <div className="absolute inset-0 bg-bitcoin-gold/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Networking Area"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Building className="h-6 w-6 text-bitcoin-gold mr-2" />
                The Leela Palace Bangalore
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Experience luxury and comfort at one of Bangalore's premier five-star hotels. The Leela Palace provides the perfect backdrop for our conference, blending traditional Indian hospitality with modern amenities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The venue features state-of-the-art conference facilities, exquisite dining options, and beautifully landscaped gardens for networking and relaxation.
              </p>
            </div>
            
            <Card className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
              <CardContent className="p-6">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-bitcoin-orange mr-2" />
                  Address
                </h4>
                <address className="not-italic text-gray-600 mb-4 pl-7">
                  23 Airport Road, Kodihalli<br />
                  Bangalore, Karnataka 560008<br />
                  India
                </address>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-bitcoin-blue hover:text-bitcoin-blue/80 font-medium inline-flex items-center pl-7 transition-colors"
                >
                  View on Google Maps
                  <svg className="ml-1 w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </CardContent>
            </Card>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Transportation</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>From Airport:</strong> 45 minutes drive (approx. 40 km)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>From City Center:</strong> 20 minutes drive (approx. 8 km)</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Hotel offers shuttle service from major landmarks</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Accommodations</h4>
              <p className="text-gray-600 mb-4">
                We've arranged special room rates for conference attendees. Use promo code <span className="bg-bitcoin-lightgray px-2 py-0.5 rounded font-mono">NAMASTE2025</span> when booking.
              </p>
              <Button 
                className="bg-bitcoin-blue hover:bg-bitcoin-blue/90 text-white shadow-md hover:shadow-lg transition-all"
              >
                Book Your Stay
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
