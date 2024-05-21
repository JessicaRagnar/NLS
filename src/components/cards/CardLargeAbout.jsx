import React from 'react';
import './cards.css';

const CardLargeAbout = () => {
    return (
        <div className="flex items-start justify-center min-h-screen bg-nightblue dark:bg-gray-900 p-4 md:p-36">
            <div className="background-container block w-full max-w-full p-2 rounded-3xl shadow">
            <div className="gradient-overlay rounded-3xl"></div>
                <div className="text-center mb-6">
                    <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-5xl mt-6">Welcome to Northern Lights Society</h2>
                    <h4 className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl mb-6 text-hotpink">where immersive storytelling meets interactive gaming!</h4>
                </div>

                <div className="flex justify-end">
                    <div className="text-right max-w-4xl px-12">
                        <article>
                            <p className="text-center block md:hidden mb-4">
                                At Northern Lights Society, we're passionate about crafting unforgettable experiences that transport you to new worlds and challenge your creativity and problem-solving skills. Whether you're a seasoned gamer or just dipping your toes into the world of interactive entertainment, we have something for everyone.
                            </p>
                            <p className="hidden md:block text-3xl md:text-lg mb-4">
                                At Northern Lights Society, we're passionate about crafting unforgettable experiences that transport you to new worlds and challenge your creativity and problem-solving skills. Whether you're a seasoned gamer or just dipping your toes into the world of interactive entertainment, we have something for everyone.
                            </p>
                            <p className="hidden md:block md:text-lg mb-4">
                                Our roots lie in interactive stories and digital escape rooms, where players are thrust into thrilling narratives and tasked with solving puzzles to progress. With meticulously designed scenarios and captivating plot lines, our games offer an unparalleled level of engagement and excitement.
                            </p>
                            <p className="text-center block md:hidden mb-4">
                                Our roots lie in interactive stories and digital escape rooms, where players are thrust into thrilling narratives and tasked with solving puzzles to progress. With meticulously designed scenarios and captivating plot lines, our games offer an unparalleled level of engagement and excitement.
                            </p>
                            <p className="hidden md:block md:text-lg mb-4">
                                But we're not content with stopping there. We're constantly pushing the boundaries of digital entertainment, exploring new avenues and formats to deliver innovative gaming experiences. From branching narrative adventures to augmented reality experiences, we're dedicated to creating cutting-edge games that redefine what it means to play.
                            </p>
                            <p className="hidden md:block md:text-lg mb-4">
                                But at the heart of everything we do is our commitment to you, the player. We believe that gaming should be an inclusive and accessible experience for all, which is why we strive to create games that are both challenging and enjoyable, whether you're playing solo or with friends.
                            </p>
                            <p className="hidden md:block md:text-lg mb-4">
                                So join us on this journey as we continue to expand our horizons and explore new frontiers in interactive storytelling and gaming. Whether you're looking for a thrilling adventure or a brain-teasing challenge, you'll find it here at Northern Lights Society.
                            </p>
                        </article>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CardLargeAbout;
