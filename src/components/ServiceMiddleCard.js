import React from "react";
import cardImage from "../asset/icon/AI_ML.svg";
import "../css/ServiceMiddleCard.css";

export default function ServiceMiddleCard() {
  return (
    <div className="service_middle_card_container">
      <img src={cardImage} alt="service card icon" className="service_icon" />
      <h4 className="service_middle_card_title">Easy Accesss</h4>
      <p className="service_middle_card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laborum
        deleniti dicta. Vel sunt ipsa magnam cum neque molestiae autem voluptas
        voluptate! Iste aperiam totam repudiandae? Recusandae ratione blanditiis
        ipsam!
      </p>
    </div>
  );
}
