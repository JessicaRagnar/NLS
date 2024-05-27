import React from "react";
import './FeatureList.css';
import stories from '/src/assets/images/stories.png';
import minigames from '/src/assets/images/minigames.png';
import escaperooms from '/src/assets/images/escaperooms.png';
import { Link } from 'react-router-dom';

function FeatureList() {
    return (
        <div className="flex justify-center space-x-1 ml-12">
            <div className="feature-card">
                <Link to="/stories" className="flex flex-col items-center space-y-2">
                    <img src={stories} className="slider-image" alt="Stories" />
                    <h3 className="text-4xl">stories</h3>
                </Link>
            </div>
            <div className="feature-card mt-36">
                <Link to="/minigames" className="flex flex-col items-center space-y-2">
                    <img src={minigames} className="slider-image w-3/4" alt="Mini-games" />
                    <h3 className="text-4xl">mini-games</h3>
                </Link>
            </div>
            <div className="feature-card">
                <Link to="/nls/escaperooms" className="flex flex-col items-center space-y-2">
                    <img src={escaperooms} className="slider-image" alt="Escape Rooms" />
                    <h3 className="text-4xl">escape rooms</h3>
                </Link>
            </div>
        </div>
    );
}

export default FeatureList;
