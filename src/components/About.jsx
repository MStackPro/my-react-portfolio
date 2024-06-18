
import React from "react";
import AboutImage from "../assets/about-img.jpg";
import resume from "./../assets/CV.pdf";
import { FaCircle } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { TypeWriter } from "react-typewritter";
import { Zoom } from "react-reveal";

const About = () => {
  return (
    <Zoom>
      <main className="container about-section py-14" id="about">
        <div className="about-me-portrait">
          <div className="about-portrait">
            <img src={AboutImage} alt="about" className="about-image" />
          </div>
        </div>
        <section>
          <div>
            <h5>
              <TypeWriter
                elementType="text"
                text="Discover"
                interval={100}
                delay={50}
              />
            </h5>
            <h2>About Me</h2>
            <p>
              Manasseh Walshak a passionate and dedicated Frontend Developer and
              Creative Graphic Designer in Nigeria. With a strong work ethic and
              exceptional problem-solving abilities, I thrive in fast-paced
              environments. I'm highly adaptable, embracing change and always
              seeking new challenges to further develop my skills set. My
              combination of creativity, adaptability, and strong analytical
              skills makes me a valuable asset in front-end development, and a
              driving success in achieving goals.
            </p>
          </div>
          <article className="pt-6">
            <h6 className="font-semibold text-ColorDark">My Skills</h6>
            <div className="skills grid grid-cols-3">
              <ul>
                <li>
                  <FaCircle />
                  HTML
                </li>
                <li>
                  <FaCircle />
                  CSS
                </li>
                <li>
                  <FaCircle />
                  JavaScript
                </li>
              </ul>
              <ul>
                <li>
                  <FaCircle />
                  React js
                </li>
                <li>
                  <FaCircle />
                  Tailwind CSS
                </li>
                <li>
                  <FaCircle />
                  Git & Github
                </li>
              </ul>
              <ul>
                <li>
                  <FaCircle />
                  Illustrator
                </li>
                <li>
                  <FaCircle />
                  Photoshop
                </li>
                <li>
                  <FaCircle />
                  Adobe XD
                </li>
              </ul>
            </div>
          </article>
          <article className="flex gap-6 items-center pt-10">
            <a
              href={resume}
              className="btn btn-primary download-btn"
              download="resume"
            >
              Download CV <MdOutlineFileDownload className="text-2xl" />
            </a>
            <a href={"#contact"} type="button" className="btn btn-dark">
              Hire me
            </a>
          </article>
        </section>
      </main>
    </Zoom>
  );
};

export default About;
