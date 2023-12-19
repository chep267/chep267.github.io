/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, SetStateAction } from 'react';
import type { TypeItems } from '@module-base/models';

export * from './apis';

export type TypeThreadData = {
    id: string;
    name: string;
};

export type TypeMessage = {
    text: string;
};

export type MessengerContextProps = {
    ui: {
        openThreadInfo: boolean;
        drafts: TypeItems<TypeMessage>;
    };
    method: {
        setOpenThreadInfo: Dispatch<SetStateAction<boolean>>;
        setDrafts: Dispatch<SetStateAction<TypeItems<TypeMessage>>>;
    };
};
