import React from 'react';
import NotFoundImage from '../assets/images/404.png';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-nightblue flex items-center justify-center">
            <div className="text-center p-4">
                <img src={NotFoundImage} alt="Page Not Found" className="mx-auto w-1/4 rounded-full border-8 border-hotpink" />
                <h1 className="text-5xl text-hotpink font-bold my-12">Oops!</h1>
                <p className="text-xl text-center text-bluegreen mb-4">
                    We can't seem to find the page you're looking for.
                </p>

            </div>
        </div>
    );
};

export default NotFoundPage;
