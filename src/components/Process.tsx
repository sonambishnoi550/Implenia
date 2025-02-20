import React from 'react';
import CustomHeading from '@/components/common/CustomHeading';
import CustomButton from '@/components/common/CustomButton';
import { PROCESS_LIST } from '@/utils/helper';

const Process = () => {
  return (
    <div className='lg:pt-[129px] lg:pb-[144px] md:py-20 py-12'>
      <div className="container max-w-[1140px] mx-auto">
        <CustomHeading text="KICKBOX PROCESS" />
        <p className='font-light text-customSm leading-custom2Sm text-light-black max-w-[1090px] tracking-tighter pt-[17px]'>
          The Kickbox program at Implenia guides participants through three key phases to turn their ideas into impactful solutions:
          1. RedBox for validation, 2. BlueBox for piloting, and 3. GoldBox for implementation. To progress through each phase, you’ll work to continuously optimize your idea and demonstrate its potential to internal Implenia sponsors.
        </p>
        <div className="flex flex-wrap lg:justify-between justify-center max-lg:gap-6 max-md:gap-4 pt-12 pb-[39px]">
          {PROCESS_LIST.map((phase, index) => (
            <div key={index} className=''>
              <img className='max-w-[227px] mx-auto' src={phase.image} alt={phase.title?.toLowerCase() || "process image"} />
              <div className='border border-black rounded-[28px] md:mt-[39px] mt-5 pt-[18px] pb-[21px] xl:pl-[27px] md:px-5 px-2 md:pr-[19px]'>
                <p
                  className={`${index === 0
                    ? "text-red"
                    : index === 1
                      ? "text-blue"
                      : "text-yellow"
                    } font-semibold text-[21px] max-sm:text-lg leading-[21px]`}
                >
                  {phase.stage}
                </p>
                <h4 className='font-semibold text-customXmd leading-customXsm pb-4'>{phase.title}</h4>
                <p className='font-light md:text-customSm text-base leading-custom2Sm text-light-black sm:max-w-[277px] tracking-tighter'>{phase.description}</p>
                <p className='font-light md:text-customSm text-base leading-custom2Sm text-light-black sm:max-w-[277px] md:pt-6 pt-3'>
                  {phase.duration}<br />
                  {phase.budget}
                </p>
              </div>
            </div>
          ))}
        </div>
        <CustomButton text='Start your RedBox!' myClass='!px-9 max-xl:flex mx-auto items-center' />
      </div>
    </div>
  );
}

export default Process;
