/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** components */
import { ErrorBoundary } from '@module-base/components';

/** utils */
import { ThreadSearchContext } from '@module-messenger/constants';

/** types */
import type { ThreadSearchProviderProps, ThreadSearchContextProps } from '@module-messenger/models';

export default function ThreadSearchProvider(props: ThreadSearchProviderProps) {
    const { children } = props;

    const [isFocusSearch, setFocusSearch] = React.useState(false);
    const [searchKey, setSearchKey] = React.useState('');
    const [isSearching, setSearching] = React.useState(false);

    const store = React.useMemo<ThreadSearchContextProps>(
        () => ({
            data: {
                isFocusSearch,
                isSearching,
                searchKey,
            },
            method: {
                setFocusSearch,
                setSearching,
                setSearchKey,
            },
        }),
        [isFocusSearch, isSearching, searchKey]
    );

    return (
        <ThreadSearchContext.Provider value={store}>
            <ErrorBoundary isAutoReload>{children}</ErrorBoundary>
        </ThreadSearchContext.Provider>
    );
}
