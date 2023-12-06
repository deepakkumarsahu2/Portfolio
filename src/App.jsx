import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/Abouts";
import Projects from "./Routes/Projects";
import Contact from "./Routes/Contact";
import Navabar from "./Components/Navabar";

import Footer from "./Components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navabar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
