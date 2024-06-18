import { testimonies } from "./data";
import TestimonialTemplate from "../template/TestimonialTemplate";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import { TypeWriter } from "react-typewritter";

const Testimonials = () => {
  return (
    <main className="py-12 bg-colorWhite">
      <section className=" container text-center">
        <h2>Testimonies</h2>
        <h5>
          <TypeWriter
            elementType="text"
            text="Discover what clients have to say"
            interval={100}
            delay={50}
          />
        </h5>

        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            600: {
              width: 600,   
              slidesPerView: 1,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {testimonies.map(({ id, image, job, name, testimony }) => (
            <SwiperSlide>
              <TestimonialTemplate
                key={id}
                image={image}
                name={name}
                job={job}
                testimony={testimony}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default Testimonials;