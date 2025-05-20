
import React from "react";
import { Button } from "@/components/ui/button";
import { Flower2 } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 text-white">
      {/* Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-blue via-bitcoin-gray to-bitcoin-orange/90"></div>
        <div className="absolute inset-0 opacity-20">
          {/* Bitcoin grid pattern */}
          <svg width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="30" cy="30" r="10" fill="none" stroke="white" strokeWidth="0.5"></circle>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        {/* Floating Bitcoin symbols */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] animate-float opacity-20">
            <svg className="h-16 w-16" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="1.5" />
              <path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 11.5C9.67965 12.1797 10.8858 12.6614 12 12.6913M12 7.30872C10.8366 7.27729 9.7 7.7 9 8.5C8.5 9 8.289 10.55 9 11.5M12 7.30872V5.5M12 12.6913C13.1642 12.7227 14.3 12.3 15 11.5C15.5 11 15.711 9.45 15 8.5M12 12.6913V14.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14.5V17.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 16.5H14" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute top-[30%] right-[8%] animate-float opacity-30" style={{ animationDelay: "1s" }}>
            <svg className="h-20 w-20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="1.5" />
              <path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 11.5C9.67965 12.1797 10.8858 12.6614 12 12.6913M12 7.30872C10.8366 7.27729 9.7 7.7 9 8.5C8.5 9 8.289 10.55 9 11.5M12 7.30872V5.5M12 12.6913C13.1642 12.7227 14.3 12.3 15 11.5C15.5 11 15.711 9.45 15 8.5M12 12.6913V14.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14.5V17.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 16.5H14" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute bottom-[25%] left-[15%] animate-float opacity-20" style={{ animationDelay: "2s" }}>
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none">
              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="1.5" />
              <path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 11.5C9.67965 12.1797 10.8858 12.6614 12 12.6913M12 7.30872C10.8366 7.27729 9.7 7.7 9 8.5C8.5 9 8.289 10.55 9 11.5M12 7.30872V5.5M12 12.6913C13.1642 12.7227 14.3 12.3 15 11.5C15.5 11 15.711 9.45 15 8.5M12 12.6913V14.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 14.5V17.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 16.5H14" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-32 md:py-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Namaste Sign/Symbol */}
          <div className="mb-6 flex flex-col items-center justify-center">
            {/* Custom Lotus flower using Flower2 icon */}
            <div className="relative mb-2">
              <div className="h-24 w-24 bg-gradient-radial from-bitcoin-gold/40 to-transparent rounded-full absolute -inset-2 blur-md"></div>
              <div className="relative flex items-center justify-center">
                <Flower2 className="h-20 w-20 text-bitcoin-gold animate-pulse-slow" strokeWidth={1.25} />
              </div>
            </div>
            <div className="text-lg font-medium text-bitcoin-gold">
              नमस्ते
            </div>
          </div>
          
          <div className="mb-8">
            <span className="inline-block animate-float mb-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-radial from-bitcoin-gold/30 to-transparent blur-md"></div>
                <svg className="h-24 w-24 relative animate-pulse-slow" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FFD700" strokeWidth="1.5" />
                  <path d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872M9 11.5C9.67965 12.1797 10.8858 12.6614 12 12.6913M12 7.30872C10.8366 7.27729 9.7 7.7 9 8.5C8.5 9 8.289 10.55 9 11.5M12 7.30872V5.5M12 12.6913C13.1642 12.7227 14.3 12.3 15 11.5C15.5 11 15.711 9.45 15 8.5M12 12.6913V14.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 14.5V17.5" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 16.5H14" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in tracking-tight">
            Namaste <span className="text-bitcoin-gold bg-gradient-to-br from-bitcoin-gold to-bitcoin-amber bg-clip-text text-transparent">Bitcoin</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Where Eastern Wisdom Meets Western Technology
          </p>
          
          <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-6 py-2 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg font-medium text-white">October 15-17, 2025 • Bangalore, India</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-bitcoin-orange hover:bg-bitcoin-orange/90 text-white text-lg px-8 py-6 shadow-lg shadow-bitcoin-orange/20 hover:shadow-bitcoin-orange/30 transition-all">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm transition-all">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path fill="white" fillOpacity="1" d="M0,64L60,58.7C120,53,240,43,360,53.3C480,64,600,96,720,96C840,96,960,64,1080,48C1200,32,1320,32,1380,32L1440,32L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
