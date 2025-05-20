
import React from "react";
import { Card } from "@/components/ui/card";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Namaste Bitcoin is proudly supported by leaders in the cryptocurrency and blockchain space.
          </p>
        </div>

        <div className="space-y-16">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-center text-xl font-semibold mb-8 text-gray-900">Platinum Sponsors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((sponsor) => (
                <Card key={`platinum-${sponsor}`} className="shadow-sm hover:shadow-md transition-shadow p-8 flex items-center justify-center h-40">
                  <div className="text-center">
                    <div className="w-48 h-16 bg-gray-200 mx-auto rounded-md mb-2 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Platinum Sponsor</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-center text-xl font-semibold mb-8 text-gray-900">Gold Sponsors</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((sponsor) => (
                <Card key={`gold-${sponsor}`} className="shadow-sm hover:shadow-md transition-shadow p-6 flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="w-36 h-14 bg-gray-200 mx-auto rounded-md mb-2 flex items-center justify-center">
                      <span className="text-gray-500 font-medium">Gold Sponsor</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <h3 className="text-center text-xl font-semibold mb-8 text-gray-900">Silver Sponsors</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((sponsor) => (
                <Card key={`silver-${sponsor}`} className="shadow-sm hover:shadow-md transition-shadow p-4 flex items-center justify-center h-24">
                  <div className="text-center">
                    <div className="w-24 h-12 bg-gray-200 mx-auto rounded-md flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Silver Sponsor</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Become a Sponsor</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join these industry leaders and showcase your brand at Namaste Bitcoin.
            We offer various sponsorship packages to suit your marketing objectives.
          </p>
          <a 
            href="#" 
            className="inline-block bg-bitcoin-blue text-white px-6 py-3 rounded-md hover:bg-bitcoin-blue/80 transition-colors"
          >
            View Sponsorship Opportunities
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
