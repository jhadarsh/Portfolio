import React from "react";
import  { useState, useEffect } from "react";
import "./Profile.css"; // Import the CSS file for styling
import LaptopTextEditor from "./LaptopFrame";
import ScrollingImages from "./ScrollingImages";
const Profile = () => {
  

   
  return (
    <div className="profile-container">
      <div className="info-main"> 
      
       
      <div className="content-wrapper">
        {/* Left Text */}
       <div className="part-one">
       <span className="hero-subtext">Jai Shree Krishna, I'm</span>
      <h1 className="hero-title">
        A<span>D</span>AR<span>S</span>H
      </h1>
       </div>
       <div className="part-two"> 
        <div className="left-text">
          <p>HELLO,I'm</p>
          <h2>ADARSH KUMAR</h2>
          {/* <p>
           a <strong>FULL STACK DEVELOPER</strong>.
          </p> */}
        </div>

        {/* Center Image */}
        <div className="center-image">
        <img src="/public/hero3-main.png" alt="Your Name"  className="profile-image" />
        </div>

        {/* Right Text */}
        <div className="right-text">
          <h1>WELCOME TO MY</h1>
          <p>  &nbsp; &nbsp; PORTFOLIO</p>
       
          </div>
        </div>
      </div>
      </div>
      <br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /><br /><br /><br />
      <div className="images-me">
        <ScrollingImages/>
      </div>
      <div className="profile-info">
         <LaptopTextEditor />
      </div>
      <div className="images-me-last">
        <ScrollingImages/>
      </div>
    </div>
  );
};

export default Profile;
