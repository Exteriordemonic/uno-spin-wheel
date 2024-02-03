import React from "react";
import Button from "../button"
import { ButtonType } from "../button/types";
import { ModalHeaderPropsTypes } from "./types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ModalHeader = (props: ModalHeaderPropsTypes) => {
    const { handleClick, title } = props;

    return (
        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {title}
            </h3>
            <Button type={ButtonType.icon} onClick={() => {handleClick()}}><FontAwesomeIcon icon={faTimes} /></Button>
        </div>
    )
}

export default ModalHeader;