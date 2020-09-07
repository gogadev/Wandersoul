import React from "react";
import { NavLink } from "react-router-dom";

import lineImg from "../../assets/line.jpg"

import "./navbar.style.css";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">Wandersoul</h1>
      <img className="line-img" src={lineImg} alt=""/>
      <ul className="list">
        <NavLink to="/">
          {" "}
          <li className="pages"><span>H</span>ome</li>
        </NavLink>
        <NavLink to="/about">
          <li className="pages"><span>A</span>bout</li>
        </NavLink>
        <NavLink to="contact">
          {" "}
          <li className="pages"><span>C</span>ontact</li>
        </NavLink>
        <NavLink to="subscribe">
          {" "}
          <li className="pages"><span>S</span>ubscribe</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
