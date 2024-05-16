import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-nightblue to-nightblue/50 py-12 text-bluegreen">
      <div className="flex flex-col md:flex-row md:px-20 items-center md:items-start text-center md:text-left w-full">
        {/* Left Column */}
        <div className="w-full md:w-1/2 p-8">
          <h6 className='text-xl md:text-3xl'>
            Northern<br />
            Lights <br />
            Society
          </h6>
          <h6 className='text-sm md:text-lg font-medium mt-2'>2024</h6>
        </div>
        {/* Right Column */}
        <div className="w-full md:w-1/2 p-8 flex flex-col items-center md:items-end">
          {/* Top Row */}
          <div className="w-full flex justify-center md:justify-end mb-4 text-xl md:text-2xl font-body">
            <NavLink to="/about" activeClassName='text-lightgreen/80' className='hover:text-lightgreen/80 mr-4'>About</NavLink>
            <NavLink to="/guidance" activeClassName='text-lightgreen/80' className='hover:text-lightgreen/80 mr-4'>Guidance</NavLink>
            <NavLink to="/contact" activeClassName='text-lightgreen/80' className='hover:text-lightgreen/80'>Contact</NavLink>
          </div>
          {/* Bottom Row */}
          <div className="w-full flex justify-center md:justify-end space-x-5 mt-4 text-xl md:text-4xl">
            <a href="https://discord.com" className='hover:text-lightgreen/80' target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href="https://github.com/JessicaRagnar/NLS" className='hover:text-bluegreen/80' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
