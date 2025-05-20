
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock schedule data
const scheduleData = {
  day1: [
    {
      id: "1-1",
      time: "9:00 AM - 10:00 AM",
      title: "Opening Ceremony & Keynote",
      speaker: "Satoshi Nakamura",
      description: "Welcome address and opening keynote on the future of Bitcoin adoption in emerging markets.",
      location: "Main Stage",
      type: "keynote",
    },
    {
      id: "1-2",
      time: "10:30 AM - 11:30 AM",
      title: "Bitcoin Mining & Sustainability",
      speaker: "Michael Chen",
      description: "Exploring sustainable approaches to Bitcoin mining and energy consumption.",
      location: "Hall A",
      type: "panel",
    },
    {
      id: "1-3",
      time: "11:45 AM - 12:45 PM",
      title: "The Philosophy of Decentralization",
      speaker: "Priya Sharma",
      description: "Understanding the philosophical underpinnings of blockchain's decentralized nature.",
      location: "Hall B",
      type: "talk",
    },
    {
      id: "1-4",
      time: "2:00 PM - 3:00 PM",
      title: "Lightning Network Workshop",
      speaker: "Marcus Williams",
      description: "Hands-on workshop on implementing Lightning Network solutions.",
      location: "Workshop Room C",
      type: "workshop",
    },
    {
      id: "1-5",
      time: "3:30 PM - 5:00 PM",
      title: "DeFi & Traditional Finance",
      speaker: "Aanya Patel",
      description: "Panel discussion on the integration of DeFi with traditional financial systems.",
      location: "Main Stage",
      type: "panel",
    },
    {
      id: "1-6",
      time: "5:30 PM - 7:00 PM",
      title: "Networking Reception",
      speaker: "",
      description: "Connect with speakers, sponsors, and fellow attendees.",
      location: "Garden Terrace",
      type: "social",
    },
  ],
  day2: [
    {
      id: "2-1",
      time: "9:00 AM - 10:00 AM",
      title: "Meditation & Mindfulness for Traders",
      speaker: "Dr. Emma Wong",
      description: "Start your day with mindfulness practices specifically designed for crypto traders.",
      location: "Zen Room",
      type: "workshop",
    },
    {
      id: "2-2",
      time: "10:30 AM - 11:30 AM",
      title: "Crypto UX Design Principles",
      speaker: "Sophia Rodriguez",
      description: "Creating intuitive user experiences for cryptocurrency applications.",
      location: "Design Lab",
      type: "workshop",
    },
    {
      id: "2-3",
      time: "11:45 AM - 1:00 PM",
      title: "Regulatory Landscape in Asia",
      speaker: "Panel of Experts",
      description: "Navigate the complex regulatory environment for cryptocurrencies across Asia.",
      location: "Main Stage",
      type: "panel",
    },
    {
      id: "2-4",
      time: "2:30 PM - 3:30 PM",
      title: "Smart Contracts & Legal Frameworks",
      speaker: "Alex Johnson",
      description: "Exploring the intersection of smart contracts and traditional legal systems.",
      location: "Hall A",
      type: "talk",
    },
    {
      id: "2-5",
      time: "4:00 PM - 5:00 PM",
      title: "Bitcoin Core Development",
      speaker: "Michael Chen",
      description: "Technical deep dive into Bitcoin Core development and contribution.",
      location: "Developer Zone",
      type: "technical",
    },
    {
      id: "2-6",
      time: "7:00 PM - 10:00 PM",
      title: "Gala Dinner",
      speaker: "",
      description: "Formal dinner with special entertainment and guest speakers.",
      location: "Grand Ballroom",
      type: "social",
    },
  ],
  day3: [
    {
      id: "3-1",
      time: "9:00 AM - 10:00 AM",
      title: "Bitcoin & Eastern Philosophy",
      speaker: "Dr. Raj Patel",
      description: "Drawing parallels between Bitcoin principles and Eastern philosophical teachings.",
      location: "Main Stage",
      type: "keynote",
    },
    {
      id: "3-2",
      time: "10:30 AM - 11:30 AM",
      title: "Startup Pitch Competition",
      speaker: "Various Founders",
      description: "Exciting pitches from emerging blockchain startups.",
      location: "Innovation Hall",
      type: "competition",
    },
    {
      id: "3-3",
      time: "11:45 AM - 1:00 PM",
      title: "Bitcoin in Emerging Economies",
      speaker: "Panel Discussion",
      description: "Real-world bitcoin adoption stories from developing nations.",
      location: "Hall B",
      type: "panel",
    },
    {
      id: "3-4",
      time: "2:00 PM - 3:30 PM",
      title: "Technical Workshop: Building on Bitcoin",
      speaker: "Dev Team",
      description: "Hands-on technical workshop for developers.",
      location: "Workshop Room C",
      type: "workshop",
    },
    {
      id: "3-5",
      time: "4:00 PM - 5:00 PM",
      title: "Closing Keynote: The Path Forward",
      speaker: "Priya Sharma",
      description: "Visionary closing keynote on the future of bitcoin and blockchain technology.",
      location: "Main Stage",
      type: "keynote",
    },
    {
      id: "3-6",
      time: "5:30 PM - 7:00 PM",
      title: "Farewell Reception",
      speaker: "",
      description: "Final networking opportunity and conference closing.",
      location: "Garden Terrace",
      type: "social",
    },
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

  // Function to get event type color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "keynote":
        return "bg-bitcoin-orange";
      case "panel":
        return "bg-bitcoin-blue";
      case "workshop":
        return "bg-green-600";
      case "talk":
        return "bg-purple-600";
      case "social":
        return "bg-bitcoin-gold";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <section id="schedule" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Conference Schedule</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three days of inspiring talks, hands-on workshops, and meaningful connections.
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger 
              value="day1" 
              className="text-base py-3"
              onClick={() => setActiveDay("day1")}
            >
              Day 1 - Oct 15
            </TabsTrigger>
            <TabsTrigger 
              value="day2" 
              className="text-base py-3"
              onClick={() => setActiveDay("day2")}
            >
              Day 2 - Oct 16
            </TabsTrigger>
            <TabsTrigger 
              value="day3" 
              className="text-base py-3"
              onClick={() => setActiveDay("day3")}
            >
              Day 3 - Oct 17
            </TabsTrigger>
          </TabsList>
          
          {["day1", "day2", "day3"].map((day) => (
            <TabsContent key={day} value={day} className="mt-0">
              <div className="space-y-6">
                {scheduleData[day as keyof typeof scheduleData].map((event) => (
                  <Card key={event.id} className="overflow-hidden">
                    <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center">
                      <div className="md:w-1/4 mb-4 md:mb-0">
                        <p className="font-medium text-gray-900">{event.time}</p>
                        <p className="text-sm text-gray-500">{event.location}</p>
                        <div className={`inline-block px-2 py-1 rounded text-xs text-white mt-2 ${getEventTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </div>
                      </div>
                      <div className="md:w-3/4 md:pl-8 md:border-l border-gray-200">
                        <h3 className="text-xl font-medium text-gray-900 mb-2">{event.title}</h3>
                        {event.speaker && <p className="text-bitcoin-blue font-medium mb-2">{event.speaker}</p>}
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">Need the full schedule on the go?</p>
          <Button className="bg-bitcoin-blue hover:bg-bitcoin-blue/90">
            Download PDF Schedule
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
