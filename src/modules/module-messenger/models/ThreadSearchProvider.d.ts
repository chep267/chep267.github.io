/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

/** types */
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

type ThreadSearchContextProps = {
    data: {
        isFocusSearch: boolean;
        isSearching: boolean;
        searchKey: string;
    };
    method: {
        setFocusSearch: Dispatch<SetStateAction<boolean>>;
        setSearching: Dispatch<SetStateAction<boolean>>;
        setSearchKey: Dispatch<SetStateAction<string>>;
    };
};

type ThreadSearchProviderProps = PropsWithChildren;

export type { ThreadSearchContextProps, ThreadSearchProviderProps };
