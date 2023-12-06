import React from "react";
import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="foot-container">
          <div className="left">
            <div className="location">
              <FaHome size={20} />
              <div>
                <p>Berhampur,Ganjam</p>
                <p>India</p>
              </div>
            </div>
            <div className="contact">
              <BsFillTelephoneFill size={20} />
              <p>+91 9937684342</p>
            </div>
            <div className="mail">
              <IoIosMail size={20} />
              <p>sahudeepakbca@gmail.com</p>
            </div>
          </div>
          <div className="right">
            <h3>Follow Me</h3>
            <div className="icons">
              <NavLink
                target="_blank"
                to="https://www.facebook.com/profile.php?id=61550822152505&mibextid=ZbWKwL"
              >
                <FaFacebook size={20} style={{ color: "#fff" }} />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://instagram.com/sahu.deepakkk_?igshid=NzZlODBkYWE4Ng=="
              >
                <FaInstagram size={20} style={{ color: "#fff" }} />
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/deepakkumarsahu2/"
                target="_blank"
              >
                <FaLinkedin size={20} style={{ color: "#fff" }} />
              </NavLink>
              <NavLink
                target="_blank"
                to="https://x.com/kumardeepak269?t=Lxq-BOQELsJuSIcGj5dqig&s=09"
              >
                <FaXTwitter size={20} style={{ color: "#fff" }} />
              </NavLink>
              <NavLink target="_blank" to="https://github.com/deepakkumarsahu2">
                <FaGithub size={20} style={{ color: "#fff" }} />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
