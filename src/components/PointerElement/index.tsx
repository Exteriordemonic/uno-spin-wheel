import React from "react";

const PointerElement = () => {
    return (
        <div 
            className="w-10 h-5 bg-black absolute left-9 right-0 m-auto translate-x-[-40vh] z-10"
            style={{
                clipPath: `polygon(0 0, 0 100%, 100% 50%)`,
            }}
        >
        </div>
    )
}

export default PointerElement;