
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, MapPin, Calendar } from "lucide-react";

const Venue = () => {
  return (
    <section id="venue" className="py-20 px-4 bg-gradient-to-b from-white to-bitcoin-lightgray/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Venue</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're securing a world-class venue in Bangalore that will provide the perfect setting for our conference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-video overflow-hidden rounded-lg mb-6 shadow-xl relative group bg-gradient-to-br from-bitcoin-blue/20 to-bitcoin-orange/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Building className="h-16 w-16 text-bitcoin-blue mx-auto mb-4" />
                  <p className="text-2xl font-semibold text-bitcoin-blue">Venue TBD</p>
                  <p className="text-bitcoin-gray">Coming Soon</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg relative group bg-gradient-to-br from-bitcoin-gold/20 to-bitcoin-amber/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-8 w-8 text-bitcoin-gold mx-auto mb-2" />
                    <p className="text-sm font-medium text-bitcoin-gold">Oct 8-9</p>
                    <p className="text-xs text-bitcoin-gray">2026</p>
                  </div>
                </div>
              </div>
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg relative group bg-gradient-to-br from-bitcoin-blue/20 to-bitcoin-lightblue/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-bitcoin-blue mx-auto mb-2" />
                    <p className="text-sm font-medium text-bitcoin-blue">Bangalore</p>
                    <p className="text-xs text-bitcoin-gray">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Building className="h-6 w-6 text-bitcoin-gold mr-2" />
                Venue Selection in Progress
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We're carefully selecting a premium venue in Bangalore that will provide the perfect backdrop for Namaste Bitcoin. Our venue will feature state-of-the-art conference facilities, excellent connectivity, and spaces designed for both learning and networking.
              </p>
              <p className="text-gray-600 leading-relaxed">
                The chosen location will be easily accessible, offer modern amenities, and reflect the innovative spirit of our conference.
              </p>
            </div>
            
            <Card className="overflow-hidden border-none shadow-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-colors">
              <CardContent className="p-6">
                <h4 className="font-medium text-gray-900 mb-3 flex items-center">
                  <MapPin className="h-5 w-5 text-bitcoin-orange mr-2" />
                  Location Details
                </h4>
                <div className="space-y-3 pl-7">
                  <div className="flex justify-between">
                    <span className="text-gray-600">City:</span>
                    <span className="font-medium text-gray-900">Bangalore, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Venue:</span>
                    <span className="font-medium text-bitcoin-blue">TBD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Address:</span>
                    <span className="font-medium text-bitcoin-blue">TBD</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">What We're Looking For</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Modern conference facilities with excellent acoustics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy accessibility from airport and city center</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Dedicated networking and exhibition spaces</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Stay Updated</h4>
              <p className="text-gray-600 mb-4">
                Venue details including location, accommodation recommendations, and transportation information will be announced soon.
              </p>
              <Button 
                disabled
                className="bg-bitcoin-blue hover:bg-bitcoin-blue/90 text-white shadow-md hover:shadow-lg transition-all"
              >
                Venue Details Coming Soon
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
