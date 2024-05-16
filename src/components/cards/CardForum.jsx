import React from 'react';
import forumIcon from '../../assets/icons/forum.png'

const CardForum = () => {
    return (


        <div className="w-full bg-cardbg rounded-xl shadow p-8 flex flex-col justify-between">
            <div>
                <img src={forumIcon} alt="Forum Icon" className="w-auto h-20 mb-4" />
                <p className="text-lg leading-6 mb-1">
                    Share your insights, suggestions, and aspirations for our community. Together, we sculpt the future of the Northern Lights Society!
                </p>
            </div>
            <h4 className="text-3xl text-hotpink">
                <a href="/forum" className="bg-arrow no-underline hover:text-lightgreen/80">
                    VISIT THE FORUM
                </a>
            </h4>
        </div>
    )
}

export default CardForum