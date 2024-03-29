import React, { useState } from "react";
import { navlinks } from "./data";
import { Link } from "react-router-dom";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
// import Logo from "/src/assets/logo.jpg";
import resume from "./../assets/CV.pdf";

const Navbar = () => {
  const [navShowing, setNavShowing] = useState(false);
  return (
    <nav className="h-20 grid place-items-center w-screen fixed z-20 bg-black">
      <div className="container flex items-center justify-between">
        {/* ==== NAV LOGO ==== */}
        <div className="overflow-hidden rounded-full">
          <Link to={"/"}>
            {/* <img src={Logo} alt="logo" className="w-12" /> */}
          </Link>
        </div>

        {/* ==== NAVLINKS ==== */}
        <div
          className={`navmenu flex gap-16 items-center ${
            navShowing ? "flex" : "hide-nav"
          }`}
        >
          <ul className="flex gap-16 items-center">
            {navlinks.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="nav-link text-ColorPrimary hover:text-white transition-all duration-500 ease-in-out"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={resume}
            className="btn btn-primary hover:bg-black download-btn"
            download="resume"
          >
            Download CV
            <MdOutlineFileDownload className="text-2xl" />
          </a>
        </div>

        {/* ====== HAMBURGER MENU ======= */}
        <button
          className="hamburger text-3xl font-light transition-all duration-500 ease-in-out hidden"
          onClick={() => setNavShowing(!navShowing)}
        >
          {navShowing ? <IoMdClose /> : <RiMenuFill />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
