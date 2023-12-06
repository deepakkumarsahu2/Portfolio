import React from "react";
import "./Hero.css";
import HeroP from "../assets/Hero_img.jpg";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="hero-img">
          <img src={HeroP} alt="hero-image" className="main-Img" />
        </div>
        <div className="hero-content">
          <p>
            hey ! This is <span>Deepak Kumar</span>
          </p>
          <h1>React Developer</h1>
          <NavLink to="/projects" className="btn1">
            Projects
          </NavLink>
          <NavLink to="/contact" className="btn1 btn ">
            Contact
          </NavLink>
        </div>
      </div>
    </>
  );
}
