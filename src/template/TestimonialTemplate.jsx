import React from 'react';


const TestimonialTemplate = ({ image, testimony, name, job }) => {
  return (
      <section>
        <article className="pt-8 text-sm transition-all duration-500 ease-in-out mt-4 hover:bg-transparent hover:border-ColorPrimary flex flex-col items-center mx-auto w-11/12">
          <div className="w-12 h-12 rounded-full overflow-hidden mb-2">
            <img src={image} alt="avatar" />
          </div>
          <div className="text-center">
            <h4 className="font-semibold text-sm">{name}</h4>
            <small>{job}</small>
          </div>
          <div className="testimonial-body bg-CardBg p-8 mt-12 relative cursor-pointer">
            <p className='text-colorWhite'>{testimony}</p>
          </div>
        </article>
      </section>
  );
};

export default TestimonialTemplate;