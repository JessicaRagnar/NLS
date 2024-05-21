import React from 'react';
import adventureImage from '../../assets/images/flowerbed.png';
import ScrollDown from '../../assets/icons/ScrollDown'; // Kontrollera att sökvägen är korrekt

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${adventureImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-hotpink/10 to-transparent opacity-10"></div>
            <div className="relative h-full w-full flex flex-col justify-start items-center md:items-start text-offwhite bg-gradient-to-b from-nightblue via-transparent to-background/100">
                <div className="px-6 md:px-48 my-24 mx-auto">
                    <div className="bg-cardbg rounded-xl p-8 text-left">
                        <h2 className="text-xl md:text-4xl lg:text-5xl xl:text-5xl m-4 text-center">Interactive adventures</h2>
                        <p className="text-lg md:text-xl mb-8 break-words whitespace-pre-wrap pr-0 md:px-24">
                            Welcome to our Interactive Adventures – your gateway to thrilling interactive stories and mind-bending digital escape rooms! Here, you'll find a curated selection of immersive experiences designed to challenge your wits and ignite your imagination.
                        </p>
                        <p className="text-lg md:text-xl mb-8 break-words whitespace-pre-wrap pr-0 md:px-24">
                            How to Play:
                            Playing an adventure on Northern Lights Society is easy! Simply browse our selection of adventures, choose the one that intrigues you the most, and click to start your journey. Whether you're playing solo or with friends, prepare to be immersed in a world of adventure like never before.
                            Are you ready to embark on your next great adventure? Choose your path, gather your courage, and prepare to experience the thrill of a lifetime. The adventure awaits!
                        </p>
                    </div>
                </div>
            </div>
            <ScrollDown />
        </div>
    );
}

export default Hero;
