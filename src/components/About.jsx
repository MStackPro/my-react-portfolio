import React from "react";
import AboutImage from "./../assets/about-img.jpg";
import resume from "./../assets/CV.pdf";
import { FaCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";
import { TypeWriter } from "react-typewritter";
import { Fade, Flip, Zoom } from "react-reveal";

const About = () => {
  return (
    <Zoom>
      <main className="container grid grid-cols-2 about-section" id="about">
        <img src={AboutImage} alt="about image" className="about-image w-3/4" />
        <section>
          <article>
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
              My name is Manasseh Walshak Yakubu, A Frontend Developer and
              Creative Graphic Designer in Nigeria. I'm passionate and dedicated
              to creativity, adaptability, and a passion for continuous
              learning. With exceptional problem-solving abilities and effective
              communication skills, I thrive in fast-paced environments. My
              strong analytical skills allow me to identify opportunities for
              improvement and implement innovative solutions. I am highly
              adaptable and embrace change, always seeking new challenges to
              further develop my skill set. Overall, my combination of
              creativity, adaptability, and strong work ethic make me a valuable
              asset in front-end development, capable of driving success and
              achieving goals.
            </p>
          </article>
          <article className="pt-6">
            <h6 className="font-semibold text-ColorPrimary">My Skills</h6>
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
          <article className="flex gap-6 items-center pt-6">
            <a
              href={resume}
              className="btn btn-primary download-btn"
              download="resume"
            >
              Download CV <MdOutlineFileDownload className="text-2xl" />
            </a>
            <Link to={"#contact"} type="button" className="btn btn-dark">
              Hire me
            </Link>
          </article>
        </section>
      </main>
    </Zoom>
  );
};

export default About;
