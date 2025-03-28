import "./AboutMe.css";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import backgroundvid from "../../assets/vid_folder/cosmos.mp4";

const AboutMe = () => {
  return (
    <div className="aboutme">
      <video autoPlay muted loop playsInline className="home-background-video">
        <source src={backgroundvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <Footer />
    </div>
  );
};
export default AboutMe;
