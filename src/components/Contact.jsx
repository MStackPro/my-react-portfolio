import React from "react";
import { LuGithub } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Zoom } from "react-reveal";

const Contact = () => {
  return (
    <Zoom>
      <main className="main bg-CardBg py-20" id="contact">
        <section className="grid grid-cols-2 gap-32 container contact-container">
          <article className="flex flex-col items-center">
            <h2>Let's Talk</h2>
            <p>
              Have a question or want to hire me? I'm here to help. Feel free to
              reach out via social media handles or directly via email. Thank
              you!
            </p>

            <div className="pt-4 flex items-center gap-6 mt-4">
              <Link
                to={"https://www.github.com/MStackPro"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-all duration-500 ease-in-out hover:text-ColorPrimary"
              >
                <LuGithub />
              </Link>
              <Link
                to={"https://www.twitter.com/walshak_m"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-all duration-500 ease-in-out hover:text-ColorPrimary"
              >
                <FaXTwitter />
              </Link>
              <Link
                to={
                  "https://www.linkedin.com/in/manasseh-walshak-yakubu-946733244"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-all duration-500 ease-in-out hover:text-ColorPrimary"
              >
                <RiLinkedinBoxLine />
              </Link>
              <Link
                to={"https://www.instagram.com/manasseh_walshak"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-all duration-500 ease-in-out hover:text-ColorPrimary"
              >
                <FaInstagram />
              </Link>
              <Link
                to={"https://www.behance.net/walshakmanasseh"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-all duration-500 ease-in-out hover:text-ColorPrimary"
              >
                <FaBehance />
              </Link>
            </div>
          </article>

          <form
            action="https://formspree.io/f/xvojedzq"
            method="POST"
            className="flex flex-col gap-4 mt-4"
          >
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="6"
              placeholder="Message"
              required
            ></textarea>

            <button type="submit" class="btn btn-primary">
              Send
            </button>
          </form>
        </section>
      </main>
    </Zoom>
  );
};

export default Contact;
