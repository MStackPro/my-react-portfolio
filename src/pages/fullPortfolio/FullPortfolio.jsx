import React from 'react'
import FrontendProjects from "../../components/FrontendProjects";
import { Link } from "react-router-dom";

const FullPortfolio = () => {

  return (
    <main className="container py-28 flex flex-col space-y-20">
      <FrontendProjects/>
      <section className='text-center'>
        <h2 className='text-center text-ColorDark leading-6'>Click the Behance link below to view my Graphic Design projects.</h2>
        
        <Link to={"https://www.behance.net/walshakmanasseh"} className="btn btn-primary mt-12 mx-auto ">
            View Projects
          </Link>
      </section>

    </main>
  );
};

export default FullPortfolio;
