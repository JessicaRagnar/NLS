import React, { useState, useEffect, useRef } from 'react';
import { FaVolumeMute, FaVolumeDown } from 'react-icons/fa';
import music from '../../assets/music/SPRING OF DECEPTION - Density & Time.mp3'; 

const SoundToggle = () => {
    const audioRef = useRef(new Audio(music)); 
    const [soundOn, setSoundOn] = useState(() => {
        const savedSoundOn = sessionStorage.getItem('soundOn');
        return savedSoundOn === null ? true : JSON.parse(savedSoundOn);
    });

    const toggleSound = () => {
        setSoundOn(prevSoundOn => {
            const newSoundOn = !prevSoundOn;
            sessionStorage.setItem('soundOn', JSON.stringify(newSoundOn)); 
            if (newSoundOn) {
                audioRef.current.play().catch(error => {
                    console.error("Playback error:", error);
                });
            } else {
                audioRef.current.pause();
            }
            return newSoundOn;
        });
    };

    useEffect(() => {
        if (soundOn) {
            audioRef.current.play().catch(error => {
                console.error("Playback error:", error);
            });
        } else {
            audioRef.current.pause();
        }

        return () => {
            audioRef.current.pause();
        };
    }, [soundOn]);

    useEffect(() => {
        const handleAutoplay = async () => {
            if (soundOn) {
                try {
                    await audioRef.current.play();
                } catch (error) {
                    console.error("Autoplay error:", error);
                    // You can prompt the user to interact with the page here
                }
            }
        };

        handleAutoplay();
    }, []);

    return (
        <div className="bg-cardbg/80 p-3 rounded-l-lg cursor-pointer hover:bg-nightblue/80 transition-colors"
            onClick={toggleSound}
        >
            {soundOn ? (
                <FaVolumeDown className='text-brightturquise/30' size={25} />
            ) : (
                <FaVolumeMute className='text-brightturquise/30' size={25} />
            )}
        </div>
    );
};

export default SoundToggle;
