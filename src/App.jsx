import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import "./App.css";

const App = () => {
  return (
    <Router basename="/portfolio-website">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
