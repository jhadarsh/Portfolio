import React from 'react';
import './Navbar.css'; // Import the CSS file for styling
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
 

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="nav-container"> 
      <button className="toggle-button" onClick={toggleSidebar}>
        {isOpen ? "Close" : "Menu"}
      </button>
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
       <div className='logodiv'>
       <Avatar alt="Travis Howard" src=" profile img.jpg" />
       </div>
      <div className="nav-links">
        <a href="#about" className="nav-link"><AddHomeIcon/> </a>
        <a href="#skills" className="nav-link"><AutoStoriesIcon/></a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#contact" className="nav-link">Contact</a>
      </div>
    </div>
    </div>
  );
};

export default VerticalNavbar;
