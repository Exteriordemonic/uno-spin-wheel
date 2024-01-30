import React, {useState, useEffect} from "react";
import WedgeLabel from "../../components/wedge-label";
import CaclWedeSize from "../../utils/CalcWedgeSize";
import Logo from "../../components/logo";
import PointerElement from "../../components/PointerElement";

interface WhealProps {
    items: Array<object>;
}

const Wheal = (props: WhealProps) => {
    const { items } = props;
    const [height, setHeight] = useState(CaclWedeSize(0.80, items.length));
    
    return (
        <div className="flex bg-gray-900 h-screen items-center justify-center">
            <Logo />
            <PointerElement />
            <ul className="relative rounded-full border-slate-800 w-[80vh] h-[80vh] bg-black aspect-square overflow-hidden">
                {items.map((item: any, index: number) => (
                    <WedgeLabel key={index} {...item} rotation={360 / items.length * index} height={height} />
                ))}
            </ul>
        </div>
    );
};

export default Wheal;