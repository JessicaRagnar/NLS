import React from 'react';
import { FaDiscord } from "react-icons/fa";
import discordIcon from "../../assets/icons/small_x.png"

const CardDiscord = () => {
    return (
        <div className="max-w-3xl px-8 py-7 bg-cardbg rounded-xl shadow">
            <div className="flex items-center mb-2">
                <img src={discordIcon} alt="Discord Icon" className="w-auto h-30" />
                <FaDiscord className="text-offwhite text-5xl ml-2 mt-2" />

            </div>

            <p className="text-lg px-2 py-3 leading-6">
                Join our Discord server to engage with our community and stay up to date about us!
            </p>

            <h4 className="text-3xl text-hotpink py-0">
                <a href="https://discord.com" className="bg-arrow no-underline hover:text-lightgreen/80">
                    JOIN OUR DISCORD
                </a>
            </h4>
        </div>
    )
}

export default CardDiscord
