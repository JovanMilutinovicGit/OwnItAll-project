import React from "react";
import "../Styles/PackageItem.css";
import TakeASpin from "../components/Buttons/TakeASpin.js";

const PackageItem = ({ hours, desc, offer }) => {
  return (
    <div className="item">
      <div className="hours">{hours}</div>
      <div className="desc">{desc}</div>
      <div className="offer">{offer}</div>
      <div className="btn-spin">
        <TakeASpin />
      </div>
    </div>
  );
};

export default PackageItem;
