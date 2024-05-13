'use client';
import React from 'react';
import data from '@/dictionaries/en.json';
import TestimonialCard from '@/components/ui/testimonial-card';

const Testimonial = () => {
  return (
    <section
      className='w-full flex justify-center py-9 lg:py-20 h-fit px-3 md:px-8 2xl:px-0'
      aria-label='Testimonial'
      id='testimonial'
    >
      <div className='w-full max-w-screen-xl flex flex-col gap-6 lg:gap-9'>
        <div className='w-full flex flex-col gap-3'>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-text-contrast max-w-[25rem] lg:max-w-[35rem] xl:max-w-[45rem]'>
            {data.testimonial.mainHeading}
          </h1>
          <p className='text-sm text-fg-text lg:text-base font-medium lg:max-w-[35rem]'>
            {data.testimonial.mainText}
          </p>
        </div>

        <div className='w-full flex gap-6 overflow-x-auto justify-start flex-row no-scrollbar pb-3 pt-3 px-1'>
          {data.testimonial.cardInfo.map((option, index) => (
            <TestimonialCard
              key={index}
              name={option.name}
              description={option.description}
              status={option.status}
              image={option.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
