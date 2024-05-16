import React from 'react';
import MainButton from '../buttons/MainButton';
import registerImage from '../../assets/images/mountain2.png';
import logoIcon from '../../assets/images/small_logo.png';

const Register = () => {
    return (
        <div id="register" className="relative min-h-screen flex items-center justify-center bg-nightblue">
            <div className="relative z-10 w-full flex flex-col md:flex-row items-stretch justify-center px-6 md:px-36 py-8 gap-8">
                {/* Left Column */}
                <div
                    className="flex flex-col w-full md:w-1/2 bg-cardbg rounded-xl shadow p-8 relative"
                    style={{ backgroundImage: `url(${registerImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-nightblue/50 to-nightblue/90 rounded-xl opacity-90"></div>
                    <div className="relative z-10 flex flex-col h-full justify-center">
                        <h2 className="text-4xl md:text-5xl text-center mb-6">Register</h2>
                        <form className="flex flex-col space-y-4 text-left flex-grow justify-center">
                            <div>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    className="font-logo font-medium lowercase text-2xl mt-1 block w-full px-3 py-4 bg-bluegreen border-none rounded-lg shadow-inner text-brightturquise placeholder-brightturquise focus:outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    className="font-logo font-medium lowercase text-2xl mt-1 block w-full px-3 py-4 bg-bluegreen border-none rounded-lg shadow-inner text-brightturquise placeholder-brightturquise focus:outline-none"
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Your Password"
                                    className="font-logo font-medium lowercase text-2xl mt-1 block w-full px-3 py-4 bg-bluegreen border-none rounded-lg shadow-inner text-brightturquise placeholder-brightturquise focus:outline-none"
                                />
                            </div>
                            <MainButton type="submit" className="flex self-center mt-4">
                                Register
                            </MainButton>
                        </form>
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex flex-col w-full md:w-1/2 bg-cardbg rounded-xl shadow p-8">
                    <h2 className="text-4xl md:text-5xl text-center mb-8">Become a Member</h2>
                    <div className="flex items-center justify-center mb-6">
                        <img src={logoIcon} alt="Logo Icon" className="w-auto h-40" />
                    </div>
                    <p className="text-base text-offwhite mb-4 text-center md:text-left md:text-lg">
                        Joining our community provides you with exclusive access to a range of exciting benefits, including:
                    </p>
                    <ul className="text-xs md:text-base list-disc list-inside text-brightturquise space-y-2 flex-grow">
                        <li>Access to members-only content and events.</li>
                        <li>Participation in our community forums and discussions.</li>
                        <li>Exclusive discounts on future events and merchandise.</li>
                        <li>Monthly newsletters with updates and special offers.</li>
                        <li>The opportunity to contribute to and shape our community.</li>
                    </ul>
                    <p className="text-offwhite text-base mt-4 text-center md:text-left md:text-lg">
                        Becoming a member is simple and free. Fill out the registration form to get started and join a community of like-minded enthusiasts who are passionate about puzzles, storytelling, and more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
