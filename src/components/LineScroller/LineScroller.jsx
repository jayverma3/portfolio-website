import React, { useEffect, useState } from "react";
import "./LineScroller.css";

const LineScroller = () => {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / docHeight) * 100;
    setScrollHeight(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="line-scroller-container">
      <div
        className="line-scroller"
        style={{ height: `${scrollHeight}%` }}
      ></div>
    </div>
  );
};

export default LineScroller;
