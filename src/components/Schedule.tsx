
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
      title: "Check-in & Networking",
      // speaker: "Satoshi Nakamura",
      description: "Welcome Tea + Badge Pickup",
      location: "Main Stage",
      type: "Networking",
    },
    {
      id: "1-2",
      time: "10:00 AM - 10:30 AM",
      title: "Opening Keynote",
      // speaker: "Michael Chen",
      description: "State of Bitcoin in Bharat",
      location: "Hall A",
      type: "Keynote",
    },
    {
      id: "1-3",
      time: "10:30 AM - 11:30 PM",
      title: "Big Picture Panel",
      // speaker: "Priya Sharma",
      description: "Macro Trends, Bitcoin, and India’s Future",
      location: "Hall B",
      type: "Panel",
    },
    {
      id: "1-4",
      time: "12:30 PM - 1:30 PM",
      title: "Lunch Break",
      // speaker: "Marcus Williams",
      // description: "Hands-on workshop on implementing Lightning Network solutions.",
      // location: "Workshop Room C",
      type: "Food & Drinks",
    },
    {
      id: "1-5",
      time: "1:30 PM - 2:15 PM",
      title: "Women in Bitcoin",
      // speaker: "Aanya Patel",
      description: "Empowering Financial Independence",
      location: "Main Stage",
      type: "Panel",
    },
    {
      id: "1-6",
      time: "2:15 PM - 3:00 PM",
      title: "Open Mic Lightning Talks",
      speaker: "",
      description: "5 min Talks by Community",
      location: "Garden Terrace",
      type: "Rapid Fire",
    },
    {
      id: "1-7",
      time: "3:00 PM - 4:00 PM",
      title: "Mining in India",
      speaker: "",
      description: "Solar, Hydro & Grid Mining",
      location: "Garden Terrace",
      type: "Deep Dive",
    },
    {
      id: "1-8",
      time: "4:00 PM - 5:00 PM",
      title: "Bitcoiner Expo",
      speaker: "",
      description: "Explore Ecosystem Booths",
      location: "Garden Terrace",
      type: "Expo Walkthrough",
    },
    {
      id: "1-9",
      time: "5:00 PM - 6:00 PM",
      title: "Closing Fireside",
      speaker: "",
      description: "Orange Pill Stories from Bharat",
      location: "Garden Terrace",
      type: "Fireside chat",
    }
  ],
  day2: [
    {
      id: "2-1",
      time: "9:00 AM - 10:00 AM",
      title: "Check-in & Morning Chai",
      // speaker: "Dr. Emma Wong",
      description: "Filter coffee & QR games",
      location: "Zen Room",
      type: "Food & Drinks",
    },
    {
      id: "2-2",
      time: "10:00 AM - 10:30 AM",
      title: "Day-2 Keynote",
      // speaker: "Sophia Rodriguez",
      // description: "Creating intuitive user experiences for cryptocurrency applications.",
      location: "Design Lab",
      type: "Keynote",
    },
    {
      id: "2-3",
      time: "10:30 AM - 11:30 PM",
      title: "Builders of Bharat",
      // speaker: "Panel of Experts",
      description: "Infra, Nodes, and Startups Powering India",
      location: "Main Stage",
      type: "Panel",
    },
    {
      id: "2-4",
      time: "11:30 PM - 12:30 PM",
      title: "Open Source Track",
      // speaker: "Alex Johnson",
      description: "FOSS Contributions from Indian Devs",
      location: "Hall A",
      type: "Panel",
    },
    {
      id: "2-5",
      time: "11:30 PM - 12:30 PM",
      title: "Self Custody Clinic",
      // speaker: "Michael Chen",
      description: "Practice with Hardware Wallets & Seed Phrases",
      location: "Developer Zone",
      type: "Deep Dive",
    },
    {
      id: "2-6",
      time: "1:30 PM - 2:15 PM",
      title: "Policy & Pushback",
      // speaker: "",
      description: "CBDC vs BTC: Role of the State",
      location: "Grand Ballroom",
      type: "Panel",
    },
    {
      id: "2-7",
      time: "2:15 AM - 3:00 PM",
      title: "Youth & Btc",
      // speaker: "Panel of Experts",
      description: "Campus Chapters & Internships",
      location: "Main Stage",
      type: "Deep Dive",
    },
    {
      id: "2-8",
      time: "3:00 PM - 4:00 PM",
      title: "Hardware Jugaad",
      // speaker: "Alex Johnson",
      description: "Indian Innovations in Bitcoin Hardware",
      location: "Hall A",
      type: "Show & Tell",
    },
    {
      id: "2-9",
      time: "4:00 PM - 5:00 PM",
      title: "Final Sats Sprint",
      // speaker: "Michael Chen",
      description: "Closing Tech Showcase",
      location: "Developer Zone",
      type: "Deep Dive",
    },
    {
      id: "2-10",
      time: "5:00 PM - 6:00 PM",
      title: "Closing Panel",
      // speaker: "",
      description: "India’s Road to Bitcoin Sovereignty",
      location: "Grand Ballroom",
      type: "Panel",
    },
    {
      id: "2-11",
      time: "6:00 Onwards",
      title: "Sat-sang",
      description: "Let the party begin!",
      type: "Party",
    }
  ]
};

const Schedule = () => {
  const [activeDay, setActiveDay] = useState("day1");

  // Function to get event type color
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Keynote":
        return "bg-bitcoin-orange";
      case "Panel":
        return "bg-bitcoin-blue";
      case "Rapid Fire":
        return "bg-green-600";
      case "Food & Drinks":
        return "bg-purple-600";
      case "Networking":
        return "bg-bitcoin-gold";
      case "Deep Dive":
        return "bg-yellow-600";
      case "Expo Walkthrough":
        return "bg-red-600";
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
            Two days of inspiring talks, hands-on workshops, and meaningful connections.
          </p>
        </div>

        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger 
              value="day1" 
              className="text-base py-3"
              onClick={() => setActiveDay("day1")}
            >
              Day 1 - Jan 8
            </TabsTrigger>
            <TabsTrigger 
              value="day2" 
              className="text-base py-3"
              onClick={() => setActiveDay("day2")}
            >
              Day 2 - Jan 9
            </TabsTrigger>
          </TabsList>
          
          {["day1", "day2"].map((day) => (
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
