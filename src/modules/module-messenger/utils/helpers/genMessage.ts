/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** utils */
import { Crypto } from '@module-base/utils/security';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

type TypeGenMessage = Pick<TypeDocumentMessageData, 'tid'> &
    Partial<Omit<TypeDocumentMessageData, 'tid'>> & { isEncrypt?: boolean; isEmpty?: boolean };

export const genMessage = (payload: TypeGenMessage): TypeDocumentMessageData => {
    const {
        tid,
        uid = '',
        createdTime,
        mid,
        updatedTime = createdTime,
        type = 'text',
        text = '',
        fileIds = [],
        files = {},
        isEmpty = false,
        isEncrypt = false,
    } = payload;

    const time = Date.now();

    return {
        tid,
        uid,
        mid: !isEmpty ? mid || `mid.${time}` : '',
        text: !isEncrypt ? text : text ? Crypto.encrypt(text) : '',
        fileIds,
        files,
        createdTime: !isEmpty ? createdTime || time : 0,
        updatedTime: !isEmpty ? updatedTime || time : 0,
        type,
    };
};
