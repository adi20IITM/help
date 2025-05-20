
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2">
            <Bitcoin className="text-bitcoin-orange h-8 w-8" />
            <span className="text-2xl font-bold">
              Namaste <span className="text-bitcoin-orange">Bitcoin</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              About
            </a>
            <a href="#speakers" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Speakers
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Schedule
            </a>
            <a href="#sponsors" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Sponsors
            </a>
            <a href="#venue" className="text-gray-700 hover:text-bitcoin-orange transition-colors">
              Venue
            </a>
            <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-orange/90">
              Register Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            <a href="#about" className="block text-gray-700 hover:text-bitcoin-orange transition-colors">
              About
            </a>
            <a href="#speakers" className="block text-gray-700 hover:text-bitcoin-orange transition-colors">
              Speakers
            </a>
            <a href="#schedule" className="block text-gray-700 hover:text-bitcoin-orange transition-colors">
              Schedule
            </a>
            <a href="#sponsors" className="block text-gray-700 hover:text-bitcoin-orange transition-colors">
              Sponsors
            </a>
            <a href="#venue" className="block text-gray-700 hover:text-bitcoin-orange transition-colors">
              Venue
            </a>
            <Button className="w-full bg-bitcoin-orange text-white hover:bg-bitcoin-orange/90">
              Register Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
