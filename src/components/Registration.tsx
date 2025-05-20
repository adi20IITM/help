
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ticketTypes = [
  {
    id: "general",
    name: "General Admission",
    price: "$599",
    description: "Full access to all main conference sessions, workshops, and social events.",
    features: [
      "All keynotes and panel discussions",
      "Workshop access",
      "Networking events",
      "Conference materials",
      "Lunch and refreshments",
      "Conference app access"
    ],
    highlight: false,
  },
  {
    id: "vip",
    name: "VIP Pass",
    price: "$999",
    description: "Premium conference experience with exclusive benefits and networking opportunities.",
    features: [
      "Everything in General Admission",
      "VIP lounge access",
      "Private networking sessions with speakers",
      "Reserved seating at keynotes",
      "Exclusive VIP dinner",
      "Limited edition conference swag"
    ],
    highlight: true,
  },
  {
    id: "virtual",
    name: "Virtual Pass",
    price: "$199",
    description: "Join remotely and get access to livestreamed sessions and online networking.",
    features: [
      "Livestream of all keynotes",
      "Access to selected workshops",
      "Digital conference materials",
      "30-day replay access",
      "Virtual networking platform",
      "Digital certificate of attendance"
    ],
    highlight: false,
  },
];

const Registration = () => {
  return (
    <section id="registration" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Registration</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Secure your spot at Namaste Bitcoin and be part of the revolution where Eastern wisdom meets Western technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ticketTypes.map((ticket) => (
            <Card 
              key={ticket.id} 
              className={`overflow-hidden ${
                ticket.highlight 
                  ? 'border-bitcoin-gold shadow-lg relative' 
                  : 'border-gray-200'
              }`}
            >
              {ticket.highlight && (
                <div className="absolute top-0 right-0">
                  <div className="bg-bitcoin-gold text-white text-xs font-bold px-3 py-1 rounded-bl-md">
                    RECOMMENDED
                  </div>
                </div>
              )}
              
              <CardContent className="p-6 md:p-8 pt-12">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{ticket.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-bitcoin-blue">{ticket.price}</span>
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
                  className={`w-full ${
                    ticket.highlight 
                      ? 'bg-bitcoin-gold hover:bg-bitcoin-gold/90' 
                      : 'bg-bitcoin-blue hover:bg-bitcoin-blue/90'
                  }`}
                >
                  Register Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Group Discounts</h3>
          <p className="text-gray-600 mb-6">
            Coming with your team? Groups of 5+ receive 10% discount.
            Contact us for special corporate packages.
          </p>
          <a 
            href="mailto:info@namastebitcoin.com" 
            className="text-bitcoin-blue hover:text-bitcoin-blue/80 font-medium"
          >
            info@namastebitcoin.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Registration;
