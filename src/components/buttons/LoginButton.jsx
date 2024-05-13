import React from 'react';
import './Buttons.css';

const LoginButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative inline-flex items-center justify-center min-w-[100px] h-10 px-5 py-2 bg-pink-500/20 rounded-full shadow-lg shadow-pink border border-pink-500 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
            <span className="text-offwhite/80 text-xl lowercase font-links">
                {children}
            </span>
        </button>
    );
};

export default LoginButton;

