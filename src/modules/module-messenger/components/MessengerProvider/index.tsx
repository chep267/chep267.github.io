/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** lib components */
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

/** hooks */
import { useLanguage } from '@module-language/hooks/useLanguage';
import { MessengerContext } from '@module-messenger/hooks/useMessenger';
import { useListenListThread } from '@module-messenger/hooks/useListenListThread';

/** types */
import type { PropsWithChildren } from 'react';
import type { MessengerContextProps } from '@module-messenger/models';

export default function MessengerProvider(props: PropsWithChildren) {
    const { children } = props;
    const { locale } = useLanguage();
    const LIST_THREAD = useListenListThread();

    const threadIds = LIST_THREAD.data.itemIds;
    const threads = LIST_THREAD.data.items;
    const unsubscribe = LIST_THREAD.data.unsubscribe;

    React.useEffect(() => {
        return () => {
            unsubscribe?.();
        };
    }, [unsubscribe]);

    const getThread = React.useCallback<MessengerContextProps['method']['getThread']>(
        (id) => {
            return id ? threads[id] : undefined;
        },
        [threads]
    );

    const store = React.useMemo<MessengerContextProps>(
        () => ({
            data: {
                threadIds,
                threads,
                loadingThread: LIST_THREAD.isLoading,
            },
            method: {
                getThread,
            },
        }),
        [threadIds, threads, LIST_THREAD.isLoading]
    );

    return (
        <MessengerContext.Provider value={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                {children}
            </LocalizationProvider>
        </MessengerContext.Provider>
    );
}
