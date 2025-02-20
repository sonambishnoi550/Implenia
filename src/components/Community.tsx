import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import CommonHeading from '@/components/common/CustomHeading'
import { SLIDER_DATA } from '@/utils/helper';
import CommonButton from '@/components/common/CustomButton';

const Community = () => {

    return (
        <div className='xl:py-[130px] lg:py-28 md:py-20 py-12 bg-light-grey'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <CommonHeading text='WHAT OUR COMMUNITY SAYS' />
                <div className="flex flex-col items-center justify-center xl:pt-[140px] lg:pt-24 md:pt-16 pt-0">
                    <Swiper
                        navigation
                        modules={[Navigation]}
                        className="w-full  text-center"
                    >
                        {SLIDER_DATA.map((testimonial, index) => (
                            <SwiperSlide key={index} className="flex flex-col items-center">
                                <span className="text-light-orange md:text-customXl text-customMd">&ldquo;</span>
                                <p className="md:text-custom-2sm text-2xl font-medium text-black leading-custom-xmd -mt-12 max-w-[788px] text-center mx-auto ">
                                    {testimonial.description}
                                </p>
                                <div className="flex items-center mt-10 md:ml-[236px] ml-10 ">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full max-sm:size-16"
                                    />
                                    <div className="ml-4 text-left">
                                        <p className="text-dark-grey md:text-custom-sm text-base leading-custom-sm">{testimonial.role}</p>
                                        <p className="font-semibold text-black md:text-custom-sm text-base leading-custom-sm">{testimonial.name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <CommonButton
                        text=" Join the community!"
                        myClass=" !flex border-2 md:!px-[36px] md:!py-[10.4px] px-[29.5px] py-[7px] md:!mt-[57px] !mt-8 "
                    />
                </div>
            </div>

        </div>
    )
}

export default Community