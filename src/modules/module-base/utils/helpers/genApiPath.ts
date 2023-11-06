/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

export const genApiPath = (root: string, arrPath?: Array<string | number>) => {
    return `/${root}${arrPath ? `/${arrPath?.join('/')}` : ''}`;
};
