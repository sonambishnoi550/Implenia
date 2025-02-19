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
            className={`text-customSm whitespace-nowrap font-bold px-[46px] h-[56px] border-2 border-red rounded-[47px] hover:bg-red hover:text-white text-red transition-all duration-500  ${myClass}
`}
        >
            {text}
        </button >
    );
};

export default CustomButton;