/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

const regexId = /^[a-z]id./;

export const checkUid = (id?: string) => {
    const uid = `${id}`;
    if (uid.startsWith('uid.')) {
        return uid;
    }
    if (regexId.test(uid)) {
        return uid.replace(regexId, 'uid.');
    }
    return `uid.${uid}`;
};
