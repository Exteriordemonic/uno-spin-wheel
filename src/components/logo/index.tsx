import React from "react";
import LogoPNG from '../../assets/images/logo.png';

const Logo = () => {
    return (
        <div className="flex items-center justify-center absolute top-0 bottom-0 right-0 left-0 m-auto z-10 pointer-events-none">
            <img src={LogoPNG} alt="logo" className="w-[150px] h-[150px] rounded-full" />
        </div>    
    )
}

export default Logo;