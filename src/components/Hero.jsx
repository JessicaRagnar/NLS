import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MainButton from './buttons/MainButton';
import './stars.css'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative w-full h-screen'>
      <img className="absolute top-0 left-0 w-full h-screen object-cover" src="././src/assets/images/nls.png" alt="Background" />
      <div className='absolute top-0 left-0 w-full h-screen bg-black/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-end items-center text-center'>

        <div className="star-container">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
        </div>

        <div className={`mb-24 transition-opacity duration-1000 ${isVisible ? 'opacity-80' : 'opacity-0'}`}>
          <Link to="/home#home">
            <MainButton>
              Let the journey begin!
            </MainButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
