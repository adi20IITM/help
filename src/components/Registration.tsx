
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Registration = () => {
  return (
    <section id="registration" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Registration details and pricing will be announced soon. Be the first to know when tickets go live!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "General Admission",
                description: "Full access to all main conference sessions, workshops, and social events.",
                features: [
                  "All keynotes and panel discussions",
                  "Workshop access",
                  "Networking events",
                  "Conference materials",
                  "Lunch and refreshments",
                  "Conference app access"
                ]
              },
              {
                name: "VIP Pass",
                description: "Premium conference experience with exclusive benefits and networking opportunities.",
                features: [
                  "Everything in General Admission",
                  "VIP lounge access",
                  "Private networking sessions",
                  "Reserved seating at keynotes",
                  "Exclusive VIP dinner",
                  "Limited edition conference swag"
                ],
                highlight: true
              },
              {
                name: "Virtual Pass",
                description: "Join remotely and get access to livestreamed sessions and online networking.",
                features: [
                  "Livestream of all keynotes",
                  "Access to selected workshops",
                  "Digital conference materials",
                  "30-day replay access",
                  "Virtual networking platform",
                  "Digital certificate of attendance"
                ]
              }
            ].map((ticket, index) => (
              <Card 
                key={index} 
                className={`overflow-hidden ${
                  ticket.highlight 
                    ? 'border-bitcoin-gold shadow-lg relative' 
                    : 'border-gray-200'
                }`}
              >
                {ticket.highlight && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-bitcoin-gold text-white text-xs font-bold px-3 py-1 rounded-bl-md">
                      POPULAR
                    </div>
                  </div>
                )}
                
                <CardContent className="p-6 md:p-8 pt-12">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{ticket.name}</h3>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-bitcoin-blue">TBD</span>
                    </div>
                    <p className="text-gray-600 text-sm">{ticket.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {ticket.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-bitcoin-orange flex-shrink-0 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="p-6 pt-0 flex flex-col">
                  <Button 
                    disabled
                    className={`w-full ${
                      ticket.highlight 
                        ? 'bg-bitcoin-gold hover:bg-bitcoin-gold/90' 
                        : 'bg-bitcoin-blue hover:bg-bitcoin-blue/90'
                    }`}
                  >
                    Coming Soon
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Early Bird Notification</h3>
            <p className="text-gray-600 mb-6">
              Want to be the first to know when registration opens? Sign up for our mailing list to receive early bird pricing and exclusive updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-bitcoin-blue"
              />
              <Button className="bg-bitcoin-orange hover:bg-bitcoin-orange/90">
                Notify Me
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Group discounts and corporate packages will be available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
