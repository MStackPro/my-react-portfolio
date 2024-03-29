import React from 'react'
import Branding from "../../components/Branding";
import Logofolio from "../../components/Logofolio";
import SocialDesigns from "../../components/SocialDesigns";
import FrontendProjects from "../../components/FrontendProjects";

const FullPortfolio = () => {

  return (
    <main className="container py-28 flex flex-col space-y-20">
      <FrontendProjects/>
      <SocialDesigns/>
      <Logofolio/>
      <Branding/>

    </main>
  );
};

export default FullPortfolio;
