import React from "react";
import PrimaryHeading from "./PrimaryHeading";
import "../css/ServiceBottomSection.css";
import googleIcon from "../asset/icon/google-icon.svg";
import metaIcon from "../asset/icon/icons8-meta-240.svg";
import microsoftIcon from "../asset/icon/microsoft-5.svg";
import amazonIcon from "../asset/icon/amazon-icon.svg";
import navidiaIcon from "../asset/icon/nvidia-7.svg";
import tsmcIcon from "../asset/icon/tsmc-1.svg";
import sumsungIcon from "../asset/icon/samsung.svg";
import TestimonalCard from "./TestimonalCard";

export default function ServiceBottomSection() {
  const tesimonals = [
    {
      testimonalIcon: googleIcon,
      testimonalName: "Alphabet Inc.",
    },
    {
      testimonalIcon: metaIcon,
      testimonalName: "Meta platforms",
    },
    {
      testimonalIcon: microsoftIcon,
      testimonalName: "Microsoft Inc.",
    },
    {
      testimonalIcon: amazonIcon,
      testimonalName: "Amazobe Inc.",
    },
    {
      testimonalIcon: navidiaIcon,
      testimonalName: "Navidia Inc.",
    },
    {
      testimonalIcon: tsmcIcon,
      testimonalName: "TSMC Inc.",
    },
    {
      testimonalIcon: sumsungIcon,
      testimonalName: "Sumsung Inc.",
    },
  ];

  const testimonalCards = tesimonals.map((data) => {
    return (
      <TestimonalCard
      testimonalImage={data.testimonalIcon}
      testmonalName={data.testimonalName}
      />
    );
  });

  return (
    <div className="service_bottom_section_conainer">
      <h4 className="service_bottom_section_title">Our clients</h4>
      <PrimaryHeading
        primaryHeading="Our client are from"
        secondoryHeading="diversify sectors!"
      />
      <p className="service_bottom_section_description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet excepturi
        illo laudantium quasi aperiam totam officiis pariatur dignissimos
        exercitationem et, enim provident dolor cupiditate dicta explicabo
        impedit necessitatibus saepe magni. Natus porro ut ex nostrum veniam
        doloribus vero earum in debitis a temporibus inventore modi similique
        cumque magni deserunt explicabo est corporis voluptates delectus soluta,
        fuga voluptatibus? Odit, quas obcaecati?
      </p>
      <marquee behavior="scrolling " direction="left">
        <div className="testmonal_container">{testimonalCards}
        </div>
      </marquee>
    </div>
  );
}
