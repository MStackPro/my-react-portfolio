import React from "react";
import { Zoom } from "react-reveal";

const Branding = () => {
  const IMGLength = 24;
  const imaginativeBranding = [];
  for (let i = 1; i <= IMGLength; i++) {
    imaginativeBranding.push(require(`../assets/IMG-brand/imaginative${i}.jpg`));
  }

  const mstackLength = 21;
  const mstackBranding = [];
  for (let i = 1; i <= mstackLength; i++) {
    mstackBranding.push(require(`../assets/Mstack/m${i}.JPG`));
  }

  const ktLength = 15;
  const kaysBranding = [];
  for (let i = 1; i <= ktLength; i++) {
    kaysBranding.push(require(`../assets/KT/k${i}.PNG`));
  }

  const kveLength = 24;
  const kveBranding = [];
  for (let i = 1; i <= kveLength; i++) {
    kveBranding.push(require(`../assets/KVE/kve${i}.PNG`));
  }
  return (
    <section>
      <Zoom>
        <h2>Brand identity designs</h2>
        <h5 className="font-semibold mt-2">Imaginative Creations co.</h5>
        <article className="social-designs grid grid-cols-4 pt-10 gap-8">
          {imaginativeBranding.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`branding ${index + 1}`} />
              </article>
            );
          })}
        </article>
      </Zoom>

      <Zoom>
        <h5 className="font-semibold mt-14">Mstack Solutions</h5>
        <article className="social-designs grid grid-cols-4 pt-10 gap-8">
          {mstackBranding.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`branding ${index + 1}`} />
              </article>
            );
          })}
        </article>
      </Zoom>

      <Zoom>
        <h5 className="font-semibold mt-14">Kay's Thrifts and beauty stores</h5>
        <article className="social-designs grid grid-cols-4 pt-10 gap-8">
          {kaysBranding.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`branding ${index + 1}`} />
              </article>
            );
          })}
        </article>
      </Zoom>

      <Zoom>
        <h5 className="font-semibold mt-14">KVE Africa</h5>
        <article className="social-designs grid grid-cols-4 pt-10 gap-8">
          {kveBranding.map((image, index) => {
            return (
              <article key={index}>
                <img src={image} alt={`branding ${index + 1}`} />
              </article>
            );
          })}
        </article>
      </Zoom>
    </section>
  );
};

export default Branding;
