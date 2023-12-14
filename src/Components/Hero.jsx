import React, { useEffect } from "react";
import "./Hero.css";
import HeroP from "../assets/Hero_img.jpg";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="hero-section">
        <div className="hero-img">
          <img src={HeroP} alt="hero-image" className="main-Img" />
        </div>
        <div className="hero-content">
          <p>
            hey ! This is{" "}
            <span>
              {" "}
              <Typewriter
                words={["Deepak Kumar", "Deepak Kumar"]}
                loop={10}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              >
                Deepak Kumar
              </Typewriter>
            </span>
          </p>
          <h1 data-aos="flip-right" data-aos-duration="1500">
            React Developer
          </h1>
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
