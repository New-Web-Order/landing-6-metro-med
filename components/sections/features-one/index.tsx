'use client';
import React from 'react';
import NextImage from 'next/image';
import Button from '@/components/ui/button';
import FeatureOneImage from '@/public/assets/images/feature-image.webp';
import data from '@/dictionaries/en.json';

const FeatureOne = () => {
  return (
    <section
      className='w-full flex items-center justify-center px-3 md:px-8 2xl:px-0 py-9 lg:py-20'
      aria-label='Feature-One-Section'
      id='feature'
    >
      <div className='w-full max-w-screen-xl flex items-center justify-between flex-col md:flex-row gap-9'>
        <div className='flex flex-1 items-center justify-center md:justify-start w-full'>
          <NextImage src={FeatureOneImage} alt='Feature Image' />
        </div>
        <div className='flex flex-1 justify-center flex-col gap-3 lg:gap-6 max-w-xl'>
          <p className='text-base font-semibold text-fg-text-contrast'>
            {data.featureOne.tag}
          </p>
          <h1 className='text-2xl lg:text-4xl xl:text-5xl font-bold text-primary-text-contrast'>
            {data.featureOne.heading}
          </h1>
          <p className='text-sm text-fg-text lg:text-base font-medium'>
            {data.featureOne.subText}
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
