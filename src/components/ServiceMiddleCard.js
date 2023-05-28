import React from "react";
import "../css/ServiceMiddleCard.css";

export default function ServiceMiddleCard(props) {
  return (
    <div className="service_middle_card_container">
      <img src={props.cardImage} alt="service card icon" className="service_icon" />
      <h4 className="service_middle_card_title">{props.title}</h4>
      <p className="service_middle_card_description">{props.description}</p>
    </div>
  );
}
