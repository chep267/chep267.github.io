/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** components */
import ErrorBoundary from '@module-base/components/ErrorBoundary';

/** utils */
import { BaseContext, defaultNotify } from '@module-base/hooks/useBase';

/** types */
import type { PropsWithChildren } from 'react';
import type { BaseContextProps, BaseNotifyType } from '@module-base/models';

function BaseProvider(props: PropsWithChildren) {
    const [notify, setNotify] = React.useState<BaseNotifyType>(defaultNotify);
    const [openSider, setOpenSider] = React.useState(true);
    const [openThreadInfo, setOpenThreadInfo] = React.useState(true);

    const toggleNotify = React.useCallback((options: BaseNotifyType = defaultNotify) => setNotify(options), []);

    const store = React.useMemo<BaseContextProps>(
        () => ({
            notify: {
                ...notify,
                toggleNotify,
            },
            sider: {
                open: openSider,
                toggleSider: setOpenSider,
            },
            messenger: {
                openThreadInfo,
                toggleThreadInfo: setOpenThreadInfo,
            },
        }),
        [notify, openSider, openThreadInfo]
    );

    return (
        <BaseContext.Provider value={store}>
            <ErrorBoundary isAutoReload>{props?.children}</ErrorBoundary>
        </BaseContext.Provider>
    );
}

export default BaseProvider;
