import React from 'react'
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
//  import {  NavLink } from "react-router-dom";
 import BrandLogo from "../Assets/jhillmedia_logo.png"

import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#0A0C37" }}
    >
      <div className="container d-flex align-items-center">
        <NavLink className="navbar-brand" to="/">
          <img
            style={{ width: 150 }}
            className="logo-image"
            src={BrandLogo}
            alt="JHillMedia"
          />
        </NavLink>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" style={{ color: "#F4FF61" }}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/about-us"
              style={{ color: "#F4FF61" }}
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar