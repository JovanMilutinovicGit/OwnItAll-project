import React from "react";
import ReserveBtn from "../components/Buttons/ReserveBtn.js";
import women from "../assets/package-women.png";
import heroimage from "../assets/HeroSection.png";
import "../Styles/Packages.css";
import CardWork from "../components/CardWork.js";
import PackageList from "../components/PackageList.js";
import ListTestimonials from "../components/ListTestimonials.js";

const Packages = () => {
  return (
    <div className="packages">
      <div className="packages-hero-section">
        <img src={heroimage} />
        <div className="packages-hero-section-content">
          <div className="content-left">
            <h3>
              Elevate your guests to celebrity <br /> status with our luxury
              360° <br />
              booth experience
            </h3>
            <p>
              OIA is an interactive 360° photo booth rental supported by an
              experienced and professional staff. Put your guests in the center
              of the latest entertainment and take your event to the next level.
            </p>
            <ReserveBtn />
          </div>
          <div className="content-right">
            <img src={women} />
          </div>
        </div>
      </div>
      <div className="photobooth-works">
        <h2>How a 360 Photobooth Works</h2>
        <div className="list-cards-work">
          <CardWork
            number={"1"}
            title={"Step up on the Platform"}
            desc={
              "Please be careful when stepping on the platform. Do not jump up & down and keep your feet on the platform at all times"
            }
          />
          <CardWork
            number={"2"}
            title={"Recording Starts"}
            desc={
              "The arm will start to rotate around the platform for about 7-15 seconds. As the camera passes, be sure to have fun (smile, laugh, gesture, pose, dance)!"
            }
          />
          <CardWork
            number={"3"}
            title={"Recording Stops"}
            desc={
              "Once the arm stops, your 360° experience has ended. Please do not step off the platform until you have been cleared. You may head over to the sharing station to retrieve your video."
            }
          />
          <CardWork
            number={"4"}
            title={"Video Processing Starts"}
            desc={
              "Now, the program begins to process the video and the entire process gets completed in about 20-30 seconds. After this, the recorded video will be available for instant downloading via QR code, text, or email. Guests are also able to share on social media."
            }
          />
        </div>
        <ReserveBtn />
      </div>
      <div className="video-sample">
        <h3>Video sample of a 360 photo booth video</h3>
      </div>
      <div className="package-list">
        <h2>Our Packages</h2>
        <PackageList />
      </div>
      <div className="testimonials">
        <ListTestimonials />
      </div>
    </div>
  );
};

export default Packages;
