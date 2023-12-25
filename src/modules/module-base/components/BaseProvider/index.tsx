/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';
import { useMediaQuery } from '@mui/material';

/** components */
import ErrorBoundary from '@module-base/components/ErrorBoundary';

/** utils */
import { BaseContext, defaultNotify } from '@module-base/hooks/useBase';

/** types */
import type { PropsWithChildren } from 'react';
import type { BaseContextProps, TypeBaseNotify } from '@module-base/models';

function BaseProvider(props: PropsWithChildren) {
    const { children } = props;
    const matches = useMediaQuery('(max-width:720px)');

    const [notify, setNotify] = React.useState<TypeBaseNotify>(defaultNotify);
    const [openSider, setOpenSider] = React.useState(true);

    const toggleNotify = React.useCallback((options: TypeBaseNotify = defaultNotify) => setNotify(options), []);

    const open = matches ? false : openSider;
    const store = React.useMemo<BaseContextProps>(
        () => ({
            notify: {
                ...notify,
                toggleNotify,
            },
            sider: {
                open,
                toggleSider: setOpenSider,
            },
        }),
        [notify, openSider, open]
    );

    return (
        <BaseContext.Provider value={store}>
            <ErrorBoundary isAutoReload>{children}</ErrorBoundary>
        </BaseContext.Provider>
    );
}

export default BaseProvider;
