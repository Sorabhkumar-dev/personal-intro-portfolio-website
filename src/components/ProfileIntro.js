import React from "react";
import '../css/ProfileIntro.css'
import IntroHeading from "./IntroHeading";

export default function ProfileIntro(props) {
  return (
    <div className="intro_conatiner">
      <IntroHeading title={props.title}/>
      <p className="intro_description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, saepe
        nemo? Unde laudantium porro ad perspiciatis numquam fuga totam,
        doloremque aperiam? Fugit consequatur, tenetur ad harum doloremque
        corrupti veritatis distinctio. Odit ipsa, quam dolore reprehenderit
        quisquam deserunt molestias consequatur laboriosam, dicta, quidem
        voluptates impedit debitis provident est minus veritatis natus.
        Quibusdam ad quo suscipit necessitatibus tempore consequatur quos
        explicabo possimus? Ipsum quia officia tenetur laborum deleniti dolore
        tempore repudiandae eos dolor nulla quaerat suscipit, sunt dignissimos
        soluta architecto ullam, dolorem distinctio odit voluptas expedita nam
        deserunt perspiciatis quod. Tempora, soluta!
      </p>
    </div>
  );
}
