
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bitcoin } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white shadow-md" 
        : "bg-white/80 backdrop-blur-lg"
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <div className={`absolute inset-0 bg-bitcoin-gold/20 rounded-full blur-md transition-opacity group-hover:opacity-100 ${isScrolled ? 'opacity-0' : 'opacity-50'}`}></div>
              <Bitcoin className="text-bitcoin-orange h-8 w-8 relative z-10 transition-transform group-hover:scale-110" />
            </div>
            <span className="text-2xl font-bold">
              Namaste <span className="text-bitcoin-orange">Bitcoin</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-bitcoin-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-bitcoin-orange after:transition-all">
              About
            </a>
            <a href="#speakers" className="text-gray-700 hover:text-bitcoin-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-bitcoin-orange after:transition-all">
              Speakers
            </a>
            <a href="#schedule" className="text-gray-700 hover:text-bitcoin-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-bitcoin-orange after:transition-all">
              Schedule
            </a>
            <a href="#sponsors" className="text-gray-700 hover:text-bitcoin-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-bitcoin-orange after:transition-all">
              Sponsors
            </a>
            <a href="#venue" className="text-gray-700 hover:text-bitcoin-orange transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-bitcoin-orange after:transition-all">
              Venue
            </a>
            <Button className="bg-bitcoin-orange text-white hover:bg-bitcoin-orange/90 shadow-md hover:shadow-lg transition-all">
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
            <a href="#about" className="block text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              About
            </a>
            <a href="#speakers" className="block text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              Speakers
            </a>
            <a href="#schedule" className="block text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              Schedule
            </a>
            <a href="#sponsors" className="block text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
              Sponsors
            </a>
            <a href="#venue" className="block text-gray-700 hover:text-bitcoin-orange transition-colors py-2">
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
