import React from 'react';
import ScrollToTopButton from '../components/buttons/BackToTop';
import backgroundImage from '../assets/images/background.png';
import mountainImage from '../assets/images/mountain.png';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow">
        <div className='relative w-full min-h-screen'>
          <img className="absolute top-0 left-0 w-full h-screen object-cover" src={backgroundImage} alt="Background" />

          <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>
          <div className="absolute top-0 w-full h-full flex flex-col justify-start items-center text-center">

            <div className="mt-24 w-full md:w-[90%] relative">
              <img className="rounded-2xl object-cover w-full h-full absolute top-0 left-0 z-0 hidden md:block" src={mountainImage} alt="Mountain" />
              <div className="bg-gradient-to-r from-transparent via-cardbg/100 to-cardbg/100 rounded-2xl absolute inset-0 z-20 hidden md:block"></div>

              <div className="drop-shadow-md relative z-30 p-4 md:p-12 px-10">
                <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl mb-4">Welcome to Northern Lights Society</h2>
                <h4 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-6 text-hotpink">where immersive storytelling meets interactive gaming!</h4>
                <div className="flex flex-row justify-between overflow-hidden md:h-[] overflow-y-scroll">
                  <div className="w-1/2 hidden md:block">
                  </div>
                  <article className="w-full py-12 md:w-1/2 text-lg text-pretty md:py-6">

                    <p className="block md:hidden">
                      At Northern Lights Society, we're passionate about crafting unforgettable experiences that transport you to new worlds and challenge your creativity and problem-solving skills. Whether you're a seasoned gamer or just dipping your toes into the world of interactive entertainment, we have something for everyone.
                    </p>

                    <p className="hidden md:block">
                      At Northern Lights Society, we're passionate about crafting unforgettable experiences that transport you to new worlds and challenge your creativity and problem-solving skills. Whether you're a seasoned gamer or just dipping your toes into the world of interactive entertainment, we have something for everyone.
                    </p>

                    <p className="hidden md:block">
                      Our roots lie in interactive stories and digital escape rooms, where players are thrust into thrilling narratives and tasked with solving puzzles to progress. With meticulously designed scenarios and captivating plot lines, our games offer an unparalleled level of engagement and excitement.
                    </p>

                    <p className="block md:hidden">
                      Our roots lie in interactive stories and digital escape rooms, where players are thrust into thrilling narratives and tasked with solving puzzles to progress. With meticulously designed scenarios and captivating plot lines, our games offer an unparalleled level of engagement and excitement.
                    </p>

                    <p className="hidden md:block">
                      But we're not content with stopping there. We're constantly pushing the boundaries of digital entertainment, exploring new avenues and formats to deliver innovative gaming experiences. From branching narrative adventures to augmented reality experiences, we're dedicated to creating cutting-edge games that redefine what it means to play.
                    </p>

                    <p className="hidden md:block">
                      But at the heart of everything we do is our commitment to you, the player. We believe that gaming should be an inclusive and accessible experience for all, which is why we strive to create games that are both challenging and enjoyable, whether you're playing solo or with friends.
                    </p>

                    <p className="hidden md:block">
                      So join us on this journey as we continue to expand our horizons and explore new frontiers in interactive storytelling and gaming. Whether you're looking for a thrilling adventure or a brain-teasing challenge, you'll find it here at Northern Lights Society.
                    </p>

                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default About;
