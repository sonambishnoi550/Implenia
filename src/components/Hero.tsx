"use client";
import React from "react";
import "aos/dist/aos.css";
import Header from "./common/Header";
import CustomButton from "@/components/common/CustomButton";

const Hero = () => {

    return (
        <div
            id="home"
            className="bg-center bg-cover hero-bg-mobile bg-no-repeat relative md:pb-20 pb-5 overflow-hidden"
            style={{ backgroundImage: `url(/assets/images/webp/hero-bg.webp)` }}
        >
            <Header />
            <img data-aos="fade-right"
                className="absolute  md:top-[53%] top-[56%] pointer-events-none lg:w-[475px] lg:h-[402px] md:size-[350px] size-[170px]"
                src="/assets/images/webp/dustbin.webp"
                alt="dustbin"
            />
            <div className="container max-w-[1140px] mx-auto">
                <div className="flex flex-col max-xl:justify-center max-xl:items-center lg:pt-[350px] md:pt-[290px] pt-[67px] xl:pl-14 relative z-20">
                    <h2
                        className="font-bold max-sm:pt-5 text-customSm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-white text-left"
                    >
                        Shape the future of Implenia!
                    </h2>
                    <h1
                        className="relative lg:text-customXl md:text-5xl text-custom2md sm:leading-custom2Md leading-customMd [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] max-xl:text-center font-bold pt-[15px] text-white lg:max-w-[700px] max-w-[450px]"
                    >
                        WE ARE LOOKING FOR YOUR IDEA
                    </h1>
                </div>
                <CustomButton
                    text="Bring your idea to life!"
                    myClass="!mt-[25px] md:!mb-[120px] !mb-[100px] !ml-[52px] !border-white max-xl:!flex max-xl:!mx-auto !text-white hover:!bg-white hover:!text-black !px-[47px] md:h-[67px] !items-center max-sm:!px-5"
                />
            </div>
        </div>
    );
};

export default Hero;
