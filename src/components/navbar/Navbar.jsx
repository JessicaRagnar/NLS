import React, { useState } from 'react';
import './Navbar.css';
import LoginButton from '../buttons/LoginButton';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavLinkClick = (event) => {
        setIsMenuOpen(false);
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav id="home" className="navbar flex items-center md:px-16 md:py-20 bg-nightblue text-2xl">
            <div className="flex w-full flex-wrap items-center justify-between mx-auto p-4 md:p-0">
                <RouterNavLink to="/" onClick={handleNavLinkClick}>
                <h1 className="northern-lights-effect text-3xl">Northern Lights Society</h1>
                </RouterNavLink>

                <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden" aria-expanded={isMenuOpen}>
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="#328F99">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col md:flex-row items-center gap-10 font-links font-medium mt-4 md:mt-0 rounded-lg bg-nightblue md:bg-transparent">
                        <li><RouterNavLink to="/home" exact className="navbar-link-effect" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Home</RouterNavLink></li>
                        <li><RouterNavLink to="/about" className="navbar-link-effect" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Our Story</RouterNavLink></li>
                        <li><RouterNavLink to="/adventures" className="navbar-link-effect" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Adventures</RouterNavLink></li>
                        <li><RouterNavLink to="/community" className="navbar-link-effect" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Community</RouterNavLink></li>
                        <li><RouterNavLink to="/guidance" className="navbar-link-effect" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Guidance</RouterNavLink></li>
                        <li><RouterNavLink to="/contact" className="navbar-link-effect" activeClassName="active" onClick={() => setIsMenuOpen(false)}>Contact</RouterNavLink></li>
                        <li>
                            <LoginButton>Log In</LoginButton>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
