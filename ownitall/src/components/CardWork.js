import React from "react";
import "../Styles/CardWork.css";

const CardWork = ({ number, title, desc }) => {
  return (
    <div className="card-work">
      <div className="number">{number}</div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
};

export default CardWork;
