import React from 'react';
import './Navbar.css';
import LoginButton from '../buttons/LoginButton';
import { NavLink as RouterNavLink } from 'react-router-dom';

export default function Navbar() {
    const handleNavLinkClick = (event) => {
        const targetId = event.currentTarget.getAttribute('href').substring(1); 

        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav id="home" className="flex justify-between items-center p-16 px-20 bg-nightblue text-2xl">
            <RouterNavLink to="/" onClick={handleNavLinkClick}>
                <h1 className='text-2xl'>Northern Lights Society</h1>
            </RouterNavLink>

            <ul className="flex items-center gap-10 font-links">
                <li><RouterNavLink to="/home" exact className="navbar-link-effect" activeClassName="active" onClick={handleNavLinkClick}>Home</RouterNavLink></li>
                <li><RouterNavLink to="/about" className="navbar-link-effect" activeClassName="active" onClick={handleNavLinkClick}>Our Story</RouterNavLink></li>
                <li><RouterNavLink to="/adventures" className="navbar-link-effect" activeClassName="active" onClick={handleNavLinkClick}>Adventures</RouterNavLink></li>
                <li><RouterNavLink to="/community" className="navbar-link-effect" activeClassName="active" onClick={handleNavLinkClick}>Community</RouterNavLink></li>
                <li><RouterNavLink to="/guidance" className="navbar-link-effect" activeClassName="active" onClick={handleNavLinkClick}>Guidance</RouterNavLink></li>
                <li><RouterNavLink to="/contact" className="navbar-link-effect" activeClassName="active" onClick={handleNavLinkClick}>Contact</RouterNavLink></li>
                <li>
                    <LoginButton>Log In</LoginButton>
                </li>
            </ul>
        </nav>
    );
}
