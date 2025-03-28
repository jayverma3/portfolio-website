import React, { useEffect } from "react";
import "./Upcomingcomponent.css";
import hacker from "../../assets/gptimages/hoodie_shop.webp";
import reactlogo from "../../assets/logos_pngs/react.png";

const Upcomingcomponent = () => {
  useEffect(() => {
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
      { threshold: 0.2 }
    );
    const titles = document.querySelectorAll(".cs-title");
    titles.forEach((title) => observer.observe(title));
    const cards = document.querySelectorAll(".cs-card");
    cards.forEach((card) => observer.observe(card));
    const cscontentitems = document.querySelectorAll(".cs-content-items");
    cscontentitems.forEach((cscontentitem) => observer.observe(cscontentitem));

    const customCursor = document.querySelector(".custom-cursor");

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      customCursor.style.left = `${x}px`;
      customCursor.style.top = `${y}px`;
    };

    const handleMouseEnter = () => customCursor.classList.add("active");
    const handleMouseLeave = () => customCursor.classList.remove("active");

    document.addEventListener("mousemove", handleMouseMove);

    cards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("mousemove", handleMouseMove);
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor">Check Out</div>
      <div className="example-container">
        <div className="case-studies">
          {[...Array(1)].map((_, index) => (
            <div className="cs-card" key={index}>
              <div className="cs-image">
                <img src={hacker} alt={`Case Study ${index + 1}`} />
              </div>
              <div className="cs-content">
                <div className="div-title">
                  <h3 className="cs-title">
                    Upcoming Project <span className="icon">🌟</span>
                  </h3>
                </div>
                <div className="cs-content-items">
                  <div className="cs-c-i-desc">
                    <p className="cs-description">
                      <h3 className="desc-h3">Ecommerce Website</h3>
                      <br />
                      Welcome to [Brand Name], your ultimate destination for
                      premium hoodies and t-shirts that redefine style, comfort,
                      and individuality. Our collection is designed for
                      trendsetters and creatives who value high-quality
                      craftsmanship, timeless designs, and an eco-friendly
                      approach to fashion.
                    </p>
                  </div>
                  <div className="cs-c-i-badge">
                    <div className="tech-badge">
                      <img
                        src={reactlogo}
                        alt="React Logo"
                        className="tech-logo"
                      />
                      <span className="tech-name">React</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Upcomingcomponent;
