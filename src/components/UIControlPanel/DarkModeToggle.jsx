import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false); // Tillstånd för att spåra om mörkt läge är på eller av

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); // Växlar mörkt läge tillståndet
    };

    return (
        <div>
            <div

                onClick={toggleDarkMode}
            >
                {darkMode ? (
                    <MdOutlineLightMode className='text-white' size={25} />
                ) : (
                    <MdOutlineDarkMode className='text-black' size={25} />
                )}
            </div>
        </div>
    );
};

export default DarkModeToggle;
