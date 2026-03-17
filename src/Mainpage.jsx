import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

const Mainpage = () => {
  return (
    <>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
    </>
  );
};

export default Mainpage;