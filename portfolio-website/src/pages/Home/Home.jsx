import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import ImageAndName from "../../components/imageandname/imageandname";
import SlideIn from "../../components/SlideIn/SlideIn";
import LineScroller from "../../components/LineScroller/LineScroller";
import Upcomingcomponent from "../../components/Upcomingcomponent/Upcomingcomponent";
import backgroundvid from "../../assets/vid_folder/cosmos.mp4";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
const Home = () => {
  return (
    <div className="home">
      <LineScroller />
      <SplashScreen />
      <video autoPlay muted loop playsInline className="home-background-video">
        <source src={backgroundvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Header />
      <ImageAndName className="hian" />
      <Upcomingcomponent className="hupc" />
      <Footer />
    </div>
  );
};

export default Home;
