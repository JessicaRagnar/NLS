import React from 'react';
import gamergirlImage from '../../assets/images/gamergirl.png';

const CardAbout = () => {
    return (
        <div
            className="relative w-full flex-grow p-7 bg-cardbg rounded-xl shadow flex flex-col justify-end"
            style={{
                backgroundImage: `url(${gamergirlImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '70vh'
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-tr from-nightblue via-nightblue/80 to-transparent opacity-80 rounded-xl"></div>

            <div className="relative z-10">
                <h2 className='text-4xl md:text-5xl drop-shadow-2xl text-center md:text-left'>About Us</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 mt-4">
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <p className="text-lg leading-6 text-center md:text-left">
                            Our mission is to foster a space where creativity thrives, friendships blossom, and the joy of discovery is shared by all. Join us as we explore the mysteries, celebrate achievements, and together, light up the night with our collective passion for puzzles and storytelling.
                        </p>
                        <h4 className="text-3xl text-hotpink mt-4 md:mt-0">
                            <a href="/NLS/about" className="bg-arrow no-underline hover:text-lightgreen/80">
                                Learn More
                            </a>
                        </h4>
                    </div>
                    <div className="hidden md:block md:col-span-1"></div>
                </div>
            </div>
        </div>
    )
}

export default CardAbout;
