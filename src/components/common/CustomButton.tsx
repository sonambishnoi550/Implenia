import React from "react";

interface CustomButtonProps {
    text: string;
    myClass?: string;
    customOnClick?: () => void;

}

const CustomButton: React.FC<CustomButtonProps> = ({ text, myClass = "", customOnClick, }) => {
    return (
        <button
            onClick={customOnClick}
            className={`md:text-customSm text-lg whitespace-nowrap font-bold md:px-[46px] px-5 h-[56px] border-2 border-red rounded-[47px] hover:bg-red hover:text-white text-red transition-all duration-500  ${myClass}
`}
        >
            {text}
        </button >
    );
};

export default CustomButton;