import React from "react";
import HomeTopSection from "./HomeTopSection";
import "../css/Home.css";
import HomeMiddleSection from "./HomeMiddleSection";
import wework_image_one from "../asset/image/image_wework2.jpg";
import wework_image_two from "../asset/image/image_nature2.jpg";
import nature_image_one from "../asset/image/image_nature1.jpg";
import MainTopHeading from "./MainTopHeading";
import MiddleContent from "./MiddleContent";
import HomeFooterSection from "./HomeFooterSection";
import faceboolLogo from '../asset/icon/facebook_logo.svg'
import instagram from '../asset/icon/instagram_logo.svg'
import githubLogo from '../asset/icon/github_logo.svg'
import linkdeInLogo from '../asset/icon/linkedin_logo.svg'

export default function Home() {
  const logos = [faceboolLogo,instagram,githubLogo,linkdeInLogo];

  return (
    <div>
      <MainTopHeading primaryHeading="Faster"  secondoryHeading="Corp"/>

      <HomeTopSection
        title="The man who can do every thing!"
        profleImage={wework_image_one}/>

      <HomeMiddleSection
        title="The Villagers!"
        profleImage={wework_image_two} />

      <HomeTopSection
        title="Zero to Infinity!"
        profleImage={nature_image_one}/>

      <MiddleContent primaryHeading = "About" secondoryHeading = "My life journey!" />

      <HomeFooterSection
       primaryHeading = "About our service and " 
       secondoryHeading ="Our products details" 
       logos = {logos}/>

    </div>
  );
}
