import React, { useState } from "react";
import { LabelPropsType } from "./types";
import Button from "../button";
import { ButtonType } from "../button/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faSquare } from "@fortawesome/free-solid-svg-icons";
import ColorsPalette from "../../utils/ColorsPalette";

const Label = (props: LabelPropsType) => {
    const { item, handleLabelClick, handleRemoveClick, handleLabelChange, handleColorChange } = props;
    //const {value, setValue} = useState(item.label);
    const [edit, setEdit] = useState(false);
    const [editColor, setEditColor] = useState(false);

    const handleEditClick = () => {
        console.log('Edit Click');
        setEdit(true);
    }

    const handleColorClick = (event: React.MouseEvent<HTMLElement>) => {
        console.log('Edit Click', event);
        setEditColor(false);
        handleColorChange(item.id, event.currentTarget.dataset.color);
    }

    const handleColorOpen = () => {
        setEditColor(true);
    }

    return (
        <div
            className={`relative w-full text-left flex justify-between items-center text-base font-bold text-gray-900 rounded-lg ${item.active ? '' : 'text-gray-900/50 opacity-50 hover:opacity-100'}  hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white`}
        >
            {edit ?
                (
                    <input
                        type="text"
                        value={item.label}
                        onChange={(event) => { handleLabelChange(item.id, event.target.value) }}
                        onBlur={() => { setEdit(false) }}
                        autoFocus
                        className="w-full p-3 text-base font-bold text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                handleLabelChange(item.id, event.currentTarget.value)
                                setEdit(false)
                            }
                        }}
                    />
                ) :
                (
                    <button className="group p-3  w-full text-left flex justify-between items-center" onClick={() => { handleLabelClick(item.id) }} >
                        <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
                        {item.default && (
                            <span className="text-xs font-medium text-gray-500 bg-gray-200 rounded p-1 dark:bg-gray-700 dark:text-gray-400">
                                Default
                            </span>)
                        }
                    </button>
                )}

            {!item.default && !edit && (
                <div className={`flex ${editColor ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 gap-1 bg-white rounded-full `}>
                    <Button type={ButtonType.icon} onClick={(event: React.MouseEvent<HTMLElement>) => { event.stopPropagation(); handleEditClick() }}>
                        <FontAwesomeIcon className="text-black" icon={faPen} />
                    </Button>
                    <Button type={ButtonType.icon} onClick={(event: React.MouseEvent<HTMLElement>) => { event.stopPropagation(); handleRemoveClick(item.id) }}>
                        <FontAwesomeIcon className="text-red" icon={faTrash} />
                    </Button>
                    <Button type={ButtonType.icon} onClick={(event: React.MouseEvent<HTMLElement>) => { event.stopPropagation(); handleColorOpen() }}>
                        <FontAwesomeIcon className={`text-${ColorsPalette[item.fill]}`} icon={faSquare} />
                    </Button>
                    {editColor && (
                        <ul className="absolute top-0 bottom-0 m-auto w-full left-0 justify-between  items-center flex gap-1 bg-gray-100 p-1 rounded-full">
                            {Object.keys(ColorsPalette).map((color: string, index: number) => (
                                <li key={index} className={`cursor-pointer`}>
                                    <button className={`bg-${color} h-6 w-6 hover:shadow rounded-full`} data-color={color} onClick={(event: React.MouseEvent<HTMLElement>) => { event.stopPropagation(); handleColorClick(event) }}>

                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            )
            }
        </div>
    );
}

export default Label;