import React from "react";
import { Zoom } from "react-reveal";
import { logoDesigns } from "./data";
import SocialsTemplate from "../template/SocialsTemplate";

const Logofolio = () => {
  return (
    <Zoom>
      <section>
        <h2>Logofolio</h2>
        <article className="grid grid-cols-4 pt-6 gap-8 social-designs">
          {logoDesigns.map(({ id, image }) => {
            return <SocialsTemplate key={id} image={image} />;
          })}
        </article>
      </section>
    </Zoom>
  );
};

export default Logofolio;
