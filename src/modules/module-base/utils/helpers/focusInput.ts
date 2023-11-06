/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

const focusInput = (elem?: HTMLInputElement | null) => {
    if (!elem) {
        return false;
    }
    window.setTimeout(function () {
        elem.selectionStart = elem.selectionEnd = elem.value.length;
        elem?.focus();
    }, 1);
};

export { focusInput };
