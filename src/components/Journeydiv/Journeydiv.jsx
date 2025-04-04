import React, { useEffect } from "react";
import "./Journeydiv.css";
import LineScroller from "../LineScroller/LineScroller";

const Journey = () => {
  useEffect(() => {
    const handleScroll = () => {
      const container = document.querySelector(".journey-container");
      if (container) {
        const scrollableHeight =
          container.scrollHeight - container.clientHeight;
        const scrollTop = container.scrollTop;
        const progress = (scrollTop / scrollableHeight) * 100;
        setScrollProgress(progress);
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".journey-section");
    sections.forEach((section) => observer.observe(section));

    const container = document.querySelector(".journey-container");
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      observer.disconnect();
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="journey-container" id="journey-container">
      <div className="journey-components">
        <div className="journey-columns">
          <div className="journey-rows">
            <div className="journey-section">
              <div className="journey-section-year">
                <h1 className="jh2">2016</h1>
              </div>
              <div className="journey-section-Study">
                <h1 className="jh2">10th</h1>
              </div>
              <div className="journey-section-field"></div>
            </div>
          </div>
          <div className="journey-rows">
            <div className="journey-section">
              <div className="journey-section-year">
                <h1 className="jh2">2018</h1>
              </div>
              <div className="journey-section-Study">
                <h1 className="jh2">12th</h1>
              </div>
              <div className="journey-section-field">
                <h1 className="jh2">Commerce</h1>
              </div>
            </div>
          </div>
          <div className="journey-rows">
            <div className="journey-section">
              <div className="journey-section-year">
                <h1 className="jh2">2019</h1>
              </div>
              <div className="journey-section-Study">
                <h1 className="jh2">BCA</h1>
              </div>
              <div className="journey-section-field">
                <h1 className="jh2">B.Computer Application</h1>
              </div>
            </div>
          </div>
          <div className="journey-rows">
            <div className="journey-section">
              <div className="journey-section-year">
                <h1 className="jh2">2022</h1>
              </div>
              <div className="journey-section-Study">
                <h1 className="jh2">MCA</h1>
              </div>
              <div className="journey-section-field">
                <h1 className="jh2">M.Computer Application</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
