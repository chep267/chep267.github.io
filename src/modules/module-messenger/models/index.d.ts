/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction } from 'react';
import type { TypeItems } from '@module-base/models';
import type { TypeDocumentMessageData } from '@module-messenger/models/apis';

export * from './apis';
export * from './ThreadSearchProvider';

export type MessengerContextProps = {
    ui: {
        openThreadInfo: boolean;
        drafts: TypeItems<TypeDocumentMessageData>;
    };
    method: {
        setOpenThreadInfo: Dispatch<SetStateAction<boolean>>;
        setText(
            payload: Pick<TypeDocumentMessageData, 'tid' | 'text'> & Partial<Pick<TypeDocumentMessageData, 'type'>>
        ): void;
        setFiles(payload: Pick<TypeDocumentMessageData, 'tid' | 'fileIds' | 'files'>): void;
        removeFiles(payload: Pick<TypeDocumentMessageData, 'tid' | 'fileIds'>): void;
        setEmptyThread(tid: string): void;
    };
};
