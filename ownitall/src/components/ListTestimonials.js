import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTestimonials } from "../actions/Index.js";
import TestimonialsItem from "./TestimonialsItem.js";
import "../Styles/ListTestimonials.css";

const ListTestimonials = ({ fetchTestimonials, testimonials }) => {
  useEffect(() => {
    fetchTestimonials();
  }, []);

  const listOfTest = Object.values(testimonials).map((element) => {
    return (
      <TestimonialsItem
        key={element.id}
        user={element.name}
        message={element.message}
        avatar={element.avatar}
      />
    );
  });

  return <div className="list-testimonials">{listOfTest}</div>;
};

const mapStateToProps = ({ testimonials }) => ({ testimonials: testimonials });

export default connect(mapStateToProps, { fetchTestimonials })(
  ListTestimonials
);
