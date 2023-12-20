/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** constants */
import { emptyArray, emptyObject } from '@module-base/constants/defaultValue';

/** utils */
import { Encrypt } from '@module-base/utils/security';

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

export const genMessage = (payload: Partial<TypeDocumentMessageData>): TypeDocumentMessageData => {
    const { tid, uid, type = 'text', text = '', attachments = emptyObject, attachmentIds = emptyArray } = payload;
    const createdTime = Date.now();
    const mid = `mid.${Date.now()}`;

    return {
        tid: `${tid}`,
        uid: `${uid}`,
        mid,
        type,
        text: Encrypt(text),
        attachmentIds,
        attachments,
        createdTime,
        updatedTime: createdTime,
    };
};
