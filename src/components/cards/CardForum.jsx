import React from 'react';
import forumIcon from '../../assets/icons/forum.png'

const CardForum = () => {
    return (


        <div class="max-w-3xl px-8 py-7 bg-cardbg rounded-xl shadow">

            <img src={forumIcon} alt="Forum Icon" className="w-auto h-30 mb-2" />

            <p className="text-lg px-2 py-3 leading-6">
                Share your insights, suggestions, and aspirations for our community. Together, we sculpt the future of the Northern Lights Society!
            </p>

            <h4 className="text-3xl text-hotpink py-0">
                <a href="/forum" className="bg-arrow no-underline hover:text-lightgreen/80">
                    VISIT THE FORUM
                </a>
            </h4>
        </div>

    )
}

export default CardForum