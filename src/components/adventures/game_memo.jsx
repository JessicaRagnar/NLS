import React from 'react';

const GameMemo = ({ embedUrl, onClose }) => {
    return (
        <div className="fixed inset-0 bg-nightblue bg-opacity-75 flex justify-center items-center z-50">
            <div className="relative w-full h-full">
                <button
                    className="absolute top-4 right-4 text-white text-2xl z-10"
                    onClick={onClose}
                >
                    &#x2715;
                </button>
                <iframe
                    frameborder="0"
                    src="https://itch.io/embed-upload/10480076?color=04121E"
                    allowfullscreen=""
                    className="w-full h-full"
                >
                    <a href="https://jessicaragnar.itch.io/memo">Play Memo on itch.io</a>
                </iframe>
            </div>
        </div>
    );
}

export default GameMemo;
