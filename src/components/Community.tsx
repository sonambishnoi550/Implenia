import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image';
import CommonHeading from '@/components/common/CustomHeading'
import { SLIDER_DATA } from '@/utils/helper';
import CommonButton from '@/components/common/CustomButton';
import "swiper/css/pagination";

const Community = () => {

    return (
        <div id='community' className='xl:py-[120px] lg:py-28 md:py-20 py-12 bg-off-white'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <CommonHeading text='WHAT OUR COMMUNITY SAYS' />
                <div className="flex flex-col items-center justify-center xl:pt-[85px] lg:pt-24 md:pt-16 pt-0">
                    <Swiper
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        loop={true}
                        modules={[Navigation, Pagination, Autoplay]}
                        className="w-full text-center"
                        breakpoints={{
                            1024: {
                                pagination: false,
                            },
                            0: {
                                navigation: false,
                                pagination: { clickable: true },
                            },
                        }}
                    >
                        {SLIDER_DATA.map((testimonial, index) => (
                            <SwiperSlide key={index} className="flex flex-col items-center max-lg:pb-9">
                                <span className="text-orange md:text-custom-3xl text-custom-xl">&ldquo;</span>
                                <p className="md:text-custom-2sm text-xl font-semibold md:leading-custom-3sm text-black -mt-12 max-w-[788px] text-center mx-auto">
                                    {testimonial.description}
                                </p>
                                <div className="flex items-center mt-10 md:ml-[236px] ml-10">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full max-sm:size-16"
                                    />
                                    <div className="ml-4 text-left">
                                        <p className="text-dark-grey md:text-custom-sm text-base leading-custom-sm">
                                            {testimonial.role}
                                        </p>
                                        <p className="font-semibold text-black md:text-custom-sm text-base leading-custom-sm">
                                            {testimonial.name}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <CommonButton
                        text=" Join the community!"
                        myClass="max-lg:!mx-auto !flex md:!px-[29px] md:!py-3 px-[29.5px] md:!mt-[41px] items-center"
                    />
                </div>
            </div>

        </div>
    )
}

export default Community