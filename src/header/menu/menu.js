import React, { Component } from "react";

import './menu.css'

function Menu() {
  return (
    <div className="menu">
      {/* <div className="collapse navbar-collapse" id="jurado-nav"> */}
        <ul className="">
          <li className="nav-item">
            <a className="nav-link active" href="#page-top">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jurado-about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jurado-services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jurado-portfolio">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jurado-testimonial">
              Testimonial
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jurado-blog">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#jurado-contact">
              Contact
            </a>
          </li>
        </ul>
      {/* </div> */}
    </div>
  );
}

export default Menu;