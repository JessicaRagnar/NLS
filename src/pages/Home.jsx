import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MainButton from '../components/buttons/MainButton';
import FeatureList from '../components/FeatureList/FeatureList';
import About from '../components/About';
import ImageDivider from '../components/ImageDivider';
import ScrollToTopButton from '../components/buttons/BackToTop';
import backgroundImage from '../assets/images/background.png';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    const aboutRef = useRef(null);

    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        
        <div id="homeSection" className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className='relative w-full h-screen'>
                    <img className="absolute top-0 left-0 w-full h-screen object-cover" src={backgroundImage} alt="Background" />
                    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>

                    <div className='absolute top-0 w-full h-full flex justify-center items-center text-offwhite p-4 md:p-0'>
                        <div className='flex flex-col md:flex-row justify-between items-center md:items-start w-full px-4 md:px-40 py-0'>

                            <div className='flex-none flex-col justify-center items-start mb-12 md:items-start '>
                                <h2 className='text-4xl md:text-6xl drop-shadow-2xl text-center md:text-left'>
                                    <span className='block'>Northern</span>
                                    <span className='block'>Lights</span>
                                    <span className='block'>Society</span>
                                </h2>

                                <p className='text-base md:text-xl my-4 md:my-10 text-center md:text-left break-words custom-text-format'>
                                    Immerse yourself in a world of thrilling adventures
                                    and interactive stories! We create digital escape rooms
                                    and narratives that take you on an unforgettable journey!
                                </p>

                                <div className="flex justify-center md:justify-start">
                                    <MainButton onClick={scrollToAbout} className="md:m-0">
                                        Discover Our Story
                                    </MainButton>
                                </div>

                            </div>

                            <div className='flex-1 justify-center md:justify-end hidden md:flex'>
                                <FeatureList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageDivider />
            <div ref={aboutRef}><About /></div>
            <ScrollToTopButton />
        </div>
    );
}

export default Home;
