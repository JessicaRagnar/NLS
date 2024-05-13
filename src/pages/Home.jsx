import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import MainButton from '../components/buttons/MainButton'
import FeatureList from '../components/FeatureList/FeatureList'
import Footer from '../components/Footer'
import About from '../components/About'
import ImageDivider from '../components/ImageDivider'
import ScrollToTopButton from '../components/buttons/BackToTop'
import backgroundImage from '../assets/images/background.png'

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
        <div id="home" className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className='relative w-full h-screen'>
                <img className="absolute top-0 left-0 w-full h-screen object-cover" src={backgroundImage} alt="Background" />
                    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>

                    <div className='absolute top-0 w-full h-full flex justify-center items-center text-offwhite'>
                        <div className='flex justify-between items-center px-40'>

                            <div className='flex-none flex-col justify-center items-start flex-shrink: 0;'>
                                <h2 className='text-5xl md:text-6xl drop-shadow-2xl'>
                                    Northern<br />
                                    Lights
                                    Society
                                </h2>
                                <p className='text-xl md:text-xl my-10'>
                                    Immerse yourself in a world of thrilling adventures<br />
                                    and interactive stories! We create digital escape rooms<br />
                                    and narratives that takes you on an unforgettable journey!<br />
                                </p>
                                <MainButton onClick={scrollToAbout}>
                                    Discover Our Story
                                </MainButton>
                            </div>

                            <div className='flex-1 justify-end items-end ml-12'>
                                <FeatureList />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ImageDivider />
            <div ref={aboutRef}><About /></div>
            <ScrollToTopButton />
            <Footer />

        </div>

    )
}

export default Home;
