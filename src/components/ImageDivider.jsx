import React from 'react'
import backgroundImage from '../assets/images/background.png';
import starryskyImage from '../assets/images/starrysky.png';

const ImageDivider = () => {
    return (
        <div className="relative w-full h-[60vh]">
            <img className="absolute top-0 left-0 w-full h-[60vh] object-cover" src={backgroundImage} alt="Background" />
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-t from-nightblue to-nightblue/50"></div>

            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center">

                <div>
                    <img className="object-cover w-full h-[40vh] absolute top-0 left-0" src={starryskyImage} alt="Starry Sky" />
                    <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-t from-nightblue/20 to-nightblue/10"></div>
                </div>
            </div>

        </div>
    )
}

export default ImageDivider





