import React from 'react'

const ImageDivider = () => {
    return (
        <div className="relative w-full h-screen">
            <img className="absolute top-0 left-0 w-full h-screen object-cover" src="./src/assets/images/background.png" alt="Hero Image" />
            <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-t from-nightblue to-nightblue/10"></div>

            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center text-center">

                <div>
                    <img className="object-cover w-full h-[60vh] absolute top-0 left-0" src="./src/assets/images/bgbottom.png" alt="Mountain" />
                    <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-t from-transparent to-background/30"></div>
                </div>
            </div>

        </div>
    )
}

export default ImageDivider





