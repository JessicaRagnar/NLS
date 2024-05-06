import React from 'react';

const LayeredButton = ({ children, onClick }) => {
    return (
     <div className="relative flex-col items-start inline-flex">
  <div onClick={onClick} className="px-6 py-3 bg-gradient-to-br from-teal-600 to-sky-950 rounded-[55.54px] border-2 border-cyan-700 flex justify-center items-center gap-4 cursor-pointer transition duration-300 ease-in-out hover:shadow-custom">
    <div className="text-teal-500 font-medium font-['Syne'] text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-none sm:leading-tight md:leading-normal lg:leading-relaxed xl:leading-loose">
      {children}
    </div>
  </div>
</div>


    );
};

export default LayeredButton;
