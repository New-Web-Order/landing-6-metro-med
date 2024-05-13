'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import AboutImage from '@/public/assets/images/nurse.webp';
import AboutImageTwo from '@/public/assets/images/nursetwo.webp';
import data from '@/dictionaries/en.json';

const FeatureOne = () => {
  return (
    <section
      className='w-full flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 lg:py-20 '
      aria-label='About-Section'
      id='about'
    >
      <div className='w-full max-w-screen-xl flex items-center justify-center flex-col md:flex-row gap-9 lg:gap-16 '>
        <div className='flex flex-1 items-center justify-center w-fit'>
          <div className='flex gap-4 items-start'>
            <div className='flex flex-col gap-4'>
              <NextImage
                src={AboutImage}
                alt='Feature Image'
                className='w-full min-w-[145px] max-w-[215px] max-h-[195px] lg:max-h-[251px] sm:w-[165px] lg:w-[215px] rounded-3xl'
              />
              <NextImage
                src={AboutImageTwo}
                alt='Feature Image'
                className='w-full min-w-[145px] max-w-[215px] max-h-[195px] lg:max-h-[251px] sm:w-[165px] lg:w-[215px] rounded-3xl'
              />
            </div>
            <div className='flex flex-col gap-4 pt-20 '>
              <NextImage
                src={AboutImageTwo}
                alt='Feature Image'
                className='w-full min-w-[145px] max-w-[215px] max-h-[195px] lg:max-h-[251px] sm:w-[165px] lg:w-[215px] rounded-3xl'
              />
              <NextImage
                src={AboutImage}
                alt='Feature Image'
                className='w-full min-w-[145px] max-w-[215px] max-h-[195px] lg:max-h-[251px] sm:w-[165px] lg:w-[215px] rounded-3xl'
              />
            </div>
          </div>
        </div>
        <div className='flex flex-1 justify-center flex-col gap-3 lg:gap-6 max-w-md lg:max-w-xl'>
          <p className='text-base font-semibold text-fg-text-contrast'>
            {data.about.tag}
          </p>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-text-contrast'>
            {data.about.heading}
          </h1>
          <p className='text-sm text-fg-text lg:text-base font-medium'>
            {data.about.subText}
          </p>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <Button shape='filled'>{data.featureOne.buttonText}</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureOne;
