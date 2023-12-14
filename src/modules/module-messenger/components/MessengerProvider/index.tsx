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
import { MessengerContext, messengerDataDefault } from '@module-messenger/hooks/useMessenger';
import { useListenListThread } from '@module-messenger/hooks/useListenListThread';
import { useListenListMessage } from '@module-messenger/hooks/useListenListMessage';

/** types */
import type { PropsWithChildren } from 'react';
import type { MessengerContextProps } from '@module-messenger/models';

export default function MessengerProvider(props: PropsWithChildren) {
    const { children } = props;
    const { locale } = useLanguage();
    const LIST_THREAD = useListenListThread();
    const LIST_MESSAGE = useListenListMessage();

    const unsubscribe = LIST_THREAD.data.unsubscribe;

    const [openThreadInfo, setOpenThreadInfo] = React.useState(true);
    const [drafts, setDrafts] = React.useState(messengerDataDefault.ui.drafts);

    React.useEffect(() => {
        return () => {
            unsubscribe?.();
        };
    }, [unsubscribe]);

    const store = React.useMemo<MessengerContextProps>(
        () => ({
            ui: {
                openThreadInfo,
                drafts,
                loadingThread: LIST_THREAD.isLoading || LIST_THREAD.isFetching,
                loadingMessage: LIST_MESSAGE.isLoading || LIST_MESSAGE.isFetching,
            },
            data: {
                threadIds: LIST_THREAD.data.itemIds,
                threads: LIST_THREAD.data.items,
                allMessages: {},
            },
            method: {
                setDrafts,
                setOpenThreadInfo,
            },
        }),
        [LIST_THREAD, LIST_MESSAGE, openThreadInfo]
    );

    return (
        <MessengerContext.Provider value={store}>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
                {children}
            </LocalizationProvider>
        </MessengerContext.Provider>
    );
}
