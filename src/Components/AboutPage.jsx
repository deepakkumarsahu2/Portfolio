import React from "react";
import "./AboutPage.css";
import { NavLink } from "react-router-dom";
import img1 from "../assets/React1.jpg";
import img2 from "../assets/Skill.gif";
import { FaArrowCircleRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div>
      <div className="about">
        <div className="left">
          <h1>Who i am ?</h1>
          <p>
            I am a Frontend React Developer. I makes Responsive Website Designs.
          </p>
          <NavLink className="btn" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="right">
          <div className="img-sec">
            <img src={img1} alt="about photo" />
          </div>
        </div>
      </div>
      <div className="about2">
        <div className="left-down">
          <h1>What Skills I have ?</h1>

          <FaArrowCircleRight className="icon" />
        </div>

        <div className="right-down">
          <img src={img2} alt="Skills image" />
        </div>
      </div>
    </div>
  );
}
