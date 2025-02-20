import React from 'react';
import CustomHeading from '@/components/common/CustomHeading';
import CustomButton from './common/CustomButton';
import { STORIES_DATA } from '@/utils/helper';
import Image from 'next/image';
const Stories = () => {
  return (
    <div>
      <div className='lg:pt-[128px] lg:pb-[144px] md:py-20 py-12'>
        <div className="container">
          <CustomHeading text="INTRAPRENEURSHIP STORIES" />
          <div className="flex flex-wrap xl:justify-between md:gap-10 gap-6 justify-center pt-[25px] pb-[39px]">
            {STORIES_DATA.map((story, index) => (
              <div key={index} className='border border-black rounded-[28px] xl:max-w-[323px] md:max-w-[308px] max-w-[278px]'>
                <Image className='pointer-events-none' src={story.image} alt={story.alt} width={323} height={207} />
                <h4 className='font-semibold md:text-custom-xmd text-3xl md:leading-custom-xsm leading-8 md:pl-[26px] pl-4 md:pt-[51px] pt-8 md:pb-[61px] pb-10'>
                  {story.title}
                </h4>
              </div>
            ))}
          </div>
          <CustomButton text='More Stories' myClass='md:!px-[68px] !px-10 max-xl:flex mx-auto items-center' />
        </div>
      </div>
    </div>
  );
};

export default Stories;
