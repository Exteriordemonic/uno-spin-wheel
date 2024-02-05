import React from 'react'
import { ButtonPropsType, ButtonClassListType } from './types'

const Button = ({ children, type, onClick }: ButtonPropsType) => {
    const classList: ButtonClassListType = {
        'base': 'p-2 bg-white hover:bg-gray-200 transition duration-3 ease-in-out',
        'icon': 'rounded-full w-10 h-10',
        'text': '',
    }
    return (
        <button className={`${classList.base} ${classList[type]}`}  onClick={onClick}>
            {children}
        </button >
    )
}

export default Button;