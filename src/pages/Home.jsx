import React from 'react'
import MainButton from '../components/buttons/MainButton';
import FeatureList from '../components/FeatureList/FeatureList.jsx';
import Footer from '../components/Footer.jsx'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen"> 
        <div className="flex-grow"> 
            <div id="home" className='relative w-full h-screen'>
                <img className="absolute top-0 left-0 w-full h-screen object-cover" src="././src/assets/images/hero2.png" alt="Background" />
                <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/20"></div>

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
                            <MainButton>
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

        <Footer />
    </div>

    )
}

export default Home;
