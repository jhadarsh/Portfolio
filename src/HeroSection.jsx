import React from "react";
import "./HeroSection.css"; // Import CSS file

const HeroSection = () => {
  return (
    <div className="hero-container">
      {/* Centered Heading */}
      <div className="hero-text">
        <h1>The End Of The Beginning</h1>
      </div>

      {/* Gradient Overlay */}
      <div className="gradient-overlay"></div>

      {/* Centered Image */}
      <img src="/hero5.png" alt="Hero" className="hero-image" />
    </div>
  );
};

export default HeroSection;
