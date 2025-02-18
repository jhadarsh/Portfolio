import React from "react";
import "./BottomNavbar.css";

const BottomNavbar = ({ scrollToSection, refs }) => {
  return (
    <div className="bottom-navbar">
      <button className="nav-button" onClick={() => scrollToSection(refs.aboutRef)}>
        ℹ️ About
      </button>
      <button className="nav-button" onClick={() => scrollToSection(refs.skillsRef)}>
        🔧 Skills
      </button>
      <button className="nav-button" onClick={() => scrollToSection(refs.achRef)}>
        🏆 Achievements
      </button>
      <button className="nav-button" onClick={() => scrollToSection(refs.timelineRef)}>
        ⏳ Timeline
      </button>
      {/* <button className="nav-button" onClick={() => scrollToSection(refs.gitaRef)}>
        📖 Bhagavad Gita
      </button>
      <button className="nav-button" onClick={() => scrollToSection(refs.heroRef)}>
        🎬 Hero Section
      </button> */}
    </div>
  );
};

export default BottomNavbar;

