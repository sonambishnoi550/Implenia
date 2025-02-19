import React from 'react'
import CustomButton  from './common/CustomButton'
const KickBox = () => {
    return (
        <div className='lg:pt-[134px] lg:pb-[128px] md:py-20 py-12'>
            <div className="container">
                <h2 className='text-black font-bold md:text-customLg text-customMd'>IMPLENIA KICKBOX</h2>
                <p className='max-w-[1090px] text-left font-light md:text-customSm text-base leading-[27px] lg:pt-4 pt-2 text-light-black'>Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!</p>
                <div className="flex flex-wrap max-xl:justify-center md:gap-[92px] gap-[50px] pt-10 items-center">
                    <div className='flex flex-wrap justify-center md:gap-[61px] gap-[40px]'>
                        <div>
                            <p className='lg:text-[80px] md:text-7xl text-5xl font-normal text-dark-orange max-sm:text-center'><span>+</span>155</p>
                            <p className='font-bold md:text-customSm text-lg whitespace-nowrap'>Ideas submitted</p>
                        </div>
                        <div>
                            <p className='lg:text-[80px] md:text-7xl text-5xl font-normal text-dark-orange max-sm:text-center'>+325</p>
                            <p className='font-bold md:text-customSm text-lg whitespace-nowrap'>Active Platform users</p>
                        </div>
                        <div>
                            <p className='lg:text-[80px] md:text-7xl text-5xl font-normal text-dark-orange max-sm:text-center'>+250</p>
                            <p className='font-bold md:text-customSm text-lg whitespace-nowrap'>Community Members</p>
                        </div>
                    </div>
                    <CustomButton text="Submit your idea!" />
                </div>
            </div>
        </div>
    )
}

export default KickBox