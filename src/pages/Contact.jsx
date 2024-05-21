import React from 'react';
import CardContact from '../components/cards/CardContact';
import CardDiscord from '../components/cards/CardDiscord';
import CardForum from '../components/cards/CardForum';
import ChatIcon from '../components/contact/ChatIcon';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-start min-h-screen bg-gradient-to-b from-nightblue to-nightblue/10 p-4 lg:p-20">
                <div className="w-full lg:px-20 flex flex-col lg:flex-row items-center lg:items-start justify-start space-y-8 lg:space-y-0 lg:space-x-8">
                  
                    <div className="w-full lg:w-2/3 flex flex-col items-center lg:items-start justify-start space-y-8 lg:space-y-0">
                        <CardContact />
                    </div>
             
                    <div className="w-full lg:w-1/3 flex flex-col items-center space-y-8">
                        <CardDiscord />
                        <CardForum />
                        <div className="hidden lg:block">
                            <ChatIcon />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Footer />
            </div>
        </div>
    );
}

export default Contact;
