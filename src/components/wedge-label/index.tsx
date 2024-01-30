import React from 'react';
import { WedgeLabelProps } from './types';
import ColorsPalette from '../../utils/ColorsPalette';
import CaclWedeSize from '../../utils/CalcWedgeSize';

const WedgeLabel = (props: WedgeLabelProps) => {
  const { label, fill, rotation, height } = props;
  return (
    <li
      className={`
        absolute 
        bg-${fill} 
        ${fill === ColorsPalette.yellow ? 'text-dark' : 'text-white'} 
        w-1/2 
        origin-top-right 
        text-center 
        top-1/2 
        right-1/2
        -translate-y-1/2
        flex 
        justify-center
        items-center
        text-xl
      `}
      style={{
        rotate: `${rotation}deg`,
        height: `${height}px`,
        clipPath: `polygon(0 0, 0 100%, 100% 50%)`,
      }}
    >
      {label}
    </li>
  );
};

export default WedgeLabel;