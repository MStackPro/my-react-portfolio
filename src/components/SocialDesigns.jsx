import React from "react";
import { socialDesigns } from "./data";
import SocialsTemplate from "../template/SocialsTemplate";
import { Zoom } from "react-reveal";

const SocialDesign = () => {
  return (
    <Zoom>
      <section>
        <h2>Social media designs</h2>

        <article className="grid grid-cols-4 pt-6 gap-8 social-designs">
          {socialDesigns.map(({ id, image }) => {
            return <SocialsTemplate key={id} image={image} />;
          })}
        </article>
      </section>
    </Zoom>
  );
};

export default SocialDesign;
