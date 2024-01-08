/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export const checkString = (root = '', searchKey = '') => {
    if (!searchKey) {
        return true;
    }
    const str = root.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const text = searchKey.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return str.includes(text);
};
