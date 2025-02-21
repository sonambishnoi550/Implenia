import React, { useState } from 'react';
import CustomButton from '@/components/common/CustomButton';
import { COUNT_LIST } from '../utils/helper';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import CustomHeading from '@/components/common/CustomHeading';

interface CountItem {
    label: string;
}

const KickBox: React.FC = () => {
    const [count, setCount] = useState(false);
    const { ref } = useInView({
        triggerOnce: true,
        onChange: (inView) => setCount(inView),
    });
    const getCountEndValue = (count: boolean, index: number) => {
        if (!count) return 0;

        const values = [155, 325, 250];
        return values[index] || 0;
    };


    return (
        <div className='lg:pt-[134px] lg:pb-[128px] md:py-20 py-12'>
            <div className="container max-w-[1140px] mx-auto px-4">
                <CustomHeading text="IMPLENIA KICKBOX" />
                <p className='max-w-[1090px] text-left font-light md:text-custom-sm text-base -tracking-custom-xmd leading-custom-2sm lg:pt-4 pt-2 text-light-black/70 max-xl:text-center'>
                    Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!
                </p>
                <div className="flex flex-wrap max-xl:justify-center justify-between xl:gap-[92px] md:gap-[67px] gap-[35px] pt-8 items-center">
                    <div
                        ref={ref}
                        className="flex max-md:gap-6 max-md:flex-wrap max-md:justify-center max-md:items-center"
                    >
                        {COUNT_LIST.map((item: CountItem, index: number) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-center items-center ${index === 0 ? "md:mr-[71px]" : index === 1 && "md:mr-[54px]"}`}
                            >
                                <h3 className="lg:text-custom-2xl md:text-7xl text-5xl font-normal text-dark-orange max-sm:text-center tracking-custom-md flex items-center">
                                    <span className="text-inherit relative -top-[5px]">+</span>
                                    <CountUp
                                        start={0}
                                        end={getCountEndValue(count, index)}
                                        duration={3}
                                    />
                                </h3>
                                <p className="font-bold md:text-custom-sm text-lg whitespace-nowrap">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                    <CustomButton text="Submit Your idea!" myClass='!px-[43px] !py-3' />
                </div>
            </div>
        </div>
    );
};

export default KickBox;