import React from 'react'
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
//  import {  NavLink } from "react-router-dom";
 import BrandLogo from "../Assets/jhillmedia_logo.png"
function Navbar() {
  return (
    <nav
      className="navbar nav
      bar-expand-lg
      navbar-light"
      style={{ backgroundColor: "#0A0C37" }}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            style={{ width: 150 }}
            className="logo-image"
            src={BrandLogo}
            alt="JHillMedia"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="/about"
                style={{ color: "#F4FF61" }}
              >
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar