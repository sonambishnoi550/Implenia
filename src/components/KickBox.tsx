import React from 'react'

const KickBox = () => {
    return (
        <div className='lg:pt-[134px] lg:pb-[128px] md:py-20 py-12'>
            <div className="container">
                <h2 className='text-black font-bold md:text-[49px] text-[34px]'>IMPLENIA KICKBOX</h2>
                <p className='max-w-[1090px] text-left font-light md:text-[21px] text-base leading-[27px] lg:pt-4 pt-2 text-[#1d1d1b]'>Since 2019, our Kickbox Intrapreneurship Program has been inspiring employees across all divisions to turn their ideas into impactful solutions. From validating ideas (RedBox) to piloting projects (BlueBox) and driving implementation (GoldBox), Kickbox provides the tools and support to shape the future of Implenia. Become an intrapreneur yourself and bring your idea to life!</p>
                <div className="flex flex-wrap justify-center md:gap-[77px] gap-[50px] pt-10 items-center">
                    <div className='flex flex-wrap justify-center md:gap-[61px] gap-[40px]'>
                        <div>
                            <p className='md:text-[80px] text-5xl font-normal text-[#FEBE32]'><span>+</span>155</p>
                            <p className='font-bold md:text-[21px] text-lg whitespace-nowrap'>Ideas submitted</p>
                        </div>
                        <div>
                            <p className='md:text-[80px] text-5xl font-normal text-[#FEBE32]'>+325</p>
                            <p className='font-bold md:text-[21px] text-lg whitespace-nowrap'>Active Platform users</p>
                        </div>
                        <div>
                            <p className='md:text-[80px] text-5xl font-normal text-[#FEBE32]'>+250</p>
                            <p className='font-bold md:text-[21px] text-lg whitespace-nowrap'>Community Members</p>
                        </div>
                    </div>
                    <button className='text-[#FF132D] font-bold max-lg:mx-auto text-[21px] border-2 h-[56px] flex items-center px-11 border-[#FF132D] rounded-[47px] whitespace-nowrap leading-[21px] hover:bg-[#FF132D] hover:text-white transition-all duration-700'>Submit your idea!</button>
                </div>
            </div>
        </div>
    )
}

export default KickBox