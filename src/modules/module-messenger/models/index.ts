/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
// import type { Dispatch, SetStateAction } from 'react';
import type { ItemIdsType, ItemsType } from '@module-base/models';

export * from './apis';

export type ThreadDataType = {
    id: string;
    name: string;
};

export type MessengerContextProps = {
    data: {
        threadIds: ItemIdsType;
        threads: ItemsType<ThreadDataType>;
        loadingThread: boolean;
    };
    method: {
        getThread(tid?: ItemIdsType[number]): ThreadDataType | null | undefined;
    };
};
