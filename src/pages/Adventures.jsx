import React from 'react';
import Hero from '../components/adventures/adventure_hero';
import FeatureList from '../components/FeatureList/FeatureList.jsx';
import Footer from '../components/Footer.jsx';

const Community = () => {
  return (
    <div>
      <Hero />
      <div className='relative py-48'>
        <div className='absolute inset-0 bg-bgIMG bg-cover bg-center'></div>
        <div className='absolute inset-0 bg-gradient-to-b from-background via-transparent to-background'></div>
        <div className='relative'>
          <FeatureList />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Community;
