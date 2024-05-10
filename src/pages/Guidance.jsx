import React from 'react';

const Guidance = () => {
    return (
        <div className="relative w-full h-screen">
            <img className="absolute top-2 left-0 w-full h-screen object-cover" src="./src/assets/images/background.png" alt="Hero Image" />
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center">
                
                <div className="mt-4 w-[90%] relative bg-cardbg rounded-2xl">
                    
                    <div className="text-center drop-shadow-md relative z-30 p-8">
                        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl mb-4">Support and FAQ</h2>
                        <h4 className="text-2xl md:text-3xl text-hotpink">
                            We're here to ensure that your gaming experience is as smooth and enjoyable as possible.<br />
                            Below, you'll find answers to some common questions and resources to help you <br />
                            troubleshoot any issues you may encounter.</h4>

                        <div className="w-full max-w-7xl mt-8 text-left pl-16">
                        <h4 className="text-2xl md:text-3xl text-brightturquise">FREQUENTLY ASKED QUESTIONS</h4>

                            <div className="mt-4">
                            <h5 className="font-bold text-hotpink bg-[url('./src/assets/icons/diamond.png')] bg-no-repeat bg-left pl-8 pb-1" style={{backgroundSize: '20px auto'}}>How do I start playing a game on Northern Lights Society?</h5>
                                <p className='text-lg pt-4'>To start playing, simply browse our selection of games and choose the one that piques your interest. Click on the game to access its page, where you can find more information and purchase or start playing directly.</p>

                                <h5 className="font-bold text-hotpink bg-[url('./src/assets/icons/diamond.png')] bg-no-repeat bg-left pl-8 pb-1" style={{backgroundSize: '20px auto'}}>What devices are compatible with your games?</h5>
                                <p className='text-lg pt-4'>Our games are designed to be compatible with a wide range of devices, including desktop computers, laptops, tablets, and smartphones. However, please check the specific requirements listed on each game's page for more detailed information.</p>

                                <h5 className="font-bold text-hotpink bg-[url('./src/assets/icons/diamond.png')] bg-no-repeat bg-left pl-8 pb-1" style={{backgroundSize: '20px auto'}}>I'm experiencing technical issues while playing a game. What should I do?</h5>
                                <p className='text-lg pt-4'>If you encounter technical issues while playing a game, we recommend trying the following steps: Refresh the page and try again, clear your browser's cache and cookies, ensure that your device's operating system and web browser are up to date, check your internet connection for any issues. If the problem persists, please contact our support team for further assistance.</p>

                                <h5 className="font-bold text-hotpink bg-[url('./src/assets/icons/diamond.png')] bg-no-repeat bg-left pl-8 pb-1" style={{backgroundSize: '20px auto'}}>Can I play your games offline?</h5>
                                <p className='text-lg pt-4'>Currently, our games are designed to be played exclusively online. Due to the interactive and dynamic nature of our experiences, an internet connection is required to access and enjoy all features and content. We're constantly exploring new ways to enhance our offerings, so stay tuned for any updates regarding offline play options in the future. Thank you for your understanding.</p>

                                <h5 className="font-bold text-hotpink bg-[url('./src/assets/icons/diamond.png')] bg-no-repeat bg-left pl-8 pb-1" style={{backgroundSize: '20px auto'}}>How can I get in touch with your support team?</h5>
                                <p className='text-lg pt-4'>If you have any questions, concerns, or feedback, our support team is here to help! You can reach us by navigating to the contact page and fill out the form, and we'll get back to you as soon as possible.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>







    );
}

export default Guidance;
