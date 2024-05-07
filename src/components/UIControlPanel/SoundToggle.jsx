import React, { useState } from 'react';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

const SoundToggle = () => {
    const [soundOn, setSoundOn] = useState(true); // Tillstånd för att spåra om ljudet är på eller av

    const toggleSound = () => {
        setSoundOn(!soundOn); // Växlar ljudtillståndet
    };

    return (
        <div>
            <div 
            
                onClick={toggleSound}
            >
                {soundOn ? (
                    <AiFillSound className='text-black' size={25} />
                ) : (
                    <AiOutlineSound className='text-black' size={25} />
                )}
            </div>
        </div>
    );
};

export default SoundToggle;
