import React from 'react';
import { WedgeLabelProps } from '../wedge-label/types';

const LabelList = ({ items }: { items: WedgeLabelProps[] }) => {
    return (
        <ul className="my-4 space-y-3">
            {items.map((item, index) => (
                <li key={index}>
                    <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                        <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
                        {item.default && <span className="text-xs font-medium text-gray-500 bg-gray-200 rounded p-1 dark:bg-gray-700 dark:text-gray-400">Default</span>}
                    </a>
                </li>
            ))}

        </ul>
    );
};

export default LabelList;
