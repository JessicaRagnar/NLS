import React from 'react';
import { FaDiscord } from "react-icons/fa";
import discordIcon from "./small_x.png"

const DiscordLogo = () => {
    return (
        <div className="flex items-start  p-0 m-0">

            <img src={discordIcon} alt="Discord Icon" className="w-auto h-30 p-0 m-0" />

            <FaDiscord className="text-offwhite text-6xl" />
        </div>
    );
}

export default DiscordLogo;
