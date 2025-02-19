"use client";
import React, { useState } from 'react';

const Works = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    const handleImageClick = () => {
        setIsVideoPlaying(true);
    };

    const handleVideoClick = () => {
        setIsVideoPlaying(false);
    };

    return (
        <div id='community' className='bg-[#F5F5F5] lg:pt-[128px] lg:pb-[134px] md:py-20 py-12'>
            <div className="container">
                <h2 className='text-black md:text-customLg text-customMd font-bold lg:pb-[64px] md:pb-10 pb-5 max-xl:text-center'>HOW IT WORKS</h2>
                <div className="relative lg:ml-[27px]">
                    {isVideoPlaying ? (
                        <video
                            className='md:rounded-[25px] rounded-xl w-full'
                            src="https://www.w3schools.com/html/mov_bbb.mp4"
                            controls
                            autoPlay
                            onClick={handleVideoClick}
                        />
                    ) : (
                        <img
                            className='md:rounded-[25px] rounded-xl cursor-pointer w-full xl:max-w-[1064px] xl:h-[580px]'
                            src="/assets/images/webp/works-image.webp"
                            alt="work"
                            onClick={handleImageClick}
                        />
                    )}
                    <div className='bg-dark-orange lg:max-w-[372px] md:max-w-[244px] max-w-[150px] md:px-2 px-1 lg:py-[22px] md:py-3 py-1 absolute md:top-[5%] top-[2%] left-[2%] md:left-[3%] z-10'>
                        <p className='max-w-[372px] font-bold lg:text-customSm md:leading-customSm leading-3 md:text-base text-customXsm text-center'>
                            VIDEO CAN BE EXCHANGED FOR CAMPAIGNS.
                        </p>
                        <p className='font-bold lg:text-customSm md:text-base md:leading-customSm leading-3 text-customXsm max-w-[300px] mx-auto text-center lg:pt-4 md:pt-2 pt-1'>
                            -Title: Name of Campaign <br /> -Button: Join the campaign!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Works;
