
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're assembling an incredible lineup of speakers from the global bitcoin ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-bitcoin-blue/10 to-bitcoin-orange/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-bitcoin-lightgray/20 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-12 h-12 text-bitcoin-blue" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-bitcoin-blue mb-1">Speaker {index}</h3>
                    <p className="text-bitcoin-gray">TBD</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Speaker Lineup Coming Soon</h3>
            <p className="text-gray-600 mb-6">
              We're currently finalizing our speaker lineup with industry leaders, innovators, and thought leaders in the Bitcoin space.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-bitcoin-blue">
              <span className="bg-bitcoin-blue/10 px-3 py-1 rounded-full">Finance Experts</span>
              <span className="bg-bitcoin-blue/10 px-3 py-1 rounded-full">Bitcoin Developers</span>
              <span className="bg-bitcoin-blue/10 px-3 py-1 rounded-full">Economists</span>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Full speaker announcement coming soon. Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
