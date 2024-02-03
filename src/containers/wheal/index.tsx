import React, { useState, useEffect, useRef } from "react";
import WedgeLabel from "../../components/wedge-label";
import CaclWedeSize from "../../utils/CalcWedgeSize";
import Logo from "../../components/logo";
import PointerElement from "../../components/PointerElement";
import { MouseEvent } from "./types";
import { random } from "node-forge";
import RandomMultiply from "../../utils/RandomMultiply";

import MouseMoveEngine from "../../services/MouseMoveEngine";

interface WhealProps {
    items: Array<object>;
}

const Wheal = (props: WhealProps) => {
    const { items } = props;
    const [height, setHeight] = useState(CaclWedeSize(0.80, items.length));
    const [rotate, setRotate] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [distance, setDistance] = useState(0);
    const [allowDragging, setAllowDragging] = useState(true);
    const [engine] = useState(new MouseMoveEngine());

    let timer = setTimeout(() => {
        
    }, 0);

    const handleDragStart = (e: object) => {
        setDragging(true);
    };

    const handleDrag = (e: object) => {
        if (dragging) {
        }
    };

    const handleDragEnd = (e: object) => {
        setDragging(false);
    };

    const mouseDown = (e: MouseEvent) => {
        setDragging(true);
        setDistance(0);
        engine.down(e);
    }

    const mouseUp = (e: MouseEvent) => {
        setDistance(engine.up(e));
        setDragging(false);
    }

    const mouseMove = (e: MouseEvent) => {
        if(dragging) {
            const distance = engine.move(e);
            setAllowDragging(false);
            setDistance(distance);
        }
    }
    
    const mouseLeave = (e: MouseEvent) => {
        if(dragging) {
            setAllowDragging(false);
            setDragging(false);
            setDistance(engine.up(e));

            setTimeout(() => {
                setAllowDragging(true);
            }, 3000);
        }
    }

    useEffect(() => {
        let newRotate = rotate + distance;
        setRotate(newRotate);

    }, [distance]);

    return (
        <div className="flex bg-gray-900 h-screen items-center justify-center overflow-hidden">
            <Logo />
            <PointerElement />
            <ul className="relative rounded-full border-slate-800 w-[80vh] h-[80vh] bg-black aspect-square overflow-hidden"
                style={{
                    transform: `rotate(${rotate}deg)`,
                    transition: `transform ${allowDragging ? '0.1 easeOut' : dragging ? '0.5s linear' : '3s cubic-bezier(.09,.92,.66,1.02)'}`,
                    cursor: dragging ? 'grabbing' : 'grab',
                }}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onMouseDown={mouseDown}
                onMouseUp={mouseUp}
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
            >
                {items.map((item: any, index: number) => (
                    <WedgeLabel key={index} {...item} rotation={360 / items.length * index} height={height} />
                ))}
            </ul>
        </div>
    );
};

export default Wheal;