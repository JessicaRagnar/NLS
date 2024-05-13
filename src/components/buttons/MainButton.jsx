import React from 'react';
import './Buttons.css';

const MainButton = ({ children, onClick, className }) => {
  return (
    <div className={`relative inline-flex items-center justify-center min-w-[250px] h-[50px] ${className}`}>

      <div className="absolute top-0 left-0 w-full h-full rounded-full border border-bluegreen shadow-2xl" />

      <div onClick={onClick} className="absolute top-0 left-0 w-full h-full px-4 py-2 bg-gradient-to-r from-cyan-950 to-slate-950 rounded-full border-2 border-bluegreen flex justify-center items-center gap-[11px] cursor-pointer transition duration-300 ease-in-out hover:shadow-custom">

        <div className="text-gradient text-lg leading-normal whitespace-nowrap">
          {children}
        </div>

      </div>
    </div>
  );
};

export default MainButton;
