import React from "react";
import PrimaryHeading from "../components/PrimaryHeading";
import '../css/AboutTopIntroCard.css'
import aboutCardImage from '../asset/image/journey_image.jpg'

export default function AboutTopIntroCard() {
  return (
    <div className="about_intro_card">
        <div>
      <PrimaryHeading primaryHeading="Who we" secondoryHeading="Are!" />
      <p className="about_intro_card_description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aspernatur
        perspiciatis autem possimus eveniet enim porro. Impedit rerum culpa iste
        dolorum, aliquam vero! Illo, cum! Provident delectus quod omnis
        consequuntur. Possimus quis dolor fugiat id facere magnam cum harum
        ullam corporis culpa laudantium autem ut maiores, necessitatibus velit.
        Commodi placeat explicabo odit eum tempora sed officiis amet
        necessitatibus voluptatum vitae?
      </p>
      <button className="btn_explore">Explore</button>
      </div>
      <div>
        <img src={aboutCardImage} alt="about card image" className="about_card_image"/>
      </div>
    </div>
  );
}
