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
import { BaseContext } from '@module-base/hooks/useBase';

/** types */
import type { PropsWithChildren } from 'react';
import type { BaseContextProps } from '@module-base/models';

function BaseProvider(props: PropsWithChildren) {
    const { children } = props;
    const matches = useMediaQuery('(max-width:720px)');

    const [openSider, setOpenSider] = React.useState(true);

    const open = matches ? false : openSider;
    const store = React.useMemo<BaseContextProps>(
        () => ({
            data: {
                openSider: open,
            },
            method: {
                toggleSider: setOpenSider,
            },
        }),
        [open]
    );

    return (
        <BaseContext.Provider value={store}>
            <ErrorBoundary isAutoReload>{children}</ErrorBoundary>
        </BaseContext.Provider>
    );
}

export default BaseProvider;
