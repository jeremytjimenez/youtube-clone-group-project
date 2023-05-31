import React from 'react'
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import BrandLogo from "../Assets/jhillmedia_logo.png"

import { NavLink } from 'react-router-dom'

function Navbar({ setSearchData }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#0A0C37" }}
    >
      <div className="container d-flex align-items-center">
        <NavLink onClick={() => {setSearchData({})}} className="navbar-brand" to="/">
          <img
            style={{ width: 150 }}
            className="logo-image"
            src={BrandLogo}
            alt="JHillMedia"
          />
        </NavLink>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink onClick={() => {setSearchData({})}} className="nav-link" to="/" style={{ color: "#F4FF61" }}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              onClick={() => {setSearchData({})}}
              className="nav-link"
              to="/about"
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