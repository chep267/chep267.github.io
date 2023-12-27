/**
 *
 * @author dongntd267@gmail.com on 26/07/2023.
 *
 */

import * as React from 'react';

/** components */
import ErrorBoundary from '@module-base/components/ErrorBoundary';

/** utils */
import { BaseContext } from '@module-base/hooks/useBase';

/** types */
import type { PropsWithChildren } from 'react';
import type { BaseContextProps } from '@module-base/models';

function BaseProvider(props: PropsWithChildren) {
    const { children } = props;

    const [openSider, setOpenSider] = React.useState(true);

    const store = React.useMemo<BaseContextProps>(
        () => ({
            data: {
                openSider,
            },
            method: {
                toggleSider: setOpenSider,
            },
        }),
        [openSider]
    );

    return (
        <BaseContext.Provider value={store}>
            <ErrorBoundary isAutoReload>{children}</ErrorBoundary>
        </BaseContext.Provider>
    );
}

export default BaseProvider;
