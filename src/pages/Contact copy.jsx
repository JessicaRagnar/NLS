import React from 'react';
import Footer from '../components/Footer';
import ChatIcon from '../components/ChatIcon';
import ContactForm from '../components/ContactForm';
import ScrollToTopButton from '../components/buttons/BackToTop';
import backgroundImage from '../assets/images/background.png';
import lighthouseImage from '../assets/images/lighthouse.png';
import CardDiscord from '../components/cards/CardDiscord';
import CardForum from '../components/cards/CardForum';

const Contact = () => {
    return (
        <div id="contact" className="flex flex-col min-h-screen">
            <div className="flex-grow relative w-full">
                <div className='relative w-full h-screen'>
                    <img className="absolute top-0 left-0 w-full h-screen object-cover" src={backgroundImage} alt="Background" />
                    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>
                    <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center">
                        <div className="flex flex-col lg:flex-row justify-center items-start w-full px-8 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-8">
                            {/* Left Column */}
                            <div className="w-full lg:w-1/2 relative bg-cardbg bg-opacity-90 rounded-xl shadow-2xl">
                                <img className="rounded-2xl object-cover w-full h-full absolute top-0 left-0 z-0" src={lighthouseImage} alt="Lighthouse" />
                                <div className="bg-gradient-to-l from-transparent via-cardbg/90 to-cardbg/100 rounded-2xl absolute inset-0 z-20"></div>
                                <div className="relative z-30 p-12 text-offwhite">
                                    <h2 className="text-4xl lg:text-5xl mb-4 text-left">CONTACT US!</h2>
                                    <p className="text-lg">
                                        Have questions or need support? Fill out the form below, <br />
                                        and a member of our team will get back to you as soon as possible!
                                    </p>
                                    <ContactForm />
                                </div>
                            </div>
                            {/* Right Column */}
                            <div className="w-full lg:w-1/3 flex flex-col space-y-4">
                                <CardDiscord />
                                <CardForum />
                                <div className="flex justify-end w-full mt-4">
                                    <ChatIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollToTopButton />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
