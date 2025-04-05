import React, { useEffect } from "react";
import "./Upcomingcomponent.css";
import hacker from "../../assets/gptimages/hoodie_shop.webp";
import reactlogo from "../../assets/logos_pngs/react.png";
import mongodblogo from "../../assets/logos_pngs/mongodb.png";
import htmllogo from "../../assets/logos_pngs/html.png";
import csslogo from "../../assets/logos_pngs/css3.png";
import vitelogo from "../../assets/logos_pngs/Vite.js.png";
import expresslogo from "../../assets/logos_pngs/Express.png";
import nextjslogo from "../../assets/logos_pngs/Next.js.png";
import PHP from "../../assets/logos_pngs/PHP.png";
import P from "../PinkIcon/PinkIcon";
import S from "../StarIcon/StarIcon";
const techStack = [
  { logo: reactlogo, name: "React" },
  { logo: mongodblogo, name: "MongoDB" },
  { logo: htmllogo, name: "HTML5" },
  { logo: csslogo, name: "CSS" },
  { logo: vitelogo, name: "Vite" },
  { logo: expresslogo, name: "Express" },
  { logo: nextjslogo, name: "Next.js" },
  { logo: PHP, name: "PHP" },
];

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
              <div className="cs-image-container">
                <div className="cs-image">
                  <img src={hacker} alt={`Case Study ${index + 1}`} />
                </div>
              </div>
              <div className="cs-content">
                <div className="div-title">
                  <h3 className="h3-title">
                    <span className="icon">
                      <S />
                    </span>
                    Upcoming Project
                    <span className="icon">
                      <S />
                    </span>
                  </h3>
                </div>
                <div className="cs-badge-title">
                  <p className="cs-p">
                    About The Project{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ec4899" // Tailwind pink-500
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="info-icon"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <circle cx="12" cy="8" r="1" />
                    </svg>
                  </p>
                </div>
                <div className="cs-c-i-desc">
                  <p className="cs-description star-text-wrapper">
                    <br />
                    <S />
                    <p className="cs-text">
                      Welcome to Hoodiez, your ultimate destination for premium
                      hoodies and t-shirts that redefine style, comfort, and
                      individuality. Our collection is designed for trendsetters
                      and creatives who value high-quality craftsmanship,
                      timeless designs, and an eco-friendly approach to fashion.
                    </p>
                    <br />
                  </p>

                  <p className="cs-badge-title star-text-wrapper">
                    <S />
                    <p className="cs-text">
                      <br />
                      About the Tech{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ec4899" // Tailwind pink-500
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="info-icon"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="16" x2="12" y2="12" />
                        <circle cx="12" cy="8" r="1" />
                      </svg>
                    </p>
                    <br />
                  </p>
                  <p className="cs-description">
                    <P /> React & Vite & Html & CSS used to make the frontend of
                    the website
                    <br />
                    <P /> Express.js is used for the backend framework to handle
                    server-side logic
                    <br />
                    <P /> PHP as a middleware to send data to MongoDB
                    <br />
                    <P /> MongoDB is used as the database to store user data
                    <br />
                    <P /> 3D models of hoodies and t-shirts are available
                    <br />
                    <P /> Error-free transactions and smooth checkout processes,
                    every single time.
                  </p>
                </div>
                <p className="cs-badge-title">Tech Used☄️</p>
                <div className="cs-c-i-badge">
                  {techStack.map(({ logo, name }, index) => (
                    <div className="tech-badge" key={index}>
                      <img
                        src={logo}
                        alt={`${name} Logo`}
                        className="tech-logo"
                      />
                      <span className="tech-name">{name}</span>
                    </div>
                  ))}
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
