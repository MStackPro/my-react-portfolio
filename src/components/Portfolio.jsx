import React from "react";
import PortfolioTemplate from "../template/PortfolioTemplate";
import { Link } from "react-router-dom";
import { TypeWriter } from "react-typewritter";
import { Zoom } from "react-reveal";
import { portfolio } from "./data";

const Portfolio = () => {
  return (
    <Zoom>
      <main className="py-20" id="portfolio">
        <section className="portfolio-container container flex flex-col">
          <h2>My Portfolio</h2>
          <h5>
            <TypeWriter
              elementType="text"
              text="Sucessful clients projects"
              interval={100}
              delay={50}
            />
          </h5>

          <article className="portfolio grid grid-cols-2 gap-8 pt-14">
            {portfolio.map(({ id, image, github, demo }) => {
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

          <Link to={"fullportfolio"} className="btn btn-primary mt-12 mx-auto ">
            View More Projects
          </Link>
        </section>
      </main>
    </Zoom>
  );
};

export default Portfolio;