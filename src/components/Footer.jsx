import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-t from-nightblue to-nightblue/50 py-12 text-bluegreen'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:items-start md:text-left'>

        <div>
          <h6 className='text-xl md:text-2xl'>
            Northern<br />
            Lights <br />
            Society
          </h6>
          <h6 className='text-sm md:text-lg font-medium mt-2'>2024</h6>
        </div>

        <div className="mt-4 md:mt-0">
          <div className='flex justify-center md:justify-end space-x-3 md:space-x-4 font-body text-xl md:text-2xl'>
            <NavLink to="/about" activeClassName='text-lightgreen/80' className='hover:text-lightgreen/80'>About</NavLink>
            <NavLink to="/guidance" activeClassName='text-lightgreen/80' className='hover:text-lightgreen/80'>Guidance</NavLink>
            <NavLink to="/contact" activeClassName='text-lightgreen/80' className='hover:text-lightgreen/80'>Contact</NavLink>
          </div>

          <div className='flex justify-center md:justify-end space-x-5 mt-2 text-2xl md:text-3xl'>
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
