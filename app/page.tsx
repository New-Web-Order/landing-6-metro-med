import React from 'react';
import WelcomeBanner from '@/components/sections/welcome-banner';
import FeatureOne from '@/components/sections/features-one';
import About from '@/components/sections/about';
import MainFeature from '@/components/sections/main-feature';
import Testimonial from '@/components/sections/testimonial';

const Homepage = () => {
  return (
    <main className='flex flex-col w-screen items-center'>
      <WelcomeBanner />
      <FeatureOne/>
      <About/>
      <MainFeature/>
      <Testimonial/>
    </main>
  );
};
export default Homepage;
