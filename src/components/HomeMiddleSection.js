import React from "react";
import HomeProfileImage from "./HomeProfileImage";
import ProfileIntro from "./ProfileIntro";
import "../css/HomeTopSection.css";

export default function HomeMiddleSection(props) {
  return (
    <div className="home_top_section_container">
      <ProfileIntro title={props.title} />
      <HomeProfileImage  profleImage = {props.profleImage}/>
    </div>
  );
}
