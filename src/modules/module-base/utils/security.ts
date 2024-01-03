/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import { AES } from 'crypto-es/lib/aes';
import { Utf8 } from 'crypto-es/lib/core';

/** constants */
import { CIPHER_KEY } from '@module-base/constants';

/**
 * func Encrypt
 * return: chuỗi mã hóa
 */
export function Encrypt(message = '', key = CIPHER_KEY) {
    try {
        return AES.encrypt(message, key).toString();
    } catch {
        return message;
    }
}

/**
 * func Decrypt
 * return: chuỗi giải mã hóa
 */
export function Decrypt(message = '', key = CIPHER_KEY) {
    try {
        return AES.decrypt(message, key).toString(Utf8);
    } catch {
        return message;
    }
}
