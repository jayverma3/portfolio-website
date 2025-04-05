import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Home.css";
import ImagesPopUp from "../../components/ImagesPopUp/ImagesPopUp";
import ImageAndName from "../../components/imageandname/imageandname";
import SlideIn from "../../components/SlideIn/SlideIn";
import LineScroller from "../../components/LineScroller/LineScroller";
import Upcomingcomponent from "../../components/Upcomingcomponent/Upcomingcomponent";
import backgroundvid from "../../assets/vid_folder/cosmos.mp4";
import SplashScreen from "../../components/SplashScreen/SplashScreen";
import TwoSideDivsComp from "../../components/TwoSideDivsComp/FullStackCompo";
import SlidingHeaders from "../../components/SlidingHeaders/SlidingHeaders";

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <LineScroller />
      {showSplash && <SplashScreen />}

      <video autoPlay muted loop playsInline className="home-background-video">
        <source src={backgroundvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Header />

      <div className="hian">
        <ImageAndName startAnimation={!showSplash} />
      </div>

      <div className="hupc">
        <Upcomingcomponent className="hupc" />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
