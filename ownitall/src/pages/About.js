import React from "react";
import heroImage from "../assets/about-hero-section.png";
import "../Styles/About.css";
import ReserveBtn from "../components/Buttons/ReserveBtn.js";
import laptopImg from "../assets/laptop.png";
import womenImg from "../assets/women.jpg";
import TakeASpin from "../components/Buttons/TakeASpin.js";

const About = () => {
  return (
    <div className="about">
      <div className="about-hero-section">
        <img src={heroImage} />
        <div className="hero-image-content">
          <h3>
            Our mission is simple…We are a photo booth company with a purpose.
          </h3>
          <p>
            We strive to create the most memorable moments for you <br /> and
            your guests by providing exceptional customer service <br /> through
            the latest photo and video technology experience.
          </p>
          <ReserveBtn />
        </div>
      </div>
      <div className="about-description">
        <div className="about-description-left-side">
          <h3>
            Own It All Photo Booths is a luxury photo booth rental company
            located in Northeast Louisiana.{" "}
          </h3>
          <p>
            We are committed to providing clients with quality service and an
            enjoyable experience while creating memories that will last a
            lifetime! Let us provide happiness, fun, and excitement to your
            event, so you can share your best moments with the people who matter
            most—your friends and family.
          </p>
        </div>
        <div className="about-description-right-side">
          <img src={laptopImg} />
        </div>
      </div>
      <div className="owner">
        <div className="owner-left">
          <img src={womenImg} />
        </div>
        <div className="owner-right">
          <h3>
            It all began with a dream. A dream of financial freedom and the
            ability to own my own business. Now, Im on a mission to “Own It
            All”!
          </h3>
          <p>
            Hello, my name is Ambria Anderson and I am the owner of OIA Photo
            Booths and a native of Bastrop, LA. We understand that renting photo
            booths can be overwhelming, so we offer rental packages that allow
            you to customize your event to meet your specific event needs.
            Whether you're looking for something simple or something elaborate,
            you too have the ability to Own It All!
          </p>
          <TakeASpin />
        </div>
      </div>
    </div>
  );
};

export default About;
