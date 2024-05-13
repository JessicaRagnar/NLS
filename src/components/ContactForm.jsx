import React from 'react';
import MainButton from './buttons/MainButton'

function ContactForm() {
  return (

    <div className="w-full max-w-md p-6">
      <form className="flex flex-col space-y-4 text-left">
        <div>
          <input type="text" id="name" name="name" placeholder="Your Name" className="font-logo font-medium lowercase text-2xl mt-1 block w-full px-3 py-2 bg-bluegreen border-none rounded-lg shadow-inner text-brightturquise placeholder-brightturquise focus:outline-none" />
        </div>
        <div>
          <input type="email" id="email" name="email" placeholder="Your Email" className="font-logo font-medium lowercase text-2xl mt-1 block w-full px-3 py-2 bg-bluegreen border-none rounded-lg shadow-inner text-brightturquise placeholder-brightturquise focus:outline-none" />
        </div>
        <div className='pb-8'>
          <textarea id="message" name="message" rows="4" placeholder="Your Message..." className="font-logo font-medium lowercase text-2xl mt-1 block w-full px-3 py-2 bg-bluegreen rounded-lg shadow-inner text-brightturquise placeholder-brightturquise focus:outline-none"></textarea>
        </div>
        <MainButton type="submit" className="flex self-center">
          Submit
        </MainButton>
      </form>
    </div>

  );
}

export default ContactForm;