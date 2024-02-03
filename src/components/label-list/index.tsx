import React from 'react';
import Label from '../label';
import { LabelListPropsType } from './types';

const LabelList = (props:LabelListPropsType) => {
    const { items, handleLabelClick } = props;
    return (
        <ul className="my-4 space-y-3">
            {items.map((item, index) => (
                <li key={index}>
                    <Label handleLabelClick={handleLabelClick} item={item} />
                </li>
            ))}
        </ul>
    );
};

export default LabelList;
