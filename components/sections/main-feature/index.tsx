'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import MainFeatureImage from '@/public/assets/images/main-feature-image.jpg';
import data from '@/dictionaries/en.json';

const MainFeature = () => {
  return (
    <section
      className='w-full flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 lg:py-20'
      aria-label='Main-Feature-Section'
      id='benifit'
    >
      <div className='w-full max-w-screen-xl flex flex-col items-center justify-center gap-9'>
        <div className='flex flex-col items-center gap-6 max-w-lg lg:max-w-3xl'>
          <p className='text-base font-semibold text-fg-text-contrast'>
            {data.mainFeature.tag}
          </p>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-text-contrast text-center'>
            {data.mainFeature.heading}
          </h1>
          <p className='text-sm text-fg-text lg:text-base font-medium text-center'>
            {data.mainFeature.subText}
          </p>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <Button shape='filled'>{data.mainFeature.buttonText}</Button>
          </a>
        </div>
        <NextImage
          src={MainFeatureImage}
          alt='Feature Image'
          className='w-full max-h-[43.75rem] rounded-3xl'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </section>
  );
};

export default MainFeature;
