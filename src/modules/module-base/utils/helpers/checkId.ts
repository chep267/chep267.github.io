/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

const REGEX_ID = /^[a-z]id./;

export const checkId = (id: string, mode: 'uid' | 'tid' | 'mid' | 'fid') => {
    if (!id || id === 'undefined' || id === 'null') {
        return `${mode}.${Date.now()}`;
    }
    if (id.startsWith(mode)) {
        return id;
    }
    if (REGEX_ID.test(id)) {
        return id.replace(REGEX_ID, `${mode}.`);
    }
    return `${mode}.${id}`;
};
