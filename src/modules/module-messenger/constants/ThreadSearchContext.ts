/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants';

/** types */
import type { ThreadSearchContextProps } from '@module-messenger/models';

export const ThreadSearchContext = React.createContext<ThreadSearchContextProps>({
    data: {
        isSearching: false,
        isFocusSearch: false,
        searchKey: '',
    },
    method: {
        setSearching: emptyFunction,
        setFocusSearch: emptyFunction,
        setSearchKey: emptyFunction,
    },
});
ThreadSearchContext.displayName = 'ThreadSearchContext';
