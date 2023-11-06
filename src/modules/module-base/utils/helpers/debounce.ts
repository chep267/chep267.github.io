/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

const debounce = (timer = 1000) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(true), timer);
    });

export { debounce };
