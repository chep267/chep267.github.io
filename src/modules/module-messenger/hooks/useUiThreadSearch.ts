/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** constants */
import { emptyFunction } from '@module-base/constants/defaulValue';

/** types */
import type { ThreadSearchContextProps } from '@module-messenger/models';

const ThreadSearchContext = React.createContext<ThreadSearchContextProps>({
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

const useUiThreadSearch = () => React.useContext(ThreadSearchContext);

export { ThreadSearchContext, useUiThreadSearch };
