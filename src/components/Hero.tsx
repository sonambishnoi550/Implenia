"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Header from "./common/Header";
import CustomButton from "@/components/common/CustomButton";

const Hero = () => {

    return (
        <div
            id="home"
            className="bg-center bg-cover bg-no-repeat relative pb-20 overflow-hidden"
            style={{ backgroundImage: `url(/assets/images/png/hero-bg.png)` }}
        >
            <Header />
            <img
                className="absolute md:top-[47%] top-[61%] lg:w-[516px] lg:h-[402px] md:size-[350px] size-[200px]"
                src="/assets/images/png/dustbin.png"
                alt="dustbin"
            />
            <div className="container max-w-[1140px] mx-auto">
                <div className="flex flex-col max-xl:justify-center max-xl:items-center lg:pt-[350px] md:pt-[290px] pt-[145px] xl:pl-14 relative z-20">
                    <h2
                        className="font-bold text-customSm [text-shadow:0px_4px_4px_rgba(0,0,0,0.25)] text-white text-left"
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
                    myClass="!mt-[25px] md:!mb-[120px] !mb-[100px] !ml-[52px] !border-white max-xl:!flex max-xl:!mx-auto !text-white hover:!bg-white hover:!text-black !px-[47px] h-[67px] !items-center"
                />
            </div>
        </div>
    );
};

export default Hero;
