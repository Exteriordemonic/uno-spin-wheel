import React from "react";

const Label = ({ label, default: isDefault }: { label: string, default: boolean }) => {
    return (
        <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
            <span className="flex-1 ms-3 whitespace-nowrap">{label}</span>
            {isDefault && <span className="text-xs font-medium text-gray-500 bg-gray-200 rounded p-1 dark:bg-gray-700 dark:text-gray-400">Default</span>}
        </div>
    );
}

export default Label;