import React, { useState, useEffect } from 'react';
import { IoIosArrowDropupCircle } from "react-icons/io";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Funktion för att hantera scroll-event
    const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Funktion för att scrolla till toppen
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scroll
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <button onClick={scrollToTop} style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                padding: '10px',
                fontSize: '16px',
                zIndex: '1000',
                cursor: 'pointer',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: '#08213480',
                color: '#1EFFE780',
            }}>
                <IoIosArrowDropupCircle />
            </button>
        )
    );
};

export default ScrollToTopButton;



