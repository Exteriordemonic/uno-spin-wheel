import React from 'react';
import ModalHeader from '../../components/modal-header';
import LabelList from '../../components/label-list';
import { SettingModalPropsType } from './types';
import { WedgeLabelProps } from '../../components/wedge-label/types';
import ColorsPalette from '../../utils/ColorsPalette';

const SettingsModal = (props: SettingModalPropsType) => {

    const { open, setOpen, items, setItems } = props;

    const handleModalClose = () => {
        setOpen(false);
    }

    const handleLabelClick = (id: string): void => {

        const newItems = [...items];

        newItems.forEach((item) => {
            if (item.id === id) {
                item.active = !item.active;
            }
        });

        setItems(newItems);
    }

    const handleLabelChange = (id: string, value: string): void => {

        const newItems = [...items];

        newItems.forEach((item) => {
            if (item.id === id) {
                item.label = value;
            }
        });

        setItems(newItems);
    }

    const handleRemoveClick = (id: string): void => {

        const newItems = [...items];

        const filteredItems = newItems.filter((item) => item.id !== id);
        setItems(filteredItems);
    }

    const handleAddLabel = (item: WedgeLabelProps): void => {
        const newItems = [...items];
        newItems.push(item);
        setItems(newItems);
    }
    
    const handleColorChange = (id: string, value: ColorsPalette): void => {
        const newItems = [...items];

        newItems.forEach((item) => {
            if (item.id === id) {
                item.fill = value;
            }
        });

        setItems(newItems);
    }

    return (
        <div tabIndex={-1} aria-hidden="true" className={` ${open ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 m-auto z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-black/80`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <ModalHeader handleClick={handleModalClose} title='Settings' />
                    <div className="p-4 md:p-5">
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Menage and create custom labels for your game</p>
                        <LabelList items={items} handleLabelClick={handleLabelClick} handleRemoveClick={handleRemoveClick} handleAddLabel={handleAddLabel} handleLabelChange={handleLabelChange} handleColorChange={handleColorChange} />
                        <div className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                            Data will be stored inside your local storage
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SettingsModal;