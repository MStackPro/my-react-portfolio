import React from "react";
import { fullPortfolio, logoDesigns, socialDesigns } from "../components/data";
import PortfolioTemplate from "../template/PortfolioTemplate";
import SocialsTemplate from "../template/SocialsTemplate";
import { Zoom } from "react-reveal";

const FullPortfolio = () => {
  const IMGLength = 24;
  const imaginativeBranding = [];
  for (let i = 1; i <= IMGLength; i++) {
    imaginativeBranding.push(`/src/assets/IMG-brand/imaginative${i}.jpg`);
  }

  const mstackLength = 21;
  const mstackBranding = [];
  for (let i = 1; i <= mstackLength; i++) {
    mstackBranding.push(`/src/assets/Mstack/m${i}.JPG`);
  }

  const ktLength = 15;
  const kaysBranding = [];
  for (let i = 1; i <= ktLength; i++) {
    kaysBranding.push(`/src/assets/KT/k${i}.PNG`);
  }

  return (
    <main className="flex flex-col py-32 space-y-20 items-center">
      <Zoom>
        <section className="container">
          <h2>Frontend projects</h2>
          <h5>Sucessful clients projects</h5>

          {/* === FRONT END PROJECTS ==== */}
          <article className="portfolio grid grid-cols-2 gap-8 pt-14">
            {fullPortfolio.map(({ id, image, github, demo }) => {
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

      {/* === SOCIAL MEDIA DESIGNS ==== */}
      <Zoom>
        <section className="container">
          <h2>Social media designs</h2>

          <article className="grid grid-cols-4 pt-6 gap-8 social-designs">
            {socialDesigns.map(({ id, image }) => {
              return <SocialsTemplate key={id} image={image} />;
            })}
          </article>
        </section>
      </Zoom>

      {/* === LOGOFOLIO ==== */}
      <Zoom>
        <section className="container">
          <h2>Logofolio</h2>
          <article className="grid grid-cols-4 pt-6 gap-8 social-designs">
            {logoDesigns.map(({ id, image }) => {
              return <SocialsTemplate key={id} image={image} />;
            })}
          </article>
        </section>
      </Zoom>

      {/* === BRANDING ==== */}
      <section className="container py-20">
        <h2>Brand identity designs</h2>
        <h5 className="font-semibold mt-2">Imaginative Creations co.</h5>
        <Zoom>
          <div className="social-designs grid grid-cols-4 pt-10 gap-8">
            {imaginativeBranding.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`branding ${index + 1}`} />
                </article>
              );
            })}
          </div>
        </Zoom>

        <h5 className="font-semibold mt-14">Mstack Solutions</h5>
        <Zoom>
          <div className="social-designs grid grid-cols-4 pt-10 gap-8">
            {mstackBranding.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`branding ${index + 1}`} />
                </article>
              );
            })}
          </div>
        </Zoom>

        <h5 className="font-semibold mt-14">Kay's Thrifts and beauty stores</h5>
        <Zoom>
          <div className="social-designs grid grid-cols-4 pt-10 gap-8">
            {kaysBranding.map((image, index) => {
              return (
                <article key={index}>
                  <img src={image} alt={`branding ${index + 1}`} />
                </article>
              );
            })}
          </div>
        </Zoom>
      </section>
    </main>
  );
};

export default FullPortfolio;
