import React from "react";
import contactheroimage from "../assets/contact-hero-image.png";
import EmailUs from "../components/Buttons/EmailUs";
import "../Styles/Contact.css";
import Send from "../components/Buttons/Send.js";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-hero-section">
        <img src={contactheroimage} />
        <div className="contact-hero-section-content">
          <p className="content-1">
            READY TO ELEVATE YOUR ENTERTAINMENT EXPERIENCE?
          </p>
          <p className="content-2">Have questions first?</p>
          <EmailUs />
        </div>
      </div>
      <div className="form">
        <div className="name-lastname">
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
        <div className="others">
          <input placeholder="Phone number" />
          <input id="message-input" placeholder="Message" />
        </div>
        <div className="btn">
          <Send />
        </div>
      </div>
    </div>
  );
};

export default Contact;
