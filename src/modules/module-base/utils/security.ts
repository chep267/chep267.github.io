/**
 *
 * @author dong.nguyenthanh@powergatesoftware.com on 26/07/2023.
 *
 */

/**
 * func Encrypt
 * return: chuỗi mã hóa
 */
const Encrypt = (value = ''): string => {
    let result = '';

    if (!value) return result;
    try {
        const text = window.btoa(value);
        for (let i = 0, length = text.length; i < length; i += 1) {
            if (i < length - 1) {
                result += text.charCodeAt(i) + 10;
                result += '-';
            } else {
                result += text.charCodeAt(i) + 10;
            }
        }
        return window.btoa(result);
    } catch (e) {
        console.log('Encrypt error: ', e);
        return value;
    }
};

/**
 * func Decrypt
 * return: chuỗi giải mã hóa
 */
const Decrypt = (value: null | undefined | string = ''): string => {
    let result = '';

    if (!value) return result;
    try {
        const array: string[] = window.atob(value).split('-');
        for (let i = 0, length = array.length; i < length; i += 1) {
            result += String.fromCharCode(Number(array[i]) - 10);
        }
        return window.atob(result);
    } catch (e) {
        console.log('Decrypt error: ', e);
        return value;
    }
};

export { Encrypt, Decrypt };
