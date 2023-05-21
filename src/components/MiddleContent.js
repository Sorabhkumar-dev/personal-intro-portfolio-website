import React from "react";
import MainTopHeading from "./MainTopHeading";
import '../css/MiddleContent.css'

export default function MiddleContent(props) {
  return (
    <div className="middle_content_Content">
      <MainTopHeading
        primaryHeading={props.primaryHeading}
        secondoryHeading={props.secondoryHeading} />

      <p className="journey_content">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet
        saepe iure modi ipsa officiis qui provident ducimus ea vero consequatur
        earum accusamus nisi maxime in, blanditiis dolorem, veritatis
        voluptatem! Officiis sed pariatur, officia inventore eveniet fugit
        delectus fuga tempora laboriosam cupiditate obcaecati, tenetur est
        quaerat eligendi. Dolorum non fugiat soluta, cum quo explicabo
        perspiciatis distinctio enim, nisi ea eveniet! Blanditiis recusandae,
        dolor sed velit esse quaerat cupiditate ea aspernatur quo fuga, sint
        dolorum reprehenderit voluptates eligendi nulla quam illum quasi quidem
        assumenda odit rerum. Consequuntur distinctio deleniti eaque
        repellendus? Fugit quasi illum facilis, consectetur nobis consequuntur,
        veritatis dicta ad ullam, eos alias tempore quia repudiandae. Libero
        eaque vitae optio expedita perferendis explicabo beatae, provident
        consequuntur rerum numquam doloribus deleniti. Soluta accusantium
        aliquam velit placeat, obcaecati officiis? Fuga laborum, possimus at
        quis quia voluptas officia soluta minus ex iste exercitationem rem et
        accusantium iure aspernatur vitae libero hic. Reprehenderit, minima?
        Voluptatum, tempora nesciunt tenetur odio quae illum recusandae minus
        provident sint sit esse eum fugit numquam, debitis quo consequuntur
        temporibus mollitia dolores repellendus. Qui asperiores deserunt
        consequuntur debitis nulla quos.
      </p>
    </div>
  );
}
