import React from 'react';
import { FaDiscord } from "react-icons/fa";
import discordIcon from "../../assets/icons/small_x.png"

const CardDiscord = () => {
    return (
        <div className="w-full bg-cardbg rounded-xl shadow p-8 flex flex-col justify-between">
        <div>
            <div className="flex items-center mb-4">
                <img src={discordIcon} alt="Discord Icon" className="w-auto h-20" />
                <FaDiscord className="text-offwhite text-6xl ml-2" />
            </div>
            <p className="text-lg leading-6 mb-1">
                Join our Discord server to engage with our community and stay up to date about us!
            </p>
        </div>
        <h4 className="text-3xl text-hotpink">
            <a href="https://discord.com" className="bg-arrow no-underline hover:text-lightgreen/80">
                JOIN OUR DISCORD
            </a>
        </h4>
    </div>
    )
}

export default CardDiscord
