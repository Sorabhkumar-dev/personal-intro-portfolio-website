import React from "react";
import "../css/MainTopHeading.css";

export default function MainTopHeading(props) {
  return (
    <div className="home_top_heading_container">
      <h1 className="faster_tag_line">
        <span className="logo_color_primary">{props.primaryHeading} </span>
        <span className="logo_color_secondory">{props.secondoryHeading}  </span>
      </h1>
    </div>
  );
}
