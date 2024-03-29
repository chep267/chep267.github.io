/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

export const focusInput = (elem?: HTMLInputElement | null) => {
    if (!elem) {
        return false;
    }
    setTimeout(() => {
        elem.selectionStart = elem.selectionEnd = elem.value?.length;
        elem?.focus?.();
    }, 1);
};
