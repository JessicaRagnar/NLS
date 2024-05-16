import React from 'react';
import communityImage from '../../assets/images/community.png';
import MainButton from '../../components/buttons/MainButton';
import { Link } from 'react-scroll'; // Import from react-scroll

const Hero = () => {
    return (
        <div className="relative h-screen">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${communityImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-nightblue/50 to-transparent opacity-80"></div>
            <div className="relative h-full w-full flex flex-col justify-center items-center md:items-start text-offwhite bg-gradient-to-b from-nightblue via-transparent to-nightblue">
                <div className="px-6 md:px-40 rounded-lg text-center md:text-left text-offwhite max-w-4xl my-36">
                    <h2 className='text-4xl md:text-6xl drop-shadow-2xl text-center md:text-left'>Become a part of the community!</h2>
                    <p className="text-center text-xl md:text-xl md:text-left mb-8 break-words whitespace-pre-wrap pr-0 md:pr-36">
                        Welcome to our vibrant community hub for escape room enthusiasts!
                        Here, you'll discover a place where passion meets play, where you can engage with like-minded adventurers, share your experiences, and stay updated on the latest events and news.
                    </p>
                    <Link to="register" smooth={true} duration={500} offset={-70}>
                        <MainButton className="mx-auto md:mx-0">
                            Get Started
                        </MainButton>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Hero;
