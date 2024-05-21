import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import treasure from '/src/assets/images/treasure.png';
import treasurechest from '/src/assets/images/treasurechest.png';
import goldfox from '/src/assets/images/goldfox.png';
import GameMemo from '../components/adventures/game_memo'; 

const Minigames = () => {
    const navigate = useNavigate();
    const [selectedGame, setSelectedGame] = useState(null);

    const games = [
        {
            id: "memo",
            image: treasure,
            title: "Memo",
            description: "Embark on a thrilling treasure hunt and solve puzzles to find hidden treasures scattered across various locations.",
            link: "/treasure-hunt",
            embedUrl: "https://itch.io/embed-upload/8929141?color=333333",
            disabled: false
        },
        {
            id: "maze-runner",
            image: treasurechest, 
            title: "Maze Runner",
            description: "Navigate through intricate mazes and find your way to the exit before time runs out. Test your navigation skills!",
            link: "/maze-runner",
            embedUrl: "",
            disabled: true
        },
        {
            id: "trivia-challenge",
            image: goldfox, 
            title: "Trivia Challenge",
            description: "Test your knowledge across various topics in our Trivia Challenge. Answer questions correctly to score points and win.",
            link: "/trivia-challenge",
            embedUrl: "",
            disabled: true
        }
    ];

    return (
        <div className='bg-nightblue p-10 min-h-screen'>
            <h2 className="text-4xl text-center mb-8">Minigames</h2>
            <div className="flex justify-center space-x-12 mb-8">
                {games.map((game, index) => (
                    <div key={index} className={`max-w-sm bg-lightgreen rounded-xl shadow ${game.disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <div className={game.disabled ? 'pointer-events-none' : ''}>
                            <div className="h-80 overflow-hidden flex justify-center items-center bg-cover bg-center rounded-t-xl">
                                <img src={game.image} className="object-cover h-full w-full" alt={game.title} />
                            </div>
                        </div>
                        <div className="p-5">
                            <div className={game.disabled ? 'pointer-events-none' : ''}>
                                <h5 className="mb-2 text-4xl font-links font-bold tracking-tight text-nightblue">{game.title}</h5>
                            </div>
                            <p className="mb-3 text-lg font-normal text-nightblue">{game.description}</p>
                            <button
                                onClick={() => setSelectedGame(game)}
                                className={`inline-flex items-center px-3 py-2 text-sm font-medium font-body text-center text-nightblue bg-hotpink rounded-lg hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 ${game.disabled ? 'pointer-events-none bg-gray-400' : ''}`}
                            >
                                Play
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {selectedGame && (
                <GameMemo
                    embedUrl={selectedGame.embedUrl}
                    onClose={() => setSelectedGame(null)}
                />
            )}
            <div className="flex justify-center mt-36">
                <button
                    onClick={() => navigate('/adventures')}
                    className="px-4 py-2 font-body text-nightblue bg-hotpink rounded-lg hover:bg-lightgreen focus:ring-4 focus:outline-none focus:ring-pink-300"
                >
                    Back to Adventures
                </button>
            </div>
        </div>
    );
}

export default Minigames;
