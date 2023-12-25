/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export const debounce = (timer = 1000) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(true), timer);
    });
};
