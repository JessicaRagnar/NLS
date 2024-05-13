import React from 'react'
import SoundToggle from './SoundToggle.jsx'
import DarkModeToggle from './DarkModeToggle.jsx'

const UIControlPanel = () => {
  return (
    <div className='absolute w-full flex justify-end p-4 items-center z-20'>
        <div className="flex ">
        <SoundToggle />
        <DarkModeToggle />
      </div>
      </div>
  )
}

export default UIControlPanel