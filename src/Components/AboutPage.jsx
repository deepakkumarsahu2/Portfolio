import React, { useEffect } from "react";
import "./AboutPage.css";
import { NavLink } from "react-router-dom";
import img1 from "../assets/React1.jpg";
import img2 from "../assets/Skill.gif";
import { FaArrowCircleRight } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";
export default function AboutPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className="about">
        <div className="left">
          <h1>This is Deepak</h1>
          <p>
            I am a Frontend React Developer. I makes Responsive Website Designs.
          </p>
          <NavLink className="btn" to="/contact">
            Contact
          </NavLink>
        </div>
        <div className="right">
          <div
            className="img-sec"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img src={img1} alt="about photo" />
          </div>
        </div>
      </div>
      <div className="about2">
        <div className="left-down">
          <h1>What Skills I have ?</h1>

          <FaArrowCircleRight className="icon" />
        </div>

        <div
          className="right-down"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <img src={img2} alt="Skills image" />
        </div>
      </div>
    </div>
  );
}
