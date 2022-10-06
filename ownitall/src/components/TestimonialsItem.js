import React from "react";
import "../Styles/TestimonialsItem.css";

const TestimonialsItem = ({ message, user, avatar }) => {
  return (
    <div className="testimonials-item">
      <div className="message">{message}</div>
      <div className="user-data">
        <div className="user-data-left">
          <img src={avatar} width="50px" />
        </div>
        <div className="user-data-right">{user}</div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
