"use client";
import React, { useState } from 'react';
import CustomHeading from '@/components/common/CustomHeading'
const Works = () => {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const handleImageClick = () => {
        setIsVideoPlaying(true);
    };

    return (
        <div id='community' className='bg-off-white lg:pt-[128px] lg:pb-[134px] md:py-20 py-12'>
            <div className="container">
                <CustomHeading text="HOW IT WORKS" myClass='lg:pb-[64px] md:pb-10 pb-5' />
                <div className="relative max-w-[1064px] xl:ml-[27px] xl:h-[580px] lg:h-[540px] md:h-[400px] sm:h-[255px] h-[186px] md:rounded-[25px] rounded-xl overflow-hidden">
                    {isVideoPlaying ? (
                        <iframe className='md:rounded-[25px] rounded-xl w-full h-full ' src="https://www.youtube.com/embed/nogh434ykF0?autoplay=1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    ) : (
                        <img
                            className='md:rounded-[25px] rounded-xl cursor-pointer w-full xl:max-w-[1064px] xl:h-[580px]'
                            src="/assets/images/webp/works-image.webp"
                            alt="work"
                            onClick={handleImageClick}
                        />
                    )}
                    <div className='bg-orange lg:max-w-[372px] md:max-w-[244px] max-w-[150px] md:px-2 px-1 lg:py-[22px] md:py-3 py-1 absolute md:top-[5%] top-[2%] left-[2%] md:left-[3%] z-10'>
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
