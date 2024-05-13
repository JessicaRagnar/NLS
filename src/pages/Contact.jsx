import React from 'react'
import DiscordLogo from '../assets/icons/DiscordLogo'
import ChatIcon from '../components/ChatIcon'
import ContactForm from '../components/ContactForm'
import ScrollToTopButton from '../components/buttons/BackToTop'

const Contact = () => {
    return (
        <div id="contact" className="relative w-full h-screen">
            <img className="absolute top-0 left-0 w-full h-screen object-cover" src="./src/assets/images/background.png" alt="Background" />
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center">

                <div className="flex flex-row justify-center items-start w-full">
                    <div className="mt-24 w-[50%] relative bg-cardbg bg-opacity-90 rounded-xl shadow-2xl">
                        <img className="rounded-2xl object-cover w-full h-full absolute top-0 left-0 z-0" src="./src/assets/images/lighthouse.png" alt="Lighthouse" />
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

                    <div className="w-[36%] flex flex-col mt-20 space-y-4 p-4">
                        <div className="bg-cardbg bg-opacity-90 rounded-xl shadow-2xl flex flex-col justify-center items-start p-4">
                            <DiscordLogo />
                            <p className="text-xl px-6">
                                Join our Discord server to engage with our community and stay up to date about us!
                            </p>
                            <h4 className="text-3xl pl-6 mb-1 text-hotpink">
                                <a href="/forum" className="bg-arrow no-underline hover:text-lightgreen/20 flex items-center justify-between">
                                    JOIN OUR DISCORD
                                </a>
                            </h4>
                        </div>

                        <div className="bg-cardbg bg-opacity-90 rounded-xl shadow-2xl flex flex-col justify-center items-start p-6">
                            <img src="/src/assets/icons/forum.png" alt="Discord Icon" className="w-auto h-30 mt-6 mb-6 pl-6" />
                            <p className="text-xl px-6">
                                Share your insights, suggestions, and aspirations for our community. Together, we sculpt the future of the Northern Lights Society!
                            </p>
                            <h4 className="text-3xl pl-6 mb-1 text-hotpink">
                                <a href="/forum" className="bg-arrow no-underline hover:text-lightgreen/20 flex items-center justify-between">
                                    VISIT THE FORUM
                                </a>
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end w-full mr-24 mt-0 mb-6">
                    <ChatIcon />
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    )
}

export default Contact
