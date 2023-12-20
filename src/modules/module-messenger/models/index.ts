/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction } from 'react';
import type { TypeItems } from '@module-base/models';
import type { TypeDocumentMessageData } from '@module-messenger/models';

export * from './apis';

export type TypeThreadData = {
    id: string;
    name: string;
};

export type MessengerContextProps = {
    ui: {
        openThreadInfo: boolean;
        drafts: TypeItems<Partial<TypeDocumentMessageData>>;
    };
    method: {
        setOpenThreadInfo: Dispatch<SetStateAction<boolean>>;
        setDrafts: Dispatch<SetStateAction<TypeItems<Partial<TypeDocumentMessageData>>>>;
    };
};
