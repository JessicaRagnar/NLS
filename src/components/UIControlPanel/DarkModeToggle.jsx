import React, { useState } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode); 
    };

    return (
        <div>
            <div className="bg-cardbg/80 p-3 rounded-r-lg cursor-pointer hover:bg-nightblue/80 transition-colors"

                onClick={toggleDarkMode}
            >
                {darkMode ? (
                    <MdOutlineLightMode className='text-brightturquise/30' size={25} />
                ) : (
                    <MdOutlineDarkMode className='text-brightturquise/30' size={25} />
                )}
            </div>
        </div>
    );
};

export default DarkModeToggle;
