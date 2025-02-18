import React from "react";
import  { useState, useEffect } from "react";
import "./ScrollingImages.css"; // Import CSS file

const ScrollingImages = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Update scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Calculate the scroll movement (you can adjust the divisor for speed)
  const moveAmount = scrollPosition / 5;
  return (
    <div className="scrolling-container">
      <div
        className="scrolling-images"
        style={{ transform: `translateX(${moveAmount}px)` }}
      >
        <img
          src="photo-1.jpg"
          alt="Image 1"
        />
        <img
          src="photo-2.jpg"
          alt="Image 2"
        />
        <img
          src="photo-3.jpg"
          alt="Image 3"
        />
        <img
          src="photo-4.jpg"
          alt="Image 4"
        />
        <img
          src="photo-5.jpg"
          alt="Image 5"
        />
        <img
          src="photo-6.jpg"
          alt="Image 6"
        />
        <img
          src="photo-7.jpg"
          alt="Image 6"
        />
           <img
          src="photo-8.jpg"
          alt="Image 6"
        />
      </div>
    </div>
  );
};

export default ScrollingImages;
