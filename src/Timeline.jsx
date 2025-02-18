import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchSharpIcon from '@mui/icons-material/LaunchSharp';
import "./Timeline.css";

const Timeline = ({ events }) => {
  const gradientStyle = {
    color: "transparent",
    backgroundClip: "text",
    WebkitBackgroundClip: "text", // For WebKit-based browsers
    backgroundSize: "100% 200%",
    backgroundImage:
      "linear-gradient(145deg, rgb(255, 39, 100), rgb(0, 208, 255))",
    opacity: 1,
  };
  return (
    <div className="timeline-container">
      <div className="proj-title">

        Impactfull Projects <br />
        <button className="scroll-btn">Scroll Down</button>
        </div>
      <div className="timeline-line"></div>
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="sticky-container">
            <div className="circle">
              <div className="inner-circle"></div>
            </div>
            <h3 className="event-date">{event.date}</h3>
          </div>
          <div className="event-content">
            <h3 className="event-date-mobile">{event.date}</h3>
            <h1 className="event-title" style={gradientStyle}>
              {event.title}
            </h1>
            <p className="event-description">{event.description}</p>
            <div className="img-div">
              {event.image && (
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />
              )}
              <div class="overlay"><span><a href={event.Github}><GitHubIcon /></a> &nbsp; &nbsp; <a href={event.Website}><LaunchSharpIcon/></a></span></div>
            </div>

            <div className="event-details">{event.details}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
