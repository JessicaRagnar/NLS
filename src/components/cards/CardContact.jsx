import React from 'react';
import ContactForm from '../contact/ContactForm';
import lighthouseImage from '../../assets/images/lighthouse.png';

const CardContact = () => {
    return (
        <div className="relative w-full bg-cardbg bg-opacity-90 rounded-3xl shadow-2xl overflow-hidden">
        <img className="rounded-2xl object-cover w-full h-full absolute top-0 left-0 z-0" src={lighthouseImage} alt="Lighthouse" />
        <div className="bg-gradient-to-l from-transparent via-cardbg/90 to-cardbg/100 rounded-2xl absolute inset-0 z-20"></div>
        <div className="relative z-30 p-6 sm:p-8 md:p-10 lg:p-12 text-offwhite">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-center lg:text-left">CONTACT US!</h2>
            <p className="text-lg md:text-lg mb-4 text-center lg:text-left">
                Have questions or need support? Fill out the form below, <br />
                and a member of our team will get back to you as soon as possible!
            </p>
            <ContactForm />
        </div>
    </div>
    );
}

export default CardContact;
