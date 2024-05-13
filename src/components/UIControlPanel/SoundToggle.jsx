import React, { useState } from 'react';
import { AiFillSound, AiOutlineSound } from 'react-icons/ai';

const SoundToggle = () => {
    const [soundOn, setSoundOn] = useState(true); // Tillstånd för att spåra om ljudet är på eller av

    const toggleSound = () => {
        setSoundOn(!soundOn); // Växlar ljudtillståndet
    };

    return (
        <div>
            <div className="bg-cardbg/80 p-3 rounded-l-lg cursor-pointer hover:bg-nightblue/80 transition-colors"

                onClick={toggleSound}
            >
                {soundOn ? (
                    <AiFillSound className='text-brightturquise/30' size={25} />
                ) : (
                    <AiOutlineSound className='text-brightturquise/30' size={25} />
                )}
            </div>
        </div>
    );
};

export default SoundToggle;
