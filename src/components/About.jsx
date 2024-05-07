import React from 'react'

const About = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Hero Image Layer: Täcker hela skärmen för att ge en visuell bas för sidan */}
      <img className="absolute top-0 left-0 w-full h-screen object-cover" src="./src/assets/images/background.png" alt="Hero Image" />

      {/* Gradient Overlay Layer: Ger en mjuk övergång från en stark färg till en nästan transparent färg, förbättrar djupet och visuell attraktion */}
      <div className="absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-nightblue to-nightblue/10"></div>

      {/* Container för innehåll: Centrerar allt innehåll inom hela sidans område */}
      <div className="absolute top-0 w-full h-full flex flex-col justify-start items-center text-center">
        {/* Kortet som innehåller bilder och text, positionerat med marginal för att inte fylla hela skärmen */}
        <div className="mt-4 w-[90%] relative">

          {/* Bild i kortet: Visar en annan bild som är fullt rundad och täcker kortets område */}
          <img className="rounded-2xl object-cover w-full h-full absolute top-0 left-0 z-0" src="./src/assets/images/mountain.png" alt="Mountain" />

          {/* Horisontell Gradient Overlay inom kortet: Förstärker läsbarheten genom att mörklägga bakgrundsbilden där text ska placeras */}
          <div className="bg-gradient-to-r from-transparent via-cardbg/100 to-cardbg/100 rounded-2xl absolute inset-0 z-20"></div>

          {/* Textlager: Detta är det översta lagret som innehåller rubriker och text */}
          <div className="text-center drop-shadow-md relative z-30 p-12">
          <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl mb-4">Welcome to Northern Lights Society</h2>
            <h4 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-6">where immersive storytelling meets interactive gaming!</h4>


            {/* Två kolumner för att hantera layout för ytterligare innehåll, en tom och en med text */}
            <div className="flex flex-row justify-between">
              <div className="w-1/2">
                {/* Tom kolumn för möjlig framtida utvidgning eller designbalans */}
              </div>
              <article className="w-1/2 p-6 text-pretty">
                <p className="text-lg md:text-lg text-wrap">
                  At Northern Lights Society, we're passionate about crafting unforgettable experiences that transport you to new worlds and challenge your creativity and problem-solving skills. Whether you're a seasoned gamer or just dipping your toes into the world of interactive entertainment, we have something for everyone.
                  </p><p className="text-lg md:text-lg">
                  Our roots lie in interactive stories and digital escape rooms, where players are thrust into thrilling narratives and tasked with solving puzzles to progress. With meticulously designed scenarios and captivating plot lines, our games offer an unparalleled level of engagement and excitement.
              </p><p className="text-lg md:text-lg">
                  But we're not content with stopping there. We're constantly pushing the boundaries of digital entertainment, exploring new avenues and formats to deliver innovative gaming experiences. From branching narrative adventures to augmented reality experiences, we're dedicated to creating cutting-edge games that redefine what it means to play.
                  </p><p className="text-lg md:text-lg">
                  But at the heart of everything we do is our commitment to you, the player. We believe that gaming should be an inclusive and accessible experience for all, which is why we strive to create games that are both challenging and enjoyable, whether you're playing solo or with friends.
                  </p><p className="text-lg md:text-lg">
                  So join us on this journey as we continue to expand our horizons and explore new frontiers in interactive storytelling and gaming. Whether you're looking for a thrilling adventure or a brain-teasing challenge,
                  you'll find it here at Northern Lights Society.
                </p>
              </article >
            </div>
          </div>
        </div>
      </div>
    </div>






  )
}

export default About