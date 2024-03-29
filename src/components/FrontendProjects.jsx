import React from "react";
import { Zoom } from "react-reveal";
import PortfolioTemplate from "../template/PortfolioTemplate";
import { fullfrontendProjects } from "./data";

const FrontendProjects = () => {
  return (
    <Zoom>
      <section className="">
        <h2>Frontend projects</h2>
        <h5>Sucessful clients projects</h5>

        {/* === FRONT END PROJECTS ==== */}
        <article className="portfolio grid grid-cols-2 gap-8 pt-14">
          {fullfrontendProjects.map(({ id, image, github, demo }) => {
            return (
              <PortfolioTemplate
                key={id}
                image={image}
                github={github}
                demo={demo}
              />
            );
          })}
        </article>
      </section>
    </Zoom>
  );
};

export default FrontendProjects;
