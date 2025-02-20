import React from 'react'
interface headingProps {
    myClass?: string;
    text: string;
}
const Heading = ({ myClass, text }: headingProps) => {
    return (
        <h2
            className={`${myClass} text-black font-bold md:text-custom-lg text-custom-md max-xl:text-center`}
        >
            {text}
        </h2>
    );
};

export default Heading