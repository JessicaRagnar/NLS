import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub } from 'react-icons/fa'; // Import Discord and GitHub icons from React Icons

const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-nightblue to-nightblue/50 py-12 text-bluegreen'>
      <div className='container mx-auto grid grid-cols-2 items-start'>
        {/* Text column */}
        <div>
          <h5 className='text-2xl'>
            Northern<br />
            Lights <br />
            Society
          </h5>
          <p className='text-bluegreen text-lg mt-2'>2024</p>
        </div>

        {/* Links and social icons column */}
        <div>
          {/* Navigation Links */}
          <div className='flex justify-end space-x-4 font-body text-2xl'>
            <Link to="/about" className='hover:text-offwhite/80'>About</Link>
            <Link to="/guidance" className='hover:text-offwhite/80'>Guidance</Link>
            <Link to="/contact" className='hover:text-offwhite/80'>Contact</Link>
          </div>
          {/* Social Media Icons */}
          <div className='flex justify-end space-x-6 mt-2 text-3xl'>  {/* Adjusted the spacing and alignment to match the menu */}
            <a href="https://discord.com" className='hover:text-offwhite/80' target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href="https://github.com" className='hover:text-offwhite/80' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
