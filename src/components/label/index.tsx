import React from "react";
import { LabelPropsType } from "./types";

const Label = (props: LabelPropsType) => {
    const { item, handleLabelClick } = props;

    return (
        <button
            className={`w-full text-left flex justify-between items-center p-3 text-base font-bold text-gray-900 rounded-lg ${item.active ? '' : 'opacity-50 hover:opacity-100'}  hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
            onClick={() => { handleLabelClick(item.id) }}
        >
            <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
            {item.default && <span className="text-xs font-medium text-gray-500 bg-gray-200 rounded p-1 dark:bg-gray-700 dark:text-gray-400">Default</span>}
        </button>
    );
}

export default Label;