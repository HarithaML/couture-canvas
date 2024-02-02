import React from "react";

const Button = ({onClick, children, className}) => (
    <button
        className={`rounded-lg bg-white border-2 border-black m-2 p-2 ${className} w-[200px] h-[50px] flex items-center justify-center`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
