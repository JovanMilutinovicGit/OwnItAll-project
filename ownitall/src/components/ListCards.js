import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchRandomPhotos } from "../actions/Index.js";
import CardItem from "./CardItem.js";
import "../Styles/ListCards.css";

const ListCards = ({ fetchRandomPhotos, photoCard }) => {
  useEffect(() => {
    fetchRandomPhotos();
  }, []);

  const listOfCards = Object.values(photoCard).map(
    ({ urls: { full }, id, likes }) => {
      return <CardItem key={id} image={full} likes={likes} />;
    }
  );
  return <div className="listCards">{listOfCards}</div>;
};

const mapStateToProps = ({ photos }) => ({ photoCard: photos });

export default connect(mapStateToProps, { fetchRandomPhotos })(ListCards);
