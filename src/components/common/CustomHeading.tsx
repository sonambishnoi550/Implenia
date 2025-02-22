import React from 'react'
interface headingProps {
    myClass?: string;
    text: string;
}
const Heading = ({ myClass, text }: headingProps) => {
    return (
        <h2
            className={`${myClass} text-black font-bold md:text-custom-lg leading-custom-2md -tracking-custom-md text-3xl max-xl:text-center`}
        >
            {text}
        </h2>
    );
};

export default Heading