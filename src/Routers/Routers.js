import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="works" element={<Projects />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};

export default Routers;