import React from "react";
import footerImage from "../assets/footer-image.png";
import "../Styles/Footer.css";
import fbIcon from "../assets/fbIcon.png";
import instaIcon from "../assets/instaIcon.png";
import sendIcon from "../assets/sendIcon.png";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-left-side">
        <img src={footerImage} />
      </div>
      <div className="footer-right-side">
        <h3>Stay up to date</h3>
        <div className="email-input">
          <input placeholder="Your email address" />
          <img className="send-email" src={sendIcon} width="20px" />
        </div>
        <div className="social-media">
          <img src={fbIcon} />
          <img src={instaIcon} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
