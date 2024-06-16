import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";

const Headers = () => {
  return (
    <div className="w-full bg-background text-foreground">
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default Headers;
