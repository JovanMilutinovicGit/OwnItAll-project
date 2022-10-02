import React from "react";
import "../Styles/CardItem.css";
import LikeIcon from "../assets/likeIcon.png";

const CardItem = ({ image, likes }) => {
  return (
    <div className="card-item">
      <div className="card-item-contet">
        <img src={image} />
        <div className="likes">
          <p>{likes} likes</p>
          <img id="like-icon" src={LikeIcon} width="20px" />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
