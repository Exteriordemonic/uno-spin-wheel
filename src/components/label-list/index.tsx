import React from 'react';
import Label from '../label';
import { LabelListPropsType } from './types';
import NewLabelInput from '../new-label-input';

const LabelList = (props: LabelListPropsType) => {
    const { items, handleLabelClick, handleAddLabel, handleRemoveClick, handleLabelChange } = props;
    return (
        <ul className="my-4 space-y-3">
            {items.map((item, index) => (
                <li key={index}>
                    <Label item={item} handleLabelClick={handleLabelClick} handleRemoveClick={handleRemoveClick} handleLabelChange={handleLabelChange} />
                </li>
            ))}
            <li>
                <NewLabelInput handleAddLabel={handleAddLabel} />
            </li>
        </ul>
    );
};

export default LabelList;
