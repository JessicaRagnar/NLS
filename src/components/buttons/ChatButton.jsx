import React from 'react';
import './Buttons.css';

const ChatButton = ({ children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="relative inline-flex items-center justify-center min-w-[150px] h-11 px-5 py-3 bg-pink-500/20 rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl shadow-lg border border-pink-500 hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
            <span className="text-hotpink text-3xl lowercase font-logo">
                {children}
            </span>
        </button>
    );
};

export default ChatButton;

