import React from "react";
import "../css/HomeProfileImage.css";

export default function HomeProfileImage(props) {
  return (
    <div className="profile_image_container">
      <img src={props.profleImage} className="profile_image" />
    </div>
  );
}
