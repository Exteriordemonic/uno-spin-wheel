import React from 'react';
import { WedgeLabelProps } from '../wedge-label/types';
import Label from '../label';

const LabelList = ({ items }: { items: WedgeLabelProps[] }) => {
    return (
        <ul className="my-4 space-y-3">
            {items.map((item, index) => (
                <li key={index}>
                    <Label label={item.label} default={item.default} />
                </li>
            ))}

        </ul>
    );
};

export default LabelList;
