import React from "react";
import "../css/FooterLinkSection.css";
import { NavLink } from "react-router-dom";

export default function FooterLinkSection(props) {
const links = props.services.map(link =>{
   return <li className="footer_link">
    <NavLink className="footer_nav_link">{link}</NavLink>
  </li>
});
  return (
    <div className="footer_link_container">
      <h3 className="footer_link_heading">{props.footerLinkHeading}</h3>
      <ul className="footer_links">{links}</ul>
    </div>
  );
}
