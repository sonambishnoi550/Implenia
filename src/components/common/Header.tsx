"use client";
import React, { useState } from "react";
import { HEADER_LIST } from "@/utils/helper";
import Link from "next/link";
import Image from "next/image";
interface HeaderItem {
    title: string;
    link: string;
}

const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [Active, setActive] = useState<number | null>(null);
    function clickHandler(i: number) {
        setActive(i);
    }
    return (
        <div id="navbar" className="bg-white z-40 w-full shadow-xl
">
            <div className="container max-w-[1177px] mx-auto  max-xl:px-[16px] flex items-center justify-between md:py-[18.5px] py-[5px]">
                <Link href="/">
                    <Image src="/assets/images/webp/logo.webp"
                        alt="logo"
                        className="lg:size-[93px] md:size-[64px] size-10 pointer-events-none" width={93} height={93}/>
                </Link>
                <ul className="flex items-center gap-[38px] max-md:hidden">
                    {HEADER_LIST.map((item: HeaderItem, i: number) => (
                        <li key={i}>
                            <Link onClick={() => clickHandler(i)}
                                href={item.link}
                                className={`font-bold pb-[3px] text-black tracking-custom-xmd text-base hover:text-dark-orange transition-all duration-300  ${Active === i ? "text-dark-orange" : ""
                                    }`}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div
                    className="md:hidden z-50 cursor-pointer"
                    onClick={() => setOpen(!open)}
                >
                    <button className="overflow-hidden relative z-50 lg:hidden size-[30px] h-5  flex flex-col justify-between items-center">
                        <span
                            className={`bg-black rounded-full w-[39px] h-1 block transition-all duration-300 ${open ? "translate-x-10" : ""}`}
                        ></span>
                        <span
                            className={`bg-black rounded-full after:rounded-lg  w-[39px] h-1 block relative after:bg-transparent after:absolute after:top-0 after:left-0 after:w-full after:h-1 after:transition-all after:duration-300 transition-all duration-300 ${open ? "rotate-45 after:rotate-90 after:!bg-black" : ""
                                }`}
                        ></span>
                        <span
                            className={`bg-black rounded-full  w-[39px] h-1 block transition-all duration-300 ${open ? "-translate-x-10" : ""}`}
                        ></span>
                    </button>
                </div>
            </div>
            <div
                className={`w-full h-full bg-white transition-all duration-500 left-0 lg:-top-full z-40 fixed flex gap-5 flex-col justify-center items-center ${open ? "top-0 left-0" : "-top-full"
                    }`}
            >
                {HEADER_LIST.map((item: HeaderItem, i: number) => (
                    <a
                        key={i}
                        onClick={() => setOpen(false)}
                        href={item.link}
                        className="font-bold text-base text-black"
                    >
                        {item.title}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Header;