
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

// Mock speaker data
const speakersData = [
  {
    id: 1,
    name: "Satoshi Nakamura",
    role: "Blockchain Security Expert",
    company: "CryptoDefend",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    featured: true,
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Crypto Economist",
    company: "Digital Reserve",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    featured: true,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Bitcoin Core Developer",
    company: "Lightning Labs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    featured: true,
  },
  {
    id: 4,
    name: "Aanya Patel",
    role: "DeFi Researcher",
    company: "Ethereum Foundation",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    featured: false,
  },
  {
    id: 5,
    name: "Marcus Williams",
    role: "Crypto VC",
    company: "Blockchain Capital",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    featured: false,
  },
  {
    id: 6,
    name: "Sophia Rodriguez",
    role: "Web3 UX Designer",
    company: "Metamask",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    featured: false,
  },
];

const Speakers = () => {
  // Filter featured speakers
  const featuredSpeakers = speakersData.filter((speaker) => speaker.featured);
  const regularSpeakers = speakersData.filter((speaker) => !speaker.featured);

  return (
    <section id="speakers" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from the brightest minds in cryptocurrency, blockchain technology, and mindful leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredSpeakers.map((speaker) => (
            <Card key={speaker.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{speaker.name}</h3>
                  <p className="opacity-90 mb-1">{speaker.role}</p>
                  <p className="opacity-75 text-sm">{speaker.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-center mb-10">More Amazing Speakers</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularSpeakers.map((speaker) => (
            <Card key={speaker.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{speaker.name}</h4>
                    <p className="text-sm text-gray-500">{speaker.role}, {speaker.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-2">And many more to be announced!</p>
          <p className="text-sm text-gray-500">Full speaker lineup coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
