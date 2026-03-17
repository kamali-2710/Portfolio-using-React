import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="headerlink">

      <Link to="/">
        <i className="fa-regular fa-house"></i>
        <span>Home</span>
      </Link>

      <Link to="/About">
        <i className="fa-regular fa-user"></i>
        <span>About</span>
      </Link>

      <Link to="/Skills">
        <i className="fa-solid fa-laptop"></i>
        <span>Skill</span>
      </Link>

      <Link to="/Project">
        <i className="fa-solid fa-briefcase"></i>
        <span>Project</span>
      </Link>

      <Link to="/Resume">
        <i className="fa-regular fa-file-lines"></i>
        <span>Resume</span>
      </Link>

      <Link to="/Contact">
        <i className="fa-regular fa-envelope"></i>
        <span>Contact</span>
      </Link>

    </div>
  );
}

export default Header;