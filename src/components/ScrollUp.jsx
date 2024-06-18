import React from "react";
import Arrow from '../assets/arrow-up.png'
import ScrollToTop from 'scroll-to-top-react';

const ScrollUp = () => {
  return (
    <section>
      <ScrollToTop smooth displayType="image" imageSrc={Arrow} myClass="scroll-top"/>
    </section>
  );
};

export default ScrollUp;