import React from "react";
import "./BhagavadGita.css"; // Import the CSS file

const BhagavadGita = () => {
  return (
    <div className="bg-gradient-container">
      <div className="video-container">
        <div className="gradient-overlay"></div>
        <video
          src="/public/krishna.mp4"
          className="video"
          autoPlay
          loop
          muted
        ></video>
        <div className="text-overlay">
          <p className="text-main">
            <span>Karmanye vadhikaraste ma phaleshu kadachana,</span>
            <span>Ma karma phala hetur bhur ma te sango’stvakarmani.</span>
          </p>
          <p className="text-description">
            You have a right to perform your duties, but you are not entitled to the fruits of your actions. Do not let the fruits of action be your motive, nor let your attachment be to inaction
          </p>
          <p className="text-quote">- Bhagavad Gita 2.47</p>
        </div>
      </div>
    </div>
  );
};

export default BhagavadGita;
