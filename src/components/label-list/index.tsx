import React from 'react';
import Label from '../label';
import { LabelListPropsType } from './types';
import NewLabelInput from '../new-label-input';

const LabelList = (props: LabelListPropsType) => {
    const { items, handleLabelClick, handleAddLabel, handleRemoveClick } = props;
    return (
        <ul className="my-4 space-y-3">
            {items.map((item, index) => (
                <li key={index}>
                    <Label handleLabelClick={handleLabelClick} handleRemoveClick={handleRemoveClick} item={item} />
                </li>
            ))}
            <li>
                <NewLabelInput handleAddLabel={handleAddLabel} />
            </li>
        </ul>
    );
};

export default LabelList;
