import React from "react";
import logo from './assets/logo-transparent.png';
import { useNavigate } from "react-router-dom";

const Navbar = (state) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <img src={logo} alt="logo" className="logo" onClick={() => navigate("/")}></img>
      <ul className="all-links">
        <li><a href="/#home" className="navbar-links">Home</a></li>
        <li><a href="/#about" className="navbar-links">About</a></li>
        <li><a href="/#projects" className="navbar-links">Projects</a></li>
        <li><a href="/#designs" className="navbar-links">Designs</a></li>
        <li><a href="/#contact" className="navbar-links">Contact</a></li>
        <li>Resume</li>
      </ul>
      <ul className="all-links-small">
        <li><a href="/#home" className="navbar-links">H</a></li>
        <li><a href="/#about" className="navbar-links">A</a></li>
        <li><a href="/#projects" className="navbar-links">P</a></li>
        <li><a href="/#designs" className="navbar-links">D</a></li>
        <li><a href="/#contact" className="navbar-links">C</a></li>
        <li>R</li>
      </ul>
    </div>
  )
}

export default Navbar;