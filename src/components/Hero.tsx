"use client";
import React from "react";
import "aos/dist/aos.css";
import Header from "./common/Header";
import CustomButton from "@/components/common/CustomButton";
import Image from "next/image";
const Hero = () => {

    return (
        <div
            id="home"
            className="bg-center bg-cover hero-bg-mobile bg-no-repeat relative pb-20 overflow-hidden max-sm:bg-black/20"
            style={{ backgroundImage: `url(/assets/images/webp/hero-bg.webp)` }}
        >
            <Header />
            <Image className="absolute  lg:top-[44%] md:top-[38%] top-[58%] pointer-events-none md:size-[410px] size-[170px]"
                src="/assets/images/webp/dustbin.webp"
                alt="dustbin" width={430} height={350} />
            <div className="container max-w-[1140px] mx-auto">
                <div className="flex flex-col max-xl:justify-center max-xl:items-center lg:pt-[178px] md:pt-[120px] pt-[67px] xl:pl-6 relative z-20">
                    <p
                        className="font-bold max-sm:pt-5 text-custom-sm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-white text-left"
                    >
                        Shape the future of Implenia!
                    </p>
                    <h1
                        className="relative lg:text-custom-xl md:text-5xl text-custom-2md sm:leading-custom-2md leading-custom-md [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] max-xl:text-center font-bold pt-[15px] text-white lg:max-w-[700px] max-w-[450px]"
                    >
                        WE ARE LOOKING FOR YOUR IDEA
                    </h1>
                </div>
                <CustomButton
                    text="Bring your idea to life!"
                    myClass="!mt-[25px] md:!mb-[120px] !ml-[28px] !border-white max-xl:!flex max-xl:!mx-auto !text-white hover:!bg-white hover:!text-black !px-[47px] md:h-[67px] !items-center max-sm:!px-5"
                />
            </div>
        </div>
    );
};

export default Hero;
