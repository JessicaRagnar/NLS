import React from 'react';

const MainButton = ({ children, onClick }) => {
  return (
    <div className="relative flex-col items-start inline-flex">
      <div onClick={onClick} className="px-6 py-3 bg-gradient-to-br from-teal-600 to-sky-950 rounded-full border-2 border-cyan-700 flex justify-center items-center gap-4 cursor-pointer transition duration-300 ease-in-out hover:shadow-custom">
        <div className="text-teal-500 font-medium font-body text-lg leading-none sm:leading-tight md:leading-normal lg:leading-relaxed xl:leading-loose">
          {children}
        </div>
      </div>
    </div>


  );
};

export default MainButton;
