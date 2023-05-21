import React from "react";
import '../css/IntroHeading.css'

export default function IntroHeading(props) {
  return (
    <div>
      <h2 className="intro_title">{props.title}</h2>
      <div className="intro_seperator"/>
    </div>
  );
}
