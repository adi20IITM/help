
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Sponsors from "@/components/Sponsors";
import Registration from "@/components/Registration";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to venue if hash is present
    if (window.location.hash === "#venue") {
      const element = document.getElementById("venue");
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
        <About />
      </div>
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
        <Speakers />
      </div>
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
        <Schedule />
      </div>
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
        <Registration />
      </div>
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
        <Sponsors />
      </div>
      
      <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
        <Venue />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
