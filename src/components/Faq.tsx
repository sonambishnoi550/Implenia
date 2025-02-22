import React, { useState, useRef } from "react";
import Image from "next/image";
import { ACCORDION_DATA } from "../utils/helper";
import CustomHeading from "@/components/common/CustomHeading";

interface AccordionItem {
    heading: string;
    description?: string;
}
const Faq: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState(0);
    const toggleAccordion = (index: any) => {
        setOpenAccordion((openAccordion === index ? false : index));
    };

    return (
        <div className="lg:pt-[128px] lg:pb-[130px] md:py-20 py-12 bg-off-white">
            <div className="container max-w-[1140px] mx-auto px-4">
                <CustomHeading text="FAQs" />
                <div className="pt-5 xl:max-w-[1080px] max-w-[920px] mx-auto">
                    {ACCORDION_DATA.map((item: AccordionItem, index: number) => (
                        <div
                            key={index}
                            className="relative mb-4 pb-[14px] border-b border-gray"
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="font-semibold md:text-custom-sm text-lg leading-custom-sm text-black font-pinky flex justify-between items-center text-start w-full"
                            >
                                {item.heading}
                                <Image
                                    src="/assets/images/svg/faq-arrow.svg"
                                    alt={openAccordion === index ? "Collapse" : "Expand"}
                                    width={21}
                                    height={21}
                                    className={`transition-transform duration-500 transform ${openAccordion === index ? "rotate-90" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                              
                                className={`transition-all max-md: overflow-y-auto duration-500 ease-in-out overflow-hidden ${openAccordion === index ? "max-h-20 pb-3.5" :"max-h-0"}`}
                               
                            >
                                <div>
                                    {item.description && (
                                        <p className="font-light md:text-custom-sm -tracking-custom-xmd text-lg leading-custom-2sm pt-4 text-light-black/70">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
