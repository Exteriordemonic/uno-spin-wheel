import { WedgeLabelProps } from "../../components/wedge-label/types";

export enum StorageType {
    local = 'local',
    session = 'session',
}

export enum StorageKey {
    items = 'items',
}

const StorageFactory = {
    get: (type: StorageType) => {
        if (type === 'local') {
            return localStorage;
        }
        if (type === 'session') {
            return sessionStorage;
        }
        throw new Error('Storage type not found');
    },

    set: (type: StorageType, key: StorageKey, value: string | [] | WedgeLabelProps[]) => {
        if (typeof value === 'object') {
            value = JSON.stringify(value);
        }
        StorageFactory.get(type).setItem(key, value);
    },

    getFrom: (type: StorageType, key: StorageKey):Promise<any> => {
        const getFromStorage = async () => {
            const value = StorageFactory.get(type).getItem(key);
            if (value) {
                return JSON.parse(value);
            }
        }
        return getFromStorage();
    }
}

export default StorageFactory;