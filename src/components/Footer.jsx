import React from 'react';
import { NavLink } from 'react-router-dom'; // Importera NavLink
import { FaDiscord, FaGithub } from 'react-icons/fa';

const Footer = () => {
  console.log("Rendering Footer");
  return (
    <div className='bg-gradient-to-t from-nightblue to-nightblue/50 py-12 text-bluegreen'>
      <div className='container mx-auto grid grid-cols-2 items-start'>

        <div>
          <h5 className='text-2xl'>
            Northern<br />
            Lights <br />
            Society
          </h5>
          <p className='text-bluegreen text-lg mt-2'>2024</p>
        </div>

        <div>
          <div className='flex justify-end space-x-4 font-body text-2xl'>

            <NavLink to="/about" activeClassName='text-offwhite/80' className='hover:text-offwhite/80'>About</NavLink>
            <NavLink to="/guidance" activeClassName='text-offwhite/80' className='hover:text-offwhite/80'>Guidance</NavLink>
            <NavLink to="/contact" activeClassName='text-offwhite/80' className='hover:text-offwhite/80'>Contact</NavLink>
          </div>

          <div className='flex justify-end space-x-6 mt-2 text-3xl'>
            <a href="https://discord.com" className='hover:text-offwhite/80' target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href="https://github.com/JessicaRagnar/NLS" className='hover:text-offwhite/80' target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
