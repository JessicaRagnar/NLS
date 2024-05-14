import React from 'react';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/buttons/BackToTop';
import heroImage from '../assets/images/background.png';
import diamondIcon from '../assets/icons/Diamond.png';

const Guidance = () => {
    return (
        <div id="guidance" className="flex flex-col min-h-screen">

            <div className="flex-grow relative w-full">
                <div className='relative w-full h-screen'>
                    <img className="absolute top-0 left-0 w-full h-screen object-cover" src={heroImage} alt="Hero Image" />


                    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>


                    <div className="absolute top-0 w-full h-full flex flex-col justify-start items-center text-center">

                        <div className="mt-24 w-[90%] h-[80%] relative">



                            <div className="bg-cardbg rounded-2xl absolute inset-0 z-20"></div>


                            <div className="text-center drop-shadow-md relative z-30 px-12 pt-12">
                                <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl mb-4">Support and FAQ</h2>
                                <h4 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-6 text-hotpink">We're here to ensure that your gaming experience is as smooth and enjoyable as possible.<br />
                                    Below, you'll find answers to some common questions and resources to help you <br />
                                    troubleshoot any issues you may encounter.</h4>



                                <div className="flex flex-row justify-between pt-6">
                                    <div className="w-[95%] h-[45vh] overflow-y-auto FAQ-scrollbar">
                                        <h4 className="text-2xl md:text-3xl text-brightturquise text-left p-6">FREQUENTLY ASKED QUESTIONS</h4>

                                        <article className="px-6 pt-2 text-pretty w-[70%]">
                                            <p className="text-lg md:text-lg text-wrap">

                                                <h5 className="font-bold text-hotpink bg-no-repeat bg-left pl-8 pb-1" style={{ backgroundImage: `url(${diamondIcon})`, backgroundSize: '20px auto' }}>How do I start playing a game on Northern Lights Society?</h5>
                                                <p className='text-lg pt-4 pb-8'>To start playing, simply browse our selection of games and choose the one that piques your interest. Click on the game to access its page, where you can find more information and purchase or start playing directly.</p>

                                                <h5 className="font-bold text-hotpink bg-no-repeat bg-left pl-8 pb-1" style={{ backgroundImage: `url(${diamondIcon})`, backgroundSize: '20px auto' }}>What devices are compatible with your games?</h5>
                                                <p className='text-lg pt-4 pb-8'>Our games are designed to be compatible with a wide range of devices, including desktop computers, laptops, tablets, and smartphones. However, please check the specific requirements listed on each game's page for more detailed information.</p>

                                                <h5 className="font-bold text-hotpink bg-no-repeat bg-left pl-8 pb-1" style={{ backgroundImage: `url(${diamondIcon})`, backgroundSize: '20px auto' }}>I'm experiencing technical issues while playing a game. What should I do?</h5>
                                                <p className='text-lg pt-4 pb-8'>If you encounter technical issues while playing a game, we recommend trying the following steps: Refresh the page and try again, clear your browser's cache and cookies, ensure that your device's operating system and web browser are up to date, check your internet connection for any issues. If the problem persists, please contact our support team for further assistance.</p>

                                                <h5 className="font-bold text-hotpink bg-no-repeat bg-left pl-8 pb-1" style={{ backgroundImage: `url(${diamondIcon})`, backgroundSize: '20px auto' }}>Can I play your games offline?</h5>
                                                <p className='text-lg pt-4 pb-8'>Currently, our games are designed to be played exclusively online. Due to the interactive and dynamic nature of our experiences, an internet connection is required to access and enjoy all features and content. We're constantly exploring new ways to enhance our offerings, so stay tuned for any updates regarding offline play options in the future. Thank you for your understanding.</p>

                                                <h5 className="font-bold text-hotpink bg-no-repeat bg-left pl-8 pb-1" style={{ backgroundImage: `url(${diamondIcon})`, backgroundSize: '20px auto' }}>How can I get in touch with your support team?</h5>
                                                <p className='pt-4'>If you have any questions, concerns, or feedback, our support team is here to help! You can reach us by navigating to the contact page and fill out the form, and we'll get back to you as soon as possible.</p>

                                            </p>
                                        </article >
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
            <Footer />
        </div>

    )
}

export default Guidance