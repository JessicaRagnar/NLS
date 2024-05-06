import React from 'react'
import LayeredButton from './buttons/MainButton';

const Hero = () => {
  return (
    <div className='relative w-full h-screen'>
      <img className="absolute top-0 left-0 w-full h-screen object-cover" src="././src/assets/images/bg_hero.png" alt="Background" />
      <div className='absolute top-0 left-0 w-full h-screen bg-black/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center items-center text-center text-white'>
        <div className='px-4 max-w-xl mx-auto'>
          <h1 className='text-5xl md:text-7xl drop-shadow-2xl mb-4'>Northern Lights Society</h1>


          <LayeredButton>
            Let the journey begin!
          </LayeredButton>
        </div>
      </div>
    </div>

  )
}

export default Hero