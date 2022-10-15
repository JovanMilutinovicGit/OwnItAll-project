import React, { useEffect } from "react";
import HeroImage from "../assets/HeroSection.png";
import HeroImagePeople from "../assets/HeroSectionPeople.png";
import Background from "../assets/first-page-background.png";
import Photo from "../assets/photo.png";
import firstpackageimage from "../assets/package-image-1.png";
import secondpackageimage from "../assets/package-image-2.png";
import "../Styles/HomePage.css";
import ReserveBtn from "../components/Buttons/ReserveBtn.js";
import TakeASpin from "../components/Buttons/TakeASpin.js";
import thirdpackageimage from "../assets/package-image-3.png";
import ListCards from "../components/ListCards.js";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="hero-section">
        <img src={HeroImage} />
        <div className="content">
          <div className="text-content">
            <h2>
              Welcome to Own It All
              <br /> Photo Booths, the luxury <br /> photo booth experience
              <br />
            </h2>
            <p>
              Servicing Monroe, LA and the surrounding areas, we create
              <br />
              memorable moments for your celebrations, school functions,
              <br />
              weddings, and corporate events.
              <br />
            </p>
            <ReserveBtn />
          </div>
          <div className="people-image">
            <img src={HeroImagePeople} />
          </div>
        </div>
      </div>
      <div className="info">
        <div className="left-side-photo">
          <img src={Photo} />
        </div>
        <div className="right-side-desc">
          <h3>
            Goodbye traditional photo <br /> booths! Hello 360° video
            <br /> experience!
          </h3>
          <p>
            Every event is unique and we have the capacity to fulfil <br /> your
            requirements from start to finish. Let us transform <br /> your
            brand or event into revolutionary digital memories.
          </p>
          <ReserveBtn />
        </div>
      </div>
      <div className="our-packages">
        <img src={Background} />
        <div className="our-package-content">
          <div className="first-package">
            <div className="first-package-left">
              <h3>2 Hours</h3>
              <ul>
                Included Features:
                <li>Unlimited Slow Motion Video Captures</li>
                <li>2 On-site Video Attendants</li>
                <li>iPad Sharing Station</li>
                <li>Instant Video Downloads</li>
                <li>Security Stanchions</li>
                <li>Custom Video Overlay with Music</li>
                <li>Mini-Website with Video Gallery</li>
                <li>Themed Prop Tablez</li>
                <li>Free Travel Up to 25 Miles Included</li>
              </ul>
              <TakeASpin />
            </div>
            <div className="first-package-right">
              <div className="image">
                <img src={firstpackageimage} width="100px" />
              </div>
            </div>
          </div>
          <div className="second-package">
            <div className="second-package-left">
              <div className="second-image">
                <img src={secondpackageimage} />
              </div>
            </div>
            <div className="second-package-right">
              <h3>3 Hours</h3>
              <ul>
                Included Features:
                <li>Unlimited Slow Motion Video Captures</li>
                <li>2 On-site Video Attendants</li>
                <li>iPad Sharing Station</li>
                <li>Instant Video Downloads</li>
                <li>Security Stanchions</li>
                <li>Custom Video Overlay with Music</li>
                <li>Mini-Website with Video Gallery</li>
                <li>Themed Prop Tablez</li>
                <li>Free Travel Up to 25 Miles Included</li>
              </ul>
              <TakeASpin />
            </div>
          </div>
          <div className="third-package">
            <div className="third-package-left">
              <h3>4 Hours</h3>
              <ul>
                Included Features:
                <li>Unlimited Slow Motion Video Captures</li>
                <li>2 On-site Video Attendants</li>
                <li>iPad Sharing Station</li>
                <li>Instant Video Downloads</li>
                <li>Security Stanchions</li>
                <li>Custom Video Overlay with Music</li>
                <li>Mini-Website with Video Gallery</li>
                <li>Themed Prop Tablez</li>
                <li>Free Travel Up to 25 Miles Included</li>
              </ul>
              <TakeASpin />
            </div>
            <div className="third-package-right">
              <div className="third-image">
                <img src={thirdpackageimage} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListCards />
    </div>
  );
};

export default HomePage;
