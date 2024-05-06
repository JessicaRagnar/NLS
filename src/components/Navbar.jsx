import React from 'react'
import { NavLink as RouterNavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-nightblue text-2xl">
            <RouterNavLink to="/" className="logo-link-effect">
                <h2>Northern Lights Society</h2>
            </RouterNavLink>

            <ul className="flex items-center gap-10 font-links">
                <li><RouterNavLink to="/" className="navbar-link-effect">Home</RouterNavLink></li>
                <li><RouterNavLink to="/about" className="navbar-link-effect">Our Story</RouterNavLink></li>
                <li><RouterNavLink to="/adventures" className="navbar-link-effect">Adventures</RouterNavLink></li>
                <li><RouterNavLink to="/community" className="navbar-link-effect">Community</RouterNavLink></li>
                <li><RouterNavLink to="/guidance" className="navbar-link-effect">Guidance</RouterNavLink></li>
                <li><RouterNavLink to="/contact" className="navbar-link-effect">Contact</RouterNavLink></li>


                <li>
                    <button className="py-1 px-6 bg-pink-300 hover:bg-pink-400 text-white rounded-full transition-all">
                        Log In
                    </button>
                </li>
            </ul>
        </nav>
    );
}