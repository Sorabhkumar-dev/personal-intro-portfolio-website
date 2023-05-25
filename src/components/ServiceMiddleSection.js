import React from "react";
import "../css/ServiceMiddleSection.css";
import PrimaryHeading from "./PrimaryHeading";
import ServiceMiddleCard from "./ServiceMiddleCard";

export default function ServiceMiddleSection() {
  return (
    <div className="services_middle_container">
      <h4 className="services_middle_title">Explore our Services</h4>
      <PrimaryHeading
        primaryHeading="Cater your"
        secondoryHeading="Every Needs"
      />
      <div className="industry_card_container">
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
        <ServiceMiddleCard />
      </div>
    </div>
  );
}
