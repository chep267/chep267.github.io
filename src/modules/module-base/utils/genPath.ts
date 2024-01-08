/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export const genPath = (root: string, ...arrPath: Array<string | number>) => {
    return `${root}${arrPath?.join('') || ''}`;
};
