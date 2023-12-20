/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export const isEvenNumber = (num = 0) => !!(num & 1);

export function digitalRoot(n = 0) {
    return n === 0 ? 0 : 1 + ((n - 1) % 9);
}
