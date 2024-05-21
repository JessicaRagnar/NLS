import React from 'react';
import arrow_down from "./arrow_down.png";

const ScrollDown = () => {
    return (
        <div className="absolute bottom-36 w-full flex flex-col items-center">
            <img src={arrow_down} alt="Arrow Down" className="w-4 h-auto animate-bounce mb-2" />
            <p className="text-hotpink font-links">Scroll Down</p>
        </div>
    );
}

export default ScrollDown;
