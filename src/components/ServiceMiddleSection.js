import React from "react";
import "../css/ServiceMiddleSection.css";
import PrimaryHeading from "./PrimaryHeading";
import ServiceMiddleCard from "./ServiceMiddleCard";
import aiIcon from "../asset/icon/AI_ML.svg";
import digitalPlatformIcon from "../asset/icon/digital_platforms.svg";
import holdingIcon from "../asset/icon/holdings.svg";
import fintechIcon from "../asset/icon/fintech.svg";
import semiconductorIcon from "../asset/icon/semiconductor.svg";

export default function ServiceMiddleSection() {
  const servicesList = [
    {
      cardImage:aiIcon,
      title:"Artificial inteligence and machine learning",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboru deleniti dicta. Vel sunt ipsa magnam cum neque molestiae autem voluptas voluptate! Iste aperiam totam repudiandae? Recusandae ratione blanditiisipsam!"
    },
    {
      cardImage:digitalPlatformIcon,
      title:"Faster digital platforms",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboru deleniti dicta. Vel sunt ipsa magnam cum neque molestiae autem voluptas voluptate! Iste aperiam totam repudiandae? Recusandae ratione blanditiisipsam!"
    },
    {
      cardImage:holdingIcon,
      title:"Faster holdings and investments",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboru deleniti dicta. Vel sunt ipsa magnam cum neque molestiae autem voluptas voluptate! Iste aperiam totam repudiandae? Recusandae ratione blanditiisipsam!"
    },
    {
      cardImage:fintechIcon,
      title:"Faster financial technolgy and services",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboru deleniti dicta. Vel sunt ipsa magnam cum neque molestiae autem voluptas voluptate! Iste aperiam totam repudiandae? Recusandae ratione blanditiisipsam!"
    },
    {
      cardImage:semiconductorIcon,
      title:"Faster Semiconductor",
      description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus laboru deleniti dicta. Vel sunt ipsa magnam cum neque molestiae autem voluptas voluptate! Iste aperiam totam repudiandae? Recusandae ratione blanditiisipsam!"
    }
  ];
 const services =  servicesList.map(data =>{
    return <ServiceMiddleCard
    title={data.title}
    cardImage={data.cardImage}
    description= {data.description}/>
  })
  return (
    <div className="services_middle_container">
      <h4 className="services_middle_title">Explore our Services</h4>
      <PrimaryHeading
        primaryHeading="Cater your"
        secondoryHeading="Every Needs"
      />

      <div className="industry_card_container">{services}</div>
    </div>
  );
}
