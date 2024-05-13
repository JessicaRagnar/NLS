import React from 'react'
import FeatureList from '../components/FeatureList/FeatureList.jsx'
import ScrollToTopButton from '../components/buttons/BackToTop'

const Adventures = () => {
    return (
        <div id="adventures" className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <div className='relative w-full h-screen'>
                    <img className="absolute top-0 left-0 w-full h-screen object-cover" src="././src/assets/images/background.png" alt="Background" />
                    <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>

                    <div className='absolute top-0 w-full h-full flex justify-center items-center text-offwhite'>
                        <div className='flex justify-between items-center px-20'>

                            <FeatureList />

                        </div>
                    </div>
                </div>
            </div>
            <ScrollToTopButton />
        </div>
    )
}

export default Adventures