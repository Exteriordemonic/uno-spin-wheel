import React from "react";
import { NewLabelInputPropsType } from "./types";

import { v4 as uuidv4 } from 'uuid';
import ColorsPalette from "../../utils/ColorsPalette";


const NewLabelInput = (props: NewLabelInputPropsType) => {
    const { handleAddLabel } = props;

    return (
        <div className="flex items-center space-x-3">
            <input
                type="text"
                className="w-full p-3 text-base font-bold text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Add new label"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddLabel({
                            label: e.currentTarget.value,
                            active: true,
                            default: false,
                            id: uuidv4(),
                            fill: ColorsPalette.blue // Add a random color from the ColorsPalette
                        });
                        e.currentTarget.value = '';
                    }
                }}
            />
        </div>
    );
}

export default NewLabelInput;