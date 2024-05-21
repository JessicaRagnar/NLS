import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameStory = () => {
    const navigate = useNavigate();

    const handleClose = () => {
        navigate('/adventures'); 
    };

    return (
        <div className="fixed inset-0 bg-nightblue bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full h-full">
                <button
                    className="absolute top-4 right-4 text-white text-2xl z-10"
                    onClick={handleClose}
                >
                    &#x2715;
                </button>
                <iframe
                    frameBorder="0"
                    src="https://itch.io/embed-upload/10471317?color=04121E"
                    allowFullScreen
                    className="w-full h-full"
                    title="Game"
                >
                    <a href="https://sauwra.itch.io/northern-lights-society">Play Northern Lights Society - Interactive Story on itch.io</a>
                </iframe>
            </div>
        </div>
    );
}

export default GameStory;
