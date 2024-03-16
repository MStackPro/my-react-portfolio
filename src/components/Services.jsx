import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { Bounce, Fade, Flip, Roll, Rotate, Zoom } from "react-reveal";
import { TypeWriter } from "react-typewritter";

const Services = () => {
  return (
    <Zoom>
      <main className="bg-CardBg py-20 mt-14" id="services">
        <div className="container services-container">
          <h5>
            <TypeWriter
              elementType="text"
              text="What i offer"
              interval={100}
              delay={50}
            />
          </h5>
          <h2>My Services</h2>
          <section className="services grid grid-cols-3 gap-8 place-items-center mt-8">
            <article className="service-card">
              <FaLaptopCode className="text-ColorPrimary text-5xl" />
              <h5>Frontend Development</h5>
              <p class="content">
                Your product will look good and will be accessible on all
                devices, including mobile phones, tablets, and desktop. From
                concept to code, i'm proficient in brining brands to life with
                seamless user experiences.
              </p>
            </article>

            <article className="service-card">
              <RiCheckboxMultipleBlankFill className="text-ColorPrimary text-5xl" />
              <h5>Branding</h5>
              <p class="content">
                I design comprehensive branding solutions that encompass
                everything from logos and color schemes to typography and brand
                guidelines. With meticulous attention to detail and a passion
                for storytelling.
              </p>
            </article>

            <article className="service-card">
              <MdDesignServices className="text-ColorPrimary text-5xl" />
              <h5>Logo Design</h5>
              <p class="content">
                I speacialize in creating logos that not only stand out but also
                resonate with your target audience. Each logo i design is
                meticulously crafted to reflect the uniqueness and vision of
                your brand.
              </p>
            </article>
          </section>
        </div>
      </main>
    </Zoom>
  );
};

export default Services;
