import React from 'react';
import backgroundImage from '../../assets/images/background.png';
import CardDiscord from '../../components/cards/CardDiscord';
import CardForum from '../../components/cards/CardForum';
import CardAbout from '../../components/cards/CardAbout';

const About = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>

            <div className="absolute inset-0 bg-gradient-to-b from-nightblue via-transparent to-nightblue opacity-90"></div>

            <div className="relative z-10 w-full flex flex-col md:flex-row items-start justify-center gap-8 px-6 md:gap-8 md:px-36 2xl:px-46">

                <div className="md:w-2/3 flex-grow flex justify-start items-center md:justify-center">
                    <CardAbout />
                </div>

                <div className="md:w-1/3 flex-grow flex flex-col space-y-8 md:space-y-8">
                    <div className="flex justify-center items-center md:justify-center">
                        <CardDiscord />
                    </div>
                    <div className="flex justify-center items-center md:justify-center">
                        <CardForum />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
