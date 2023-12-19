/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { TypeDocumentMessageData } from '@module-messenger/models';

export const genMessage = (
    payload: Omit<TypeDocumentMessageData, 'mid' | 'createdTime' | 'updatedTime'>
): TypeDocumentMessageData => {
    const createdTime = Date.now();
    const mid = `mid.${Date.now()}`;
    return {
        ...payload,
        mid,
        createdTime,
        updatedTime: createdTime,
    };
};
