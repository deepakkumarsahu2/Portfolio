import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";

export default function Navabar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo" />

        <div>
          <ul className={click ? "links active" : "links"}>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes style={{ color: "#fff" }} size={25} />
          ) : (
            <IoMenu style={{ color: "#fff" }} size={25} />
          )}
        </div>
      </nav>
    </>
  );
}
