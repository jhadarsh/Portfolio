import React from 'react';
import "./Footer.css";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotation from '@mui/icons-material/ThreeDRotation';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
            
          <div className="col-md-6">
            <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-right">
            <ul className="social-icons">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"><FacebookIcon/></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"><InstagramIcon /></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"><WhatsAppIcon /></i>
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in"><TelegramIcon/></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;