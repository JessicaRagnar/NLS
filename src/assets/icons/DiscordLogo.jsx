import React from 'react';
import { FaDiscord } from "react-icons/fa";

const DiscordLogo = () => {
    return (
        <div className="flex items-center">

            <img src="/src/assets/icons/small_x.png" alt="Discord Icon" className="w-auto h-30 mt-6" />

            <FaDiscord className="text-offwhite text-6xl mb-6" />
        </div>
    );
}

export default DiscordLogo;
