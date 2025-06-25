
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Calendar, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About The Conference</h2>
          <div className="h-1 w-20 bg-bitcoin-orange mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Where Bitcoin Meets Mindfulness</h3>
            <p className="text-gray-600 mb-6">
              Namaste Bitcoin is not just another bitcoin conference. It's a unique gathering that combines the innovative spirit of the bitcoin technology with mindful wisdom.
            </p>
            <p className="text-gray-600 mb-6">
              Over two transformative days, we'll explore the future of Bitcoin through keynotes, panels, workshops, and networking events designed to enlighten both your technical knowledge and personal growth.
            </p>
            <p className="text-gray-600">
              Whether you're a bitcoin developer, investor, entrepreneur, or simply curious about the intersection of technology and mindfulness, Namaste Bitcoin offers a fresh perspective on the financial revolution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="overflow-hidden border-2 border-gray-100 hover:border-bitcoin-gold transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-bitcoin-gold/10 mb-4">
                  <Calendar className="h-6 w-6 text-bitcoin-gold" />
                </div>
                <h4 className="text-lg font-medium mb-2">2 Full Days</h4>
                <p className="text-gray-500">Of immersive content, workshops, and networking</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-2 border-gray-100 hover:border-bitcoin-orange transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-bitcoin-orange/10 mb-4">
                  <Users className="h-6 w-6 text-bitcoin-orange" />
                </div>
                <h4 className="text-lg font-medium mb-2">20+ Speakers</h4>
                <p className="text-gray-500">Industry leaders and visionaries from around the world</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-2 border-gray-100 hover:border-bitcoin-blue transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-bitcoin-blue/10 mb-4">
                  <Globe className="h-6 w-6 text-bitcoin-blue" />
                </div>
                <h4 className="text-lg font-medium mb-2">Global Community</h4>
                <p className="text-gray-500">Attendees from over 30 countries</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden border-2 border-gray-100 hover:border-bitcoin-gold transition-colors duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-bitcoin-gold/10 mb-4">
                  <svg className="h-6 w-6 text-bitcoin-gold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 14.5C15.3137 14.5 18 11.8137 18 8.5C18 5.18629 15.3137 2.5 12 2.5C8.68629 2.5 6 5.18629 6 8.5C6 11.8137 8.68629 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 21.5C19.3137 21.5 22 18.8137 22 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 21.5C4.68629 21.5 2 18.8137 2 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11 9.5C11 9.5 12 8 14 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 6.5C13 6.5 12 8 10 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="text-lg font-medium mb-2">Mindful Focus</h4>
                <p className="text-gray-500">Balancing technology with mindfulness and purpose</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
