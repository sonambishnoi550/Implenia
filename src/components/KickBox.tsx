import React, { useState } from 'react';
import CustomButton from '@/components/common/CustomButton';
import { STATS } from '../utils/helper'
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CustomHeading from '@/components/common/CustomHeading'

const KickBox = () => {
    const [count, setCount] = useState(false);
    const { ref } = useInView({
        triggerOnce: false,
        onChange: (inView) => setCount(inView),
    });
    return (
        <div id='stories' className='lg:pt-[134px] lg:pb-[128px] md:py-20 py-12'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <CustomHeading text="IMPLENIA KICKBOX"/>
                <p className='max-w-[1090px] text-left font-light md:text-customSm text-base leading-[27px] lg:pt-4 pt-2 text-light-black max-xl:text-center'>
                    Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!
                </p>
                <div className="flex flex-wrap max-xl:justify-center justify-between xl:gap-[92px] md:gap-[67px] gap-[35px] pt-10 items-center">
                    <div
                        ref={ref}
                        className="flex max-md:gap-6 max-md:flex-wrap max-md:justify-center max-md:items-center"
                    >
                        {STATS.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center items-center ${index === 0 ? "md:mr-[71px]" : index === 1 && "md:mr-[54px]"
                                    }`}
                            >
                                <h3 className="lg:text-custom2Xl md:text-7xl text-5xl font-normal text-dark-orange max-sm:text-center tracking-[-0.66px] flex items-center">
                                    <span className="text-inherit relative -top-[5px]">+</span>
                                    <CountUp
                                        start={0}
                                        end={
                                            count && index === 0
                                                ? 155
                                                : count && index === 1
                                                    ? 325
                                                    : count && index === 2
                                                        ? 250
                                                        : 0
                                        }
                                        duration={3}
                                    />
                                </h3>


                                <p className="font-bold md:text-customSm text-lg whitespace-nowrap">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <CustomButton
                        text="Submit Your idea!"
                    />
                </div>
            </div>
        </div>
    );
};

export default KickBox;