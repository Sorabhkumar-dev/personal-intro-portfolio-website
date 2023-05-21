import React from "react";
import "../css/NavBar.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav_container">
      <NavLink to="/" className="home_link">
        <h2 className="logo_heading">
          <span className="logo_color_primary">Faster </span>
          <span className="logo_color_secondory">Corp</span>
        </h2>
      </NavLink>
      <ul className="nav_item_container">
        <li className="nav_item">
          {" "}
          <NavLink to="about" className="link">
            About
          </NavLink>
        </li>
        <li className="nav_item">
          {" "}
          <NavLink to="skills" className="link">
            Skills
          </NavLink>
        </li>
        <li className="nav_item">
          {" "}
          <NavLink to="education" className="link">
            Education
          </NavLink>
        </li>
        <li className="nav_item">
          {" "}
          <NavLink to="contact" className="link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
