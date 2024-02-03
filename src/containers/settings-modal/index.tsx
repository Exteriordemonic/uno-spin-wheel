import React from 'react';
import ModalHeader from '../../components/modal-header';
import LabelList from '../../components/label-list';
import { SettingModalPropsType } from './types';
import { WedgeLabelProps } from '../../components/wedge-label/types';

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

    const handleAddLabel = (item: WedgeLabelProps): void => {
        const newItems = [...items];
        newItems.push(item);
        setItems(newItems);
    }

    return (
        <div tabIndex={-1} aria-hidden="true" className={` ${open ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 m-auto z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex bg-black/80`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <ModalHeader handleClick={handleModalClose} title='Settings' />
                    <div className="p-4 md:p-5">
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Menage and create custom labels for your game</p>
                        <LabelList items={items} handleLabelClick={handleLabelClick} handleAddLabel={handleAddLabel} />
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