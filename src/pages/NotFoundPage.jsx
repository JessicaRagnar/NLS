import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../assets/images/404.png'; // Säkerställ att du har en snygg 404-bild i dina resurser

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-nightblue flex items-center justify-center">
            <div className="text-center p-4">
                <img src={NotFoundImage} alt="Page Not Found" className="mx-auto w-1/2" />
                <h1 className="text-5xl text-offwhite font-bold mb-4">Oops!</h1>
                <p className="text-xl text-bluegreen mb-8">
                    We can't seem to find the page you're looking for.
                </p>
                <Link to="/" className="text-2xl bg-hotpink text-white py-2 px-6 rounded hover:bg-pink-500 transition duration-300">
                    Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
