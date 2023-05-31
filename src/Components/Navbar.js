import React from 'react'
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
//  import {  NavLink } from "react-router-dom";
 import BrandLogo from "../Assets/jhillmedia_logo.png"

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      className="navbar nav
      bar-expand-lg
      navbar-light"
      style={{ backgroundColor: "#0A0C37" }}
    >
      <div className="container">

        <NavLink className="navbar-brand" to="/">
           <img
            style={{ width: 150 }}
            className="logo-image"
            src={BrandLogo}
            alt="JHillMedia"
          />
        </NavLink>

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
              <NavLink className="nav-link" to="/"  style={{ color: "#F4FF61" }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">


              <NavLink className="nav-link" to="/about-us"style={{ color: "#F4FF61" }}>

                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar