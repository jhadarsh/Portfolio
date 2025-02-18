import React from "react";
import CountUp from "react-countup";
import "./Counterupstars.css";
import { useState } from "react";

const StatsCard = ({ number, label, subLabel }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Reset the count when hovering
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="count-main">
    <div
      className={`stats-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Gradient Number with Counting Effect */}
      <span className="count-number">
        <CountUp end={isHovered ? 0 : number} duration={2.5} />
        {isHovered ? "" : "+"}
      </span>
      {/* Label */}
      <div className="label">
        {label} <br />
        <p className="sub-label">{subLabel}</p>
      </div>
    </div>
    </div>
  );
};

export default StatsCard;
