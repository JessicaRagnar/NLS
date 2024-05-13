import React from 'react'
import ChatButton from './buttons/ChatButton'
import chatBookImage from '/src/assets/images/chat_book.png'

const ChatIcon = () => {
    return (
        <div className="flex items-start">
            <div className='pt-8'>
                <ChatButton>Chat Now!
                </ChatButton>
            </div>
            <img src={chatBookImage} alt="Chat Icon" className="pulse-effect" />
        </div>
    );
};

export default ChatIcon;
