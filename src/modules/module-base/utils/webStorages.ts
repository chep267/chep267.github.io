/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { StorageName, StoreValueType } from '@module-base/models';

export class StorageBase {
    constructor(storageName: StorageName) {
        this.storageName = storageName;
    }

    public storageName;

    private checkParams = (method: string, variable: any, name: string) => {
        if (!variable) {
            throw new Error(`${this.storageName} -- ${method} :: no ${name}!`);
        }
    };

    get = (key: string) => {
        this.checkParams('get', key, 'storage key');
        return window[this.storageName].getItem(key) || '';
    };
    getList = (keys: string[]) => {
        this.checkParams('getList', keys, 'array storage key');
        const results: Record<string, StoreValueType> = {};
        for (const key of keys) {
            results[key] = this.get(key);
        }
        return results;
    };

    set = (key: string, data: StoreValueType) => {
        this.checkParams('set', key, 'storage key');
        this.checkParams('set', data, 'data');
        window[this.storageName].setItem(key, `${data || ''}`);
    };
    setList = (keys: string[], data: StoreValueType[]) => {
        this.checkParams('setList', keys, 'array storage key');
        this.checkParams('setList', data, 'array data');
        keys.forEach((key, index) => this.set(key, data[index]));
    };

    remove = (key: string) => {
        this.checkParams('remove', key, 'storage key');
        window[this.storageName].removeItem(key);
    };
    removeList = (keys: string[]) => {
        this.checkParams('removeList', keys, 'array storage key');
        keys.forEach(this.remove);
    };

    clearAll = () => window[this.storageName].clear();
    clearIgnoreKeys = (keys: string[]) => {
        this.checkParams('clearIgnoreKeys', keys, 'array storage key');
        const ignoreData = this.getList(keys);
        this.clearAll();
        this.setList(keys, Object.values(ignoreData));
    };
}
