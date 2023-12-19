/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

const regexId = /^[a-z]id./;

export const checkTid = (id: string) => {
    const tid = `${id}`;
    if (tid.startsWith('tid.')) {
        return tid;
    }
    if (regexId.test(tid)) {
        return tid.replace(regexId, 'tid.');
    }
    return `tid.${tid}`;
};
